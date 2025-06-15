import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-pink-100 dark:border-pink-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 dark:from-pink-500 dark:to-blue-500 dark:hover:from-pink-600 dark:hover:to-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-pink-500 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function HyperparameterTuning() {
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
      title: "🔍 Grid Search",
      id: "grid-search",
      description: "Exhaustive search over specified parameter values to find the optimal combination.",
      keyPoints: [
        "Tests all possible combinations in parameter grid",
        "Guarantees finding best combination within grid",
        "Computationally expensive for large spaces",
        "Parallelizable across parameter combinations"
      ],
      detailedExplanation: [
        "Implementation Process:",
        "1. Define parameter grid with discrete values",
        "2. Create all possible combinations",
        "3. Evaluate model for each combination",
        "4. Select combination with best performance",
        "",
        "Key Considerations:",
        "- Parameter ranges should be carefully chosen",
        "- Can use with cross-validation (GridSearchCV)",
        "- Performance metrics must be clearly defined",
        "- Early stopping can save computation",
        "",
        "When to Use:",
        "- Small parameter spaces (few parameters with limited values)",
        "- When exhaustive search is computationally feasible",
        "- When parameter interactions are important",
        "- For final model tuning after narrowing ranges"
      ],
      code: {
        python: `# Grid Search with scikit-learn
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# Define parameter grid
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [None, 5, 10],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

# Create model
rf = RandomForestClassifier(random_state=42)

# Setup GridSearchCV
grid_search = GridSearchCV(
    estimator=rf,
    param_grid=param_grid,
    cv=5,  # 5-fold cross-validation
    scoring='accuracy',
    n_jobs=-1,  # Use all available cores
    verbose=1
)

# Fit to data
grid_search.fit(X, y)

# Results
print("Best parameters:", grid_search.best_params_)
print("Best score:", grid_search.best_score_)

# Access all results
results_df = pd.DataFrame(grid_search.cv_results_)
print(results_df[['params', 'mean_test_score', 'std_test_score']])`,
        complexity: "O(n^k) where n=parameter values, k=parameters"
      }
    },
    {
      title: "🎲 Random Search",
      id: "random-search",
      description: "Samples parameter combinations randomly from specified distributions.",
      keyPoints: [
        "More efficient than grid search for high-dimensional spaces",
        "Can use continuous distributions for parameters",
        "Better at finding good combinations with fewer trials",
        "Doesn't guarantee optimal solution"
      ],
      detailedExplanation: [
        "Implementation Process:",
        "1. Define parameter distributions (discrete or continuous)",
        "2. Set number of iterations (budget)",
        "3. Randomly sample combinations",
        "4. Evaluate and select best performer",
        "",
        "Key Advantages:",
        "- More efficient coverage of large parameter spaces",
        "- Can focus sampling on promising regions",
        "- Works well with early stopping",
        "- Easier to parallelize than grid search",
        "",
        "When to Use:",
        "- Large parameter spaces (many parameters)",
        "- When some parameters matter more than others",
        "- Initial exploration of parameter space",
        "- When computational budget is limited",
        "",
        "Best Practices:",
        "- Use appropriate distributions (log-uniform for learning rates)",
        "- Allocate sufficient iterations (10-100x number of parameters)",
        "- Consider adaptive random search variants"
      ],
      code: {
        python: `# Random Search with scikit-learn
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import uniform, loguniform, randint
from sklearn.svm import SVC

# Define parameter distributions
param_dist = {
    'C': loguniform(1e-3, 1e3),  # Log-uniform between 0.001 and 1000
    'gamma': loguniform(1e-4, 1e1),
    'kernel': ['linear', 'rbf', 'poly'],
    'degree': randint(1, 5)  # Uniform integer between 1 and 4
}

# Create model
svm = SVC()

# Setup RandomizedSearchCV
random_search = RandomizedSearchCV(
    estimator=svm,
    param_distributions=param_dist,
    n_iter=50,  # Number of parameter combinations to try
    cv=5,
    scoring='accuracy',
    n_jobs=-1,
    random_state=42,
    verbose=1
)

# Fit to data
random_search.fit(X, y)

# Results
print("Best parameters:", random_search.best_params_)
print("Best score:", random_search.best_score_)

# Plotting parameter vs score
import matplotlib.pyplot as plt
plt.scatter(
    [params['C'] for params in random_search.cv_results_['params']],
    random_search.cv_results_['mean_test_score']
)
plt.xscale('log')
plt.xlabel('C parameter (log scale)')
plt.ylabel('Mean CV score')
plt.title('Random Search Results')
plt.show()`,
        complexity: "O(n) where n=number of iterations"
      }
    },
    {
      title: "🧠 Bayesian Optimization",
      id: "bayesian-opt",
      description: "Builds probabilistic model of objective function to guide search for optimal parameters.",
      keyPoints: [
        "Uses surrogate model (often Gaussian Process) to approximate objective",
        "Balances exploration and exploitation",
        "More efficient than random/grid search",
        "Works well with expensive-to-evaluate functions"
      ],
      detailedExplanation: [
        "Key Components:",
        "- Surrogate model: Approximates true objective function",
        "- Acquisition function: Determines next point to evaluate",
        "- History of evaluations: Guides model updates",
        "",
        "Implementation Process:",
        "1. Define parameter space and ranges",
        "2. Initialize with random points",
        "3. Build surrogate model from evaluations",
        "4. Select next point using acquisition function",
        "5. Evaluate and update model",
        "6. Repeat until convergence or budget exhausted",
        "",
        "Advantages:",
        "- Requires fewer evaluations than random search",
        "- Handles noisy objectives well",
        "- Can incorporate prior knowledge",
        "- Works with continuous and discrete parameters",
        "",
        "Popular Libraries:",
        "- scikit-optimize",
        "- Hyperopt",
        "- BayesianOptimization",
        "- Optuna"
      ],
      code: {
        python: `# Bayesian Optimization with scikit-optimize
from skopt import BayesSearchCV
from skopt.space import Real, Categorical, Integer
from xgboost import XGBClassifier

# Define search spaces
search_spaces = {
    'learning_rate': Real(0.01, 1.0, 'log-uniform'),
    'max_depth': Integer(3, 10),
    'subsample': Real(0.5, 1.0),
    'colsample_bytree': Real(0.5, 1.0),
    'gamma': Real(0, 5),
    'n_estimators': Integer(50, 200),
    'reg_alpha': Real(1e-4, 10, 'log-uniform'),
    'reg_lambda': Real(1e-4, 10, 'log-uniform')
}

# Create model
xgb = XGBClassifier(n_jobs=-1, random_state=42)

# Setup Bayesian Optimization
bayes_search = BayesSearchCV(
    estimator=xgb,
    search_spaces=search_spaces,
    n_iter=32,  # Number of evaluations
    cv=5,
    scoring='accuracy',
    n_jobs=-1,
    random_state=42,
    verbose=1
)

# Fit to data
bayes_search.fit(X, y)

# Results
print("Best parameters:", bayes_search.best_params_)
print("Best score:", bayes_search.best_score_)

# Plotting optimization progress
from skopt.plots import plot_convergence
plot_convergence(bayes_search.optimizer_results_[0])
plt.show()

# Alternative with Optuna
import optuna
from optuna.samplers import TPESampler

def objective(trial):
    params = {
        'learning_rate': trial.suggest_float('learning_rate', 1e-3, 0.1, log=True),
        'max_depth': trial.suggest_int('max_depth', 3, 10),
        'subsample': trial.suggest_float('subsample', 0.5, 1.0),
        'n_estimators': trial.suggest_int('n_estimators', 50, 200)
    }
    model = XGBClassifier(**params)
    return cross_val_score(model, X, y, cv=5, scoring='accuracy').mean()

study = optuna.create_study(direction='maximize', sampler=TPESampler())
study.optimize(objective, n_trials=50)

print("Best trial:", study.best_trial.params)`,
        complexity: "O(n²) to O(n³) per iteration (depends on surrogate model)"
      }
    },
    {
      title: "⚙️ Advanced Tuning Methods",
      id: "advanced",
      description: "Sophisticated techniques for hyperparameter optimization beyond basic approaches.",
      keyPoints: [
        "Genetic algorithms: Evolutionary optimization",
        "Hyperband: Bandit-based resource allocation",
        "BOHB: Combines Bayesian optimization with Hyperband",
        "Meta-learning: Transfer tuning knowledge"
      ],
      detailedExplanation: [
        "Genetic Algorithms:",
        "- Maintain population of parameter sets",
        "- Evolve through selection, crossover, mutation",
        "- Good for combinatorial/discrete spaces",
        "",
        "Hyperband:",
        "- Adaptive resource allocation",
        "- Early stopping of poorly performing configurations",
        "- More efficient than random search",
        "",
        "BOHB (Bayesian Optimization + Hyperband):",
        "- Uses Bayesian optimization to guide Hyperband",
        "- Combines strengths of both approaches",
        "- State-of-the-art for many problems",
        "",
        "Meta-Learning Approaches:",
        "- Learn from previous tuning experiments",
        "- Warm-start optimization",
        "- Transfer learning across datasets",
        "",
        "Other Methods:",
        "- Particle Swarm Optimization",
        "- Gradient-based optimization (for differentiable hyperparameters)",
        "- Multi-fidelity optimization",
        "- Neural Architecture Search (for deep learning)"
      ],
      code: {
        python: `# Advanced Tuning Methods Example
# Using Optuna with Hyperband pruning
import optuna
from optuna.pruners import HyperbandPruner

def objective(trial):
    params = {
        'learning_rate': trial.suggest_float('learning_rate', 1e-5, 1e-1, log=True),
        'max_depth': trial.suggest_int('max_depth', 3, 12),
        'subsample': trial.suggest_float('subsample', 0.6, 1.0),
        'colsample_bytree': trial.suggest_float('colsample_bytree', 0.6, 1.0),
        'n_estimators': trial.suggest_int('n_estimators', 50, 500)
    }
    
    model = XGBClassifier(**params, use_label_encoder=False, eval_metric='logloss')
    
    # Early stopping callback
    pruning_callback = optuna.integration.XGBoostPruningCallback(
        trial, 'validation_0-logloss'
    )
    
    return cross_val_score(
        model, 
        X, 
        y, 
        cv=5, 
        scoring='accuracy',
        fit_params={'callbacks': [pruning_callback]}
    ).mean()

# Create study with Hyperband pruner
study = optuna.create_study(
    direction='maximize',
    sampler=optuna.samplers.TPESampler(),
    pruner=HyperbandPruner(
        min_resource=1,
        max_resource=100,
        reduction_factor=3
    )
)

study.optimize(objective, n_trials=100)

# Using Genetic Algorithms with TPOT
from tpot import TPOTClassifier

tpot = TPOTClassifier(
    generations=5,
    population_size=20,
    cv=5,
    random_state=42,
    verbosity=2,
    n_jobs=-1
)

tpot.fit(X, y)
print(tpot.fitted_pipeline_)

# Save best pipeline
tpot.export('best_pipeline.py')`,
        complexity: "Varies by method (typically between O(n) and O(n²))"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-pink-50 to-blue-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-pink-300 to-blue-300"
            : "bg-gradient-to-r from-pink-500 to-blue-500"
        } mb-8 sm:mb-12`}
      >
        Hyperparameter Tuning
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-pink-900/20" : "bg-pink-100"
        } border-l-4 border-pink-400`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-pink-400 text-pink-700">
          Model Evaluation → Hyperparameter Tuning
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Hyperparameter tuning is crucial for maximizing model performance. This section covers various
          optimization strategies from basic grid search to advanced Bayesian methods, with practical
          implementations for machine learning workflows.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-pink-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-pink-300" : "text-pink-700"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-blue-500 dark:text-blue-400">
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
                      darkMode ? "bg-pink-900/30" : "bg-pink-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-pink-400 text-pink-600">
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
                      darkMode ? "bg-blue-900/30" : "bg-blue-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-blue-400 text-blue-600">
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
            darkMode ? "text-pink-300" : "text-pink-700"
          }`}
        >
          Tuning Methods Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-pink-900" : "bg-pink-500"
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
                ["Grid Search", "Small parameter spaces", "Guaranteed to find best in grid", "Exponential complexity"],
                ["Random Search", "Medium/large spaces", "More efficient than grid", "No guarantee of optimality"],
                ["Bayesian Optimization", "Expensive evaluations", "Sample efficient", "Overhead of surrogate model"],
                ["Genetic Algorithms", "Combinatorial spaces", "Good for discrete params", "Many hyperparameters itself"],
                ["Hyperband/BOHB", "Resource allocation", "Automated early stopping", "Complex to implement"]
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? darkMode
                        ? "bg-gray-700"
                        : "bg-blue-50"
                      : darkMode
                      ? "bg-gray-800"
                      : "bg-white"
                  } border-b ${
                    darkMode ? "border-gray-700" : "border-blue-100"
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
            darkMode ? "text-pink-300" : "text-pink-700"
          }`}
        >
          Tuning Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-pink-300" : "text-pink-700"
              }`}
            >
              Workflow Recommendations
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Start with broad random search to identify promising regions</li>
              <li>Refine with Bayesian optimization in promising areas</li>
              <li>Use early stopping to save computation time</li>
              <li>Consider parameter importance for focused tuning</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-pink-300" : "text-pink-700"
            }`}>
              Parameter Space Design
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Learning rates:</strong> Log-uniform distribution (e.g., 1e-5 to 1e-1)<br/>
              <strong>Layer sizes:</strong> Geometric progression (e.g., 32, 64, 128, 256)<br/>
              <strong>Regularization:</strong> Mixture of linear and log scales<br/>
              <strong>Discrete choices:</strong> Limit to most promising options
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-pink-300" : "text-pink-700"
            }`}>
              Advanced Considerations
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Multi-fidelity:</strong> Low-fidelity approximations first<br/>
              <strong>Warm-starting:</strong> Initialize with known good configurations<br/>
              <strong>Parallelization:</strong> Distributed tuning across machines<br/>
              <strong>Meta-learning:</strong> Transfer tuning knowledge between datasets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HyperparameterTuning;