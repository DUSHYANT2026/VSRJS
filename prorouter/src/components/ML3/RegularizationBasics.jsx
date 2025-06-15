import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-amber-100 dark:border-amber-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 dark:from-amber-600 dark:to-amber-800 dark:hover:from-amber-700 dark:hover:to-amber-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function RegularizationBasics() {
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
      title: "🛡️ L1 Regularization (Lasso)",
      id: "l1",
      description: "Adds absolute value of magnitude of coefficients as penalty term to the loss function.",
      keyPoints: [
        "Penalty term: λ∑|w| where w are model weights",
        "Produces sparse models (some weights become exactly zero)",
        "Useful for feature selection",
        "Robust to outliers"
      ],
      detailedExplanation: [
        "Mathematical Formulation:",
        "- Loss = Original Loss + λ∑|w|",
        "- λ controls regularization strength",
        "- Non-differentiable at zero (requires special handling)",
        "",
        "When to Use:",
        "- When you suspect many features are irrelevant",
        "- For models where interpretability is important",
        "- When working with high-dimensional data",
        "",
        "Implementation Considerations:",
        "- Requires subgradient methods or proximal operators",
        "- Coordinate descent works particularly well",
        "- Feature scaling is crucial",
        "- λ should be tuned via cross-validation"
      ],
      code: {
        python: `# L1 Regularization in Python
from sklearn.linear_model import Lasso
import numpy as np

# Generate synthetic data
np.random.seed(42)
X = np.random.randn(100, 10)  # 100 samples, 10 features
y = 2*X[:,0] + 0.5*X[:,1] - X[:,2] + np.random.randn(100)  # Only 3 relevant features

# Lasso regression with different alpha (λ) values
lasso = Lasso(alpha=0.1)  # alpha is λ in sklearn
lasso.fit(X, y)

# Examine coefficients
print("Coefficients:", lasso.coef_)

# Cross-validated Lasso
from sklearn.linear_model import LassoCV
lasso_cv = LassoCV(cv=5).fit(X, y)
print("Optimal alpha:", lasso_cv.alpha_)
print("CV-selected coefficients:", lasso_cv.coef_)

# Implementing L1 manually with PyTorch
import torch
import torch.nn as nn

class L1RegularizedLinear(nn.Module):
    def __init__(self, input_dim, output_dim, l1_lambda=0.01):
        super().__init__()
        self.linear = nn.Linear(input_dim, output_dim)
        self.l1_lambda = l1_lambda
        
    def forward(self, x):
        return self.linear(x)
        
    def l1_loss(self):
        return self.l1_lambda * torch.sum(torch.abs(self.linear.weight))

model = L1RegularizedLinear(10, 1)
criterion = nn.MSELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)

# Training loop would include:
# loss = criterion(outputs, y) + model.l1_loss()`,
        complexity: "L1 adds O(d) computation where d is number of features"
      }
    },
    {
      title: "🛡️ L2 Regularization (Ridge)",
      id: "l2",
      description: "Adds squared magnitude of coefficients as penalty term to the loss function.",
      keyPoints: [
        "Penalty term: λ∑w² where w are model weights",
        "Shrinks coefficients but doesn't set them to zero",
        "Works well when features are correlated",
        "Has closed-form solution"
      ],
      detailedExplanation: [
        "Mathematical Formulation:",
        "- Loss = Original Loss + λ∑w²",
        "- λ controls regularization strength",
        "- Differentiable everywhere",
        "",
        "When to Use:",
        "- When you want to keep all features in the model",
        "- For dealing with multicollinearity",
        "- When features are all potentially relevant",
        "",
        "Implementation Considerations:",
        "- Has analytical solution: w = (XᵀX + λI)⁻¹Xᵀy",
        "- Numerically more stable than ordinary least squares",
        "- Works well with gradient descent",
        "- λ should be tuned via cross-validation",
        "",
        "Geometric Interpretation:",
        "- Constrains weights to lie within a hypersphere",
        "- Prevents any single weight from growing too large",
        "- Results in more distributed feature importance"
      ],
      code: {
        python: `# L2 Regularization in Python
from sklearn.linear_model import Ridge
import numpy as np

# Generate synthetic data
np.random.seed(42)
X = np.random.randn(100, 10)
y = 2*X[:,0] + 0.5*X[:,1] - X[:,2] + np.random.randn(100)

# Ridge regression
ridge = Ridge(alpha=1.0)  # alpha is λ in sklearn
ridge.fit(X, y)

# Examine coefficients
print("Coefficients:", ridge.coef_)

# Cross-validated Ridge
from sklearn.linear_model import RidgeCV
ridge_cv = RidgeCV(alphas=[0.1, 1.0, 10.0], cv=5).fit(X, y)
print("Optimal alpha:", ridge_cv.alpha_)

# Implementing L2 manually with TensorFlow
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(1, input_shape=(10,),
    tf.keras.regularizers.l2(0.01)  # L2 regularization
])

model.compile(optimizer='sgd', loss='mse')
history = model.fit(X, y, epochs=100)

# Alternatively, explicit L2 loss
def l2_loss(model, lambda_=0.01):
    return lambda_ * tf.reduce_sum([tf.reduce_sum(w**2) for w in model.trainable_variables])

# Training loop would include:
# loss = mse_loss(y_true, y_pred) + l2_loss(model)`,
        complexity: "L2 adds O(d) computation where d is number of features"
      }
    },
    {
      title: "⚖️ Elastic Net",
      id: "elastic",
      description: "Combines L1 and L2 regularization to get benefits of both approaches.",
      keyPoints: [
        "Penalty term: λ₁∑|w| + λ₂∑w²",
        "Good compromise between L1 and L2",
        "Useful when there are multiple correlated features",
        "Can select groups of correlated features"
      ],
      detailedExplanation: [
        "Mathematical Formulation:",
        "- Loss = Original Loss + λ₁∑|w| + λ₂∑w²",
        "- λ₁ controls L1 strength, λ₂ controls L2 strength",
        "- Convex combination when λ₁ + λ₂ = 1",
        "",
        "When to Use:",
        "- When you have many correlated features",
        "- When you want some feature selection but not complete sparsity",
        "- For datasets where both L1 and L2 provide partial benefits",
        "",
        "Implementation Considerations:",
        "- Requires tuning two hyperparameters (can use ratio)",
        "- More computationally intensive than pure L1 or L2",
        "- sklearn uses l1_ratio = λ₁/(λ₁ + λ₂)",
        "- Works well with coordinate descent",
        "",
        "Practical Tips:",
        "- Start with l1_ratio around 0.5",
        "- Scale features before regularization",
        "- Use warm starts for hyperparameter tuning",
        "- Can help with very high-dimensional data"
      ],
      code: {
        python: `# Elastic Net in Python
from sklearn.linear_model import ElasticNet
import numpy as np

# Generate synthetic data
np.random.seed(42)
X = np.random.randn(100, 10)
y = 2*X[:,0] + 0.5*X[:,1] - X[:,2] + np.random.randn(100)

# Elastic Net regression
elastic = ElasticNet(alpha=0.1, l1_ratio=0.5)  # alpha=λ₁+λ₂, l1_ratio=λ₁/(λ₁+λ₂)
elastic.fit(X, y)

# Examine coefficients
print("Coefficients:", elastic.coef_)

# Cross-validated Elastic Net
from sklearn.linear_model import ElasticNetCV
elastic_cv = ElasticNetCV(l1_ratio=[.1, .5, .9], cv=5).fit(X, y)
print("Optimal l1_ratio:", elastic_cv.l1_ratio_)
print("Optimal alpha:", elastic_cv.alpha_)

# Implementing Elastic Net manually
def elastic_net_loss(y_true, y_pred, model, l1_ratio=0.5, alpha=0.1):
    mse_loss = tf.reduce_mean(tf.square(y_true - y_pred))
    l1_loss = tf.reduce_sum([tf.reduce_sum(tf.abs(w)) for w in model.trainable_variables])
    l2_loss = tf.reduce_sum([tf.reduce_sum(tf.square(w)) for w in model.trainable_variables])
    return mse_loss + alpha * (l1_ratio * l1_loss + (1 - l1_ratio) * l2_loss)

# Usage in training:
# loss = elastic_net_loss(y_true, y_pred, model)`,
        complexity: "Elastic Net adds O(d) computation like L1/L2"
      }
    },
    {
      title: "🎯 Dropout",
      id: "dropout",
      description: "Randomly drops units from the neural network during training to prevent co-adaptation.",
      keyPoints: [
        "Randomly sets activations to zero during training",
        "Approximate way of training many thinned networks",
        "Works like an ensemble method",
        "Scale activations by 1/(1-p) at test time"
      ],
      detailedExplanation: [
        "How Dropout Works:",
        "- Each unit is dropped with probability p during training",
        "- Typically p=0.5 for hidden layers, p=0.2 for input layers",
        "- At test time, weights are scaled by 1-p",
        "- Can be viewed as model averaging",
        "",
        "When to Use:",
        "- For large neural networks with many parameters",
        "- When you observe overfitting in training",
        "- As a replacement for L2 regularization in deep learning",
        "- Particularly effective in computer vision",
        "",
        "Implementation Considerations:",
        "- Usually implemented as a layer in deep learning frameworks",
        "- Can be combined with other regularization techniques",
        "- Different dropout rates per layer often work best",
        "- Batch normalization changes dropout dynamics",
        "",
        "Advanced Variants:",
        "- Concrete Dropout: learns dropout rates automatically",
        "-Spatial Dropout: for convolutional networks",
        "- Weight Dropout: drops weights instead of activations",
        "- Alpha Dropout: for self-normalizing networks"
      ],
      code: {
        python: `# Dropout in Python
import tensorflow as tf
from tensorflow.keras.layers import Dropout
import numpy as np

# Generate synthetic data
np.random.seed(42)
X = np.random.randn(1000, 20)
y = (X[:,0] > 0).astype(int)  # Binary classification

# Model with Dropout
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(20,)),
    Dropout(0.5),  # 50% dropout
    tf.keras.layers.Dense(64, activation='relu'),
    Dropout(0.5),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

history = model.fit(X, y, epochs=10, validation_split=0.2)

# Implementing Dropout manually in PyTorch
import torch
import torch.nn as nn
import torch.nn.functional as F

class Net(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(20, 64)
        self.fc2 = nn.Linear(64, 64)
        self.fc3 = nn.Linear(64, 1)
        self.dropout = nn.Dropout(0.5)
        
    def forward(self, x, training=False):
        x = F.relu(self.fc1(x))
        if training:
            x = self.dropout(x)
        x = F.relu(self.fc2(x))
        if training:
            x = self.dropout(x)
        return torch.sigmoid(self.fc3(x))

# During training:
# outputs = model(inputs, training=True)
# During evaluation:
# outputs = model(inputs, training=False)`,
        complexity: "Dropout adds minimal overhead during training (just masking)"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-amber-50 to-amber-100"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-amber-400 to-amber-600"
            : "bg-gradient-to-r from-amber-600 to-amber-800"
        } mb-8 sm:mb-12`}
      >
        Regularization Techniques
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-amber-900/20" : "bg-amber-100"
        } border-l-4 border-amber-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-amber-500 text-amber-800">
          Model Evaluation and Optimization → Regularization Techniques
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Regularization methods prevent overfitting by adding constraints or penalties to model parameters,
          leading to better generalization on unseen data. These techniques are essential for building robust
          machine learning models.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-amber-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-amber-300" : "text-amber-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-amber-600 dark:text-amber-400">
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
                      darkMode ? "bg-amber-900/30" : "bg-amber-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-amber-400 text-amber-600">
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
            darkMode ? "text-amber-300" : "text-amber-800"
          }`}
        >
          Regularization Techniques Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-amber-900" : "bg-amber-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Technique</th>
                <th className="p-4 text-left">Best For</th>
                <th className="p-4 text-left">Pros</th>
                <th className="p-4 text-left">Cons</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["L1 (Lasso)", "Feature selection, sparse models", "Automatic feature selection, robust to outliers", "Can be unstable with correlated features"],
                ["L2 (Ridge)", "Correlated features, small datasets", "Stable solutions, works well with gradient descent", "Keeps all features (no sparsity)"],
                ["Elastic Net", "High-dimensional correlated data", "Combines L1/L2 benefits, selects groups of features", "Two parameters to tune"],
                ["Dropout", "Large neural networks", "Effective regularization, works like ensemble", "Increases training time"]
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
          darkMode ? "bg-amber-900/30" : "bg-amber-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-amber-300" : "text-amber-800"
          }`}
        >
          Regularization Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-amber-300" : "text-amber-800"
              }`}
            >
              Choosing the Right Technique
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Use L1 when you need feature selection or interpretability</li>
              <li>Prefer L2 for small datasets or correlated features</li>
              <li>Elastic Net offers a good compromise between L1 and L2</li>
              <li>Dropout is particularly effective for large neural networks</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-amber-300" : "text-amber-800"
            }`}>
              Implementation Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Feature Scaling:</strong> Always standardize features before L1/L2 regularization<br/>
              <strong>Hyperparameter Tuning:</strong> Use cross-validation to find optimal λ values<br/>
              <strong>Early Stopping:</strong> Can be viewed as implicit regularization<br/>
              <strong>Combination:</strong> Often beneficial to combine multiple techniques
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-amber-300" : "text-amber-800"
            }`}>
              Advanced Considerations
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Adaptive Regularization:</strong> Layer-wise or parameter-wise λ values<br/>
              <strong>Structured Sparsity:</strong> Group lasso for structured feature selection<br/>
              <strong>Bayesian Approaches:</strong> Regularization through priors<br/>
              <strong>Curriculum Learning:</strong> Gradually increasing regularization strength
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegularizationBasics;