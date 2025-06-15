import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-purple-100 dark:border-purple-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 dark:from-purple-500 dark:to-fuchsia-500 dark:hover:from-purple-600 dark:hover:to-fuchsia-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Implementation" : "Show Implementation"}
  </button>
);

function CloudDeployment() {
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
      title: "☁️ AWS SageMaker",
      id: "sagemaker",
      description: "Amazon's fully managed service for building, training, and deploying ML models.",
      keyPoints: [
        "End-to-end ML workflow management",
        "Built-in algorithms and notebooks",
        "One-click deployment to endpoints",
        "AutoML capabilities (Autopilot)"
      ],
      detailedExplanation: [
        "Key Features:",
        "- Jupyter notebooks for experimentation",
        "- Distributed training across multiple instances",
        "- Model monitoring and A/B testing",
        "- Integration with other AWS services",
        "",
        "Workflow:",
        "1. Prepare data in S3",
        "2. Train model using SageMaker",
        "3. Deploy to endpoint",
        "4. Monitor performance",
        "",
        "Use Cases:",
        "- Large-scale model training",
        "- Production deployment pipelines",
        "- Managed AutoML solutions",
        "- Batch transform jobs"
      ],
      code: {
        python: `# SageMaker Deployment Example
import sagemaker
from sagemaker.sklearn import SKLearn
from sagemaker import Model

# Initialize session
sagemaker_session = sagemaker.Session()
role = sagemaker.get_execution_role()

# Upload training data to S3
train_data = sagemaker_session.upload_data(
    path='data/train.csv', 
    bucket='my-ml-bucket',
    key_prefix='data'
)

# Create estimator
sklearn_estimator = SKLearn(
    entry_script='train.py',
    role=role,
    instance_count=1,
    instance_type='ml.m5.large',
    framework_version='0.23-1',
    output_path=f's3://my-ml-bucket/output'
)

# Train model
sklearn_estimator.fit({'train': train_data})

# Deploy model
predictor = sklearn_estimator.deploy(
    initial_instance_count=1,
    instance_type='ml.t2.medium'
)

# Make prediction
result = predictor.predict([[1, 2, 3]])
print(result)`,
        complexity: "Deployment: O(1) API calls, Training: O(n) based on data size"
      }
    },
    {
      title: "☁️ GCP AI Platform",
      id: "gcp",
      description: "Google Cloud's unified platform for ML development and deployment.",
      keyPoints: [
        "Integrated with Google's AI services",
        "Supports TensorFlow, scikit-learn, XGBoost",
        "Vertex AI for end-to-end workflows",
        "Explainable AI tools"
      ],
      detailedExplanation: [
        "Key Components:",
        "- Notebooks: Managed Jupyter environments",
        "- Training: Custom and AutoML options",
        "- Prediction: Online and batch serving",
        "- Pipelines: ML workflow orchestration",
        "",
        "Advantages:",
        "- Tight integration with BigQuery",
        "- Pre-trained models via AI APIs",
        "- Advanced monitoring with Vertex AI",
        "- Explainability and fairness tools",
        "",
        "Deployment Options:",
        "- Online prediction for real-time",
        "- Batch prediction for large datasets",
        "- Custom containers for complex models",
        "- Edge deployment to IoT devices"
      ],
      code: {
        python: `# GCP AI Platform Deployment
from google.cloud import aiplatform

# Initialize client
aiplatform.init(project="my-project", location="us-central1")

# Create and run training job
job = aiplatform.CustomTrainingJob(
    display_name="my-training-job",
    script_path="train.py",
    container_uri="gcr.io/cloud-aiplatform/training/tf-cpu.2-3:latest",
    requirements=["scikit-learn"],
    model_serving_container_image_uri="gcr.io/cloud-aiplatform/prediction/sklearn-cpu.0-24:latest"
)

model = job.run(
    machine_type="n1-standard-4",
    replica_count=1
)

# Deploy model
endpoint = model.deploy(
    machine_type="n1-standard-2",
    min_replica_count=1,
    max_replica_count=3
)

# Make prediction
prediction = endpoint.predict(instances=[[1, 2, 3]])
print(prediction)`,
        complexity: "Deployment: O(1) API calls, Training: O(n) based on data size"
      }
    },
    {
      title: "☁️ Azure ML",
      id: "azure",
      description: "Microsoft's enterprise-grade platform for ML lifecycle management.",
      keyPoints: [
        "Studio interface for no-code ML",
        "Automated machine learning (AutoML)",
        "MLOps for DevOps integration",
        "Azure Kubernetes Service (AKS) deployment"
      ],
      detailedExplanation: [
        "Core Features:",
        "- Designer: Drag-and-drop model building",
        "- Datasets: Versioned data management",
        "- Experiments: Track training runs",
        "- Pipelines: Reproducible workflows",
        "",
        "Deployment Options:",
        "- Real-time endpoints (ACI, AKS)",
        "- Batch endpoints for offline scoring",
        "- Edge modules for IoT devices",
        "- ONNX runtime for cross-platform",
        "",
        "Enterprise Capabilities:",
        "- Role-based access control",
        "- Private link for secure access",
        "- Model monitoring and drift detection",
        "- Integration with Power BI"
      ],
      code: {
        python: `# Azure ML Deployment
from azureml.core import Workspace, Experiment, Model
from azureml.core.webservice import AciWebservice, AksWebservice
from azureml.core.model import InferenceConfig
from azureml.core.environment import Environment

# Connect to workspace
ws = Workspace.from_config()

# Register model
model = Model.register(
    workspace=ws,
    model_path="model.pkl",
    model_name="sklearn-model",
    description="Scikit-learn model"
)

# Create inference config
env = Environment.from_conda_specification(
    name="sklearn-env",
    file_path="conda_dependencies.yml"
)

inference_config = InferenceConfig(
    entry_script="score.py",
    environment=env
)

# Deploy to ACI
aci_config = AciWebservice.deploy_configuration(
    cpu_cores=1,
    memory_gb=1
)

service = Model.deploy(
    workspace=ws,
    name="my-sklearn-service",
    models=[model],
    inference_config=inference_config,
    deployment_config=aci_config
)

service.wait_for_deployment(show_output=True)
print(service.get_logs())`,
        complexity: "Deployment: O(1) API calls, Training: O(n) based on data size"
      }
    },
    {
      title: "🐳 Docker for ML",
      id: "docker",
      description: "Containerization approach for portable and reproducible ML deployments.",
      keyPoints: [
        "Package models with dependencies",
        "Consistent environments across stages",
        "Lightweight deployment option",
        "Integration with cloud services"
      ],
      detailedExplanation: [
        "Why Docker for ML:",
        "- Solve 'works on my machine' problems",
        "- Version control for model environments",
        "- Isolate dependencies between projects",
        "- Scale deployments horizontally",
        "",
        "Key Components:",
        "- Dockerfile: Environment specification",
        "- Images: Built containers",
        "- Containers: Running instances",
        "- Registries: Storage for images",
        "",
        "Best Practices:",
        "- Multi-stage builds to reduce size",
        "- .dockerignore to exclude files",
        "- Environment variables for config",
        "- Health checks for monitoring",
        "",
        "Cloud Integration:",
        "- AWS ECS/EKS",
        "- GCP Cloud Run/GKE",
        "- Azure Container Instances/Service"
      ],
      code: {
        dockerfile: `# Dockerfile for ML Model
# Build stage
FROM python:3.8-slim as builder

WORKDIR /app
COPY requirements.txt .

RUN pip install --user -r requirements.txt

# Runtime stage
FROM python:3.8-slim

WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .

# Make sure scripts in .local are usable
ENV PATH=/root/.local/bin:$PATH

# Model files
COPY model.pkl /app/model.pkl
COPY app.py /app/app.py

# Install runtime dependencies
RUN apt-get update && apt-get install -y \
    libgomp1 && \
    rm -rf /var/lib/apt/lists/*

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:5000/health || exit 1

# Run the application
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]`,
        complexity: "Build: O(1), Deployment: O(1) per container"
      }
    },
    {
      title: "🔄 CI/CD for ML",
      id: "cicd",
      description: "Continuous integration and deployment pipelines for machine learning models.",
      keyPoints: [
        "Automated testing of ML code",
        "Model versioning and tracking",
        "Canary deployments for models",
        "Rollback strategies"
      ],
      detailedExplanation: [
        "ML Pipeline Components:",
        "- Data validation tests",
        "- Model training automation",
        "- Performance benchmarking",
        "- Approval gates for promotion",
        "",
        "Tools and Platforms:",
        "- GitHub Actions",
        "- GitLab CI/CD",
        "- Azure DevOps",
        "- CircleCI",
        "",
        "Best Practices:",
        "- Separate data and code pipelines",
        "- Model versioning with metadata",
        "- Automated performance testing",
        "- Blue-green deployments",
        "",
        "Challenges Specific to ML:",
        "- Large binary assets (models)",
        "- Reproducibility concerns",
        "- Data drift detection",
        "- Model explainability checks"
      ],
      code: {
        yaml: `# GitHub Actions CI/CD for ML
name: ML Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.8'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install pytest pytest-cov
    - name: Run tests
      run: |
        pytest --cov=./ --cov-report=xml
    - name: Upload coverage
      uses: codecov/codecov-action@v1

  train:
    needs: test
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.8'
    - name: Train model
      run: |
        python train.py
    - name: Save model
      uses: actions/upload-artifact@v2
      with:
        name: model
        path: model.pkl

  deploy:
    needs: train
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v2
    - uses: azure/login@v1
      with:
    - name: Deploy to Azure ML
      run: |
        pip install azureml-sdk
        python deploy.py`,
        complexity: "Varies by pipeline complexity: O(n) for testing, O(1) for deployment steps"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-purple-50 to-fuchsia-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-purple-400 to-fuchsia-400"
            : "bg-gradient-to-r from-purple-600 to-fuchsia-600"
        } mb-8 sm:mb-12`}
      >
        Cloud Deployment for ML
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-purple-900/20" : "bg-purple-100"
        } border-l-4 border-purple-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-purple-400 text-purple-800">
          Deployment and Real-World Projects → Cloud Deployment
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Modern machine learning deployments leverage cloud platforms for scalability, reliability, 
          and ease of management. This section covers the major cloud providers and best practices 
          for deploying ML models in production environments.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-purple-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-purple-300" : "text-purple-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-purple-600 dark:text-purple-400">
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
                      Core Features
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
                      darkMode ? "bg-fuchsia-900/30" : "bg-fuchsia-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-fuchsia-400 text-fuchsia-600">
                      Implementation
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
                        code={section.id === 'cicd' ? section.code.yaml : 
                              section.id === 'docker' ? section.code.dockerfile : 
                              section.code.python}
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
            darkMode ? "text-purple-300" : "text-purple-800"
          }`}
        >
          Cloud ML Services Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-purple-900" : "bg-purple-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">AWS SageMaker</th>
                <th className="p-4 text-left">GCP AI Platform</th>
                <th className="p-4 text-left">Azure ML</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Managed Notebooks", "✓", "✓", "✓"],
                ["AutoML", "✓", "✓", "✓"],
                ["Custom Training", "✓", "✓", "✓"],
                ["Model Registry", "✓", "✓", "✓"],
                ["Explainability", "✓", "✓ (Advanced)", "✓"],
                ["Edge Deployment", "✓", "✓", "✓"],
                ["Workflow Pipelines", "✓", "✓ (Vertex AI)", "✓"],
                ["Prebuilt Models", "Marketplace", "AI APIs", "Cognitive Services"],
                ["Best For", "AWS ecosystem users", "Google stack users", "Microsoft enterprise"]
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
          darkMode ? "bg-purple-900/30" : "bg-purple-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-purple-300" : "text-purple-800"
          }`}
        >
          ML Deployment Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-purple-300" : "text-purple-800"
              }`}
            >
              Architecture Considerations
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Choose between real-time and batch processing based on needs</li>
              <li>Implement proper monitoring for model performance and drift</li>
              <li>Design for scalability from the beginning</li>
              <li>Plan for A/B testing and canary deployments</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-purple-300" : "text-purple-800"
            }`}>
              Cost Optimization
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Right-size instances:</strong> Match resources to workload needs<br/>
              <strong>Spot instances:</strong> Use for fault-tolerant workloads<br/>
              <strong>Auto-scaling:</strong> Scale down during low traffic<br/>
              <strong>Model optimization:</strong> Smaller models cost less to serve
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-purple-300" : "text-purple-800"
            }`}>
              Security & Compliance
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Data encryption:</strong> At rest and in transit<br/>
              <strong>Access control:</strong> Principle of least privilege<br/>
              <strong>Audit logging:</strong> Track all model access<br/>
              <strong>Compliance:</strong> GDPR, HIPAA, etc. as needed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudDeployment;