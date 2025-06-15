import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-green-100 dark:border-green-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-green-700 dark:to-green-800 dark:hover:from-green-800 dark:hover:to-green-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function BiasVarianceTradeoff() {
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
      title: "🎯 Understanding Bias and Variance",
      id: "concepts",
      description: "Fundamental concepts that determine model performance and generalization.",
      keyPoints: [
        "Bias: Error from overly simplistic assumptions",
        "Variance: Error from sensitivity to small fluctuations",
        "Irreducible error: Noise inherent in the data",
        "Total error = Bias² + Variance + Irreducible error"
      ],
      detailedExplanation: [
        "Bias (Underfitting):",
        "- High bias models are too simple for the data",
        "- Consistently miss relevant patterns",
        "- Examples: Linear regression for complex data",
        "- Symptoms: High training and test error",
        "",
        "Variance (Overfitting):",
        "- High variance models are too complex",
        "- Capture noise as if it were signal",
        "- Examples: Deep trees with no pruning",
        "- Symptoms: Low training error but high test error",
        "",
        "Visualizing the Tradeoff:",
        "- Simple models → high bias, low variance",
        "- Complex models → low bias, high variance",
        "- Goal: Find the sweet spot in the middle",
        "- Changes with model complexity and training size"
      ],
      code: {
        python: `# Visualizing Bias-Variance Tradeoff
import numpy as np
import matplotlib.pyplot as plt
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Generate synthetic data
np.random.seed(42)
X = np.random.rand(100, 1)
y = 0.5 * X[:,0] + np.random.randn(100) * 0.1  # Linear relationship with noise

# Create models of varying complexity
degrees = [1, 4, 15]
plt.figure(figsize=(14, 5))

for i, degree in enumerate(degrees):
    ax = plt.subplot(1, len(degrees), i + 1)
    
    # Polynomial regression
    model = Pipeline([
        ('poly', PolynomialFeatures(degree=degree)),
        ('linear', LinearRegression())
    ])
    model.fit(X, y)
    X_test = np.linspace(0, 1, 100)
    y_pred = model.predict(X_test[:, np.newaxis])
    
    # Plot
    plt.scatter(X, y, s=10, label='Data')
    plt.plot(X_test, y_pred, color='r', label='Model')
    plt.title(f'Degree {degree}\nMSE: {mean_squared_error(y, model.predict(X)):.4f}')
    plt.ylim(-0.5, 1.5)
    plt.legend()

plt.suptitle('Bias-Variance Tradeoff Illustrated', y=1.02)
plt.tight_layout()
plt.show()`,
        complexity: "Analysis: O(n) for basic models, O(n²) for complex relationships"
      }
    },
    {
      title: "⚖️ The Tradeoff in Practice",
      id: "tradeoff",
      description: "How bias and variance manifest in real-world machine learning models.",
      keyPoints: [
        "Model complexity affects bias and variance inversely",
        "Training set size impacts variance more than bias",
        "Regularization balances bias and variance",
        "Different algorithms have different bias-variance profiles"
      ],
      detailedExplanation: [
        "Model Complexity Relationship:",
        "- Increasing complexity decreases bias but increases variance",
        "- There's an optimal complexity for each problem",
        "- Can be visualized with validation curves",
        "",
        "Training Data Considerations:",
        "- More data reduces variance without affecting bias",
        "- Small datasets are prone to high variance",
        "- Data quality affects irreducible error",
        "",
        "Algorithm Characteristics:",
        "- Linear models: High bias, low variance",
        "- Decision trees: Low bias, high variance",
        "- SVM with RBF kernel: Can tune bias-variance with γ",
        "- Neural networks: Can range based on architecture",
        "",
        "Practical Implications:",
        "- Simple problems need simpler models",
        "- Complex problems may require complex (but regularized) models",
        "- More data allows using more complex models",
        "- Domain knowledge helps choose appropriate bias"
      ],
      code: {
        python: `# Managing Bias-Variance Tradeoff
from sklearn.model_selection import learning_curve
from sklearn.ensemble import RandomForestRegressor
import matplotlib.pyplot as plt

# Generate more complex synthetic data
X = np.random.rand(500, 1)
y = np.sin(2 * np.pi * X[:,0]) + np.random.randn(500) * 0.2

# Learning curves to diagnose bias-variance
def plot_learning_curve(estimator, title):
    train_sizes, train_scores, test_scores = learning_curve(
        estimator, X, y, cv=5, scoring='neg_mean_squared_error',
        train_sizes=np.linspace(0.1, 1.0, 10))
    
    train_scores_mean = -train_scores.mean(axis=1)
    test_scores_mean = -test_scores.mean(axis=1)
    
    plt.figure()
    plt.title(title)
    plt.plot(train_sizes, train_scores_mean, 'o-', label='Training error')
    plt.plot(train_sizes, test_scores_mean, 'o-', label='Validation error')
    plt.xlabel('Training examples')
    plt.ylabel('MSE')
    plt.legend()
    plt.grid()

# High bias model (too simple)
plot_learning_curve(LinearRegression(), "High Bias Model")

# High variance model (too complex)
plot_learning_curve(RandomForestRegressor(n_estimators=200, max_depth=None), 
                   "High Variance Model")

# Well-balanced model
plot_learning_curve(RandomForestRegressor(n_estimators=100, max_depth=3), 
                   "Balanced Model")`,
        complexity: "Learning curves: O(k*n) where k is number of training sizes"
      }
    },
    {
      title: "🛠️ Techniques for Balancing",
      id: "techniques",
      description: "Practical methods to manage bias and variance in machine learning models.",
      keyPoints: [
        "Regularization (L1/L2) reduces variance",
        "Ensemble methods (bagging reduces variance, boosting reduces bias)",
        "Cross-validation for proper evaluation",
        "Feature engineering to address bias"
      ],
      detailedExplanation: [
        "Reducing Variance:",
        "- Regularization (L1/L2/ElasticNet)",
        "- Pruning decision trees",
        "- Dropout in neural networks",
        "- Early stopping",
        "",
        "Reducing Bias:",
        "- More complex models",
        "- Feature engineering",
        "- Boosting algorithms",
        "- Removing regularization",
        "",
        "Specialized Techniques:",
        "- Bagging (e.g., Random Forests) for variance reduction",
        "- Boosting (e.g., XGBoost) for bias reduction",
        "- Stacking for optimal balance",
        "- Dimensionality reduction for high-dimensional data",
        "",
        "Evaluation Methods:",
        "- Train-test splits to detect overfitting",
        "- Learning curves to diagnose issues",
        "- Validation curves to tune hyperparameters",
        "- Nested cross-validation for reliable estimates"
      ],
      code: {
        python: `# Techniques to Balance Bias and Variance
from sklearn.linear_model import Ridge, Lasso
from sklearn.ensemble import BaggingRegressor, GradientBoostingRegressor
from sklearn.model_selection import cross_val_score

# Generate data
X = np.random.rand(200, 10)
y = X[:,0] + 0.5 * X[:,1]**2 + np.random.randn(200) * 0.1

# 1. Regularization examples
ridge = Ridge(alpha=1.0)  # L2 regularization
lasso = Lasso(alpha=0.1)  # L1 regularization

print("Ridge CV MSE:", -cross_val_score(ridge, X, y, cv=5, 
                                      scoring='neg_mean_squared_error').mean())
print("Lasso CV MSE:", -cross_val_score(lasso, X, y, cv=5, 
                                      scoring='neg_mean_squared_error').mean())

# 2. Ensemble methods
# Bagging to reduce variance
bagging = BaggingRegressor(base_estimator=DecisionTreeRegressor(max_depth=5),
                          n_estimators=50)
# Boosting to reduce bias
boosting = GradientBoostingRegressor(n_estimators=100, max_depth=3,
                                   learning_rate=0.1)

print("Bagging CV MSE:", -cross_val_score(bagging, X, y, cv=5,
                                        scoring='neg_mean_squared_error').mean())
print("Boosting CV MSE:", -cross_val_score(boosting, X, y, cv=5,
                                         scoring='neg_mean_squared_error').mean())

# 3. Hyperparameter tuning with validation curve
from sklearn.model_selection import validation_curve

param_range = np.logspace(-3, 3, 10)
train_scores, test_scores = validation_curve(
    Ridge(), X, y, param_name="alpha", param_range=param_range,
    cv=5, scoring="neg_mean_squared_error")

# Plot validation curve
plt.figure()
plt.semilogx(param_range, -train_scores.mean(axis=1), 'o-', label='Training error')
plt.semilogx(param_range, -test_scores.mean(axis=1), 'o-', label='Validation error')
plt.xlabel('Regularization strength (alpha)')
plt.ylabel('MSE')
plt.title('Validation Curve for Ridge Regression')
plt.legend()
plt.grid()
plt.show()`,
        complexity: "Regularization: O(n), Ensembles: O(m*n) where m is number of estimators"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-green-50 to-green-100"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-green-400 to-green-500"
            : "bg-gradient-to-r from-green-600 to-green-700"
        } mb-8 sm:mb-12`}
      >
        Bias-Variance Tradeoff
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-green-900/20" : "bg-green-100"
        } border-l-4 border-green-600`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-green-500 text-green-800">
          Model Evaluation and Optimization
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          The bias-variance tradeoff is a fundamental concept that helps explain model behavior
          and guides the selection and tuning of machine learning algorithms. Understanding this
          tradeoff is crucial for building models that generalize well to unseen data.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-green-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-green-300" : "text-green-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-green-600 dark:text-green-400">
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
                      darkMode ? "bg-yellow-900/30" : "bg-yellow-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-yellow-400 text-yellow-600">
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
                      darkMode ? "bg-green-900/30" : "bg-green-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-green-400 text-green-600">
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

      {/* Diagnostic Table */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? "text-green-300" : "text-green-800"
          }`}
        >
          Bias-Variance Diagnostics
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-green-900" : "bg-green-700"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Symptom</th>
                <th className="p-4 text-left">Training Error</th>
                <th className="p-4 text-left">Validation Error</th>
                <th className="p-4 text-left">Likely Issue</th>
                <th className="p-4 text-left">Solution</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["High error on both", "High", "High", "High bias (underfitting)", "Increase model complexity, add features"],
                ["Large gap between train/val", "Low", "High", "High variance (overfitting)", "Regularization, more data, simplify model"],
                ["Good performance", "Low", "Low (close to train)", "Well-balanced", "None needed"],
                ["Error decreases with more data", "Decreasing", "Decreasing", "High variance", "Get more training data"],
                ["Error plateaus with more data", "Stable", "Stable", "High bias", "Change model architecture"]
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
          darkMode ? "bg-green-900/30" : "bg-green-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-green-300" : "text-green-800"
          }`}
        >
          Practical Guidelines
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-green-300" : "text-green-800"
              }`}
            >
              Model Selection Strategy
            </h4>
            <ol className={`list-decimal pl-6 space-y-2 ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}>
              <li>Start with a simple model to establish a baseline</li>
              <li>Gradually increase complexity while monitoring validation performance</li>
              <li>Stop when validation error stops improving or starts increasing</li>
              <li>Apply regularization if the model shows signs of overfitting</li>
            </ol>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-green-300" : "text-green-800"
            }`}>
              Algorithm-Specific Tips
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["Linear Models", "Control bias with feature engineering, variance with regularization"],
                ["Decision Trees", "Control variance with max_depth/min_samples_leaf"],
                ["Neural Networks", "Control variance with dropout/weight decay"],
                ["SVM", "Control bias-variance with C and kernel parameters"],
                ["Ensembles", "Bagging reduces variance, boosting reduces bias"]
              ].map(([algorithm, tip], index) => (
                <div key={index} className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-green-50"
                }`}>
                  <h5 className={`font-semibold ${
                    darkMode ? "text-green-300" : "text-green-700"
                  }`}>{algorithm}</h5>
                  <p className={`${darkMode ? "text-gray-200" : "text-gray-700"}`}>{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-green-300" : "text-green-800"
            }`}>
              When to Collect More Data
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              More training data primarily helps with <strong>high variance</strong> problems:
              <br/><br/>
              - If your model performs well on training data but poorly on validation data<br/>
              - If learning curves show validation error decreasing with more data<br/>
              - For complex models that have the capacity to learn but need more examples<br/><br/>
              
              More data <strong>won't help</strong> with high bias problems - you need better features or a different model.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiasVarianceTradeoff;