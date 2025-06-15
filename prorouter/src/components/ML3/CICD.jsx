import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-gray-500 to-slate-500 hover:from-gray-600 hover:to-slate-600 dark:from-gray-600 dark:to-slate-600 dark:hover:from-gray-700 dark:hover:to-slate-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function CICD() {
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
      title: "🔄 CI/CD Fundamentals for ML",
      id: "fundamentals",
      description: "Core principles of continuous integration and deployment adapted for machine learning workflows.",
      keyPoints: [
        "ML-specific CI/CD challenges (data, model drift)",
        "Testing strategies for ML systems",
        "Versioning models, data, and code",
        "Pipeline automation from training to deployment"
      ],
      detailedExplanation: [
        "Key Differences from Traditional CI/CD:",
        "- Data validation as first-class citizen",
        "- Model performance testing alongside unit tests",
        "- Monitoring for concept drift in production",
        "- Reproducibility requirements for experiments",
        "",
        "Core Components:",
        "1. Continuous Integration:",
        "   - Automated testing of ML code",
        "   - Data schema and quality checks",
        "   - Model training reproducibility",
        "",
        "2. Continuous Deployment:",
        "   - Canary deployments for models",
        "   - A/B testing infrastructure",
        "   - Rollback capabilities",
        "",
        "3. Monitoring:",
        "   - Performance metrics tracking",
        "   - Data drift detection",
        "   - Model decay alerts"
      ],
      code: {
        yaml: `# Sample GitHub Actions workflow for ML CI
name: ML Training Pipeline

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
        
    - name: Run unit tests
      run: |
        pytest tests/ --cov=src/ --cov-report=xml
        
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
        python src/train.py --data-path ./data --output-dir ./models
        python src/evaluate.py --model-path ./models/model.pkl --test-data ./data/test.csv
        
    - name: Archive model
      uses: actions/upload-artifact@v2
      with:
        name: model-artifact
        path: models/`,
        complexity: "Varies by pipeline: Testing O(n), Training O(m*n), Deployment O(1)"
      }
    },
    {
      title: "🧪 Testing ML Systems",
      id: "testing",
      description: "Specialized testing approaches for machine learning models and data pipelines.",
      keyPoints: [
        "Unit tests for feature engineering",
        "Model performance testing",
        "Data validation tests",
        "Integration testing for ML pipelines"
      ],
      detailedExplanation: [
        "Testing Pyramid for ML:",
        "1. Data Tests:",
        "   - Schema validation (Great Expectations)",
        "   - Statistical properties",
        "   - Missing value checks",
        "",
        "2. Feature Tests:",
        "   - Transformation correctness",
        "   - Encoding consistency",
        "   - Normalization ranges",
        "",
        "3. Model Tests:",
        "   - Training convergence",
        "   - Baseline comparison",
        "   - Fairness metrics",
        "",
        "4. Integration Tests:",
        "   - End-to-end pipeline runs",
        "   - API contract validation",
        "   - Load testing",
        "",
        "Tools and Frameworks:",
        "- Pytest for unit tests",
        "- MLflow for experiment tracking",
        "- Great Expectations for data",
        "- Seldon Core for deployment"
      ],
      code: {
        python: `# Example ML test suite
import pytest
import pandas as pd
from sklearn.metrics import accuracy_score
from src.features import process_features
from src.train import train_model

def test_feature_engineering():
    """Test feature transformations"""
    test_data = pd.DataFrame({
        'age': [25, 30, 35],
        'income': [50000, 60000, 70000]
    })
    
    processed = process_features(test_data)
    
    # Check normalization
    assert processed['income_norm'].between(0, 1).all()
    # Check one-hot encoding
    assert 'age_25-30' in processed.columns

def test_model_performance():
    """Test model meets minimum accuracy"""
    X_train, X_test, y_train, y_test = load_test_data()
    model = train_model(X_train, y_train)
    preds = model.predict(X_test)
    accuracy = accuracy_score(y_test, preds)
    
    assert accuracy >= 0.85, f"Accuracy {accuracy} below threshold"
    
def test_data_quality():
    """Validate input data schema"""
    data = pd.read_csv('data/raw.csv')
    
    # Check expected columns exist
    required_cols = {'age', 'income', 'target'}
    assert required_cols.issubset(data.columns)
    
    # Check for missing values
    assert not data[required_cols].isnull().any().any()
    
    # Check value ranges
    assert data['age'].between(18, 100).all()

# Integration test
def test_pipeline_integration():
    """Test full training pipeline"""
    from src.pipeline import run_pipeline
    metrics = run_pipeline('data/raw.csv')
    
    assert metrics['accuracy'] >= 0.85
    assert metrics['precision'] >= 0.8
    assert metrics['recall'] >= 0.75`,
        complexity: "Unit tests: O(1), Performance tests: O(n), Data tests: O(m)"
      }
    },
    {
      title: "🚀 Deployment Strategies",
      id: "deployment",
      description: "Patterns for reliably deploying machine learning models to production environments.",
      keyPoints: [
        "Canary deployments",
        "A/B testing frameworks",
        "Shadow mode deployment",
        "Rollback strategies"
      ],
      detailedExplanation: [
        "Deployment Options:",
        "- Batch processing: Scheduled model runs",
        "- Real-time APIs: REST/gRPC endpoints",
        "- Edge deployment: On-device models",
        "- Streaming: Continuous predictions",
        "",
        "Advanced Strategies:",
        "1. Canary Deployment:",
        "   - Gradually roll out to small percentage",
        "   - Monitor performance before full rollout",
        "",
        "2. A/B Testing:",
        "   - Compare new model against baseline",
        "   - Business metric evaluation",
        "",
        "3. Shadow Mode:",
        "   - Run new model alongside production",
        "   - Log predictions without affecting users",
        "",
        "4. Blue-Green:",
        "   - Two identical production environments",
        "   - Instant switch between versions",
        "",
        "Considerations:",
        "- Model serialization formats",
        "- Hardware acceleration needs",
        "- Latency requirements",
        "- Data privacy constraints"
      ],
      code: {
        python: `# Example deployment script using Flask
from flask import Flask, request, jsonify
import pandas as pd
import joblib
from prometheus_client import start_http_server, Summary

app = Flask(__name__)
model = joblib.load('model.pkl')

# Metrics setup
PREDICTION_TIME = Summary('prediction_processing_seconds', 
                         'Time spent processing predictions')

@app.route('/predict', methods=['POST'])
@PREDICTION_TIME.time()
def predict():
    # Get input data
    data = request.get_json()
    df = pd.DataFrame(data['instances'])
    
    # Preprocess
    processed = preprocess_features(df)
    
    # Predict
    predictions = model.predict(processed)
    
    # Return response
    return jsonify({
        'predictions': predictions.tolist(),
        'model_version': '1.2.0'
    })

# Health check endpoint
@app.route('/health')
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    # Start metrics server
    start_http_server(8000)
    app.run(host='0.0.0.0', port=5000)

# Canary deployment routing example
def route_request(request):
    if request.user_id % 100 < 10:  # 10% canary
        return canary_model.predict(request.data)
    else:
        return production_model.predict(request.data)`,
        complexity: "Deployment: O(1), Canary routing: O(1), A/B testing: O(n)"
      }
    },
    {
      title: "📊 Monitoring & Observability",
      id: "monitoring",
      description: "Tracking model performance and data quality in production environments.",
      keyPoints: [
        "Performance metrics tracking",
        "Data drift detection",
        "Concept drift identification",
        "Alerting and dashboarding"
      ],
      detailedExplanation: [
        "Key Metrics to Monitor:",
        "- Prediction latency and throughput",
        "- Model accuracy/quality decay",
        "- Feature distribution shifts",
        "- Business impact metrics",
        "",
        "Drift Detection Methods:",
        "1. Data Drift:",
        "   - Statistical tests (KS, Chi-square)",
        "   - Distance metrics (PSI, Wasserstein)",
        "   - Feature-wise comparisons",
        "",
        "2. Concept Drift:",
        "   - Performance monitoring",
        "   - Label shift detection",
        "   - Model confidence analysis",
        "",
        "Tooling Ecosystem:",
        "- Prometheus/Grafana for metrics",
        "- Evidently/Whylogs for drift",
        "- MLflow/Kubeflow for tracking",
        "- PagerDuty/Slack for alerts",
        "",
        "Best Practices:",
        "- Establish baselines during validation",
        "- Set meaningful thresholds",
        "- Monitor upstream data sources",
        "- Maintain human-in-the-loop"
      ],
      code: {
        python: `# Monitoring setup example
import pandas as pd
from evidently import ColumnMapping
from evidently.report import Report
from evidently.metrics import *
from prometheus_client import Gauge

# Set up Prometheus metrics
accuracy_gauge = Gauge('model_accuracy', 'Current model accuracy')
data_drift_gauge = Gauge('data_drift_score', 'Data drift detection score')

def generate_monitoring_report(current_data, reference_data):
    """Generate drift report"""
    column_mapping = ColumnMapping(
        target='target',
        prediction='prediction',
        numerical_features=['age', 'income'],
        categorical_features=['education']
    )
    
    report = Report(metrics=[
        DataDriftTable(),
        DatasetSummaryMetric(),
        ClassificationQualityMetric(),
        ProbDistributionChange()
    ])
    
    report.run(
        reference_data=reference_data,
        current_data=current_data,
        column_mapping=column_mapping
    )
    
    return report

def check_for_drift():
    """Check production data for drift"""
    # Load current production data
    current = pd.read_csv('data/current_production.csv')
    reference = pd.read_csv('data/training_reference.csv')
    
    # Generate report
    report = generate_monitoring_report(current, reference)
    
    # Update metrics
    accuracy = report.metrics[2].result.current.accuracy
    drift_score = report.metrics[0].result.drift_score
    
    accuracy_gauge.set(accuracy)
    data_drift_gauge.set(drift_score)
    
    # Alert if drift detected
    if drift_score > 0.25:
        send_alert(f"Data drift detected: score {drift_score:.2f}")
    
    return report

# Scheduled job to run drift detection
if __name__ == '__main__':
    while True:
        check_for_drift()
        time.sleep(3600)  # Run hourly`,
        complexity: "Drift detection: O(n), Metrics collection: O(1), Alerting: O(1)"
      }
    },
    {
      title: "🛠️ ML Pipeline Automation",
      id: "automation",
      description: "Orchestrating end-to-end machine learning workflows with CI/CD principles.",
      keyPoints: [
        "Workflow orchestration tools",
        "Containerization for ML",
        "Infrastructure as Code",
        "Feature store integration"
      ],
      detailedExplanation: [
        "Pipeline Components:",
        "1. Data Ingestion:",
        "   - Automated data validation",
        "   - Feature store updates",
        "   - Freshness monitoring",
        "",
        "2. Model Training:",
        "   - Triggered by data changes",
        "   - Hyperparameter tuning",
        "   - Artifact generation",
        "",
        "3. Model Validation:",
        "   - Performance testing",
        "   - Fairness evaluation",
        "   - Business metric verification",
        "",
        "4. Deployment:",
        "   - Staging environment promotion",
        "   - Canary rollout",
        "   - Traffic shifting",
        "",
        "Tooling Landscape:",
        "- Airflow/Kubeflow for orchestration",
        "- Docker/Kubernetes for containers",
        "- Terraform/Pulumi for infrastructure",
        "- Feast/Tecton for feature stores",
        "",
        "Advanced Patterns:",
        "- Multi-armed bandit deployments",
        "- Continuous retraining loops",
        "- Experiment tracking integration",
        "- GitOps for ML"
      ],
      code: {
        python: `# Example ML pipeline using Airflow
from datetime import datetime
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.providers.amazon.aws.transfers.local_to_s3 import LocalFilesystemToS3Operator

default_args = {
    'owner': 'ml_team',
    'depends_on_past': False,
    'start_date': datetime(2023, 1, 1),
    'retries': 1
}

dag = DAG(
    'ml_training_pipeline',
    default_args=default_args,
    schedule_interval='@weekly'
)

def validate_data():
    from src.data import validate_raw_data
    validate_raw_data('/data/raw')

def train_model():
    from src.train import train_new_model
    train_new_model(
        data_path='/data/processed',
        output_path='/models'
    )

def evaluate_model():
    from src.evaluate import run_evaluation
    metrics = run_evaluation(
        model_path='/models/latest',
        test_data='/data/test'
    )
    return metrics

def deploy_model():
    from src.deploy import deploy_to_production
    deploy_to_production(
        model_path='/models/latest',
        config_path='/configs/prod.json'
    )

validate_task = PythonOperator(
    task_id='validate_data',
    python_callable=validate_data,
    dag=dag
)

train_task = PythonOperator(
    task_id='train_model',
    python_callable=train_model,
    dag=dag
)

evaluate_task = PythonOperator(
    task_id='evaluate_model',
    python_callable=evaluate_model,
    dag=dag
)

deploy_task = PythonOperator(
    task_id='deploy_model',
    python_callable=deploy_model,
    dag=dag
)

# Define dependencies
validate_task >> train_task >> evaluate_task >> deploy_task

# Feature store example
def update_feature_store():
    from feast import FeatureStore
    store = FeatureStore(repo_path=".")
    store.apply()
    store.materialize(datetime.now() - timedelta(days=1), datetime.now())

feature_task = PythonOperator(
    task_id='update_feature_store',
    python_callable=update_feature_store,
    dag=dag
)

validate_task >> feature_task >> train_task`,
        complexity: "Pipeline steps: O(n), Orchestration: O(1), Container ops: O(1)"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 to-slate-100"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-gray-300 to-slate-300"
            : "bg-gradient-to-r from-gray-600 to-slate-600"
        } mb-8 sm:mb-12`}
      >
        CI/CD for Machine Learning
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-gray-800/30" : "bg-gray-100"
        } border-l-4 border-gray-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-300 text-gray-700">
          Deployment and Real-World Projects → CI/CD
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Continuous Integration and Delivery pipelines adapted for machine learning provide 
          automated, reliable workflows for developing, testing, and deploying ML models 
          with the same rigor as traditional software systems.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-gray-600 dark:text-gray-400">
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
                      darkMode ? "bg-gray-700/50" : "bg-gray-100"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-gray-300 text-gray-700">
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
                      darkMode ? "bg-gray-700/50" : "bg-gray-100"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-gray-300 text-gray-700">
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
                      darkMode ? "bg-gray-700/50" : "bg-gray-100"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-gray-300 text-gray-700">
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
                        code={section.code[section.id === 'fundamentals' ? 'yaml' : 'python']}
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
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          CI/CD Tools for ML
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-gray-700" : "bg-gray-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Tools</th>
                <th className="p-4 text-left">ML Focus</th>
                <th className="p-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Orchestration", "Airflow, Kubeflow, Metaflow", "Pipeline dependencies, scheduling", "Complex multi-step workflows"],
                ["Testing", "Pytest, Great Expectations, Evidently", "Data validation, model tests", "Quality assurance"],
                ["Deployment", "Seldon, BentoML, TorchServe", "Model serving, scaling", "Production inference"],
                ["Monitoring", "Prometheus, Grafana, Whylogs", "Drift detection, performance", "Production observability"],
                ["Feature Stores", "Feast, Tecton, Hopsworks", "Feature versioning, serving", "Consistent features"]
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? darkMode
                        ? "bg-gray-800/50"
                        : "bg-gray-100"
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
          darkMode ? "bg-gray-800/30" : "bg-gray-100"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          MLOps Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Implementation Guidelines
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Version everything: code, data, models, and environments</li>
              <li>Automate testing at all stages (data, features, models)</li>
              <li>Monitor both system metrics and model quality</li>
              <li>Implement gradual rollout strategies for models</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}>
              Common Pitfalls
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Testing gaps:</strong> Focusing only on code, not data/models<br/>
              <strong>Reproducibility:</strong> Not capturing all dependencies<br/>
              <strong>Monitoring:</strong> Only tracking infrastructure, not model quality<br/>
              <strong>Deployment:</strong> Big-bang releases without validation
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}>
              Advanced Patterns
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Continuous Training:</strong> Automated model retraining<br/>
              <strong>Canary Analysis:</strong> Progressive model rollouts<br/>
              <strong>Multi-model Pipelines:</strong> Ensemble deployments<br/>
              <strong>GitOps for ML:</strong> Declarative infrastructure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CICD;