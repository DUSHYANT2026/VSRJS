import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-emerald-100 dark:border-emerald-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 dark:from-teal-600 dark:to-emerald-600 dark:hover:from-teal-700 dark:hover:to-emerald-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function Regression() {
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
      title: "📉 Simple & Multiple Linear Regression",
      id: "linear",
      description: "Modeling linear relationships between variables, fundamental for predictive analytics.",
      keyPoints: [
        "y = β₀ + β₁x₁ + ... + βₙxₙ + ε",
        "Ordinary Least Squares (OLS) estimation",
        "Assumptions: Linearity, independence, homoscedasticity, normality",
        "Interpretation of coefficients"
      ],
      detailedExplanation: [
        "Mathematical Formulation:",
        "- Simple: y = β₀ + β₁x + ε (one predictor)",
        "- Multiple: y = β₀ + β₁x₁ + ... + βₙxₙ + ε (multiple predictors)",
        "- β₀: Intercept, β₁..βₙ: Slope coefficients",
        "- ε: Error term (normally distributed)",
        "",
        "Implementation Considerations:",
        "- Feature scaling improves convergence",
        "- Handling categorical predictors (dummy variables)",
        "- Multicollinearity detection (VIF)",
        "- Outlier impact and leverage points",
        "",
        "Evaluation Metrics:",
        "- R² (coefficient of determination)",
        "- Adjusted R² for multiple predictors",
        "- Mean Squared Error (MSE)",
        "- Root Mean Squared Error (RMSE)"
      ],
      code: {
        python: `# Linear Regression Implementation
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import statsmodels.api as sm

# Generate sample data
np.random.seed(42)
X = np.random.rand(100, 3)  # 100 samples, 3 features
y = 2.5 + 1.5*X[:,0] + 0.8*X[:,1] - 1.2*X[:,2] + np.random.randn(100)*0.2

# Scikit-learn implementation
model = LinearRegression()
model.fit(X, y)
y_pred = model.predict(X)

# Evaluate
mse = mean_squared_error(y, y_pred)
r2 = r2_score(y, y_pred)
print(f"Intercept: {model.intercept_:.3f}")
print(f"Coefficients: {model.coef_}")
print(f"MSE: {mse:.3f}, R²: {r2:.3f}")

# Statsmodels for detailed statistics
X_with_const = sm.add_constant(X)  # Adds intercept term
sm_model = sm.OLS(y, X_with_const).fit()
print(sm_model.summary())

# Manual OLS implementation (educational)
def ols_fit(X, y):
    X_with_const = np.column_stack([np.ones(len(X)), X])
    beta = np.linalg.inv(X_with_const.T @ X_with_const) @ X_with_const.T @ y
    return beta

manual_coef = ols_fit(X, y)
print("Manual coefficients:", manual_coef)`,
        complexity: "OLS: O(n²p + p³) where n=samples, p=features"
      }
    },
    {
      title: "📈 Polynomial Regression",
      id: "polynomial",
      description: "Extending linear models to capture nonlinear relationships through polynomial features.",
      keyPoints: [
        "y = β₀ + β₁x + β₂x² + ... + βₙxⁿ + ε",
        "Feature engineering with polynomial terms",
        "Degree selection and overfitting",
        "Regularization approaches"
      ],
      detailedExplanation: [
        "When to Use:",
        "- Nonlinear relationships between variables",
        "- Interaction effects between features",
        "- Approximation of complex functions",
        "",
        "Implementation Details:",
        "- PolynomialFeatures for feature transformation",
        "- Scaling becomes critical for higher degrees",
        "- Visualizing the fitted curve",
        "- Bias-variance tradeoff considerations",
        "",
        "Practical Considerations:",
        "- Degree selection via cross-validation",
        "- Regularization to prevent overfitting",
        "- Interpretation challenges with high degrees",
        "- Computational complexity with many features",
        "",
        "Applications:",
        "- Physical systems with known nonlinearities",
        "- Economic modeling (diminishing returns)",
        "- Biological growth curves",
        "- Sensor calibration"
      ],
      code: {
        python: `# Polynomial Regression Example
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error

# Generate nonlinear data
np.random.seed(42)
X = np.linspace(-3, 3, 100)
y = 0.5*X**3 - 2*X**2 + X + np.random.randn(100)*0.5

# Reshape for sklearn
X = X.reshape(-1, 1)

# Create polynomial regression pipeline
degrees = [1, 3, 5, 7]
plt.figure(figsize=(10,6))

for degree in degrees:
    model = Pipeline([
        ('poly', PolynomialFeatures(degree=degree)),
        ('linear', LinearRegression())
    ])
    model.fit(X, y)
    y_pred = model.predict(X)
    mse = mean_squared_error(y, y_pred)
    
    # Plot results
    plt.scatter(X, y, color='blue', alpha=0.3, label='Data' if degree==1 else None)
    plt.plot(X, y_pred, label=f'Degree {degree} (MSE: {mse:.2f})')
    
plt.title('Polynomial Regression Fit')
plt.xlabel('X')
plt.ylabel('y')
plt.legend()
plt.show()

# Regularized polynomial regression
from sklearn.linear_model import Ridge

degree = 5
model = Pipeline([
    ('poly', PolynomialFeatures(degree=degree)),
    ('ridge', Ridge(alpha=1.0))  # L2 regularization
])
model.fit(X, y)`,
        complexity: "O(d²n + d³) where d=degree, n=samples"
      }
    },
    {
      title: "⚖️ Ridge & Lasso Regression",
      id: "regularized",
      description: "Regularized linear models that prevent overfitting and perform feature selection.",
      keyPoints: [
        "Ridge (L2): Minimizes β₀ + Σ(yᵢ - ŷᵢ)² + λΣβⱼ²",
        "Lasso (L1): Minimizes β₀ + Σ(yᵢ - ŷᵢ)² + λΣ|βⱼ|",
        "Hyperparameter tuning (λ/α)",
        "Feature selection with Lasso"
      ],
      detailedExplanation: [
        "Ridge Regression:",
        "- Shrinks coefficients toward zero",
        "- Handles multicollinearity well",
        "- All features remain in the model",
        "- λ controls regularization strength",
        "",
        "Lasso Regression:",
        "- Can drive coefficients to exactly zero",
        "- Performs automatic feature selection",
        "- Useful for high-dimensional data",
        "- May struggle with correlated features",
        "",
        "Elastic Net:",
        "- Combines L1 and L2 penalties",
        "- Balance between Ridge and Lasso",
        "- Two hyperparameters to tune",
        "",
        "Implementation Guide:",
        "- Standardization is crucial",
        "- Cross-validation for λ selection",
        "- Path algorithms for efficient computation",
        "- Warm starts for hyperparameter search"
      ],
      code: {
        python: `# Regularized Regression Examples
import numpy as np
from sklearn.linear_model import Ridge, Lasso, ElasticNet
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import GridSearchCV
from sklearn.pipeline import make_pipeline

# Generate data with redundant features
np.random.seed(42)
X = np.random.randn(100, 10)  # 10 features
y = 1.5*X[:,0] + 0.8*X[:,1] - 1.2*X[:,2] + np.random.randn(100)*0.5

# Ridge Regression
ridge = make_pipeline(
    StandardScaler(),
    Ridge(alpha=1.0)
)
ridge.fit(X, y)
print("Ridge coefficients:", ridge.named_steps['ridge'].coef_)

# Lasso Regression
lasso = make_pipeline(
    StandardScaler(),
    Lasso(alpha=0.1)
)
lasso.fit(X, y)
print("Lasso coefficients:", lasso.named_steps['lasso'].coef_)

# Elastic Net
elastic = make_pipeline(
    StandardScaler(),
    ElasticNet(alpha=0.1, l1_ratio=0.5)
)
elastic.fit(X, y)
print("Elastic Net coefficients:", elastic.named_steps['elasticnet'].coef_)

# Hyperparameter tuning
param_grid = {
    'ridge__alpha': np.logspace(-4, 4, 20)
}
grid = GridSearchCV(ridge, param_grid, cv=5)
grid.fit(X, y)
print("Best Ridge alpha:", grid.best_params_)

# Coefficient paths
from sklearn.linear_model import lasso_path

alphas, coefs, _ = lasso_path(X, y)
plt.figure(figsize=(10,6))
plt.plot(alphas, coefs.T)
plt.xscale('log')
plt.xlabel('Alpha')
plt.ylabel('Coefficient value')
plt.title('Lasso Path')
plt.show()`,
        complexity: "Ridge: O(n²p + p³), Lasso: O(n²p) to O(n²p²)"
      }
    },
    {
      title: "📊 Evaluation Metrics",
      id: "metrics",
      description: "Quantitative measures to assess regression model performance.",
      keyPoints: [
        "Mean Absolute Error (MAE)",
        "Mean Squared Error (MSE)",
        "R² (coefficient of determination)",
        "Adjusted R², AIC, BIC"
      ],
      detailedExplanation: [
        "Error Metrics:",
        "- MAE: Robust to outliers, interpretable units",
        "- MSE: Emphasizes larger errors, differentiable",
        "- RMSE: Same units as target variable",
        "- MAPE: Percentage error interpretation",
        "",
        "Goodness-of-Fit Metrics:",
        "- R²: Proportion of variance explained",
        "- Adjusted R²: Penalizes extra predictors",
        "- AIC/BIC: Balance fit and complexity",
        "",
        "Diagnostic Checks:",
        "- Residual plots (patterns indicate problems)",
        "- Q-Q plots for normality assessment",
        "- Cook's distance for influential points",
        "- Durbin-Watson for autocorrelation",
        "",
        "Business Metrics:",
        "- Conversion to business KPIs",
        "- Error cost functions",
        "- Decision thresholds",
        "- ROI of model improvements"
      ],
      code: {
        python: `# Regression Evaluation Metrics
import numpy as np
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score,
    mean_absolute_percentage_error
)

# Generate predictions
y_true = np.array([3, -0.5, 2, 7])
y_pred = np.array([2.5, 0.0, 2, 8])

# Calculate metrics
mae = mean_absolute_error(y_true, y_pred)
mse = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_true, y_pred)
mape = mean_absolute_percentage_error(y_true, y_pred)

print(f"MAE: {mae:.3f}")
print(f"MSE: {mse:.3f}")
print(f"RMSE: {rmse:.3f}")
print(f"R²: {r2:.3f}")
print(f"MAPE: {mape:.3f}")

# Adjusted R²
def adjusted_r2(r2, n, p):
    return 1 - (1 - r2) * (n - 1) / (n - p - 1)

n_samples = len(y_true)
n_features = 3  # Number of predictors
adj_r2 = adjusted_r2(r2, n_samples, n_features)
print(f"Adjusted R²: {adj_r2:.3f}")

# Residual analysis
residuals = y_true - y_pred
plt.figure(figsize=(10,4))
plt.scatter(y_pred, residuals)
plt.axhline(y=0, color='r', linestyle='--')
plt.xlabel('Predicted values')
plt.ylabel('Residuals')
plt.title('Residual Plot')
plt.show()

# Q-Q plot for normality
import statsmodels.api as sm
sm.qqplot(residuals, line='45')
plt.title('Q-Q Plot of Residuals')
plt.show()`,
        complexity: "Metrics: O(n) where n=samples"
      }
    }
  ];


  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-teal-50 to-emerald-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-teal-400 to-emerald-400"
            : "bg-gradient-to-r from-teal-600 to-emerald-600"
        } mb-8 sm:mb-12`}
      >
        Regression Techniques
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-teal-900/20" : "bg-teal-100"
        } border-l-4 border-teal-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-teal-500 text-teal-800">
          Supervised Learning → Regression
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Regression models predict continuous outcomes by learning relationships between input features 
          and target variables. These techniques form the foundation of many predictive analytics 
          applications in machine learning.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-emerald-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-teal-300" : "text-teal-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-teal-600 dark:text-teal-400">
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
                      darkMode ? "bg-emerald-900/30" : "bg-emerald-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-emerald-400 text-emerald-600">
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
            darkMode ? "text-teal-300" : "text-teal-800"
          }`}
        >
          Regression Method Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-teal-900" : "bg-teal-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Method</th>
                <th className="p-4 text-left">Best For</th>
                <th className="p-4 text-left">Pros</th>
                <th className="p-4 text-left">Cons</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Linear", "Linear relationships, interpretability", "Simple, fast, interpretable", "Limited to linear patterns"],
                ["Polynomial", "Nonlinear relationships", "Flexible, can fit complex patterns", "Prone to overfitting"],
                ["Ridge", "Multicollinearity, many features", "Stable with correlated features", "All features remain"],
                ["Lasso", "Feature selection, high dimensions", "Automatic feature selection", "Unstable with correlated features"],
                ["Elastic Net", "Balanced approach", "Combines Ridge and Lasso benefits", "Two hyperparameters to tune"]
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
          darkMode ? "bg-teal-900/30" : "bg-teal-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-teal-300" : "text-teal-800"
          }`}
        >
          Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-teal-300" : "text-teal-800"
              }`}
            >
              Model Selection Guide
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Start with simple linear regression as baseline</li>
              <li>Use polynomial terms when nonlinearity is suspected</li>
              <li>Apply regularization with many features (Ridge/Lasso)</li>
              <li>Consider Elastic Net when features are correlated</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-teal-300" : "text-teal-800"
            }`}>
              Implementation Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Preprocessing:</strong> Scale features for regularized models<br/>
              <strong>Evaluation:</strong> Use multiple metrics and residual analysis<br/>
              <strong>Diagnostics:</strong> Check assumptions (linearity, normality)<br/>
              <strong>Deployment:</strong> Monitor for concept drift over time
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-teal-300" : "text-teal-800"
            }`}>
              Advanced Applications
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Bayesian Regression:</strong> Incorporating prior knowledge<br/>
              <strong>Quantile Regression:</strong> Modeling different percentiles<br/>
              <strong>Generalized Linear Models:</strong> Non-normal distributions<br/>
              <strong>Time Series Regression:</strong> Handling temporal dependencies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regression;