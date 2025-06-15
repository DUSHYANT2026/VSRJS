import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-violet-100 dark:border-violet-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 dark:from-purple-600 dark:to-violet-600 dark:hover:from-purple-700 dark:hover:to-violet-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function Clustering() {
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
      title: "📊 Logistic Regression",
      id: "logistic",
      description: "A fundamental linear classification algorithm that models probabilities using a sigmoid function.",
      keyPoints: [
        "Binary classification using sigmoid activation",
        "Linear decision boundary",
        "Outputs class probabilities",
        "Regularized variants (L1/L2)"
      ],
      detailedExplanation: [
        "How it works:",
        "- Models log-odds as linear combination of features",
        "- Applies sigmoid to get probabilities between 0 and 1",
        "- Uses maximum likelihood estimation for training",
        "",
        "Key advantages:",
        "- Computationally efficient",
        "- Provides probabilistic interpretation",
        "- Works well with linearly separable data",
        "- Feature importance through coefficients",
        "",
        "Limitations:",
        "- Assumes linear relationship between features and log-odds",
        "- Can underfit complex patterns",
        "- Sensitive to correlated features",
        "",
        "Hyperparameters:",
        "- Regularization strength (C)",
        "- Penalty type (L1/L2/elasticnet)",
        "- Solver algorithm (liblinear, saga, etc.)"
      ],
      code: {
        python: `# Logistic Regression Example
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Load binary classification data
X, y = load_iris(return_X_y=True)
X = X[y != 2]  # Use only two classes
y = y[y != 2]

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train model
model = LogisticRegression(penalty='l2', C=1.0, solver='liblinear')
model.fit(X_train, y_train)

# Evaluate
train_acc = model.score(X_train, y_train)
test_acc = model.score(X_test, y_test)
print(f"Training accuracy: {train_acc:.2f}")
print(f"Test accuracy: {test_acc:.2f}")

# Get probabilities
probs = model.predict_proba(X_test)
print("Class probabilities for first sample:", probs[0])

# Feature importance
print("Coefficients:", model.coef_)
print("Intercept:", model.intercept_)`,
        complexity: "Training: O(n_samples × n_features), Prediction: O(n_features)"
      }
    },
    {
      title: "🌳 Decision Trees",
      id: "trees",
      description: "Non-parametric models that learn hierarchical decision rules from data.",
      keyPoints: [
        "Recursive binary splitting of feature space",
        "Split criteria: Gini impurity or entropy",
        "Prone to overfitting without regularization",
        "Can handle non-linear relationships"
      ],
      detailedExplanation: [
        "Learning process:",
        "- Start with all data at root node",
        "- Find best feature and threshold to split on",
        "- Recursively split until stopping criterion met",
        "",
        "Split criteria:",
        "- Gini impurity: Probability of misclassification",
        "- Information gain: Reduction in entropy",
        "- Variance reduction (for regression)",
        "",
        "Advantages:",
        "- No need for feature scaling",
        "- Handles mixed data types",
        "- Interpretable decision rules",
        "- Feature importance scores",
        "",
        "Regularization:",
        "- Maximum depth",
        "- Minimum samples per leaf",
        "- Minimum impurity decrease",
        "- Cost complexity pruning"
      ],
      code: {
        python: `# Decision Tree Classifier
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

# Create and train model
tree = DecisionTreeClassifier(
    max_depth=3,
    min_samples_leaf=5,
    criterion='gini',
    random_state=42
)
tree.fit(X_train, y_train)

# Visualize the tree
plt.figure(figsize=(12,8))
plot_tree(tree, feature_names=['sepal_length', 'sepal_width', 'petal_length', 'petal_width'], 
          class_names=['setosa', 'versicolor'], filled=True)
plt.show()

# Feature importance
importances = tree.feature_importances_
features = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width']
for feature, importance in zip(features, importances):
    print(f"{feature}: {importance:.3f}")

# Evaluate
print(f"Training accuracy: {tree.score(X_train, y_train):.2f}")
print(f"Test accuracy: {tree.score(X_test, y_test):.2f}")`,
        complexity: "Training: O(n_samples × n_features × depth), Prediction: O(depth)"
      }
    },
    {
      title: "🌲 Random Forest",
      id: "forest",
      description: "Ensemble method that combines multiple decision trees via bagging.",
      keyPoints: [
        "Builds many trees on random subsets of data/features",
        "Averages predictions for better generalization",
        "Reduces variance compared to single trees",
        "Built-in feature importance"
      ],
      detailedExplanation: [
        "How it works:",
        "- Bootstrap sampling creates many training subsets",
        "- Each tree trained on random feature subset",
        "- Final prediction by majority vote (classification)",
        "",
        "Key benefits:",
        "- Handles high dimensional spaces well",
        "- Robust to outliers and noise",
        "- Parallelizable training",
        "- Doesn't require feature scaling",
        "",
        "Tuning parameters:",
        "- Number of trees",
        "- Maximum depth",
        "- Minimum samples per leaf",
        "- Maximum features per split",
        "",
        "Extensions:",
        "- Extremely Randomized Trees (ExtraTrees)",
        "- Feature importance scores",
        "- Out-of-bag error estimation",
        "- Partial dependence plots"
      ],
      code: {
        python: `# Random Forest Classifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Create and train model
forest = RandomForestClassifier(
    n_estimators=100,
    max_depth=5,
    max_features='sqrt',
    random_state=42,
    n_jobs=-1  # Use all cores
)
forest.fit(X_train, y_train)

# Evaluate
print("Training accuracy:", forest.score(X_train, y_train))
print("Test accuracy:", forest.score(X_test, y_test))
print(classification_report(y_test, forest.predict(X_test)))

# Feature importance
importances = forest.feature_importances_
std = np.std([tree.feature_importances_ for tree in forest.estimators_], axis=0)

# Plot feature importance
plt.figure(figsize=(10,6))
plt.barh(features, importances, xerr=std, align='center')
plt.xlabel("Feature Importance")
plt.title("Random Forest Feature Importance")
plt.show()`,
        complexity: "Training: O(n_trees × n_samples × n_features × depth), Prediction: O(n_trees × depth)"
      }
    },
    {
      title: "⚡ Support Vector Machines (SVM)",
      id: "svm",
      description: "Powerful classifiers that find optimal separating hyperplanes in high-dimensional spaces.",
      keyPoints: [
        "Finds maximum-margin decision boundary",
        "Kernel trick for non-linear classification",
        "Effective in high-dimensional spaces",
        "Memory intensive for large datasets"
      ],
      detailedExplanation: [
        "Key concepts:",
        "- Support vectors: Critical training instances",
        "- Margin: Distance between classes",
        "- Kernel functions: Implicit feature transformations",
        "",
        "Kernel types:",
        "- Linear: No transformation",
        "- Polynomial: Captures polynomial relationships",
        "- RBF: Handles complex non-linear boundaries",
        "- Sigmoid: Neural network-like transformation",
        "",
        "Advantages:",
        "- Effective in high dimensions",
        "- Versatile with different kernels",
        "- Robust to overfitting in high-D spaces",
        "",
        "Practical considerations:",
        "- Scaling features is critical",
        "- Regularization parameter C controls margin",
        "- Kernel choice affects performance",
        "- Can be memory intensive"
      ],
      code: {
        python: `# SVM Classifier
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline

# Create pipeline with scaling and SVM
svm = make_pipeline(
    StandardScaler(),
    SVC(
        kernel='rbf', 
        C=1.0,
        gamma='scale',
        probability=True  # Enable predict_proba
    )
)

# Train model
svm.fit(X_train, y_train)

# Evaluate
print(f"Training accuracy: {svm.score(X_train, y_train):.2f}")
print(f"Test accuracy: {svm.score(X_test, y_test):.2f}")

# Get support vectors
if hasattr(svm.named_steps['svc'], 'support_vectors_'):
    print(f"Number of support vectors: {len(svm.named_steps['svc'].support_vectors_)}")

# Plot decision boundary (for 2D data)
def plot_decision_boundary(clf, X, y):
    # Create grid
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.02),
                         np.arange(y_min, y_max, 0.02))
    
    # Predict on grid
    Z = clf.predict(np.c_[xx.ravel(), yy.ravel()])
    Z = Z.reshape(xx.shape)
    
    # Plot
    plt.contourf(xx, yy, Z, alpha=0.4)
    plt.scatter(X[:, 0], X[:, 1], c=y, s=20, edgecolor='k')
    plt.title("SVM Decision Boundary")
    plt.show()

# For 2D data only:
# plot_decision_boundary(svm, X_train[:, :2], y_train)`,
        complexity: "Training: O(n_samples² to n_samples³), Prediction: O(n_support_vectors × n_features)"
      }
    },
    {
      title: "🧠 Neural Networks for Classification",
      id: "nn",
      description: "Flexible function approximators that can learn complex decision boundaries.",
      keyPoints: [
        "Multi-layer perceptrons (MLPs) for classification",
        "Backpropagation for training",
        "Non-linear activation functions",
        "Requires careful hyperparameter tuning"
      ],
      detailedExplanation: [
        "Architecture components:",
        "- Input layer (feature dimension)",
        "- Hidden layers with non-linear activations",
        "- Output layer with softmax (multi-class) or sigmoid (binary)",
        "",
        "Key hyperparameters:",
        "- Number and size of hidden layers",
        "- Activation functions (ReLU, tanh, etc.)",
        "- Learning rate and optimizer",
        "- Regularization (dropout, weight decay)",
        "",
        "Training process:",
        "- Forward pass computes predictions",
        "- Loss function measures error",
        "- Backpropagation computes gradients",
        "- Optimization updates weights",
        "",
        "Practical considerations:",
        "- Feature scaling is essential",
        "- Batch normalization helps training",
        "- Early stopping prevents overfitting",
        "- Architecture search is important"
      ],
      code: {
        python: `# Neural Network Classifier
from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline

# Create pipeline with scaling and MLP
mlp = make_pipeline(
    StandardScaler(),
    MLPClassifier(
        hidden_layer_sizes=(64, 32),
        activation='relu',
        solver='adam',
        alpha=0.0001,  # L2 regularization
        batch_size=32,
        learning_rate='adaptive',
        max_iter=200,
        early_stopping=True,
        random_state=42
    )
)

# Train model
mlp.fit(X_train, y_train)

# Evaluate
print(f"Training accuracy: {mlp.score(X_train, y_train):.2f}")
print(f"Test accuracy: {mlp.score(X_test, y_test):.2f}")

# Loss curve
plt.plot(mlp.named_steps['mlpclassifier'].loss_curve_)
plt.title("Loss Curve During Training")
plt.xlabel("Iterations")
plt.ylabel("Loss")
plt.show()

# Using Keras/TensorFlow
"""
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import Adam

model = Sequential([
    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    Dropout(0.2),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer=Adam(0.001),
              loss='binary_crossentropy',
              metrics=['accuracy'])

history = model.fit(X_train, y_train, 
                    epochs=50, 
                    batch_size=32,
                    validation_split=0.2)
"""`,
        complexity: "Training: O(n_samples × n_features × width × depth × epochs), Prediction: O(width × depth × n_features)"
      }
    }
  ];
  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-purple-50 to-violet-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-purple-400 to-violet-400"
            : "bg-gradient-to-r from-purple-600 to-violet-600"
        } mb-8 sm:mb-12`}
      >
        Clustering Algorithms
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-purple-900/20" : "bg-purple-100"
        } border-l-4 border-purple-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-purple-500 text-purple-800">
          Unsupervised Learning → Clustering
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Clustering groups similar data points together without predefined labels.
          These algorithms discover inherent patterns and structures in data,
          enabling applications like customer segmentation, anomaly detection,
          and data exploration.
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
                    darkMode ? "text-purple-300" : "text-purple-800"
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
                      darkMode ? "bg-violet-900/30" : "bg-violet-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-violet-400 text-violet-600">
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
            darkMode ? "text-purple-300" : "text-purple-800"
          }`}
        >
          Clustering Algorithm Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-purple-900" : "bg-purple-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Algorithm</th>
                <th className="p-4 text-left">Cluster Shape</th>
                <th className="p-4 text-left">Scalability</th>
                <th className="p-4 text-left">Noise Handling</th>
                <th className="p-4 text-left">Best Use Case</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["K-Means", "Spherical", "High (O(n))", "Poor", "Large datasets with clear separation"],
                ["Hierarchical", "Arbitrary (depends on linkage)", "Low (O(n³))", "Moderate", "Small datasets, need hierarchy"],
                ["DBSCAN", "Arbitrary", "Moderate (O(n log n))", "Excellent", "Noisy data, arbitrary shapes"]
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
          Practical Considerations
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
              Algorithm Selection Guide
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li><strong>K-Means:</strong> When you know K and need speed</li>
              <li><strong>Hierarchical:</strong> When you need cluster relationships</li>
              <li><strong>DBSCAN:</strong> When dealing with noise and arbitrary shapes</li>
              <li><strong>GMM:</strong> When clusters may overlap (not covered here)</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-purple-300" : "text-purple-800"
            }`}>
              Preprocessing Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Normalization:</strong> Essential for distance-based algorithms<br/>
              <strong>Dimensionality Reduction:</strong> Helps with high-dimensional data<br/>
              <strong>Outlier Handling:</strong> Critical for centroid-based methods<br/>
              <strong>Feature Selection:</strong> Improves cluster interpretability
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-purple-300" : "text-purple-800"
            }`}>
              Evaluation Methods
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Silhouette Score:</strong> Measures cluster cohesion/separation<br/>
              <strong>Davies-Bouldin Index:</strong> Lower values indicate better clustering<br/>
              <strong>Calinski-Harabasz Index:</strong> Ratio of between/within cluster dispersion<br/>
              <strong>Visual Inspection:</strong> Always validate with domain knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clustering;