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

function EnsembleLearning() {
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
      title: "👜 Bagging (Bootstrap Aggregating)",
      id: "bagging",
      description: "Ensemble method that reduces variance by averaging multiple models trained on different data subsets.",
      keyPoints: [
        "Creates multiple datasets via bootstrap sampling",
        "Trains independent models in parallel",
        "Averages predictions (regression) or votes (classification)",
        "Most effective with high-variance models (e.g., decision trees)"
      ],
      detailedExplanation: [
        "How Bagging Works:",
        "1. Generate multiple bootstrap samples from training data",
        "2. Train a base model on each sample",
        "3. Combine predictions through averaging or majority voting",
        "",
        "Key Characteristics:",
        "- Reduces variance without increasing bias",
        "- Models can be trained in parallel",
        "- Works well with unstable learners (models that change significantly with small data changes)",
        "- Less prone to overfitting than single models",
        "",
        "Mathematical Foundation:",
        "- Bootstrap sampling approximates multiple training sets",
        "- Variance reduction proportional to 1/n (n = number of models)",
        "- Out-of-bag (OOB) samples can be used for validation",
        "",
        "Common Implementations:",
        "- Random Forest (bagged decision trees)",
        "- Bagged neural networks",
        "- Bagged SVMs for unstable configurations"
      ],
      code: {
        python: `# Bagging Implementation Example
from sklearn.ensemble import BaggingClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split

# Generate synthetic data
X, y = make_classification(n_samples=1000, n_features=20, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create base estimator
base_estimator = DecisionTreeClassifier(max_depth=4)

# Create bagging ensemble
bagging = BaggingClassifier(
    estimator=base_estimator,
    n_estimators=100,
    max_samples=0.8,
    max_features=0.8,
    bootstrap=True,
    bootstrap_features=False,
    oob_score=True,
    random_state=42
)

# Train and evaluate
bagging.fit(X_train, y_train)
print(f"Training Accuracy: {bagging.score(X_train, y_train):.4f}")
print(f"Test Accuracy: {bagging.score(X_test, y_test):.4f}")
print(f"OOB Score: {bagging.oob_score_:.4f}")

# Compare to single tree
single_tree = DecisionTreeClassifier(max_depth=4).fit(X_train, y_train)
print(f"Single Tree Test Accuracy: {single_tree.score(X_test, y_test):.4f}")`,
        complexity: "Training: O(t*(n log n + p)) where t=number of trees, n=samples, p=features"
      }
    },
    {
      title: "🚀 Boosting",
      id: "boosting",
      description: "Sequential ensemble method that converts weak learners into strong learners by focusing on errors.",
      keyPoints: [
        "Models trained sequentially, each correcting previous errors",
        "Weights misclassified instances higher in next iteration",
        "Includes AdaBoost, Gradient Boosting, XGBoost, LightGBM, CatBoost",
        "Generally more accurate than bagging but can overfit"
      ],
      detailedExplanation: [
        "Boosting Mechanics:",
        "1. Train initial model on original data",
        "2. Calculate errors/residuals",
        "3. Train next model to predict errors",
        "4. Combine models with appropriate weights",
        "5. Repeat until stopping criteria met",
        "",
        "Key Algorithms:",
        "- AdaBoost (Adaptive Boosting): Reweights misclassified samples",
        "- Gradient Boosting: Fits new models to residual errors",
        "- XGBoost: Optimized gradient boosting with regularization",
        "- LightGBM: Histogram-based gradient boosting",
        "- CatBoost: Handles categorical features natively",
        "",
        "Mathematical Insights:",
        "- Minimizes loss function via gradient descent in function space",
        "- Learning rate controls contribution of each model",
        "- Early stopping prevents overfitting",
        "- Regularization terms in modern implementations",
        "",
        "Practical Considerations:",
        "- More sensitive to noisy data than bagging",
        "- Requires careful tuning of learning rate and tree depth",
        "- Generally achieves higher accuracy than bagging",
        "- Sequential nature limits parallelization"
      ],
      code: {
        python: `# Boosting Implementation Examples
from sklearn.ensemble import AdaBoostClassifier, GradientBoostingClassifier
from xgboost import XGBClassifier
from lightgbm import LGBMClassifier
from catboost import CatBoostClassifier
from sklearn.metrics import accuracy_score

# AdaBoost
adaboost = AdaBoostClassifier(
    n_estimators=200,
    learning_rate=0.1,
    random_state=42
)
adaboost.fit(X_train, y_train)
print(f"AdaBoost Accuracy: {accuracy_score(y_test, adaboost.predict(X_test)):.4f}")

# Gradient Boosting
gbm = GradientBoostingClassifier(
    n_estimators=200,
    learning_rate=0.1,
    max_depth=3,
    random_state=42
)
gbm.fit(X_train, y_train)
print(f"GBM Accuracy: {accuracy_score(y_test, gbm.predict(X_test)):.4f}")

# XGBoost
xgb = XGBClassifier(
    n_estimators=200,
    learning_rate=0.1,
    max_depth=3,
    reg_lambda=1,  # L2 regularization
    reg_alpha=0,   # L1 regularization
    random_state=42
)
xgb.fit(X_train, y_train)
print(f"XGBoost Accuracy: {accuracy_score(y_test, xgb.predict(X_test)):.4f}")

# LightGBM
lgbm = LGBMClassifier(
    n_estimators=200,
    learning_rate=0.1,
    max_depth=3,
    num_leaves=15,
    random_state=42
)
lgbm.fit(X_train, y_train)
print(f"LightGBM Accuracy: {accuracy_score(y_test, lgbm.predict(X_test)):.4f}")

# CatBoost
catboost = CatBoostClassifier(
    iterations=200,
    learning_rate=0.1,
    depth=3,
    cat_features=[],  # Specify categorical feature indices
    verbose=0,
    random_state=42
)
catboost.fit(X_train, y_train)
print(f"CatBoost Accuracy: {accuracy_score(y_test, catboost.predict(X_test)):.4f}")`,
        complexity: "Training: O(t*n*p) where t=iterations, n=samples, p=features"
      }
    },
    {
      title: "🧱 Stacking",
      id: "stacking",
      description: "Advanced ensemble method that combines multiple models via a meta-learner.",
      keyPoints: [
        "Trains diverse base models (level-0)",
        "Uses base model predictions as features for meta-model (level-1)",
        "Can combine different types of models (e.g., SVM + NN + RF)",
        "Requires careful validation to avoid data leakage"
      ],
      detailedExplanation: [
        "Stacking Architecture:",
        "1. Train diverse base models on training data",
        "2. Generate cross-validated predictions (meta-features)",
        "3. Train meta-model on these predictions",
        "4. Final prediction combines base models through meta-model",
        "",
        "Implementation Variants:",
        "- Single-level stacking: One meta-model",
        "- Multi-level stacking: Multiple stacking layers",
        "- Blending: Similar but uses holdout set instead of CV",
        "",
        "Key Considerations:",
        "- Base models should be diverse (different algorithms)",
        "- Meta-model is typically simple (linear model)",
        "- Cross-validation essential to prevent overfitting",
        "- Computational cost higher than bagging/boosting",
        "",
        "Practical Applications:",
        "- Winning solution in many Kaggle competitions",
        "- Combining strengths of different model types",
        "- When no single model clearly outperforms others",
        "- For extracting maximum performance from available data"
      ],
      code: {
        python: `# Stacking Implementation Example
from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score

# Define base models
estimators = [
    ('svm', SVC(probability=True, kernel='rbf', random_state=42)),
    ('knn', KNeighborsClassifier(n_neighbors=5)),
    ('dt', DecisionTreeClassifier(max_depth=3, random_state=42))
]

# Define meta-model
meta_model = LogisticRegression()

# Create stacking classifier
stacking = StackingClassifier(
    estimators=estimators,
    final_estimator=meta_model,
    stack_method='auto',
    cv=5,
    passthrough=False,
    verbose=0
)

# Train and evaluate
stacking.fit(X_train, y_train)
print(f"Stacking Accuracy: {stacking.score(X_test, y_test):.4f}")

# Compare to individual models
for name, model in estimators:
    model.fit(X_train, y_train)
    print(f"{name} Accuracy: {model.score(X_test, y_test):.4f}")

# Advanced stacking with feature passthrough
stacking_advanced = StackingClassifier(
    estimators=estimators,
    final_estimator=meta_model,
    passthrough=True,  # Include original features
    cv=5
)
stacking_advanced.fit(X_train, y_train)
print(f"Advanced Stacking Accuracy: {stacking_advanced.score(X_test, y_test):.4f}")`,
        complexity: "Training: O(k*(m*n + p)) where k=CV folds, m=base models, n=samples, p=features"
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
        Ensemble Learning Methods
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-pink-900/20" : "bg-pink-100"
        } border-l-4 border-pink-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-pink-500 text-pink-800">
          Advanced Machine Learning → Ensemble Learning
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Ensemble methods combine multiple machine learning models to achieve better performance
          than any individual model. These techniques are among the most powerful approaches
          in modern machine learning, often winning competitions and being deployed in production systems.
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
                    darkMode ? "text-pink-300" : "text-pink-800"
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
                      darkMode ? "bg-rose-900/30" : "bg-rose-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-rose-400 text-rose-600">
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
            darkMode ? "text-pink-300" : "text-pink-800"
          }`}
        >
          Ensemble Method Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-pink-900" : "bg-pink-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Method</th>
                <th className="p-4 text-left">Parallelizable</th>
                <th className="p-4 text-left">Reduces</th>
                <th className="p-4 text-left">Best For</th>
                <th className="p-4 text-left">Key Libraries</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Bagging", "Yes", "Variance", "High-variance models (deep trees)", "scikit-learn"],
                ["Boosting", "No", "Bias", "Improving weak learners", "XGBoost, LightGBM, CatBoost"],
                ["Stacking", "Partially", "Both", "Combining diverse models", "scikit-learn, mlxtend"]
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
            darkMode ? "text-pink-300" : "text-pink-800"
          }`}
        >
          Ensemble Learning Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-pink-300" : "text-pink-800"
              }`}
            >
              When to Use Each Method
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li><strong>Bagging:</strong> When your base model overfits (high variance)</li>
              <li><strong>Boosting:</strong> When you need to improve model accuracy (reduce bias)</li>
              <li><strong>Stacking:</strong> When you have several good but different models</li>
              <li><strong>Voting:</strong> For quick improvements with diverse models</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-pink-300" : "text-pink-800"
            }`}>
              Practical Implementation Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>For Bagging:</strong> Use deep trees as base learners<br/>
              <strong>For Boosting:</strong> Start with shallow trees and tune learning rate<br/>
              <strong>For Stacking:</strong> Ensure base model diversity<br/>
              <strong>For All:</strong> Use early stopping and cross-validation
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-pink-300" : "text-pink-800"
            }`}>
              Advanced Applications
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Time Series:</strong> Sequential ensemble methods<br/>
              <strong>Anomaly Detection:</strong> Isolation Forest ensembles<br/>
              <strong>Feature Selection:</strong> Using feature importance across ensembles<br/>
              <strong>Model Interpretation:</strong> SHAP values for ensemble models
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnsembleLearning;