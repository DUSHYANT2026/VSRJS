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

function DimensionalityReduction() {
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
      title: "📊 Principal Component Analysis (PCA)",
      id: "pca",
      description:
        "Linear dimensionality reduction technique that projects data onto directions of maximum variance.",
      keyPoints: [
        "Orthogonal transformation to uncorrelated components",
        "Components ordered by explained variance",
        "Sensitive to feature scaling",
        "Assumes linear relationships",
      ],
      detailedExplanation: [
        "Mathematical foundation:",
        "- Computes eigenvectors of covariance matrix",
        "- Projects data onto principal components",
        "- Can be viewed as minimizing projection error",
        "",
        "Key parameters:",
        "- n_components: Number of components to keep",
        "- whiten: Whether to normalize component scales",
        "- svd_solver: Algorithm for computation",
        "",
        "Applications in ML:",
        "- Noise reduction in high-dimensional data",
        "- Visualization of high-D datasets",
        "- Speeding up learning algorithms",
        "- Removing multicollinearity in features",
        "",
        "Limitations:",
        "- Only captures linear relationships",
        "- Sensitive to outliers",
        "- Interpretation can be challenging",
        "- Global structure preservation only",
      ],
      code: {
        python: `# PCA Implementation Example
from sklearn.decomposition import PCA
import numpy as np
import matplotlib.pyplot as plt

# Generate sample data
np.random.seed(42)
X = np.dot(np.random.rand(100, 2), np.random.rand(2, 10))  # 100 samples, 10 features

# Apply PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

# Visualize results
plt.figure(figsize=(10,6))
plt.scatter(X_pca[:, 0], X_pca[:, 1])
plt.xlabel('First Principal Component')
plt.ylabel('Second Principal Component')
plt.title('PCA Projection')
plt.show()

# Explained variance
print(f"Explained variance ratio: {pca.explained_variance_ratio_}")

# Cumulative explained variance
plt.figure(figsize=(10,6))
plt.plot(np.cumsum(pca.explained_variance_ratio_))
plt.xlabel('Number of Components')
plt.ylabel('Cumulative Explained Variance')
plt.title('PCA Explained Variance')
plt.grid()
plt.show()`,
        complexity:
          "O(n³) for exact solver, O(nd²) for randomized (n samples, d features)",
      },
    },
    {
      title: "🌌 t-SNE (t-Distributed Stochastic Neighbor Embedding)",
      id: "tsne",
      description:
        "Non-linear technique particularly well-suited for visualizing high-dimensional data in 2D or 3D.",
      keyPoints: [
        "Preserves local neighborhood structure",
        "Probabilistic approach using Student-t distribution",
        "Excellent for visualization",
        "Computationally intensive",
      ],
      detailedExplanation: [
        "How it works:",
        "- Models pairwise similarities in high-D and low-D space",
        "- Uses heavy-tailed distribution to avoid crowding problem",
        "- Minimizes KL divergence between distributions",
        "",
        "Key parameters:",
        "- perplexity: Balances local/global aspects (~5-50)",
        "- learning_rate: Typically 10-1000",
        "- n_iter: Number of iterations (at least 250)",
        "- metric: Distance metric ('euclidean', 'cosine')",
        "",
        "Applications:",
        "- Visualizing clusters in high-D data",
        "- Exploring neural network representations",
        "- Understanding feature relationships",
        "- Data exploration before modeling",
        "",
        "Limitations:",
        "- Not suitable for feature preprocessing",
        "- Results vary with hyperparameters",
        "- No global structure preservation",
        "- Cannot transform new data",
      ],
      code: {
        python: `# t-SNE Implementation Example
from sklearn.manifold import TSNE
import numpy as np
import matplotlib.pyplot as plt

# Generate sample data (e.g., word embeddings)
np.random.seed(42)
X = np.random.randn(200, 50)  # 200 samples, 50 features

# Apply t-SNE
tsne = TSNE(n_components=2, perplexity=30, learning_rate=200, random_state=42)
X_tsne = tsne.fit_transform(X)

# Visualize results
plt.figure(figsize=(10,6))
plt.scatter(X_tsne[:, 0], X_tsne[:, 1], alpha=0.7)
plt.title('t-SNE Projection')
plt.xlabel('t-SNE Component 1')
plt.ylabel('t-SNE Component 2')
plt.grid()
plt.show()

# With color-coded classes (if available)
# plt.scatter(X_tsne[:, 0], X_tsne[:, 1], c=y, cmap='viridis', alpha=0.7)`,
        complexity: "O(n²) memory, O(n² log n) time (n samples)",
      },
    },
    {
      title: "🌐 UMAP (Uniform Manifold Approximation and Projection)",
      id: "umap",
      description:
        "Modern non-linear dimensionality reduction technique that preserves both local and global structure.",
      keyPoints: [
        "Based on Riemannian geometry and algebraic topology",
        "Faster than t-SNE with similar quality",
        "Can transform new data",
        "Preserves more global structure than t-SNE",
      ],
      detailedExplanation: [
        "Theoretical foundations:",
        "- Models data as a fuzzy topological structure",
        "- Optimizes low-dimensional representation",
        "- Uses stochastic gradient descent",
        "",
        "Key parameters:",
        "- n_neighbors: Balances local/global structure (~5-50)",
        "- min_dist: Controls clustering tightness (0.1-0.5)",
        "- metric: Distance metric ('euclidean', 'cosine')",
        "- n_components: Output dimensions (typically 2-3)",
        "",
        "Advantages over t-SNE:",
        "- Better preservation of global structure",
        "- Faster computation",
        "- Ability to transform new data",
        "- More stable embeddings",
        "",
        "Applications:",
        "- General-purpose dimensionality reduction",
        "- Visualization of complex datasets",
        "- Preprocessing for clustering",
        "- Feature extraction",
      ],
      code: {
        python: `# UMAP Implementation Example
from umap import UMAP
import numpy as np
import matplotlib.pyplot as plt

# Generate sample data
np.random.seed(42)
X = np.random.randn(300, 40)  # 300 samples, 40 features

# Apply UMAP
umap = UMAP(n_components=2, n_neighbors=15, min_dist=0.1, metric='euclidean')
X_umap = umap.fit_transform(X)

# Visualize results
plt.figure(figsize=(10,6))
plt.scatter(X_umap[:, 0], X_umap[:, 1], alpha=0.7)
plt.title('UMAP Projection')
plt.xlabel('UMAP Component 1')
plt.ylabel('UMAP Component 2')
plt.grid()
plt.show()

# Transform new data (unlike t-SNE)
new_data = np.random.randn(10, 40)
new_embedding = umap.transform(new_data)`,
        complexity: "O(n^1.14) empirically, much faster than t-SNE for large n",
      },
    },
    {
      title: "🔍 LDA (Linear Discriminant Analysis)",
      id: "lda",
      description:
        "Supervised dimensionality reduction that maximizes class separability.",
      keyPoints: [
        "Projects data to maximize between-class variance",
        "Minimizes within-class variance",
        "Assumes normal distribution of features",
        "Limited by number of classes",
      ],
      detailedExplanation: [
        "Comparison with PCA:",
        "- PCA is unsupervised, LDA is supervised",
        "- PCA maximizes variance, LDA maximizes class separation",
        "- LDA limited to (n_classes - 1) dimensions",
        "",
        "Mathematical formulation:",
        "- Computes between-class scatter matrix",
        "- Computes within-class scatter matrix",
        "- Solves generalized eigenvalue problem",
        "",
        "Applications:",
        "- Preprocessing for classification tasks",
        "- Feature extraction when labels are available",
        "- Improving model performance on small datasets",
        "- Reducing overfitting in supervised learning",
        "",
        "Limitations:",
        "- Assumes Gaussian class distributions",
        "- Sensitive to outliers",
        "- Requires labeled data",
        "- Limited dimensionality reduction",
      ],
      code: {
        python: `# LDA Implementation Example
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
import numpy as np
import matplotlib.pyplot as plt

# Generate sample data with classes
np.random.seed(42)
X = np.vstack([
    np.random.randn(50, 20) + 1,  # Class 0
    np.random.randn(50, 20) - 1,  # Class 1
    np.random.randn(50, 20) * 2   # Class 2
])
y = np.array([0]*50 + [1]*50 + [2]*50)

# Apply LDA
lda = LinearDiscriminantAnalysis(n_components=2)
X_lda = lda.fit_transform(X, y)

# Visualize results
plt.figure(figsize=(10,6))
plt.scatter(X_lda[:, 0], X_lda[:, 1], c=y, cmap='viridis', alpha=0.7)
plt.title('LDA Projection')
plt.xlabel('LDA Component 1')
plt.ylabel('LDA Component 2')
plt.colorbar(label='Class')
plt.grid()
plt.show()

# Classification after LDA
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X_lda, y, test_size=0.2)
model = LogisticRegression()
model.fit(X_train, y_train)
print(f"Accuracy: {model.score(X_test, y_test):.2f}")`,
        complexity: "O(nd² + d³) where d is original dimension",
      },
    },
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
        Dimensionality Reduction
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-teal-900/20" : "bg-teal-100"
        } border-l-4 border-teal-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-teal-500 text-teal-800">
          Unsupervised Learning → Dimensionality Reduction
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Dimensionality reduction techniques transform high-dimensional data
          into lower-dimensional spaces while preserving important structure.
          These methods are essential for visualization, noise reduction, and
          improving the efficiency of machine learning algorithms.
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
          Techniques Comparison
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
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Preserves</th>
                <th className="p-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "PCA",
                  "Linear",
                  "Global variance",
                  "Numerical data, linear relationships",
                ],
                [
                  "t-SNE",
                  "Non-linear",
                  "Local structure",
                  "Visualization, clustering",
                ],
                [
                  "UMAP",
                  "Non-linear",
                  "Local & some global",
                  "General-purpose reduction",
                ],
                [
                  "LDA",
                  "Supervised linear",
                  "Class separation",
                  "Preprocessing for classification",
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
          darkMode ? "bg-teal-900/30" : "bg-teal-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-teal-300" : "text-teal-800"
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
                darkMode ? "text-teal-300" : "text-teal-800"
              }`}
            >
              Choosing a Technique
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>
                <strong>PCA:</strong> When you need fast, linear reduction and
                feature extraction
              </li>
              <li>
                <strong>t-SNE:</strong> For visualizing high-dimensional
                clusters and patterns
              </li>
              <li>
                <strong>UMAP:</strong> When you need both local and global
                structure preservation
              </li>
              <li>
                <strong>LDA:</strong> When you have labeled data and want to
                maximize class separation
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
                darkMode ? "text-teal-300" : "text-teal-800"
              }`}
            >
              Implementation Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Always scale your data</strong> before applying linear
              methods like PCA
              <br />
              <strong>Experiment with hyperparameters</strong> (perplexity in
              t-SNE, n_neighbors in UMAP)
              <br />
              <strong>Visualize explained variance</strong> to choose the right
              number of components
              <br />
              <strong>Consider computational complexity</strong> for large
              datasets
            </p>
          </div>

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
              Advanced Applications
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Manifold learning:</strong> Combining multiple techniques
              <br />
              <strong>Autoencoders:</strong> Neural networks for non-linear
              reduction
              <br />
              <strong>Kernel PCA:</strong> Non-linear extensions of PCA
              <br />
              <strong>Multidimensional scaling:</strong> Preserving distances
              between samples
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DimensionalityReduction;
