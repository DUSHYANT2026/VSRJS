import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-yellow-100 dark:border-yellow-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 dark:from-violet-600 dark:to-purple-600 dark:hover:from-violet-700 dark:hover:to-purple-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function Python() {
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

  const formatDescription = (desc) => {
    return desc.split("\n").map((paragraph, i) => (
      <p
        key={i}
        className="mb-4 whitespace-pre-line dark:text-gray-300 text-gray-800"
      >
        {paragraph}
      </p>
    ));
  };

  const content = [
    {
      title: "🐍 Python Basics",
      id: "basics",
      description:
        "Fundamental programming concepts essential for ML implementation.",
      keyPoints: [
        "Variables and data types (int, float, str, bool)",
        "Control flow (if-else, loops)",
        "Functions and lambda expressions",
        "List comprehensions and generators",
      ],
      detailedExplanation: [
        "Core concepts for ML programming:",
        "- Dynamic typing for flexible data handling",
        "- Iterators and generators for memory efficiency",
        "- Functional programming patterns (map, filter, reduce)",
        "- Exception handling for robust ML pipelines",
        "",
        "ML-specific patterns:",
        "- Vectorized operations for performance",
        "- Generator functions for streaming large datasets",
        "- Decorators for logging and timing model training",
        "- Context managers for resource handling",
        "",
        "Performance considerations:",
        "- Avoiding global variables in ML scripts",
        "- Proper variable scoping in notebooks",
        "- Memory management with large datasets",
        "- Profiling computational bottlenecks",
      ],
      code: {
        python: `# Python Basics for ML
# Variables and types
batch_size = 64  # int
learning_rate = 0.001  # float
model_name = "resnet50"  # str
is_training = True  # bool

# Control flow
if batch_size > 32 and is_training:
    print("Using large batch training")
elif not is_training:
    print("Evaluation mode")
else:
    print("Small batch training")

# Loops
for epoch in range(10):  # 10 epochs
    for batch in batches:
        train(batch)

# Functions
def calculate_accuracy(y_true, y_pred):
    """Compute classification accuracy"""
    correct = sum(1 for t, p in zip(y_true, y_pred) if t == p)
    return correct / len(y_true)

# Lambda for simple transforms
square = lambda x: x**2
squared_data = list(map(square, raw_data))

# List comprehension for data processing
cleaned_data = [preprocess(x) for x in raw_data if x is not None]

# Generator for memory efficiency
def data_stream(file_path, chunk_size=1024):
    """Yield data in chunks"""
    with open(file_path) as f:
        while True:
            data = f.read(chunk_size)
            if not data:
                break
            yield process(data)`,
        complexity: "Basic operations: O(1), Loops: O(n), Comprehensions: O(n)",
      },
    },
    {
      title: "📚 Python Libraries",
      id: "libraries",
      description:
        "Essential scientific computing libraries for machine learning workflows.",
      keyPoints: [
        "NumPy: Numerical computing with arrays",
        "Pandas: Data manipulation and analysis",
        "Matplotlib: Data visualization",
        "Seaborn: Statistical visualization",
      ],
      detailedExplanation: [
        "NumPy for ML:",
        "- Efficient n-dimensional arrays",
        "- Broadcasting rules for vectorized operations",
        "- Linear algebra operations (dot product, SVD)",
        "- Random sampling from distributions",
        "",
        "Pandas for data preparation:",
        "- DataFrames for structured data",
        "- Handling missing data (NA, NaN)",
        "- Time series functionality",
        "- Merging and joining datasets",
        "",
        "Visualization tools:",
        "- Matplotlib for custom plots",
        "- Seaborn for statistical visualizations",
        "- Interactive plotting with widgets",
        "- Saving publication-quality figures",
        "",
        "Integration with ML:",
        "- Converting between Pandas and NumPy",
        "- Data preprocessing pipelines",
        "- Feature visualization",
        "- Model evaluation plots",
      ],
      code: {
        python: `# Python Libraries for ML
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# NumPy arrays
features = np.random.randn(1000, 10)  # 1000 samples, 10 features
weights = np.zeros(10)
predictions = np.dot(features, weights)

# Pandas DataFrame
data = pd.DataFrame(features, columns=[f"feature_{i}" for i in range(10)])
data['target'] = np.random.randint(0, 2, 1000)  # Binary target

# Data exploration
print(data.describe())
print(data.isna().sum())

# Matplotlib visualization
plt.figure(figsize=(10,6))
plt.scatter(data['feature_0'], data['feature_1'], c=data['target'])
plt.xlabel("Feature 0")
plt.ylabel("Feature 1")
plt.title("Feature Space")
plt.colorbar(label="Target")
plt.show()

# Seaborn visualization
plt.figure(figsize=(10,6))
sns.heatmap(data.corr(), annot=True, cmap='coolwarm')
plt.title("Feature Correlation Matrix")
plt.show()

# Advanced visualization
g = sns.PairGrid(data.sample(100), vars=['feature_0', 'feature_1', 'feature_2'], hue='target')
g.map_diag(sns.histplot)
g.map_offdiag(sns.scatterplot)
g.add_legend()`,
        complexity: "NumPy ops: O(n) to O(n³), Pandas ops: O(n) to O(n²)",
      },
    },
    {
      title: "🗃️ Data Structures",
      id: "data-structures",
      description:
        "Efficient data organization for machine learning applications.",
      keyPoints: [
        "Lists: Ordered, mutable collections",
        "Dictionaries: Key-value pairs for fast lookup",
        "Arrays: Homogeneous numerical data",
        "Specialized structures (sets, tuples, deques)",
      ],
      detailedExplanation: [
        "Choosing the right structure:",
        "- Lists for ordered sequences of items",
        "- Dictionaries for labeled data access",
        "- NumPy arrays for numerical computations",
        "- Sets for unique element collections",
        "",
        "Performance characteristics:",
        "- Time complexity of common operations",
        "- Memory usage considerations",
        "- Cache locality for numerical data",
        "- Parallel processing compatibility",
        "",
        "ML-specific patterns:",
        "- Feature dictionaries for NLP",
        "- Batched data as lists of arrays",
        "- Lookup tables for embeddings",
        "- Circular buffers for streaming",
        "",
        "Advanced structures:",
        "- Defaultdict for counting",
        "- Namedtuples for readable code",
        "- Deques for sliding windows",
        "- Sparse matrices for NLP/cv",
      ],
      code: {
        python: `# Data Structures for ML
from collections import defaultdict, deque, namedtuple
import numpy as np

# Lists for batched data
batches = []
for i in range(0, len(data), batch_size):
    batches.append(data[i:i+batch_size])

# Dictionaries for model config
model_config = {
    'hidden_layers': [128, 64, 32],
    'activation': 'relu',
    'dropout': 0.2,
    'learning_rate': 0.001
}

# NumPy arrays for features
X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
y = np.array([0, 1, 0])

# Set for vocabulary
vocab = set()
for text in corpus:
    vocab.update(text.split())

# Defaultdict for counting
word_counts = defaultdict(int)
for word in text_corpus:
    word_counts[word] += 1

# Namedtuple for readable code
ModelOutput = namedtuple('ModelOutput', ['prediction', 'confidence', 'embedding'])
output = ModelOutput(prediction=1, confidence=0.92, embedding=np.zeros(256))

# Deque for sliding window
window = deque(maxlen=5)
for data_point in stream:
    window.append(data_point)
    if len(window) == 5:
        process_window(list(window))`,
        complexity: "Lists: O(1) access, O(n) insert; Dicts: O(1) average case",
      },
    },
    {
      title: "📂 File Handling",
      id: "file-handling",
      description:
        "Reading and writing data in formats commonly used in ML pipelines.",
      keyPoints: [
        "CSV: Tabular data storage",
        "JSON: Structured configuration and data",
        "XML: Hierarchical data representation",
        "Binary formats (HDF5, Pickle, Parquet)",
      ],
      detailedExplanation: [
        "CSV for tabular data:",
        "- Reading/writing with Pandas",
        "- Handling large files with chunks",
        "- Dealing with missing values",
        "- Type inference and specification",
        "",
        "JSON for configuration:",
        "- Model hyperparameters",
        "- Experiment configurations",
        "- Metadata storage",
        "- Schema validation",
        "",
        "Binary formats:",
        "- HDF5 for large numerical datasets",
        "- Pickle for Python object serialization",
        "- Parquet for columnar storage",
        "- Protocol buffers for efficient serialization",
        "",
        "Best practices:",
        "- Memory mapping large files",
        "- Streaming processing",
        "- Compression options",
        "- Versioning and schema evolution",
      ],
      code: {
        python: `# File Handling for ML
import pandas as pd
import json
import pickle
import h5py

# CSV files
# Reading
data = pd.read_csv('dataset.csv', nrows=1000)  # Read first 1000 rows
chunked_data = pd.read_csv('large_dataset.csv', chunksize=10000)  # Stream in chunks

# Writing
data.to_csv('processed.csv', index=False)

# JSON files
# Reading config
with open('config.json') as f:
    config = json.load(f)

# Writing results
results = {'accuracy': 0.92, 'loss': 0.15}
with open('experiment_1.json', 'w') as f:
    json.dump(results, f, indent=2)

# Binary formats
# HDF5 for large arrays
with h5py.File('embeddings.h5', 'w') as f:
    f.create_dataset('embeddings', data=embeddings_array)

# Pickle for Python objects
with open('model.pkl', 'wb') as f:
    pickle.dump(trained_model, f)

# Parquet for efficient storage
data.to_parquet('data.parquet', engine='pyarrow')

# Handling XML (less common in ML)
import xml.etree.ElementTree as ET
tree = ET.parse('config.xml')
root = tree.getroot()
params = {child.tag: child.text for child in root}`,
        complexity:
          "CSV/JSON: O(n), Binary formats: O(n) with better constant factors",
      },
    },
    {
      title: "📊 Data Visualization",
      id: "visualization",
      description:
        "Exploring and communicating insights from ML data and results.",
      keyPoints: [
        "Histograms: Distribution of features",
        "Box plots: Statistical summaries",
        "Scatter plots: Relationships between variables",
        "Advanced plots (violin, pair, heatmaps)",
      ],
      detailedExplanation: [
        "Exploratory data analysis:",
        "- Identifying data distributions",
        "- Spotting outliers and anomalies",
        "- Visualizing feature relationships",
        "- Checking class balance",
        "",
        "Model evaluation visuals:",
        "- ROC curves and precision-recall",
        "- Confusion matrices",
        "- Learning curves",
        "- Feature importance plots",
        "",
        "Advanced techniques:",
        "- Interactive visualization (Plotly, Bokeh)",
        "- Large dataset visualization strategies",
        "- Custom matplotlib styling",
        "- Animation for model dynamics",
        "",
        "Best practices:",
        "- Choosing appropriate chart types",
        "- Effective labeling and legends",
        "- Color palette selection",
        "- Accessibility considerations",
      ],
      code: {
        python: `# Data Visualization for ML
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Histogram of features
plt.figure(figsize=(10,6))
plt.hist(data['feature_0'], bins=30, alpha=0.5, label='Feature 0')
plt.hist(data['feature_1'], bins=30, alpha=0.5, label='Feature 1')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Feature Distributions')
plt.legend()
plt.show()

# Box plot of model errors
plt.figure(figsize=(10,6))
sns.boxplot(x='model_type', y='error', data=results_df)
plt.title('Model Error Comparison')
plt.xticks(rotation=45)
plt.show()

# Scatter plot with regression
plt.figure(figsize=(10,6))
sns.regplot(x='feature_0', y='target', data=data, scatter_kws={'alpha':0.3})
plt.title('Feature-Target Relationship')
plt.show()

# Advanced visualizations
# Violin plot
plt.figure(figsize=(10,6))
sns.violinplot(x='class', y='feature_2', data=data, inner='quartile')
plt.title('Feature Distribution by Class')
plt.show()

# Heatmap
corr = data.corr()
plt.figure(figsize=(12,8))
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0)
plt.title('Feature Correlation Matrix')
plt.show()

# Pair plot for multivariate analysis
sns.pairplot(data.sample(100), vars=['feature_0', 'feature_1', 'feature_2'], hue='target')
plt.suptitle('Multivariate Feature Relationships', y=1.02)
plt.show()`,
        complexity:
          "Basic plots: O(n), Complex plots: O(n²) for pairwise relationships",
      },
    },
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-violet-50 to-purple-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-violet-400 to-purple-400"
            : "bg-gradient-to-r from-violet-600 to-purple-600"
        } mb-8 sm:mb-12`}
      >
        Python for Machine Learning
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-violet-900/20" : "bg-violet-100"
        } border-l-4 border-violet-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-violet-500 text-violet-800">
          Programming for ML
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Python is the dominant language for machine learning due to its
          simplicity and rich ecosystem. This section covers essential Python
          programming concepts specifically tailored for ML workflows, from
          basic syntax to advanced data handling and visualization.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-violet-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-violet-300" : "text-violet-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-violet-600 dark:text-violet-400">
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
                      ML Applications
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
                      ML Implementation
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
            darkMode ? "text-violet-300" : "text-violet-800"
          }`}
        >
          Python Tools for ML Workflows
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-violet-900" : "bg-violet-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Key Libraries</th>
                <th className="p-4 text-left">ML Application</th>
                <th className="p-4 text-left">Performance Tip</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Numerical Computing",
                  "NumPy, SciPy",
                  "Linear algebra, optimization",
                  "Use vectorized operations",
                ],
                [
                  "Data Handling",
                  "Pandas, Polars",
                  "Data cleaning, feature engineering",
                  "Avoid row-wise operations",
                ],
                [
                  "Visualization",
                  "Matplotlib, Seaborn",
                  "EDA, model evaluation",
                  "Use figure-level functions",
                ],
                [
                  "File I/O",
                  "H5Py, PyArrow",
                  "Large dataset storage",
                  "Use memory mapping",
                ],
                [
                  "Advanced ML",
                  "Scikit-learn, XGBoost",
                  "Model training, evaluation",
                  "Prefer fit-transform",
                ],
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
          darkMode ? "bg-violet-900/30" : "bg-violet-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-violet-300" : "text-violet-800"
          }`}
        >
          ML Engineer's Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-violet-300" : "text-violet-800"
              }`}
            >
              Python Coding Standards
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Follow PEP 8 style guide for consistent code</li>
              <li>Use type hints for better maintainability</li>
              <li>Document functions with docstrings</li>
              <li>Structure projects with modular packages</li>
            </ul>
          </div>

          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-violet-300" : "text-violet-800"
              }`}
            >
              Performance Optimization
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Vectorization:</strong> Prefer NumPy over native Python
              loops
              <br />
              <strong>Memory:</strong> Use generators for large datasets
              <br />
              <strong>Parallelism:</strong> Leverage multiprocessing for
              CPU-bound tasks
              <br />
              <strong>JIT:</strong> Consider Numba for numerical code
            </p>
          </div>

          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-violet-300" : "text-violet-800"
              }`}
            >
              Advanced Python for ML
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Metaprogramming:</strong> Dynamic model generation
              <br />
              <strong>Decorators:</strong> Timing, logging, validation
              <br />
              <strong>Context Managers:</strong> Resource handling
              <br />
              <strong>Descriptors:</strong> Custom model attributes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Python;
