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
    className={`inline-block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 dark:from-yellow-600 dark:to-orange-600 dark:hover:from-yellow-700 dark:hover:to-orange-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function LinearAlgebra() {
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
      title: "📐 Vectors and Matrices",
      id: "vectors-matrices",
      description:
        "Fundamental building blocks for representing data and transformations in machine learning.",
      keyPoints: [
        "Vectors: Ordered collections of numbers representing points in space",
        "Matrices: Rectangular arrays for representing linear transformations",
        "Special matrices: Identity, diagonal, symmetric, orthogonal",
        "Vector spaces and subspaces in ML contexts",
      ],
      detailedExplanation: [
        "In machine learning:",
        "- Feature vectors represent data points (n-dimensional vectors)",
        "- Weight matrices transform data between layers in neural networks",
        "- Similarity between vectors (cosine similarity) used in recommendation systems",
        "",
        "Key operations:",
        "- Dot product measures similarity between vectors",
        "- Matrix-vector multiplication applies transformations",
        "- Hadamard (element-wise) product used in attention mechanisms",
        "",
        "Important properties:",
        "- Linear independence determines model capacity",
        "- Span defines the space reachable by combinations",
        "- Norms (L1, L2) used in regularization",
      ],
      code: {
        python: `# Vectors and Matrices in ML with NumPy
import numpy as np

# Feature vector (4 features)
sample = np.array([5.1, 3.5, 1.4, 0.2])  

# Weight matrix (3x4) for a layer with 3 neurons
weights = np.random.randn(3, 4)  

# Apply transformation
transformed = weights @ sample  # Matrix-vector multiplication

# Cosine similarity between two samples
def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# L2 regularization
def l2_regularization(weights, lambda_):
    return lambda_ * np.sum(weights ** 2)`,
        complexity:
          "Vector ops: O(n), Matrix-vector: O(mn), Matrix-matrix: O(mnp)",
      },
    },
    {
      title: "🔄 Matrix Operations",
      id: "operations",
      description:
        "Essential operations for manipulating and understanding transformations in ML models.",
      keyPoints: [
        "Transpose: Flipping rows and columns (Aᵀ)",
        "Inverse: Matrix that reverses transformation (A⁻¹)",
        "Trace: Sum of diagonal elements",
        "Matrix multiplication: Composition of transformations",
      ],
      detailedExplanation: [
        "In machine learning contexts:",
        "- Transpose used in backpropagation equations",
        "- Pseudoinverse for solving overdetermined systems",
        "- Matrix multiplication as fundamental NN operation",
        "",
        "Special cases:",
        "- Orthogonal matrices preserve distances (QᵀQ = I)",
        "- Diagonal matrices for efficient computations",
        "- Triangular matrices in decomposition methods",
        "",
        "Computational considerations:",
        "- Broadcasting rules in vectorized implementations",
        "- Sparse matrices for memory efficiency",
        "- GPU acceleration for large matrices",
      ],
      code: {
        python: `# Matrix Operations in ML Context
import numpy as np

# Transpose for gradient calculation
X = np.array([[1, 2], [3, 4], [5, 6]])  # Design matrix (3x2)
y = np.array([0.5, 1.2, 2.1])           # Targets (3,)

# Linear regression weights: (XᵀX)⁻¹Xᵀy
XT = X.T
XTX = XT @ X
XTX_inv = np.linalg.inv(XTX)
weights = XTX_inv @ XT @ y

# Efficient computation using solve
weights = np.linalg.solve(XTX, XT @ y)

# Batch matrix multiplication for neural networks
# Input batch (100 samples, 64 features)
batch = np.random.randn(100, 64)  
# Weight matrix (64 features → 32 neurons)
W = np.random.randn(64, 32)       
# Output (100, 32)
output = batch @ W`,
        complexity: "Inversion: O(n³), Solve: O(n³), Matmul: O(mnp)",
      },
    },
    {
      title: "🔍 Eigenvalues and Eigenvectors",
      id: "eigen",
      description:
        "Characteristic directions and scaling factors of linear transformations.",
      keyPoints: [
        "Eigenvectors: Directions unchanged by transformation",
        "Eigenvalues: Scaling factors along eigenvector directions",
        "Diagonalization: Decomposing matrices into simpler forms",
        "Positive definite matrices in optimization",
      ],
      detailedExplanation: [
        "Machine learning applications:",
        "- Principal Component Analysis (PCA) for dimensionality reduction",
        "- Eigenfaces for facial recognition",
        "- Spectral clustering in unsupervised learning",
        "- Stability analysis of learning algorithms",
        "",
        "Key concepts:",
        "- Characteristic polynomial: det(A - λI) = 0",
        "- Eigendecomposition: A = QΛQ⁻¹",
        "- Power iteration method for dominant eigenpair",
        "",
        "Special cases:",
        "- Markov chains and stationary distributions",
        "- Google's PageRank algorithm",
        "- Hessian matrix in optimization",
      ],
      code: {
        python: `# Eigenanalysis in ML
import numpy as np
from sklearn.decomposition import PCA

# Covariance matrix from data
data = np.random.randn(100, 10)  # 100 samples, 10 features
cov = np.cov(data, rowvar=False)

# Eigendecomposition
eigenvalues, eigenvectors = np.linalg.eig(cov)

# PCA using SVD (more numerically stable)
pca = PCA(n_components=2)
reduced = pca.fit_transform(data)

# Power iteration for dominant eigenvector
def power_iteration(A, num_iterations=100):
    b = np.random.rand(A.shape[1])
    for _ in range(num_iterations):
        b = A @ b
        b = b / np.linalg.norm(b)
    eigenvalue = b.T @ A @ b
    return eigenvalue, b

# Hessian matrix analysis
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
            hess[i,j] = (f(x1)-f(x2)-f(x3)+f(x4))/(4*eps*eps)
    return hess`,
        complexity:
          "Full eigendecomposition: O(n³), Power iteration: O(n² per iteration)",
      },
    },
    {
      title: "🌀 Singular Value Decomposition (SVD)",
      id: "svd",
      description:
        "Fundamental matrix factorization with wide applications in machine learning.",
      keyPoints: [
        "Generalization of eigendecomposition to non-square matrices",
        "Singular values: Non-negative scaling factors",
        "Orthonormal basis for row and column spaces",
        "Low-rank approximations for dimensionality reduction",
      ],
      detailedExplanation: [
        "ML applications:",
        "- Dimensionality reduction (PCA implementation)",
        "- Collaborative filtering (recommender systems)",
        "- Latent semantic analysis in NLP",
        "- Matrix completion problems",
        "",
        "Mathematical formulation:",
        "- A = UΣVᵀ where U and V are orthogonal",
        "- Σ contains singular values in descending order",
        "- Truncated SVD keeps top k singular values",
        "",
        "Computational aspects:",
        "- Randomized SVD for large matrices",
        "- Relationship to PCA: SVD on centered data",
        "- Regularization via singular value thresholding",
      ],
      code: {
        python: `# SVD Applications in ML
import numpy as np
from sklearn.decomposition import TruncatedSVD

# Recommendation system matrix (users x items)
ratings = np.random.randint(0, 5, size=(100, 50))  # 100 users, 50 items
ratings = ratings.astype(float)

# Fill missing values with mean
mean = np.nanmean(ratings, axis=0)
ratings = np.where(np.isnan(ratings), mean, ratings)

# Perform SVD
U, s, Vt = np.linalg.svd(ratings, full_matrices=False)

# Truncated SVD for dimensionality reduction
svd = TruncatedSVD(n_components=10)
reduced = svd.fit_transform(ratings)

# Matrix completion via SVD
def complete_matrix(matrix, rank, num_iters=10):
    completed = np.where(np.isnan(matrix), 0, matrix)
    for _ in range(num_iters):
        U, s, Vt = np.linalg.svd(completed, full_matrices=False)
        s[rank:] = 0
        completed = U @ np.diag(s) @ Vt
        completed = np.where(np.isnan(matrix), completed, matrix)
    return completed

# Image compression example
from skimage import data
image = data.camera()  # 512x512 grayscale image
U, s, Vt = np.linalg.svd(image)
k = 50  # Keep top 50 singular values
compressed = U[:, :k] @ np.diag(s[:k]) @ Vt[:k, :]`,
        complexity: "Full SVD: O(min(mn², m²n)), Randomized SVD: O(mnk)",
      },
    },
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-indigo-50 to-purple-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-indigo-400 to-purple-400"
            : "bg-gradient-to-r from-indigo-600 to-purple-600"
        } mb-8 sm:mb-12`}
      >
        Linear Algebra for Machine Learning
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-indigo-900/20" : "bg-indigo-100"
        } border-l-4 border-indigo-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-indigo-500 text-indigo-800">
          Mathematics for ML → Linear Algebra
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Linear algebra forms the mathematical foundation for machine learning
          algorithms. This section covers the essential concepts with direct
          applications to ML models, including vector/matrix operations,
          eigendecomposition, and SVD.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-indigo-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-indigo-300" : "text-indigo-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-indigo-600 dark:text-indigo-400">
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
            darkMode ? "text-indigo-300" : "text-indigo-800"
          }`}
        >
          Linear Algebra in ML: Key Concepts
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-indigo-900" : "bg-indigo-600"
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
                  "Vectors",
                  "Feature representation",
                  "Word embeddings in NLP",
                  "NumPy, PyTorch",
                ],
                [
                  "Matrix Operations",
                  "Neural network layers",
                  "Fully connected layers",
                  "TensorFlow, JAX",
                ],
                [
                  "Eigendecomposition",
                  "Dimensionality reduction",
                  "PCA for feature extraction",
                  "scikit-learn",
                ],
                [
                  "SVD",
                  "Recommendation systems",
                  "Collaborative filtering",
                  "Surprise, LightFM",
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
          darkMode ? "bg-blue-900/30" : "bg-orange-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-indigo-300" : "text-indigo-800"
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
                darkMode ? "text-indigo-300" : "text-indigo-800"
              }`}
            >
              Essential Linear Algebra for ML
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>
                Vector/matrix operations form the backbone of neural networks
              </li>
              <li>
                Eigendecomposition powers dimensionality reduction techniques
              </li>
              <li>
                SVD enables efficient matrix approximations in large systems
              </li>
              <li>
                Understanding these concepts helps debug and optimize models
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
                darkMode ? "text-indigo-300" : "text-indigo-800"
              }`}
            >
              Computational Considerations
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              Modern ML implementations leverage:
              <br />
              <br />
              <strong>Vectorization:</strong> Using matrix operations instead of
              loops
              <br />
              <strong>GPU Acceleration:</strong> Parallel processing of large
              matrices
              <br />
              <strong>Sparse Representations:</strong> For high-dimensional data
              <br />
              <strong>Numerical Stability:</strong> Careful implementation to
              avoid errors
            </p>
          </div>

          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-indigo-300" : "text-indigo-800"
              }`}
            >
              Advanced Applications
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Graph Neural Networks:</strong> Adjacency matrix
              operations
              <br />
              <strong>Attention Mechanisms:</strong> Matrix products for
              similarity
              <br />
              <strong>Kernel Methods:</strong> High-dimensional feature spaces
              <br />
              <strong>Optimization:</strong> Hessian matrix in second-order
              methods
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinearAlgebra;
