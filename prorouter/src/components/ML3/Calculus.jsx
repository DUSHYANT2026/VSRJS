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
    className={`inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 dark:from-amber-600 dark:to-orange-600 dark:hover:from-amber-700 dark:hover:to-orange-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function Calculus() {
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
      title: "📈 Differentiation and Partial Derivatives",
      id: "differentiation",
      description: "Fundamental tools for analyzing how functions change, essential for optimization in ML.",
      keyPoints: [
        "Derivatives measure instantaneous rate of change",
        "Partial derivatives for multivariate functions",
        "Gradient: Vector of partial derivatives",
        "Jacobian and Hessian matrices for higher-order derivatives"
      ],
      detailedExplanation: [
        "Key concepts in ML:",
        "- Gradient descent optimization relies on first derivatives",
        "- Second derivatives (Hessian) inform optimization curvature",
        "- Automatic differentiation enables backpropagation in neural networks",
        "",
        "Important applications:",
        "- Training neural networks via backpropagation",
        "- Optimization of loss functions",
        "- Sensitivity analysis of model parameters",
        "- Physics-informed machine learning",
        "",
        "Implementation considerations:",
        "- Numerical vs symbolic differentiation",
        "- Forward-mode vs reverse-mode autodiff",
        "- Gradient checking for verification",
        "- Handling non-differentiable functions"
      ],
      code: {
        python: `# Calculus in Machine Learning
import numpy as np
import torch

# Automatic differentiation example
x = torch.tensor(2.0, requires_grad=True)
y = x**3 + 2*x + 1
y.backward()
print(x.grad)  # dy/dx = 3x² + 2 → 14

# Partial derivatives
def f(x1, x2):
    return 3*x1**2 + 2*x1*x2 + x2**2

# Compute gradient numerically
def gradient(f, x, eps=1e-5):
    grad = np.zeros_like(x)
    for i in range(len(x)):
        x_plus = x.copy()
        x_minus = x.copy()
        x_plus[i] += eps
        x_minus[i] -= eps
        grad[i] = (f(*x_plus) - f(*x_minus)) / (2*eps)
    return grad

x = np.array([1.0, 2.0])
print(gradient(f, x))  # [10., 6.]

# Hessian matrix
def hessian(f, x, eps=1e-5):
    n = x.shape[0]
    hess = np.zeros((n, n))
    for i in range(n):
        for j in range(n):
            x1 = x.copy()
            x1[i] += eps
            x1[j] += eps
            x2 = x.copy()
            x2[i] += eps
            x2[j] -= eps
            x3 = x.copy()
            x3[i] -= eps
            x3[j] += eps
            x4 = x.copy()
            x4[i] -= eps
            x4[j] -= eps
            hess[i,j] = (f(*x1)-f(*x2)-f(*x3)+f(*x4))/(4*eps*eps)
    return hess

print(hessian(f, x))`,
        complexity: "Gradient: O(n), Hessian: O(n²), Autodiff: O(1) per operation"
      }
    },
    {
      title: "⛓️ Chain Rule and Gradient Descent",
      id: "chain-rule",
      description: "The backbone of training neural networks through backpropagation.",
      keyPoints: [
        "Chain rule: Derivatives of composite functions",
        "Backpropagation: Efficient application of chain rule",
        "Stochastic gradient descent variants",
        "Learning rate and optimization strategies"
      ],
      detailedExplanation: [
        "How it powers ML:",
        "- Enables training of deep neural networks",
        "- Efficient computation of gradients through computational graphs",
        "- Forms basis for all modern deep learning frameworks",
        "",
        "Key components:",
        "- Forward pass: Compute loss function",
        "- Backward pass: Propagate errors backward",
        "- Parameter updates: Adjust weights using gradients",
        "",
        "Advanced topics:",
        "- Momentum and adaptive learning rates (Adam, RMSprop)",
        "- Second-order optimization methods",
        "- Gradient clipping for stability",
        "- Vanishing/exploding gradients in deep networks",
        "",
        "Practical considerations:",
        "- Batch size selection",
        "- Learning rate scheduling",
        "- Early stopping criteria",
        "- Gradient checking implementations"
      ],
      code: {
        python: `# Implementing Gradient Descent
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def forward(X, W1, W2):
    h = sigmoid(X @ W1)
    y_hat = sigmoid(h @ W2)
    return y_hat, h

def backward(X, y, y_hat, h, W2):
    dL_dy = y_hat - y
    dL_dW2 = h.T @ dL_dy
    dL_dh = dL_dy @ W2.T
    dL_dW1 = X.T @ (dL_dh * h * (1 - h))
    return dL_dW1, dL_dW2

# Initialize parameters
X = np.random.randn(100, 3)  # 100 samples, 3 features
y = np.random.randint(0, 2, 100)  # Binary targets
W1 = np.random.randn(3, 4)  # First layer weights
W2 = np.random.randn(4, 1)  # Second layer weights
lr = 0.1

# Training loop
for epoch in range(1000):
    # Forward pass
    y_hat, h = forward(X, W1, W2)
    
    # Compute loss
    loss = -np.mean(y * np.log(y_hat) + (1-y) * np.log(1-y_hat))
    
    # Backward pass
    dW1, dW2 = backward(X, y, y_hat, h, W2)
    
    # Update weights
    W1 -= lr * dW1
    W2 -= lr * dW2
    
    if epoch % 100 == 0:
        print(f"Epoch {epoch}, Loss: {loss:.4f}")

# Using PyTorch autograd
import torch
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(3, 4),
    nn.Sigmoid(),
    nn.Linear(4, 1),
    nn.Sigmoid()
)
optimizer = torch.optim.SGD(model.parameters(), lr=0.1)
criterion = nn.BCELoss()

X_tensor = torch.tensor(X, dtype=torch.float32)
y_tensor = torch.tensor(y, dtype=torch.float32).view(-1,1)

for epoch in range(1000):
    optimizer.zero_grad()
    outputs = model(X_tensor)
    loss = criterion(outputs, y_tensor)
    loss.backward()
    optimizer.step()`,
        complexity: "Backpropagation: O(n) where n is number of operations in computational graph"
      }
    },
    {
      title: "➗ Taylor Series Expansion",
      id: "taylor",
      description: "Approximating complex functions with polynomials, useful for optimization and analysis.",
      keyPoints: [
        "Taylor series: Polynomial approximation around a point",
        "First-order approximation (linearization)",
        "Second-order approximation (quadratic)",
        "Applications in optimization and uncertainty"
      ],
      detailedExplanation: [
        "ML applications:",
        "- Understanding optimization surfaces",
        "- Newton's optimization method uses second-order expansion",
        "- Approximating non-linear activation functions",
        "- Analyzing model behavior around operating points",
        "",
        "Key concepts:",
        "- Maclaurin series (expansion around zero)",
        "- Remainder term and approximation error",
        "- Convergence conditions and radius",
        "- Multivariate Taylor expansion",
        "",
        "Practical uses:",
        "- Deriving optimization algorithms",
        "- Approximate inference methods",
        "- Sensitivity analysis",
        "- Explaining model predictions locally",
        "",
        "Advanced topics:",
        "- Taylor expansions in infinite-dimensional spaces",
        "- Applications in differential equations for ML",
        "- Taylor-mode automatic differentiation",
        "- Higher-order optimization methods"
      ],
      code: {
        python: `# Taylor Series in ML
import numpy as np
import matplotlib.pyplot as plt

def taylor_exp(x, n_terms=5):
    """Taylor series for e^x around 0"""
    result = 0
    for n in range(n_terms):
        result += x**n / np.math.factorial(n)
    return result

# Compare approximations
x = np.linspace(-2, 2, 100)
plt.plot(x, np.exp(x), label='Actual')
for n in [1, 2, 3, 5]:
    plt.plot(x, [taylor_exp(xi, n) for xi in x], label=f'{n} terms')
plt.legend()
plt.title('Taylor Series Approximation of e^x')
plt.show()

# Quadratic approximation for optimization
def quadratic_approx(f, x0, delta=1e-4):
    """Second-order Taylor approximation"""
    f0 = f(x0)
    grad = (f(x0+delta) - f(x0-delta)) / (2*delta)
    hess = (f(x0+delta) - 2*f0 + f(x0-delta)) / delta**2
    return lambda x: f0 + grad*(x-x0) + 0.5*hess*(x-x0)**2

# Example function
def f(x):
    return np.sin(x) + 0.1*x**2

# Find minimum using quadratic approximation
x0 = 1.0
q = quadratic_approx(f, x0)
minimum = x0 - q.__closure__[1].cell_contents/q.__closure__[2].cell_contents

# Multivariate Taylor expansion
def quadratic_approx_multi(f, x0, eps=1e-5):
    n = len(x0)
    grad = np.zeros(n)
    hess = np.zeros((n,n))
    
    # Gradient
    for i in range(n):
        x_plus = x0.copy()
        x_minus = x0.copy()
        x_plus[i] += eps
        x_minus[i] -= eps
        grad[i] = (f(x_plus) - f(x_minus)) / (2*eps)
    
    # Hessian
    for i in range(n):
        for j in range(n):
            x1 = x0.copy()
            x1[i] += eps
            x1[j] += eps
            x2 = x0.copy()
            x2[i] += eps
            x2[j] -= eps
            x3 = x0.copy()
            x3[i] -= eps
            x3[j] += eps
            x4 = x0.copy()
            x4[i] -= eps
            x4[j] -= eps
            hess[i,j] = (f(x1)-f(x2)-f(x3)+f(x4))/(4*eps*eps)
    
    f0 = f(x0)
    return lambda x: f0 + grad @ (x-x0) + 0.5*(x-x0) @ hess @ (x-x0)`,
        complexity: "Single-variable: O(n), Multivariate: O(n²) for Hessian"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-amber-50 to-orange-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-amber-400 to-orange-400"
            : "bg-gradient-to-r from-amber-600 to-orange-600"
        } mb-8 sm:mb-12`}
      >
        Calculus for Machine Learning
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-amber-900/20" : "bg-amber-100"
        } border-l-4 border-amber-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-amber-500 text-amber-800">
          Mathematics for ML → Calculus
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Calculus provides the mathematical foundation for optimization and learning in machine learning. 
          This section covers the essential concepts with direct applications to ML models, including 
          differentiation, gradient descent, and function approximation.
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
            darkMode ? "text-amber-300" : "text-amber-800"
          }`}
        >
          Calculus Concepts in ML
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-amber-900" : "bg-amber-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Concept</th>
                <th className="p-4 text-left">ML Application</th>
                <th className="p-4 text-left">Example Use Case</th>
                <th className="p-4 text-left">Key Libraries</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Differentiation",
                  "Gradient computation",
                  "Neural network training",
                  "PyTorch, TensorFlow",
                ],
                [
                  "Chain Rule",
                  "Backpropagation",
                  "Deep learning",
                  "Autograd, JAX",
                ],
                [
                  "Taylor Series",
                  "Function approximation",
                  "Optimization methods",
                  "SciPy, NumPy",
                ],
                [
                  "Partial Derivatives",
                  "Multivariate optimization",
                  "Hyperparameter tuning",
                  "Optuna, Scikit-learn",
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
          darkMode ? "bg-amber-900/30" : "bg-amber-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-amber-300" : "text-amber-800"
          }`}
        >
          ML Practitioner's Perspective
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
              Essential Calculus for ML
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>
                Gradients power all optimization-based learning algorithms
              </li>
              <li>
                The chain rule enables efficient training of deep networks
              </li>
              <li>
                Taylor expansions help understand model behavior locally
              </li>
              <li>
                Partial derivatives handle multi-dimensional parameter spaces
              </li>
            </ul>
          </div>

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
              Implementation Considerations
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Automatic Differentiation:</strong> Prefer over symbolic/numeric methods<br />
              <strong>Gradient Checking:</strong> Validate implementations during development<br />
              <strong>Numerical Stability:</strong> Handle vanishing/exploding gradients<br />
              <strong>Second-Order Methods:</strong> Useful for small, critical models
            </p>
          </div>

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
              Advanced Applications
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Neural ODEs:</strong> Continuous-depth models<br />
              <strong>Physics-Informed ML:</strong> Incorporating domain knowledge<br />
              <strong>Meta-Learning:</strong> Learning optimization processes<br />
              <strong>Differentiable Programming:</strong> End-to-end differentiable systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculus;