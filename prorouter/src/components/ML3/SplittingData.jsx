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
    className={`inline-block bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 dark:from-fuchsia-600 dark:to-purple-600 dark:hover:from-fuchsia-700 dark:hover:to-purple-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 dark:focus:ring-fuchsia-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function SplittingData() {
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
      title: "✂️ Train-Test Split",
      id: "train-test",
      description: "The fundamental technique for evaluating model performance by separating data into training and testing sets.",
      keyPoints: [
        "Random splitting of dataset into two subsets",
        "Typical splits: 70-30, 80-20, or similar ratios",
        "Preserves distribution of important features",
        "Prevents data leakage between sets"
      ],
      detailedExplanation: [
        "Key considerations:",
        "- Size of test set depends on dataset size and variability",
        "- Stratified splitting for imbalanced datasets",
        "- Time-based splitting for temporal data",
        "- Group-based splitting for dependent samples",
        "",
        "Implementation details:",
        "- Random state for reproducibility",
        "- Shuffling before splitting (except time series)",
        "- Feature scaling after splitting to prevent leakage",
        "- Multiple splits for more reliable evaluation",
        "",
        "Common pitfalls:",
        "- Test set too small for reliable evaluation",
        "- Data leakage through improper preprocessing",
        "- Non-representative splits (e.g., sorted data)",
        "- Ignoring temporal or group dependencies"
      ],
      code: {
        python: `# Train-Test Split Examples
from sklearn.model_selection import train_test_split
import numpy as np

# Basic random split
X = np.random.rand(1000, 10)  # 1000 samples, 10 features
y = np.random.randint(0, 2, 1000)  # Binary target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, 
    test_size=0.2,  # 20% test
    random_state=42,  # For reproducibility
    shuffle=True,
    stratify=y  # Preserve class distribution
)

# Time-based splitting
time_series_data = np.random.randn(365, 5)  # 1 year daily data
split_point = int(0.8 * len(time_series_data))  # 80% train
X_train_time = time_series_data[:split_point]
X_test_time = time_series_data[split_point:]

# Group-based splitting
from sklearn.model_selection import GroupShuffleSplit

groups = np.random.randint(0, 10, 1000)  # 10 groups
gss = GroupShuffleSplit(n_splits=1, test_size=0.2, random_state=42)
train_idx, test_idx = next(gss.split(X, y, groups))
X_train_group, X_test_group = X[train_idx], X[test_idx]
y_train_group, y_test_group = y[train_idx], y[test_idx]`,
        complexity: "O(n) time complexity, where n is number of samples"
      }
    },
    {
      title: "🔄 Cross-Validation",
      id: "cross-validation",
      description: "Robust technique for model evaluation by systematically creating multiple train-test splits.",
      keyPoints: [
        "K-Fold: Dividing data into K equal parts",
        "Stratified K-Fold: Preserving class distribution",
        "Leave-One-Out: Extreme case where K = n",
        "Time Series CV: Specialized for temporal data"
      ],
      detailedExplanation: [
        "Why use cross-validation:",
        "- More reliable estimate of model performance",
        "- Better utilization of limited data",
        "- Reduces variance in performance estimates",
        "- Helps detect overfitting",
        "",
        "Common variants:",
        "1. K-Fold: Standard approach for most problems",
        "2. Repeated K-Fold: Multiple runs with different splits",
        "3. Stratified K-Fold: For imbalanced datasets",
        "4. Leave-One-Out: For very small datasets",
        "5. Time Series Split: Ordered splits for temporal data",
        "",
        "Implementation best practices:",
        "- Choose K based on dataset size (typically 5 or 10)",
        "- Ensure proper shuffling (except time series)",
        "- Maintain same preprocessing within each fold",
        "- Aggregate results across folds properly"
      ],
      code: {
        python: `# Cross-Validation Examples
from sklearn.model_selection import (
    KFold, 
    StratifiedKFold,
    TimeSeriesSplit,
    cross_val_score
)
from sklearn.ensemble import RandomForestClassifier

# Standard K-Fold (k=5)
kf = KFold(n_splits=5, shuffle=True, random_state=42)
cv_scores = cross_val_score(
    RandomForestClassifier(),
    X, y,
    cv=kf,
    scoring='accuracy'
)
print(f"KFold scores: {cv_scores}")
print(f"Mean accuracy: {np.mean(cv_scores):.2f}")

# Stratified K-Fold for imbalanced data
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
strat_scores = cross_val_score(
    RandomForestClassifier(),
    X, y,
    cv=skf,
    scoring='f1'
)

# Time Series Cross-Validation
tscv = TimeSeriesSplit(n_splits=5)
time_scores = []
for train_idx, test_idx in tscv.split(time_series_data):
    model.fit(time_series_data[train_idx], y[train_idx])
    score = model.score(time_series_data[test_idx], y[test_idx])
    time_scores.append(score)

# Nested CV for hyperparameter tuning
from sklearn.model_selection import GridSearchCV

inner_cv = KFold(n_splits=3, shuffle=True, random_state=42)
outer_cv = KFold(n_splits=5, shuffle=True, random_state=42)

param_grid = {'max_depth': [3, 5, 7]}
grid = GridSearchCV(
    RandomForestClassifier(),
    param_grid,
    cv=inner_cv
)
nested_score = cross_val_score(grid, X, y, cv=outer_cv)`,
        complexity: "O(k*n) where k is number of folds, n is dataset size"
      }
    },
    {
      title: "⚖️ Validation Sets",
      id: "validation",
      description: "Intermediate dataset used for tuning hyperparameters and model selection.",
      keyPoints: [
        "Separate from both training and test sets",
        "Used for model selection and hyperparameter tuning",
        "Typical splits: 60-20-20 or similar ratios",
        "Prevents overfitting to test set metrics"
      ],
      detailedExplanation: [
        "Validation set purposes:",
        "- Hyperparameter tuning",
        "- Early stopping in neural networks",
        "- Model architecture selection",
        "- Feature selection decisions",
        "",
        "Implementation approaches:",
        "1. Fixed validation set: Simple but reduces training data",
        "2. Cross-validation with validation: More data-efficient",
        "3. Nested cross-validation: Most rigorous but computationally expensive",
        "",
        "Best practices:",
        "- Never use test set for any decision making",
        "- Match validation distribution to expected test conditions",
        "- Consider multiple validation sets for robustness",
        "- Document all decisions made based on validation",
        "",
        "Special cases:",
        "- Time series: Forward validation (train on past, validate on future)",
        "- Small datasets: Cross-validation instead of fixed split",
        "- Grouped data: Keep groups together in splits"
      ],
      code: {
        python: `# Validation Set Strategies
# Simple train-val-test split
X_train_val, X_test, y_train_val, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
X_train, X_val, y_train, y_val = train_test_split(
    X_train_val, y_train_val, test_size=0.25, random_state=42  # 0.25 * 0.8 = 0.2
)

# Using cross-validation for validation
from sklearn.model_selection import validation_curve

param_range = np.logspace(-6, -1, 5)
train_scores, val_scores = validation_curve(
    RandomForestClassifier(),
    X_train_val, y_train_val,
    param_name="min_samples_split",
    param_range=param_range,
    cv=5,
    scoring="accuracy"
)

# Early stopping with validation set
from tensorflow.keras.callbacks import EarlyStopping

model = create_neural_network()  # Assume defined elsewhere
history = model.fit(
    X_train, y_train,
    validation_data=(X_val, y_val),
    epochs=100,
    callbacks=[EarlyStopping(patience=5, restore_best_weights=True)]
)

# Nested validation with GridSearchCV
param_grid = {'C': [0.1, 1, 10], 'gamma': [0.1, 0.01]}
grid = GridSearchCV(
    SVC(),
    param_grid,
    cv=5,
    scoring='accuracy'
)
grid.fit(X_train_val, y_train_val)
best_model = grid.best_estimator_
test_score = best_model.score(X_test, y_test)`,
        complexity: "Similar to train-test split, plus additional model training"
      }
    },
    {
      title: "📊 Data Splitting Strategies",
      id: "strategies",
      description: "Specialized approaches for different data types and problem scenarios.",
      keyPoints: [
        "Stratified sampling for imbalanced classes",
        "Group-based splitting for dependent samples",
        "Time-based splitting for temporal data",
        "Cluster-based splitting for complex distributions"
      ],
      detailedExplanation: [
        "Advanced splitting techniques:",
        "- Stratified sampling: Preserves class ratios in splits",
        "- Group splitting: Keeps related samples together",
        "- Time series splitting: Maintains temporal order",
        "- Cluster splitting: Ensures diversity in splits",
        "",
        "Domain-specific considerations:",
        "- Medical data: Patient-wise splitting",
        "- NLP: Document or author-wise splitting",
        "- Recommender systems: User-wise splitting",
        "- Geospatial data: Location-based splitting",
        "",
        "Implementation tools:",
        "- Scikit-learn's GroupShuffleSplit, TimeSeriesSplit",
        "- Custom splitting functions for special cases",
        "- Synthetic data augmentation for small datasets",
        "- Active learning approaches for iterative splitting",
        "",
        "Evaluation metrics:",
        "- Check distribution similarity between splits",
        "- Verify no leakage between sets",
        "- Assess whether splits reflect real-world conditions",
        "- Measure stability of results across different splits"
      ],
      code: {
        python: `# Advanced Splitting Strategies
from sklearn.model_selection import (
    StratifiedShuffleSplit,
    GroupShuffleSplit,
    TimeSeriesSplit
)

# Stratified splitting for imbalanced data
sss = StratifiedShuffleSplit(n_splits=1, test_size=0.2, random_state=42)
for train_idx, test_idx in sss.split(X, y):
    X_train, X_test = X[train_idx], X[test_idx]
    y_train, y_test = y[train_idx], y[test_idx]

# Group splitting (e.g., patients in medical data)
groups = np.random.randint(0, 100, 1000)  # 100 groups
gss = GroupShuffleSplit(n_splits=1, test_size=0.2, random_state=42)
for train_idx, test_idx in gss.split(X, y, groups):
    X_train, X_test = X[train_idx], X[test_idx]
    y_train, y_test = y[train_idx], y[test_idx]

# Time series splitting
tscv = TimeSeriesSplit(n_splits=5)
for train_idx, test_idx in tscv.split(time_series_data):
    X_train, X_test = time_series_data[train_idx], time_series_data[test_idx]
    y_train, y_test = y[train_idx], y[test_idx]

# Cluster-based splitting
from sklearn.cluster import KMeans

# Cluster data into 5 groups
clusters = KMeans(n_clusters=5).fit_predict(X)
unique_clusters = np.unique(clusters)
cluster_splits = np.array_split(np.random.permutation(unique_clusters), 2)

train_idx = np.where(np.isin(clusters, cluster_splits[0]))[0]
test_idx = np.where(np.isin(clusters, cluster_splits[1]))[0]
X_train, X_test = X[train_idx], X[test_idx]
y_train, y_test = y[train_idx], y[test_idx]`,
        complexity: "Varies by method, typically O(n) to O(n²)"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-fuchsia-50 to-purple-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-fuchsia-400 to-purple-400"
            : "bg-gradient-to-r from-fuchsia-600 to-purple-600"
        } mb-8 sm:mb-12`}
      >
        Data Splitting Strategies
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-fuchsia-900/20" : "bg-fuchsia-100"
        } border-l-4 border-fuchsia-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-fuchsia-500 text-fuchsia-800">
          Data Preprocessing → Splitting Data
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Proper data splitting is crucial for developing robust machine learning models.
          This section covers techniques to partition datasets for training, validation,
          and testing while avoiding common pitfalls like data leakage.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-fuchsia-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-fuchsia-300" : "text-fuchsia-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-fuchsia-600 dark:text-fuchsia-400">
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
                      darkMode ? "bg-purple-900/30" : "bg-purple-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-purple-400 text-purple-600">
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
            darkMode ? "text-fuchsia-300" : "text-fuchsia-800"
          }`}
        >
          Data Splitting Method Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-fuchsia-900" : "bg-fuchsia-600"
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
                [
                  "Train-Test Split",
                  "Large datasets, quick evaluation",
                  "Simple, fast",
                  "Higher variance in estimates",
                ],
                // ... [other table rows] ...
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
          darkMode ? "bg-fuchsia-900/30" : "bg-fuchsia-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-fuchsia-300" : "text-fuchsia-800"
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
                darkMode ? "text-fuchsia-300" : "text-fuchsia-800"
              }`}
            >
              General Guidelines
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>
                Always split data before any preprocessing or feature engineering
              </li>
              <li>
                For small datasets, prefer cross-validation over simple splits
              </li>
              <li>
                Match your splitting strategy to your problem's real-world conditions
              </li>
              <li>
                Document your splitting methodology for reproducibility
              </li>
            </ul>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#0ea5e9',
              marginBottom: '0.75rem'
            }}>Common Pitfalls to Avoid</h4>
            <p style={{
              color: '#374151',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              <strong>Data Leakage:</strong> When information from test set influences training<br/>
              <strong>Overfitting to Test Set:</strong> Repeated evaluation on same test data<br/>
              <strong>Improper Shuffling:</strong> Ordered data creates biased splits<br/>
              <strong>Ignoring Dependencies:</strong> Splitting correlated samples independently
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#0ea5e9',
              marginBottom: '0.75rem'
            }}>Special Cases</h4>
            <p style={{
              color: '#374151',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              <strong>Time Series:</strong> Use forward-chaining validation approaches<br/>
              <strong>Imbalanced Data:</strong> Stratified sampling preserves class ratios<br/>
              <strong>Grouped Data:</strong> Keep all samples from same group together<br/>
              <strong>Active Learning:</strong> Iterative splitting based on model uncertainty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplittingData;