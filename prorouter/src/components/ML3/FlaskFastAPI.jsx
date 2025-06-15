import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-cyan-100 dark:border-cyan-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 dark:from-cyan-600 dark:to-teal-600 dark:hover:from-cyan-700 dark:hover:to-teal-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function FlaskFastAPI() {
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
      title: "⚗️ Flask for ML Deployment",
      id: "flask",
      description: "Lightweight Python web framework ideal for simple ML model serving.",
      keyPoints: [
        "Minimalist and flexible microframework",
        "Simple REST API creation",
        "WSGI-based synchronous architecture",
        "Large ecosystem of extensions"
      ],
      detailedExplanation: [
        "Why Flask for ML:",
        "- Quick to set up for prototyping",
        "- Easy integration with Python ML stack",
        "- Minimal overhead for simple services",
        "- Well-established in production environments",
        "",
        "Core Components:",
        "- Route decorators for API endpoints",
        "- Request/response handling",
        "- Template rendering (for demo UIs)",
        "- Extension system (for database, auth, etc.)",
        "",
        "Deployment Patterns:",
        "- Standalone server for development",
        "- Gunicorn + Nginx for production",
        "- Docker containers for portability",
        "- Serverless deployments (AWS Lambda, etc.)",
        "",
        "Performance Considerations:",
        "- Synchronous nature limits throughput",
        "- Global interpreter lock (GIL) constraints",
        "- Optimal for low-to-medium traffic",
        "- Horizontal scaling recommended"
      ],
      code: {
        python: `# Flask ML Deployment Example
from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load trained model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from POST request
    data = request.get_json()
    
    # Convert to numpy array and reshape
    features = np.array(data['features']).reshape(1, -1)
    
    # Make prediction
    prediction = model.predict(features)
    
    # Return prediction as JSON
    return jsonify({
        'prediction': prediction[0].item(),
        'status': 'success'
    })

@app.route('/')
def home():
    return "ML Model Serving API - Ready for predictions"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

# Production setup with Gunicorn:
# gunicorn -w 4 -b :5000 app:app

# Dockerfile example:
# FROM python:3.8-slim
# WORKDIR /app
# COPY requirements.txt .
# RUN pip install -r requirements.txt
# COPY . .
# CMD ["gunicorn", "-w", "4", "-b", ":5000", "app:app"]`,
        complexity: "Setup: O(1), Request handling: O(model complexity)"
      }
    },
    {
      title: "⚡ FastAPI for ML Deployment",
      id: "fastapi",
      description: "Modern, high-performance framework for building ML APIs with Python.",
      keyPoints: [
        "ASGI-based asynchronous support",
        "Automatic OpenAPI/Swagger documentation",
        "Data validation with Pydantic",
        "High performance (comparable to NodeJS/Go)"
      ],
      detailedExplanation: [
        "Why FastAPI for ML:",
        "- Built-in async support for concurrent requests",
        "- Automatic API documentation",
        "- Type hints for better code quality",
        "- Excellent performance characteristics",
        "",
        "Key Features:",
        "- Dependency injection system",
        "- Background tasks for post-processing",
        "- WebSocket support for real-time apps",
        "- Easy integration with ML libraries",
        "",
        "Deployment Options:",
        "- Uvicorn/ASGI servers for production",
        "- Kubernetes for scaling",
        "- Serverless deployments",
        "- Edge deployments with compiled Python",
        "",
        "Performance Advantages:",
        "- Handles more concurrent requests",
        "- Lower latency for I/O bound tasks",
        "- Efficient background processing",
        "- Better vertical scaling"
      ],
      code: {
        python: `# FastAPI ML Deployment Example
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

# Load trained model
model = joblib.load('model.joblib')

# Define request model
class PredictionRequest(BaseModel):
    features: list[float]

@app.post('/predict')
async def predict(request: PredictionRequest):
    # Convert to numpy array
    features = np.array(request.features).reshape(1, -1)
    
    # Make prediction (async if model supports it)
    prediction = model.predict(features)
    
    return {
        'prediction': prediction[0].item(),
        'status': 'success'
    }

@app.get('/')
async def health_check():
    return {"status": "ready"}

# Run with: uvicorn app:app --host 0.0.0.0 --port 8000

# Dockerfile example:
# FROM python:3.8-slim
# WORKDIR /app
# COPY requirements.txt .
# RUN pip install -r requirements.txt
# COPY . .
# CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]

# For production:
# uvicorn app:app --host 0.0.0.0 --port 8000 --workers 4`,
        complexity: "Setup: O(1), Request handling: O(model complexity) with better concurrency"
      }
    },
    {
      title: "🔄 Comparing Flask and FastAPI",
      id: "comparison",
      description: "Choosing the right framework based on your ML deployment needs.",
      keyPoints: [
        "Flask: Simpler, more mature, synchronous",
        "FastAPI: Faster, async, modern features",
        "Development speed vs production performance",
        "Community support and learning curve"
      ],
      detailedExplanation: [
        "When to Choose Flask:",
        "- Simple prototypes and MVPs",
        "- Teams with existing Flask expertise",
        "- Applications requiring Jinja2 templating",
        "- Projects with many Flask extensions",
        "",
        "When to Choose FastAPI:",
        "- High-performance API requirements",
        "- Async/await patterns in your code",
        "- Automatic API documentation needs",
        "- Type-heavy codebases",
        "",
        "Performance Benchmarks:",
        "- FastAPI handles 2-3x more requests/sec",
        "- Lower latency under concurrent load",
        "- Better resource utilization",
        "- More efficient I/O handling",
        "",
        "Ecosystem Considerations:",
        "- Flask has more third-party extensions",
        "- FastAPI has built-in modern features",
        "- Both integrate well with ML stack",
        "- Deployment patterns are similar"
      ],
      code: {
        python: `# Hybrid Approach: Using FastAPI with Flask-style routes
from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

# Flask-style route
@app.get("/flask-style/")
def flask_style_route():
    return JSONResponse(content={"message": "This looks like Flask!"})

# Async route
@app.get("/fastapi-style/")
async def fastapi_style_route():
    return {"message": "This leverages FastAPI async"}

# Migration Tips:
# 1. Replace Flask's jsonify with FastAPI's return dicts
# 2. Convert route decorators (@app.route → @app.get/post)
# 3. Use Pydantic models instead of manual request parsing
# 4. Leverage dependency injection over global variables`,
        complexity: "Migration: O(n) where n is route complexity"
      }
    },
    {
      title: "🚀 Advanced Deployment Patterns",
      id: "advanced",
      description: "Production-grade strategies for serving ML models at scale.",
      keyPoints: [
        "Containerization with Docker",
        "Orchestration with Kubernetes",
        "Load testing and auto-scaling",
        "Monitoring and logging"
      ],
      detailedExplanation: [
        "Containerization Best Practices:",
        "- Multi-stage builds to reduce image size",
        "- Non-root users for security",
        "- Health checks and readiness probes",
        "- Environment-specific configurations",
        "",
        "Scaling Strategies:",
        "- Horizontal pod autoscaling in Kubernetes",
        "- Queue-based workload distribution",
        "- Model caching and warm-up",
        "- Canary deployments for model updates",
        "",
        "Performance Optimization:",
        "- Model quantization for faster inference",
        "- Batch prediction endpoints",
        "- Async processing for heavy models",
        "- GPU acceleration in containers",
        "",
        "Observability:",
        "- Prometheus metrics integration",
        "- Distributed tracing with Jaeger",
        "- Structured logging (JSON format)",
        "- Alerting on prediction latency/drift"
      ],
      code: {
        python: `# Advanced FastAPI Setup with Monitoring
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from prometheus_fastapi_instrumentator import Instrumentator
import logging
import time

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Prometheus metrics
Instrumentator().instrument(app).expose(app)

# Logging configuration
logging.basicConfig(
    format='{"time": "%(asctime)s", "level": "%(levelname)s", "message": "%(message)s"}',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = (time.time() - start_time) * 1000
    logger.info(
        f"Method={request.method} Path={request.url.path} "
        f"Status={response.status_code} Duration={process_time:.2f}ms"
    )
    return response

# Kubernetes Deployment Example:
# apiVersion: apps/v1
# kind: Deployment
# metadata:
#   name: ml-api
# spec:
#   replicas: 3
#   selector:
#     matchLabels:
#       app: ml-api
#   template:
#     metadata:
#       labels:
#         app: ml-api
#     spec:
#       containers:
#       - name: ml-api
#         image: your-registry/ml-api:latest
#         ports:
#         - containerPort: 8000
#         resources:
#           limits:
#             cpu: "1"
#             memory: "1Gi"
#         readinessProbe:
#           httpGet:
#             path: /
#             port: 8000
#           initialDelaySeconds: 5
#           periodSeconds: 10`,
        complexity: "Setup: O(1), Maintenance: O(n) for cluster size"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-cyan-50 to-teal-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-cyan-400 to-teal-400"
            : "bg-gradient-to-r from-cyan-600 to-teal-600"
        } mb-8 sm:mb-12`}
      >
        Flask & FastAPI for ML
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-cyan-900/20" : "bg-cyan-100"
        } border-l-4 border-cyan-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-cyan-500 text-cyan-800">
          Deployment and Real-World Projects → Flask and FastAPI
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Flask and FastAPI are the two most popular Python frameworks for deploying machine learning models
          as web services. This section covers their features, trade-offs, and production deployment patterns.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-cyan-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-cyan-300" : "text-cyan-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-cyan-600 dark:text-cyan-400">
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
                      Key Features
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
                      Technical Details
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
                      darkMode ? "bg-teal-900/30" : "bg-teal-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-teal-400 text-teal-600">
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
            darkMode ? "text-cyan-300" : "text-cyan-800"
          }`}
        >
          Framework Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-cyan-900" : "bg-cyan-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">Flask</th>
                <th className="p-4 text-left">FastAPI</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Architecture", "WSGI (Synchronous)", "ASGI (Asynchronous)"],
                ["Performance", "Good for low concurrency", "Excellent for high concurrency"],
                ["Learning Curve", "Gentle, simple concepts", "Steeper (async concepts)"],
                ["Documentation", "Manual or extensions", "Automatic OpenAPI/Swagger"],
                ["Data Validation", "Manual or extensions", "Built-in with Pydantic"],
                ["Best For", "Simple APIs, prototypes", "High-performance APIs, production"],
                ["Community", "Large, mature", "Growing rapidly"],
                ["Extensions", "Very extensive", "Smaller but growing"]
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
          darkMode ? "bg-cyan-900/30" : "bg-cyan-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-cyan-300" : "text-cyan-800"
          }`}
        >
          Deployment Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-cyan-300" : "text-cyan-800"
              }`}
            >
              Choosing Between Flask and FastAPI
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li><strong>Choose Flask</strong> when you need simplicity, templating, or have existing Flask expertise</li>
              <li><strong>Choose FastAPI</strong> when you need performance, async support, or automatic docs</li>
              <li>Both can be containerized and deployed similarly</li>
              <li>Consider team skills and project requirements</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-cyan-300" : "text-cyan-800"
            }`}>
              Production Deployment Checklist
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>1. Containerization:</strong> Use Docker with multi-stage builds<br/>
              <strong>2. Orchestration:</strong> Kubernetes for scaling and management<br/>
              <strong>3. Monitoring:</strong> Prometheus metrics and logging<br/>
              <strong>4. Security:</strong> HTTPS, rate limiting, input validation<br/>
              <strong>5. Performance:</strong> Load testing and optimization
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-cyan-300" : "text-cyan-800"
            }`}>
              Advanced Considerations
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Model Versioning:</strong> Endpoints for multiple model versions<br/>
              <strong>Canary Deployments:</strong> Gradually roll out new models<br/>
              <strong>Feature Stores:</strong> Consistent feature engineering<br/>
              <strong>Shadow Mode:</strong> Test new models against production traffic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlaskFastAPI;