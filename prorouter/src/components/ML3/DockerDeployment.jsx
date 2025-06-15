import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-indigo-100 dark:border-indigo-900 transition-all duration-300">
    <SyntaxHighlighter
      language="dockerfile"
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
    className={`inline-block bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 dark:from-indigo-600 dark:to-blue-600 dark:hover:from-indigo-700 dark:hover:to-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Docker Examples" : "Show Docker Examples"}
  </button>
);

function DockerDeployment() {
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
      title: "🐳 Docker Basics",
      id: "basics",
      description: "Fundamental Docker concepts and commands for container management.",
      keyPoints: [
        "Containers vs Virtual Machines",
        "Docker images and containers",
        "Docker Hub and registries",
        "Essential Docker commands"
      ],
      detailedExplanation: [
        "Core Concepts:",
        "- Images: Read-only templates with application and environment",
        "- Containers: Runnable instances of images",
        "- Volumes: Persistent data storage",
        "- Networks: Communication between containers",
        "",
        "Essential Commands:",
        "- docker build: Create image from Dockerfile",
        "- docker run: Start new container from image",
        "- docker ps: List running containers",
        "- docker logs: View container output",
        "- docker exec: Run command in running container",
        "",
        "Best Practices:",
        "- Use .dockerignore to exclude unnecessary files",
        "- Prefer multi-stage builds for smaller images",
        "- Follow principle of least privilege",
        "- Use official base images when possible"
      ],
      code: {
        docker: `# Sample Dockerfile
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY package*.json ./
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]

# Common Docker Commands
# Build an image
docker build -t my-app .

# Run a container
docker run -d -p 3000:3000 --name my-app-container my-app

# View running containers
docker ps

# View container logs
docker logs my-app-container

# Stop and remove container
docker stop my-app-container
docker rm my-app-container`,
        complexity: "Build time depends on image size and build context"
      }
    },
    {
      title: "🏗️ Docker Compose",
      id: "compose",
      description: "Orchestrate multi-container applications with declarative configuration.",
      keyPoints: [
        "Define services in YAML format",
        "Manage multi-container environments",
        "Networking between services",
        "Environment variables and volumes"
      ],
      detailedExplanation: [
        "Key Features:",
        "- Service definitions with dependencies",
        "- Automatic network creation",
        "- Volume and port mapping",
        "- Environment variable management",
        "",
        "Common Use Cases:",
        "- Development environments with databases",
        "- Microservices applications",
        "- CI/CD pipeline containers",
        "- Local testing environments",
        "",
        "Configuration Options:",
        "- services: Define container configurations",
        "- networks: Custom network settings",
        "- volumes: Persistent data management",
        "- environment: Set environment variables",
        "- depends_on: Control startup order",
        "",
        "Operational Commands:",
        "- docker-compose up: Start all services",
        "- docker-compose down: Stop and remove",
        "- docker-compose logs: View service logs",
        "- docker-compose ps: List services"
      ],
      code: {
        docker: `# docker-compose.yml example
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
    networks:
      - app-network

  db:
    image: postgres:13
    environment:
      POSTGRES_PASSWORD: example
      POSTGRES_USER: example
      POSTGRES_DB: example
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - app-network

volumes:
  postgres-data:

networks:
  app-network:
    driver: bridge

# Common Compose Commands
# Start all services in detached mode
docker-compose up -d

# Stop and remove containers, networks
docker-compose down

# View service logs
docker-compose logs -f web

# Rebuild and restart a service
docker-compose up -d --build web`,
        complexity: "Startup time depends on service dependencies and images"
      }
    },
    {
      title: "🚀 Production Deployment",
      id: "production",
      description: "Best practices for deploying Docker containers in production environments.",
      keyPoints: [
        "Container orchestration",
        "Health checks and monitoring",
        "Logging strategies",
        "Security considerations"
      ],
      detailedExplanation: [
        "Orchestration Options:",
        "- Docker Swarm: Built-in orchestration",
        "- Kubernetes: Industry standard",
        "- AWS ECS: Managed container service",
        "- Nomad: Simple alternative",
        "",
        "Production Best Practices:",
        "- Use reverse proxy (Nginx, Traefik)",
        "- Implement health checks",
        "- Configure resource limits",
        "- Set up proper logging",
        "- Use secrets for sensitive data",
        "",
        "Monitoring and Logging:",
        "- Prometheus for metrics",
        "- Grafana for visualization",
        "- ELK stack for logs",
        "- OpenTelemetry for tracing",
        "",
        "Security Considerations:",
        "- Scan images for vulnerabilities",
        "- Run as non-root user",
        "- Keep images updated",
        "- Limit container capabilities",
        "- Use read-only filesystems when possible"
      ],
      code: {
        docker: `# Production Dockerfile example
FROM node:16-alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app files
COPY --chown=appuser:appgroup . .

# Health check
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD curl -f http://localhost:3000/health || exit 1

# Set user and ports
USER appuser
EXPOSE 3000

# Start command
CMD ["node", "server.js"]

# Kubernetes Deployment Example (deployment.yaml)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: my-registry/web-app:1.0.0
        ports:
        - containerPort: 3000
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10`,
        complexity: "Varies by orchestration platform and cluster size"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-indigo-50 to-blue-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-indigo-400 to-blue-400"
            : "bg-gradient-to-r from-indigo-600 to-blue-600"
        } mb-8 sm:mb-12`}
      >
        Docker Deployment Guide
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-indigo-900/20" : "bg-indigo-100"
        } border-l-4 border-indigo-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-indigo-500 text-indigo-800">
          Containerization → Docker Deployment
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Docker provides platform-independent containerization for applications, enabling consistent
          environments from development to production. This guide covers essential Docker concepts,
          multi-container orchestration, and production deployment strategies.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-indigo-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-indigo-300" : "text-indigo-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-indigo-600 dark:text-indigo-400">
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
                      darkMode ? "bg-indigo-900/30" : "bg-indigo-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-indigo-400 text-indigo-600">
                      Implementation
                    </h3>
                    <p
                      className={`font-semibold mb-4 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {section.code.complexity}
                    </p>
                    <div className="flex gap-4 mb-4">
                      <ToggleCodeButton
                        isVisible={showCode}
                        onClick={toggleCodeVisibility}
                      />
                    </div>
                    {showCode && (
                      <CodeExample
                        code={section.code.docker}
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
            darkMode ? "text-indigo-300" : "text-indigo-800"
          }`}
        >
          Docker Deployment Options
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-indigo-900" : "bg-indigo-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Environment</th>
                <th className="p-4 text-left">Tool</th>
                <th className="p-4 text-left">Best For</th>
                <th className="p-4 text-left">Complexity</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Development", "Docker CLI", "Single container apps", "Low"],
                ["Local Testing", "Docker Compose", "Multi-service apps", "Medium"],
                ["Production", "Kubernetes", "Large-scale deployments", "High"],
                ["Cloud", "AWS ECS/EKS", "Managed container services", "Medium-High"]
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
          darkMode ? "bg-indigo-900/30" : "bg-indigo-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-indigo-300" : "text-indigo-800"
          }`}
        >
          Docker Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-indigo-300" : "text-indigo-800"
              }`}
            >
              Image Optimization
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Use multi-stage builds to reduce final image size</li>
              <li>Choose minimal base images (Alpine Linux variants)</li>
              <li>Combine RUN commands to reduce layers</li>
              <li>Clean up unnecessary files in the same layer they were created</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-indigo-300" : "text-indigo-800"
            }`}>
              Security Guidelines
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Run as non-root:</strong> Always specify a USER in Dockerfile<br/>
              <strong>Scan images:</strong> Use tools like Trivy or Docker Scan<br/>
              <strong>Update regularly:</strong> Rebuild images with updated base images<br/>
              <strong>Limit resources:</strong> Set memory and CPU limits in production
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-indigo-300" : "text-indigo-800"
            }`}>
              Production Readiness
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Health checks:</strong> Implement proper liveness and readiness probes<br/>
              <strong>Logging:</strong> Configure centralized logging solution<br/>
              <strong>Monitoring:</strong> Set up metrics collection with Prometheus<br/>
              <strong>CI/CD:</strong> Automate build and deployment pipelines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DockerDeployment;