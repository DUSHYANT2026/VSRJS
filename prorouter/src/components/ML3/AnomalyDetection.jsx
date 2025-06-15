import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-rose-100 dark:border-rose-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 dark:from-pink-600 dark:to-rose-600 dark:hover:from-pink-700 dark:hover:to-rose-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function AnomalyDetection() {
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
      title: "🕵️ Isolation Forest",
      id: "isolation",
      description: "An efficient algorithm for anomaly detection based on isolating outliers in high-dimensional data.",
      keyPoints: [
        "Works by randomly partitioning data",
        "Anomalies require fewer partitions to isolate",
        "No distance or density calculations needed",
        "Effective for high-dimensional data"
      ],
      detailedExplanation: [
        "How it works:",
        "- Builds an ensemble of isolation trees",
        "- Randomly selects features and split values",
        "- Anomalies have shorter path lengths in trees",
        "- Combines results from multiple trees",
        "",
        "Key advantages:",
        "- Low linear time complexity",
        "- Handles irrelevant features well",
        "- Works without feature scaling",
        "- Effective for multi-modal data",
        "",
        "Parameters to tune:",
        "- Number of estimators (trees)",
        "- Contamination (expected outlier fraction)",
        "- Maximum tree depth",
        "- Bootstrap sampling"
      ],
      code: {
        python: `# Isolation Forest Example
from sklearn.ensemble import IsolationForest
import numpy as np

# Generate sample data (95% normal, 5% anomalies)
X = 0.3 * np.random.randn(100, 2)
X = np.r_[X + 2, X - 2, X + [5, -3]]  # Add anomalies

# Train model
clf = IsolationForest(
    n_estimators=100,
    contamination=0.05,
    random_state=42
)
clf.fit(X)

# Predict anomalies (1=normal, -1=anomaly)
y_pred = clf.predict(X)

# Get anomaly scores (the lower, the more abnormal)
scores = clf.decision_function(X)

# Plot results
import matplotlib.pyplot as plt
plt.scatter(X[:, 0], X[:, 1], c=y_pred, cmap='coolwarm')
plt.title("Isolation Forest Anomaly Detection")
plt.show()`,
        complexity: "Training: O(n log n), Prediction: O(n)"
      }
    },
    {
      title: "🛡️ One-Class SVM",
      id: "svm",
      description: "A support vector machine approach that learns a decision boundary around normal data points.",
      keyPoints: [
        "Learns a tight boundary around normal data",
        "Uses kernel trick for non-linear boundaries",
        "Good for high-dimensional data",
        "Sensitive to kernel choice and parameters"
      ],
      detailedExplanation: [
        "Key concepts:",
        "- Maps data to high-dimensional feature space",
        "- Finds maximum margin hyperplane",
        "- Only uses normal data for training",
        "- Treats origin as the outlier class",
        "",
        "Implementation details:",
        "- Uses ν parameter to control outlier fraction",
        "- Supports RBF, polynomial, and sigmoid kernels",
        "- Requires careful parameter tuning",
        "- Needs feature scaling for best performance",
        "",
        "When to use:",
        "- When you only have normal class data",
        "- For high-dimensional feature spaces",
        "- When you need probabilistic outputs",
        "- For non-linear decision boundaries",
        "",
        "Limitations:",
        "- Computationally intensive for large datasets",
        "- Hard to interpret results",
        "- Sensitive to kernel parameters",
        "- Doesn't scale well to very high dimensions"
      ],
      code: {
        python: `# One-Class SVM Example
from sklearn.svm import OneClassSVM
import numpy as np

# Generate normal data (no anomalies in training)
X_train = 0.3 * np.random.randn(100, 2)
X_train = np.r_[X_train + 2, X_train - 2]

# Add anomalies to test set
X_test = np.r_[X_train, [[5, -3], [6, 4]]]

# Train model
clf = OneClassSVM(
    kernel='rbf',
    gamma=0.1,
    nu=0.05  # expected outlier fraction
)
clf.fit(X_train)

# Predict anomalies (1=normal, -1=anomaly)
y_pred = clf.predict(X_test)

# Get decision scores (distance to boundary)
scores = clf.decision_function(X_test)

# Plot results
import matplotlib.pyplot as plt
xx, yy = np.meshgrid(np.linspace(-5, 10, 500), np.linspace(-5, 10, 500))
Z = clf.decision_function(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)

plt.contourf(xx, yy, Z, levels=np.linspace(Z.min(), 0, 7), cmap=plt.cm.PuBu)
plt.contour(xx, yy, Z, levels=[0], linewidths=2, colors='darkred')
plt.scatter(X_test[:, 0], X_test[:, 1], c=y_pred, cmap='coolwarm')
plt.title("One-Class SVM Anomaly Detection")
plt.show()`,
        complexity: "Training: O(n²) to O(n³), Prediction: O(n)"
      }
    },
    {
      title: "📊 Local Outlier Factor (LOF)",
      id: "lof",
      description: "A density-based algorithm that compares local density of points to their neighbors.",
      keyPoints: [
        "Measures local deviation in density",
        "Identifies local outliers",
        "Works well with clustered data",
        "Sensitive to neighborhood size"
      ],
      detailedExplanation: [
        "Core algorithm:",
        "- Computes k-distance (distance to kth neighbor)",
        "- Calculates reachability distance",
        "- Determines local reachability density (LRD)",
        "- Compares LRD to neighbors' LRD",
        "",
        "Key parameters:",
        "- n_neighbors: Number of neighbors to consider",
        "- contamination: Expected outlier fraction",
        "- metric: Distance metric to use",
        "- algorithm: Nearest neighbors algorithm",
        "",
        "Advantages:",
        "- Detects local anomalies in clustered data",
        "- Provides outlier scores (not just binary)",
        "- Works with arbitrary distance metrics",
        "- Handles non-uniform density distributions",
        "",
        "Limitations:",
        "- Computationally expensive for large datasets",
        "- Sensitive to neighborhood size parameter",
        "- Struggles with high-dimensional data",
        "- Requires meaningful distance metric"
      ],
      code: {
        python: `# Local Outlier Factor Example
from sklearn.neighbors import LocalOutlierFactor
import numpy as np

# Generate data with two clusters and some anomalies
X = 0.3 * np.random.randn(50, 2)
X = np.r_[X + 2, X - 2, [[5, -3], [6, 4], [0, 0]]]

# Fit model
clf = LocalOutlierFactor(
    n_neighbors=20,
    contamination=0.1,
    novelty=True  # predict on new data
)
y_pred = clf.fit_predict(X)

# Negative scores are outliers, higher = more normal
scores = clf.negative_outlier_factor_

# Plot results
import matplotlib.pyplot as plt
plt.scatter(X[:, 0], X[:, 1], c=y_pred, cmap='coolwarm')
plt.title("Local Outlier Factor Anomaly Detection")
plt.show()

# Decision function visualization
xx, yy = np.meshgrid(np.linspace(-5, 10, 500), np.linspace(-5, 10, 500))
Z = clf._decision_function(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)

plt.contourf(xx, yy, Z, cmap=plt.cm.Blues_r)
plt.scatter(X[:, 0], X[:, 1], c=y_pred, cmap='coolwarm')
plt.title("LOF Decision Boundaries")
plt.show()`,
        complexity: "Training: O(n²), Prediction: O(n)"
      }
    },
    {
      title: "🔢 Statistical Methods",
      id: "statistical",
      description: "Classical statistical approaches for identifying anomalies based on distribution assumptions.",
      keyPoints: [
        "Z-score: Standard deviations from mean",
        "Modified Z-score: Robust to outliers",
        "IQR method: Uses quartile ranges",
        "Mahalanobis distance: Multivariate"
      ],
      detailedExplanation: [
        "Z-score method:",
        "- Assumes normal distribution",
        "- Threshold typically ±3 standard deviations",
        "- Simple but sensitive to extreme values",
        "",
        "Modified Z-score:",
        "- Uses median and MAD (median absolute deviation)",
        "- More robust to existing outliers",
        "- Recommended for real-world data",
        "",
        "IQR method:",
        "- Uses 25th and 75th percentiles",
        "- Outliers outside Q1 - 1.5*IQR or Q3 + 1.5*IQR",
        "- Non-parametric (no distribution assumptions)",
        "",
        "Mahalanobis distance:",
        "- Accounts for covariance between features",
        "- Measures distance from distribution center",
        "- Requires inverse covariance matrix",
        "- Sensitive to sample size and dimensionality",
        "",
        "When to use:",
        "- When you know the data distribution",
        "- For quick baseline implementations",
        "- When interpretability is important",
        "- For low-dimensional data"
      ],
      code: {
        python: `# Statistical Anomaly Detection
import numpy as np
from scipy import stats

# Generate data with outliers
data = np.concatenate([np.random.normal(0, 1, 100), 
                      [10, -8, 5.5, -4.2]])

# Z-score method
z_scores = np.abs(stats.zscore(data))
z_threshold = 3
z_outliers = np.where(z_scores > z_threshold)

# Modified Z-score (more robust)
median = np.median(data)
mad = np.median(np.abs(data - median))
modified_z = 0.6745 * (data - median) / mad  # 0.6745 = 0.75th percentile of N(0,1)
modz_outliers = np.where(np.abs(modified_z) > z_threshold)

# IQR method
q1, q3 = np.percentile(data, [25, 75])
iqr = q3 - q1
lower_bound = q1 - (1.5 * iqr)
upper_bound = q3 + (1.5 * iqr)
iqr_outliers = np.where((data < lower_bound) | (data > upper_bound))

# Mahalanobis distance (multivariate)
from sklearn.covariance import EmpiricalCovariance
X = np.random.multivariate_normal([0, 0], [[1, 0.5], [0.5, 1]], 100)
X = np.r_[X, [[5, 5], [-4, -4]]]  # Add outliers

cov = EmpiricalCovariance().fit(X)
mahalanobis_dist = cov.mahalanobis(X)
maha_threshold = np.percentile(mahalanobis_dist, 95)  # 95th percentile
maha_outliers = np.where(mahalanobis_dist > maha_threshold)`,
        complexity: "Z-score/IQR: O(n), Mahalanobis: O(n²) to O(n³)"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-pink-50 to-rose-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-pink-400 to-rose-400"
            : "bg-gradient-to-r from-pink-600 to-rose-600"
        } mb-8 sm:mb-12`}
      >
        Anomaly Detection
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-rose-900/20" : "bg-rose-100"
        } border-l-4 border-rose-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-rose-500 text-rose-800">
          Unsupervised Learning → Anomaly Detection
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Anomaly detection identifies rare items, events or observations which raise suspicions 
          by differing significantly from the majority of the data. These techniques are widely 
          used in fraud detection, system health monitoring, and data cleaning.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-rose-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-rose-300" : "text-rose-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-rose-600 dark:text-rose-400">
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
                      darkMode ? "bg-rose-900/30" : "bg-rose-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-rose-400 text-rose-600">
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
            darkMode ? "text-rose-300" : "text-rose-800"
          }`}
        >
          Algorithm Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-rose-900" : "bg-rose-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Algorithm</th>
                <th className="p-4 text-left">Strengths</th>
                <th className="p-4 text-left">Weaknesses</th>
                <th className="p-4 text-left">Best Use Cases</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Isolation Forest", "Fast, handles high dimensions", "Less precise on local anomalies", "High-dimensional data, large datasets"],
                ["One-Class SVM", "Flexible boundaries, kernel trick", "Slow, sensitive to parameters", "Non-linear boundaries, small datasets"],
                ["Local Outlier Factor", "Detects local anomalies", "Computationally expensive", "Clustered data, local anomalies"],
                ["Statistical Methods", "Simple, interpretable", "Strong distribution assumptions", "Low-dimensional data, quick baselines"]
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
          darkMode ? "bg-rose-900/30" : "bg-rose-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-rose-300" : "text-rose-800"
          }`}
        >
          Practical Guidance
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-rose-300" : "text-rose-800"
              }`}
            >
              Choosing an Algorithm
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>For high-dimensional data: Isolation Forest or One-Class SVM</li>
              <li>For clustered data: Local Outlier Factor</li>
              <li>For interpretability: Statistical methods</li>
              <li>For large datasets: Isolation Forest</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-rose-300" : "text-rose-800"
            }`}>
              Implementation Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Feature Scaling:</strong> Normalize before using distance-based methods<br/>
              <strong>Parameter Tuning:</strong> Adjust contamination rate based on domain knowledge<br/>
              <strong>Evaluation:</strong> Use precision@k when labeled anomalies are available<br/>
              <strong>Visualization:</strong> Plot anomaly scores to understand model behavior
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-rose-300" : "text-rose-800"
            }`}>
              Advanced Applications
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Time Series:</strong> Specialized models like STL decomposition<br/>
              <strong>Graph Data:</strong> Community detection approaches<br/>
              <strong>Image Data:</strong> Autoencoder reconstruction error<br/>
              <strong>Text Data:</strong> Rare topic or word pattern detection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnomalyDetection;