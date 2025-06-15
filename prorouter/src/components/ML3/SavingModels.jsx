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
    className={`inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 dark:from-purple-600 dark:to-indigo-600 dark:hover:from-purple-700 dark:hover:to-indigo-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function SavingModels() {
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
      title: "🥒 Pickle Serialization",
      id: "pickle",
      description: "Python's native serialization protocol for saving and loading Python objects.",
      keyPoints: [
        "Built-in Python module (no additional dependencies)",
        "Can serialize most Python objects",
        "Supports protocol versions (latest is most efficient)",
        "Security considerations for untrusted sources"
      ],
      detailedExplanation: [
        "How Pickle works:",
        "- Converts Python objects to byte streams (pickling)",
        "- Reconstructs objects from byte streams (unpickling)",
        "- Uses stack-based virtual machine for reconstruction",
        "",
        "Best practices for ML:",
        "- Use highest protocol version (protocol=4 or 5)",
        "- Handle large models with pickle.HIGHEST_PROTOCOL",
        "- Consider security risks (never unpickle untrusted data)",
        "- Use with caution in production environments",
        "",
        "Performance characteristics:",
        "- Generally faster than JSON for complex objects",
        "- Creates smaller files than human-readable formats",
        "- Slower than joblib for large NumPy arrays",
        "- Not suitable for very large models (>4GB without protocol 5)"
      ],
      code: {
        python: `# Saving and Loading Models with Pickle
import pickle
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# Train a sample model
X = np.random.rand(100, 5)
y = np.random.randint(0, 2, 100)
model = RandomForestClassifier()
model.fit(X, y)

# Save model to file
with open('model.pkl', 'wb') as f:  # 'wb' for write binary
    pickle.dump(model, f, protocol=pickle.HIGHEST_PROTOCOL)

# Load model from file
with open('model.pkl', 'rb') as f:  # 'rb' for read binary
    loaded_model = pickle.load(f)

# Verify the loaded model
print(loaded_model.predict(X[:5]))

# Advanced: Saving multiple objects
preprocessor = StandardScaler()
preprocessor.fit(X)

with open('pipeline.pkl', 'wb') as f:
    pickle.dump({
        'model': model,
        'preprocessor': preprocessor,
        'metadata': {
            'training_date': '2023-07-15',
            'version': '1.0'
        }
    }, f)

# Loading multiple objects
with open('pipeline.pkl', 'rb') as f:
    pipeline = pickle.load(f)
    loaded_model = pipeline['model']
    loaded_preprocessor = pipeline['preprocessor']
    metadata = pipeline['metadata']`,
        complexity: "Serialization: O(n), Deserialization: O(n)"
      }
    },
    {
      title: "📦 Joblib Serialization",
      id: "joblib",
      description: "Optimized serialization for Python objects containing large NumPy arrays.",
      keyPoints: [
        "Part of scikit-learn ecosystem (optimized for ML)",
        "More efficient than pickle for large NumPy arrays",
        "Supports memory mapping for large objects",
        "Parallel compression capabilities"
      ],
      detailedExplanation: [
        "Advantages over pickle:",
        "- Optimized for NumPy arrays (common in ML models)",
        "- Can memory map arrays for zero-copy loading",
        "- Supports compressed storage (zlib, lz4, etc.)",
        "- Parallel compression for faster saving",
        "",
        "Usage patterns:",
        "- Ideal for scikit-learn models and pipelines",
        "- Works well with large neural network weights",
        "- Suitable for production deployment",
        "- Commonly used in ML model serving",
        "",
        "Performance considerations:",
        "- Faster than pickle for models with large arrays",
        "- Compression can significantly reduce file size",
        "- Memory mapping enables efficient loading of large models",
        "- Parallel compression speeds up saving"
      ],
      code: {
        python: `# Saving and Loading Models with Joblib
from joblib import dump, load
from sklearn.svm import SVC
import numpy as np

# Train a sample model
X = np.random.rand(1000, 100)  # Larger dataset
y = np.random.randint(0, 2, 1000)
model = SVC(probability=True)
model.fit(X, y)

# Save model with compression
dump(model, 'model.joblib', compress=3, protocol=4)  # Medium compression

# Load model (with memory mapping for large files)
loaded_model = load('model.joblib', mmap_mode='r')

# Verify the loaded model
print(loaded_model.predict_proba(X[:5]))

# Advanced: Saving pipeline with parallel compression
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('pca', PCA(n_components=10)),
    ('classifier', SVC())
])
pipeline.fit(X, y)

# Save with parallel compression
dump(pipeline, 'pipeline.joblib', compress=('zlib', 3), protocol=4)

# Loading with memory mapping
large_model = load('pipeline.joblib', mmap_mode='r')

# Custom serialization with joblib
def save_model_with_metadata(model, filepath, metadata=None):
    """Save model with additional metadata"""
    data = {
        'model': model,
        'metadata': metadata or {},
        'version': '1.0'
    }
    dump(data, filepath)

def load_model_with_metadata(filepath):
    """Load model with metadata"""
    data = load(filepath)
    return data['model'], data['metadata']`,
        complexity: "Serialization: O(n), Deserialization: O(n) (faster than pickle for arrays)"
      }
    },
    {
      title: "⚖️ Comparison & Best Practices",
      id: "comparison",
      description: "Choosing the right serialization method and following ML model deployment best practices.",
      keyPoints: [
        "Pickle vs Joblib: When to use each",
        "Version compatibility considerations",
        "Security implications of model serialization",
        "Production deployment patterns"
      ],
      detailedExplanation: [
        "Serialization Method Comparison:",
        "- Pickle: More general-purpose, better for non-NumPy objects",
        "- Joblib: Optimized for NumPy/scikit-learn, better for large arrays",
        "- ONNX/PMML: Cross-platform, but limited model support",
        "- Custom formats: Framework-specific (TensorFlow SavedModel, PyTorch .pt)",
        "",
        "Versioning and Compatibility:",
        "- Python version compatibility (pickle protocols)",
        "- Library version mismatches can cause errors",
        "- Strategies for backward compatibility",
        "- Using wrapper classes for version tolerance",
        "",
        "Security Best Practices:",
        "- Never load untrusted serialized models",
        "- Sign and verify model artifacts",
        "- Use secure storage for model files",
        "- Consider checksums for integrity verification",
        "",
        "Production Deployment:",
        "- Containerization with Docker",
        "- Model versioning strategies",
        "- A/B testing deployment patterns",
        "- Monitoring model performance in production"
      ],
      code: {
        python: `# Serialization Best Practices
import pickle
import joblib
import hashlib
import json
from datetime import datetime

# 1. Secure Serialization
def save_model_secure(model, filepath, secret_key):
    """Save model with integrity check"""
    # Serialize model
    model_bytes = pickle.dumps(model, protocol=pickle.HIGHEST_PROTOCOL)
    
    # Create checksum
    checksum = hashlib.sha256(model_bytes + secret_key.encode()).hexdigest()
    
    # Save with metadata
    with open(filepath, 'wb') as f:
        pickle.dump({
            'model': model_bytes,
            'checksum': checksum,
            'created_at': datetime.now().isoformat()
        }, f)

def load_model_secure(filepath, secret_key):
    """Load model with integrity verification"""
    with open(filepath, 'rb') as f:
        data = pickle.load(f)
    
    # Verify checksum
    expected_checksum = hashlib.sha256(data['model'] + secret_key.encode()).hexdigest()
    if expected_checksum != data['checksum']:
        raise ValueError("Model checksum verification failed!")
    
    return pickle.loads(data['model'])

# 2. Version Tolerant Serialization
class ModelWrapper:
    """Wrapper for version-tolerant serialization"""
    def __init__(self, model, metadata=None):
        self.model = model
        self.metadata = metadata or {}
        self.version = "1.1"
        self.created_at = datetime.now().isoformat()
    
    def save(self, filepath):
        """Save wrapped model"""
        joblib.dump(self, filepath)
    
    @classmethod
    def load(cls, filepath):
        """Load wrapped model with backward compatibility"""
        wrapper = joblib.load(filepath)
        if not hasattr(wrapper, 'version'):
            # Handle version 1.0 format
            wrapper.version = "1.0"
        return wrapper

# 3. Production Deployment Pattern
def deploy_model(model, model_name, version):
    """Standardized model deployment"""
    # Save model
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{model_name}_v{version}_{timestamp}.joblib"
    joblib.dump(model, filename, compress=3)
    
    # Generate metadata
    metadata = {
        'model_name': model_name,
        'version': version,
        'deployed_at': timestamp,
        'dependencies': {
            'python': '3.8.10',
            'sklearn': '1.0.2',
            'numpy': '1.21.5'
        }
    }
    
    # Save metadata
    with open(f"{filename}.meta", 'w') as f:
        json.dump(metadata, f)
    
    return filename`,
        complexity: "Varies by implementation: Checksums O(n), Wrappers O(1)"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-purple-50 to-indigo-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-purple-400 to-indigo-400"
            : "bg-gradient-to-r from-purple-600 to-indigo-600"
        } mb-8 sm:mb-12`}
      >
        Saving and Loading ML Models
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-purple-900/20" : "bg-purple-100"
        } border-l-4 border-purple-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-purple-500 text-purple-800">
          Deployment and Real-World Projects → Saving and Loading Models
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Proper model serialization is crucial for deploying machine learning models in production.
          This section covers the essential techniques for saving and loading models using Python's
          most common serialization libraries, with best practices for real-world applications.
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
                      Key Concepts
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
                      darkMode ? "bg-indigo-900/30" : "bg-indigo-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-indigo-400 text-indigo-600">
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
                      darkMode ? "bg-purple-900/30" : "bg-purple-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-purple-400 text-purple-600">
                      Implementation
                    </h3>
                    <p
                      className={`font-semibold mb-4 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Complexity: {section.code.complexity}
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
            darkMode ? "text-purple-300" : "text-purple-800"
          }`}
        >
          Serialization Method Comparison
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
                <th className="p-4 text-left">Pickle</th>
                <th className="p-4 text-left">Joblib</th>
                <th className="p-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Speed", "Fast", "Faster for large arrays", "Joblib for NumPy-heavy models"],
                ["File Size", "Medium", "Smaller with compression", "Joblib with compression"],
                ["Security", "Unsafe", "Unsafe", "Neither for untrusted data"],
                ["Python Objects", "All", "Most (optimized for arrays)", "Pickle for complex objects"],
                ["Parallelism", "No", "Yes (compression)", "Joblib for large models"],
                ["Memory Mapping", "No", "Yes", "Joblib for very large models"]
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
          Production Deployment Guidelines
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
              Serialization Best Practices
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Always use highest protocol version for compatibility</li>
              <li>Include metadata (version, training date, metrics)</li>
              <li>Implement integrity checks (checksums, signatures)</li>
              <li>Consider security implications of deserialization</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-purple-300" : "text-purple-800"
            }`}>
              Model Versioning Strategy
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Semantic Versioning:</strong> MAJOR.MINOR.PATCH (e.g., 2.1.0)<br/>
              <strong>Timestamp Versioning:</strong> YYYYMMDD_HHMMSS (e.g., 20230715_143022)<br/>
              <strong>Hybrid Approach:</strong> v1.0.3_20230715<br/>
              <strong>Metadata Files:</strong> Include version info in separate JSON
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-purple-300" : "text-purple-800"
            }`}>
              Advanced Deployment Patterns
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Model Packages:</strong> Combine model + preprocessing in one artifact<br/>
              <strong>Containerization:</strong> Docker images with all dependencies<br/>
              <strong>Model Registries:</strong> Centralized storage and version control<br/>
              <strong>Canary Deployments:</strong> Gradual rollout to monitor performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavingModels;