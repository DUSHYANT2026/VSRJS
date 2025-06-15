import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-pink-100 dark:border-pink-900 transition-all duration-300">
    <SyntaxHighlighter
      language="python"
      style={tomorrow}
      showLineNumbers
      wrapLines
      customStyle={{
        padding: "1.5rem",
        fontSize: "0.95rem",
        background: darkMode ? "#1e293b" : "#f9f9f9",
        borderRadius: "0.5rem",
      }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
));

const ToggleCodeButton = ({ isVisible, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-block bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 dark:from-pink-500 dark:to-pink-600 dark:hover:from-pink-600 dark:hover:to-pink-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-pink-500 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function RESTAPI() {
  const { darkMode } = useTheme();
  const [visibleSection, setVisibleSection] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
    setShowCode(false);
  };

  const toggleCodeVisibility = () => {
    setShowCode(!showCode);
  };

  const content = [
    {
      title: "📡 REST Fundamentals",
      id: "fundamentals",
      description: "Core principles and architectural constraints of RESTful APIs.",
      keyPoints: [
        "Client-server architecture",
        "Stateless communication",
        "Resource-based endpoints",
        "Standard HTTP methods (GET, POST, PUT, DELETE)"
      ],
      detailedExplanation: [
        "Key REST principles:",
        "- Uniform interface: Consistent resource identification and manipulation",
        "- Cacheability: Responses define cacheability",
        "- Layered system: Intermediary servers improve scalability",
        "- Code-on-demand (optional): Servers can extend client functionality",
        "",
        "HTTP Methods in REST:",
        "- GET: Retrieve resource representation",
        "- POST: Create new resource",
        "- PUT: Update existing resource",
        "- DELETE: Remove resource",
        "- PATCH: Partial resource updates",
        "",
        "Status Codes:",
        "- 2xx: Success (200 OK, 201 Created)",
        "- 3xx: Redirection (301 Moved Permanently)",
        "- 4xx: Client errors (400 Bad Request, 404 Not Found)",
        "- 5xx: Server errors (500 Internal Server Error)"
      ],
      code: {
        python: `# Example REST API endpoint with Flask
from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample in-memory database
books = [
    {"id": 1, "title": "Clean Code", "author": "Robert Martin"},
    {"id": 2, "title": "Design Patterns", "author": "GoF"}
]

# GET all books
@app.route('/api/books', methods=['GET'])
def get_books():
    return jsonify(books)

# GET single book
@app.route('/api/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = next((b for b in books if b['id'] == book_id), None)
    if book is None:
        return jsonify({"error": "Book not found"}), 404
    return jsonify(book)

# POST new book
@app.route('/api/books', methods=['POST'])
def add_book():
    if not request.json or 'title' not in request.json:
        return jsonify({"error": "Bad request"}), 400
    
    new_book = {
        'id': books[-1]['id'] + 1,
        'title': request.json['title'],
        'author': request.json.get('author', '')
    }
    books.append(new_book)
    return jsonify(new_book), 201

if __name__ == '__main__':
    app.run(debug=True)`,
        complexity: "Basic CRUD operations: O(1) to O(n) depending on implementation"
      }
    },
    {
      title: "🔐 Authentication & Security",
      id: "auth",
      description: "Securing REST APIs and managing user authentication.",
      keyPoints: [
        "Token-based authentication (JWT)",
        "OAuth 2.0 flows",
        "API keys and rate limiting",
        "HTTPS and security best practices"
      ],
      detailedExplanation: [
        "Authentication Methods:",
        "- Basic Auth: Simple username/password (not recommended for production)",
        "- API Keys: Simple but less secure",
        "- JWT (JSON Web Tokens): Stateless tokens with expiration",
        "- OAuth 2.0: Delegated authorization framework",
        "",
        "Security Considerations:",
        "- Always use HTTPS (TLS encryption)",
        "- Implement proper CORS policies",
        "- Input validation and sanitization",
        "- Rate limiting to prevent abuse",
        "- Regular security audits",
        "",
        "Best Practices:",
        "- Store sensitive data securely (never in code)",
        "- Use environment variables for configuration",
        "- Implement proper error handling",
        "- Regular dependency updates",
        "- Security headers (CSP, XSS protection)"
      ],
      code: {
        python: `# JWT Authentication with Flask
from flask import Flask, request, jsonify
import jwt
import datetime
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key-here'

# Mock user database
users = {
    'admin': {'password': 'securepassword', 'role': 'admin'}
}

# Login endpoint
@app.route('/api/login', methods=['POST'])
def login():
    auth = request.authorization
    
    if not auth or not auth.username or not auth.password:
        return jsonify({"error": "Basic auth required"}), 401
    
    user = users.get(auth.username)
    if not user or user['password'] != auth.password:
        return jsonify({"error": "Invalid credentials"}), 401
    
    token = jwt.encode({
        'user': auth.username,
        'role': user['role'],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
    }, app.config['SECRET_KEY'])
    
    return jsonify({'token': token})

# Protected route decorator
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({"error": "Token is missing"}), 401
        
        try:
            data = jwt.decode(token.split()[1], app.config['SECRET_KEY'], algorithms=["HS256"])
        except:
            return jsonify({"error": "Token is invalid"}), 401
        
        return f(*args, **kwargs)
    return decorated

# Protected endpoint
@app.route('/api/protected', methods=['GET'])
@token_required
def protected():
    return jsonify({"message": "This is a protected endpoint"})

if __name__ == '__main__':
    app.run(ssl_context='adhoc')  # Enable HTTPS`,
        complexity: "JWT operations: O(1), Auth checks: O(1)"
      }
    },
    {
      title: "📦 API Design Best Practices",
      id: "design",
      description: "Principles for designing clean, maintainable, and scalable REST APIs.",
      keyPoints: [
        "Resource naming conventions",
        "Versioning strategies",
        "Pagination and filtering",
        "HATEOAS and discoverability"
      ],
      detailedExplanation: [
        "Naming Conventions:",
        "- Use nouns for resources (not verbs)",
        "- Plural resource names (/users not /user)",
        "- Lowercase with hyphens for multi-word resources",
        "- Consistent naming across endpoints",
        "",
        "API Versioning:",
        "- URL path versioning (/v1/users)",
        "- Header versioning (Accept: application/vnd.api.v1+json)",
        "- Query parameter versioning (/users?version=1)",
        "- Deprecation policies and sunset headers",
        "",
        "Advanced Features:",
        "- Pagination (limit/offset or cursor-based)",
        "- Filtering, sorting, and field selection",
        "- Hypermedia controls (HATEOAS)",
        "- Bulk operations",
        "- Async operations for long-running tasks"
      ],
      code: {
        python: `# Well-designed API with Flask
from flask import Flask, request, jsonify, url_for

app = Flask(__name__)

# Sample database
users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"}
]

# GET users with pagination and filtering
@app.route('/api/v1/users', methods=['GET'])
def get_users():
    # Pagination
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 10))
    
    # Filtering
    name_filter = request.args.get('name')
    filtered_users = [u for u in users if not name_filter or name_filter.lower() in u['name'].lower()]
    
    # Pagination logic
    start = (page - 1) * per_page
    end = start + per_page
    paginated_users = filtered_users[start:end]
    
    # Build response with HATEOAS links
    response = {
        'data': paginated_users,
        'links': {
            'self': url_for('get_users', page=page, per_page=per_page, _external=True),
            'next': url_for('get_users', page=page+1, per_page=per_page, _external=True) if end < len(filtered_users) else None,
            'prev': url_for('get_users', page=page-1, per_page=per_page, _external=True) if start > 0 else None
        },
        'meta': {
            'total': len(filtered_users),
            'page': page,
            'per_page': per_page
        }
    }
    
    return jsonify(response)

# GET single user
@app.route('/api/v1/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    response = {
        'data': user,
        'links': {
            'self': url_for('get_user', user_id=user_id, _external=True),
            'users': url_for('get_users', _external=True)
        }
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run()`,
        complexity: "Pagination: O(n), Filtering: O(n)"
      }
    },
    {
      title: "🧪 Testing & Documentation",
      id: "testing",
      description: "Ensuring API reliability through testing and comprehensive documentation.",
      keyPoints: [
        "Unit and integration testing",
        "Automated API testing tools",
        "OpenAPI/Swagger documentation",
        "Mock servers for development"
      ],
      detailedExplanation: [
        "Testing Strategies:",
        "- Unit tests for individual components",
        "- Integration tests for endpoint behavior",
        "- Contract tests for API stability",
        "- Load testing for performance",
        "",
        "Documentation Standards:",
        "- OpenAPI/Swagger for machine-readable docs",
        "- Interactive API explorers",
        "- Code samples in multiple languages",
        "- Change logs and version diffs",
        "",
        "Testing Tools:",
        "- pytest for Python APIs",
        "- Postman/Newman for collection testing",
        "- Locust for load testing",
        "- WireMock for API mocking",
        "",
        "CI/CD Integration:",
        "- Automated testing in pipelines",
        "- Documentation generation on deploy",
        "- Canary deployments for APIs",
        "- Monitoring and alerting"
      ],
      code: {
        python: `# API Testing with pytest
import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_users(client):
    response = client.get('/api/v1/users')
    assert response.status_code == 200
    data = response.get_json()
    assert 'data' in data
    assert 'links' in data
    assert 'meta' in data

def test_create_user(client):
    new_user = {'name': 'Charlie', 'email': 'charlie@example.com'}
    response = client.post('/api/v1/users', json=new_user)
    assert response.status_code == 201
    data = response.get_json()
    assert data['name'] == new_user['name']
    assert 'id' in data

# OpenAPI Documentation with Flask
from flask_swagger_ui import get_swaggerui_blueprint

SWAGGER_URL = '/api/docs'
API_URL = '/api/swagger.json'

swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={'app_name': "User API"}
)

app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

@app.route(API_URL)
def swagger():
    return jsonify({
        "openapi": "3.0.0",
        "info": {
            "title": "User API",
            "version": "1.0.0"
        },
        "paths": {
            "/users": {
                "get": {
                    "summary": "Get all users",
                    "responses": {
                        "200": {
                            "description": "List of users",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/UserList"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "components": {
            "schemas": {
                "User": {
                    "type": "object",
                    "properties": {
                        "id": {"type": "integer"},
                        "name": {"type": "string"},
                        "email": {"type": "string"}
                    }
                },
                "UserList": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": {"$ref": "#/components/schemas/User"}
                        }
                    }
                }
            }
        }
    })`,
        complexity: "Unit tests: O(1), Integration tests: O(n)"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-pink-50 to-pink-100"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-pink-300 to-pink-400"
            : "bg-gradient-to-r from-pink-500 to-pink-600"
        } mb-8 sm:mb-12`}
      >
        REST API Development for ML
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-pink-900/20" : "bg-pink-100"
        } border-l-4 border-pink-400`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-pink-400 text-pink-700">
          Deployment and Real-World Projects → REST API Development
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          REST APIs provide the interface between machine learning models and client applications.
          This section covers building, securing, and maintaining production-grade APIs for ML systems.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-pink-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-pink-300" : "text-pink-700"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-pink-500 dark:text-pink-400">
                  {visibleSection === section.id ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </span>
              </button>

              {visibleSection === section.id && (
                <div className="space-y-6 mt-4">
                  <div
                    className={`p-6 rounded-lg ${
                      darkMode ? "bg-blue-900/30" : "bg-blue-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-blue-400 text-blue-600">
                      Core Concepts
                    </h3>
                    <p
                      className={`${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {section.description}
                    </p>
                    <ul
                      className={`list-disc pl-6 space-y-2 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {section.keyPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`p-6 rounded-lg ${
                      darkMode ? "bg-green-900/30" : "bg-green-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-green-400 text-green-600">
                      Technical Deep Dive
                    </h3>
                    <div
                      className={`space-y-4 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {section.detailedExplanation.map((paragraph, index) => (
                        <p
                          key={index}
                          className={paragraph === "" ? "my-2" : ""}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`p-6 rounded-lg ${
                      darkMode ? "bg-pink-900/30" : "bg-pink-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-pink-400 text-pink-600">
                      Implementation Example
                    </h3>
                    <p
                      className={`font-semibold mb-4 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Computational Complexity: {section.code.complexity}
                    </p>
                    <div className="flex gap-4 mb-4">
                      <ToggleCodeButton
                        isVisible={showCode}
                        onClick={toggleCodeVisibility}
                      />
                    </div>
                    {showCode && (
                      <CodeExample
                        code={section.code.python}
                        darkMode={darkMode}
                      />
                    )}
                  </div>
                </div>
              )}
            </header>
          </article>
        ))}
      </div>

      {/* Comparison Table */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? "text-pink-300" : "text-pink-700"
          }`}
        >
          REST API Technologies for ML
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-pink-900" : "bg-pink-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Technology</th>
                <th className="p-4 text-left">Use Case</th>
                <th className="p-4 text-left">ML Integration</th>
                <th className="p-4 text-left">Performance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Flask", "Lightweight Python API", "Quick ML model deployment", "Good for small-medium loads"],
                ["FastAPI", "Modern async Python API", "Built-in data validation", "Excellent performance"],
                ["Django REST", "Full-featured Python API", "Admin interface for models", "Good for complex apps"],
                ["Express.js", "Node.js API framework", "JS ecosystem integration", "High performance"],
                ["Spring Boot", "Java enterprise API", "Large-scale ML systems", "Excellent performance"]
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? darkMode
                        ? "bg-gray-700"
                        : "bg-gray-50"
                      : darkMode
                      ? "bg-gray-800"
                      : "bg-white"
                  } border-b ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`p-4 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Takeaways */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-pink-900/30" : "bg-pink-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-pink-300" : "text-pink-700"
          }`}
        >
          ML API Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-pink-300" : "text-pink-700"
              }`}
            >
              API Design for ML
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Use batch endpoints for model predictions</li>
              <li>Implement async processing for long-running tasks</li>
              <li>Version APIs to allow model updates without breaking clients</li>
              <li>Include model metadata in responses (version, confidence scores)</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-pink-300" : "text-pink-700"
            }`}>
              Performance Optimization
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Caching:</strong> Cache model predictions when appropriate<br/>
              <strong>Batching:</strong> Process multiple requests together<br/>
              <strong>Load Balancing:</strong> Distribute prediction requests<br/>
              <strong>Model Warmup:</strong> Keep frequently used models loaded
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-pink-300" : "text-pink-700"
            }`}>
              Monitoring & Maintenance
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Logging:</strong> Track prediction requests and performance<br/>
              <strong>Metrics:</strong> Monitor latency, throughput, errors<br/>
              <strong>Alerting:</strong> Set up alerts for anomalies<br/>
              <strong>Canary Deployments:</strong> Test new models with subset of traffic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RESTAPI;