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
    className={`inline-block bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function Probability() {
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
      title: "📊 Probability Distributions",
      id: "distributions",
      description: "Mathematical functions that describe the likelihood of different outcomes in ML contexts.",
      keyPoints: [
        "Normal (Gaussian) distribution: Bell curve for continuous data",
        "Binomial distribution: Discrete counts with fixed trials",
        "Poisson distribution: Modeling rare event counts",
        "Exponential distribution: Time between events"
      ],
      detailedExplanation: [
        "Key distributions in machine learning:",
        "- Normal: Used in Gaussian processes, noise modeling",
        "- Binomial: Binary classification outcomes",
        "- Poisson: Count data in NLP (word occurrences)",
        "- Exponential: Survival analysis, time-to-event data",
        "",
        "Distribution properties:",
        "- Parameters (μ, σ for Normal; λ for Poisson)",
        "- Moments (mean, variance, skewness, kurtosis)",
        "- Probability density/mass functions",
        "",
        "Applications in ML:",
        "- Assumptions in linear models (normality of errors)",
        "- Naive Bayes classifier distributions",
        "- Prior distributions in Bayesian methods",
        "- Noise modeling in probabilistic models"
      ],
      code: {
        python: `# Working with distributions in ML
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

# Normal distribution for modeling errors
error_dist = stats.norm(loc=0, scale=1)
samples = error_dist.rvs(1000)

# Binomial for classification confidence
n_trials = 100
p_success = 0.7
binom_dist = stats.binom(n_trials, p_success)
confidence = binom_dist.pmf(70)  # P(70 successes)

# Poisson for word counts in NLP
lambda_words = 5  # Average words per document
poisson_dist = stats.poisson(lambda_words)
word_prob = poisson_dist.pmf(3)  # P(3 words)

# Plotting distributions
x = np.linspace(0, 10, 100)
plt.plot(x, stats.norm.pdf(x, 2, 1), label='Normal')
plt.plot(x, stats.poisson.pmf(x, 3), label='Poisson')
plt.legend()
plt.title('ML Probability Distributions')
plt.show()`,
        complexity: "Sampling: O(1) per sample, PDF/PMF: O(1)"
      }
    },
    {
      title: "📉 Descriptive Statistics",
      id: "descriptive",
      description: "Measures that summarize important features of datasets in machine learning.",
      keyPoints: [
        "Central tendency: Mean, median, mode",
        "Dispersion: Variance, standard deviation, IQR",
        "Shape: Skewness, kurtosis",
        "Correlation: Pearson, Spearman coefficients"
      ],
      detailedExplanation: [
        "Essential statistics for ML:",
        "- Mean: Sensitive to outliers (use trimmed mean for robustness)",
        "- Median: Robust central value for skewed data",
        "- Variance: Measures spread of features",
        "- Correlation: Identifies feature relationships",
        "",
        "Data exploration with statistics:",
        "- Detecting outliers (z-scores, IQR method)",
        "- Feature scaling decisions (standard vs. robust scaling)",
        "- Identifying skewed features for transformation",
        "- Multicollinearity detection in regression",
        "",
        "Implementation considerations:",
        "- Numerical stability in calculations",
        "- Handling missing values",
        "- Weighted statistics for imbalanced data",
        "- Streaming/online computation for big data"
      ],
      code: {
        python: `# Descriptive statistics for ML datasets
import numpy as np
import pandas as pd
from scipy import stats

# Sample dataset
data = pd.DataFrame({
    'age': [25, 30, 35, 40, 45, 200],  # Contains outlier
    'income': [50000, 60000, 70000, 80000, 90000, 100000]
})

# Robust statistics
median = np.median(data['age'])
iqr = stats.iqr(data['age'])
trimmed_mean = stats.trim_mean(data['age'], 0.1)  # 10% trimmed

# Correlation analysis
pearson_corr = data.corr(method='pearson')
spearman_corr = data.corr(method='spearman')

# Outlier detection
z_scores = np.abs(stats.zscore(data))
outliers = (z_scores > 3).any(axis=1)

# Feature scaling info
mean = np.mean(data, axis=0)
std = np.std(data, axis=0)
robust_scale = (data - median) / iqr

print(f"Skewness: {stats.skew(data['income'])}")
print(f"Kurtosis: {stats.kurtosis(data['income'])}")`,
        complexity: "Basic stats: O(n), Correlation: O(n²), Outlier detection: O(n)"
      }
    },
    {
      title: "🔄 Bayes' Theorem",
      id: "bayes",
      description: "Fundamental rule for updating probabilities based on new evidence in ML models.",
      keyPoints: [
        "P(A|B) = P(B|A)P(A)/P(B)",
        "Prior, likelihood, and posterior probabilities",
        "Naive Bayes classifier assumptions",
        "Bayesian vs frequentist approaches"
      ],
      detailedExplanation: [
        "Bayesian machine learning:",
        "- Prior: Initial belief about parameters",
        "- Likelihood: Probability of data given parameters",
        "- Posterior: Updated belief after seeing data",
        "- Evidence: Marginal probability of data",
        "",
        "Applications in ML:",
        "- Naive Bayes for text classification",
        "- Bayesian networks for probabilistic reasoning",
        "- Bayesian optimization for hyperparameter tuning",
        "- Markov Chain Monte Carlo (MCMC) for inference",
        "",
        "Computational aspects:",
        "- Conjugate priors for analytical solutions",
        "- Approximate inference methods (Variational Bayes)",
        "- Probabilistic programming (PyMC3, Stan)",
        "- Bayesian neural networks"
      ],
      code: {
        python: `# Bayesian ML Examples
from sklearn.naive_bayes import GaussianNB
import pymc3 as pm
import numpy as np

# Naive Bayes Classifier
X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])
y = np.array([1, 1, 1, 2, 2, 2])
model = GaussianNB()
model.fit(X, y)

# Bayesian Inference with PyMC3
with pm.Model() as bayesian_model:
    # Priors
    mu = pm.Normal('mu', mu=0, sigma=1)
    sigma = pm.HalfNormal('sigma', sigma=1)
    
    # Likelihood
    obs = pm.Normal('obs', mu=mu, sigma=sigma, observed=np.random.randn(100))
    
    # Inference
    trace = pm.sample(1000, tune=1000)

# Bayesian Linear Regression
with pm.Model() as linear_model:
    # Priors
    alpha = pm.Normal('alpha', mu=0, sigma=10)
    beta = pm.Normal('beta', mu=0, sigma=10, shape=2)
    sigma = pm.HalfNormal('sigma', sigma=1)
    
    # Linear model
    mu = alpha + beta[0]*X[:,0] + beta[1]*X[:,1]
    
    # Likelihood
    likelihood = pm.Normal('y', mu=mu, sigma=sigma, observed=y)
    
    # Inference
    trace = pm.sample(2000)`,
        complexity: "Naive Bayes: O(nd), MCMC: O(n²) or worse"
      }
    },
    {
      title: "📝 Hypothesis Testing",
      id: "testing",
      description: "Statistical methods for making data-driven decisions in ML model evaluation.",
      keyPoints: [
        "Null and alternative hypotheses",
        "p-values and significance levels",
        "Type I and Type II errors",
        "Common tests: t-test, ANOVA, chi-square"
      ],
      detailedExplanation: [
        "ML applications of hypothesis testing:",
        "- Feature selection (testing feature importance)",
        "- Model comparison (A/B testing different models)",
        "- Detecting data drift (testing distribution changes)",
        "- Evaluating treatment effects in causal ML",
        "",
        "Key concepts:",
        "- Test statistics and their distributions",
        "- Confidence intervals vs hypothesis tests",
        "- Multiple testing correction (Bonferroni, FDR)",
        "- Power analysis for test design",
        "",
        "Practical considerations:",
        "- Assumptions of tests (normality, independence)",
        "- Non-parametric alternatives (Mann-Whitney)",
        "- Bootstrap methods for complex cases",
        "- Bayesian hypothesis testing"
      ],
      code: {
        python: `# Hypothesis Testing in ML
from scipy import stats
import numpy as np
from statsmodels.stats.multitest import multipletests

# Compare two models' accuracies
model_a_scores = np.array([0.85, 0.82, 0.83, 0.86, 0.84])
model_b_scores = np.array([0.87, 0.89, 0.88, 0.86, 0.87])

# Paired t-test (same test set)
t_stat, p_value = stats.ttest_rel(model_a_scores, model_b_scores)

# Multiple feature tests
features = np.random.randn(100, 10)  # 100 samples, 10 features
target = np.random.randn(100)
p_values = [stats.pearsonr(features[:,i], target)[1] for i in range(10)]

# Correct for multiple testing
rejected, corrected_p, _, _ = multipletests(p_values, alpha=0.05, method='fdr_bh')

# ANOVA for multiple models
model_c_scores = np.array([0.88, 0.87, 0.89, 0.90, 0.88])
f_stat, anova_p = stats.f_oneway(model_a_scores, model_b_scores, model_c_scores)

# Bootstrap hypothesis test
def bootstrap_test(x, y, n_boot=10000):
    obs_diff = np.mean(x) - np.mean(y)
    combined = np.concatenate([x, y])
    bs_diffs = []
    for _ in range(n_boot):
        shuffled = np.random.permutation(combined)
        bs_diff = np.mean(shuffled[:len(x)]) - np.mean(shuffled[len(x):])
        bs_diffs.append(bs_diff)
    p_value = (np.abs(bs_diffs) >= np.abs(obs_diff)).mean()
    return p_value`,
        complexity: "t-tests: O(n), ANOVA: O(kn), Bootstrap: O(n_boot * n)"
      }
    },
    {
      title: "📏 Confidence Intervals",
      id: "intervals",
      description: "Range estimates that quantify uncertainty in ML model parameters and predictions.",
      keyPoints: [
        "Frequentist confidence intervals",
        "Bayesian credible intervals",
        "Bootstrap confidence intervals",
        "Interpretation and common misconceptions"
      ],
      detailedExplanation: [
        "Usage in machine learning:",
        "- Model parameter uncertainty (weight confidence)",
        "- Performance metric ranges (accuracy intervals)",
        "- Prediction intervals for probabilistic forecasts",
        "- Hyperparameter optimization uncertainty",
        "",
        "Construction methods:",
        "- Normal approximation (Wald intervals)",
        "- Student's t-distribution for small samples",
        "- Profile likelihood for complex models",
        "- Non-parametric bootstrap resampling",
        "",
        "Advanced topics:",
        "- Simultaneous confidence bands",
        "- Bayesian highest density intervals",
        "- Conformal prediction intervals",
        "- Uncertainty quantification in deep learning"
      ],
      code: {
        python: `# Confidence Intervals in ML
import numpy as np
from scipy import stats
from sklearn.utils import resample

# Linear regression confidence intervals
X = np.random.randn(100, 3)  # 100 samples, 3 features
y = 2*X[:,0] + 0.5*X[:,1] - X[:,2] + np.random.randn(100)
X_with_intercept = np.column_stack([np.ones(100), X])

# Calculate OLS parameters and confidence intervals
params = np.linalg.inv(X_with_intercept.T @ X_with_intercept) @ X_with_intercept.T @ y
residuals = y - X_with_intercept @ params
sigma_squared = residuals.T @ residuals / (100 - 4)
param_cov = sigma_squared * np.linalg.inv(X_with_intercept.T @ X_with_intercept)
std_errors = np.sqrt(np.diag(param_cov))
ci_lower = params - 1.96 * std_errors
ci_upper = params + 1.96 * std_errors

# Bootstrap confidence for model accuracy
def accuracy(y_true, y_pred):
    return np.mean(y_true == y_pred)

y_true = np.random.randint(0, 2, 100)
y_pred = np.random.randint(0, 2, 100)
accuracies = [accuracy(*resample(y_true, y_pred)) for _ in range(1000)]
bootstrap_ci = np.percentile(accuracies, [2.5, 97.5])

# Bayesian credible interval (using PyMC3 trace)
# Assuming trace from previous Bayesian model
credible_interval = np.percentile(trace['mu'], [2.5, 97.5])

# Prediction intervals
def prediction_interval(X_new, X, y, alpha=0.05):
    n = len(X)
    X_with_intercept = np.column_stack([np.ones(n), X])
    params = np.linalg.inv(X_with_intercept.T @ X_with_intercept) @ X_with_intercept.T @ y
    pred = params[0] + X_new @ params[1:]
    se = np.sqrt(np.sum((y - X_with_intercept @ params)**2) / (n - 2))
    t_val = stats.t.ppf(1 - alpha/2, n-2)
    return pred - t_val*se, pred + t_val*se`,
        complexity: "Analytical CIs: O(n²), Bootstrap: O(n_boot * n), Bayesian: depends on sampler"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-emerald-50 to-teal-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-emerald-400 to-teal-400"
            : "bg-gradient-to-r from-emerald-600 to-teal-600"
        } mb-8 sm:mb-12`}
      >
        Probability & Statistics for Machine Learning
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-emerald-900/20" : "bg-emerald-100"
        } border-l-4 border-emerald-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-emerald-500 text-emerald-800">
          Mathematics for ML → Probability & Statistics
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Probability theory and statistics form the foundation for understanding uncertainty and making 
          data-driven decisions in machine learning. This section covers the essential concepts with 
          direct applications to ML models, including probability distributions, statistical inference, 
          and Bayesian methods.
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
                    darkMode ? "text-emerald-300" : "text-emerald-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-emerald-600 dark:text-emerald-400">
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

      {/* Comparison Table - Updated header color */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? "text-emerald-300" : "text-emerald-800"
          }`}
        >
          Statistical Concepts in ML
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-emerald-900" : "bg-emerald-600"
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
                  "Probability Distributions",
                  "Modeling uncertainty",
                  "Naive Bayes classifiers",
                  "scipy.stats, TensorFlow Probability",
                ],
                [
                  "Descriptive Statistics",
                  "Data exploration",
                  "Feature engineering",
                  "numpy, pandas",
                ],
                [
                  "Bayes' Theorem",
                  "Probabilistic modeling",
                  "Bayesian networks",
                  "PyMC3, Stan",
                ],
                [
                  "Hypothesis Testing",
                  "Model evaluation",
                  "Feature selection",
                  "scipy.stats, statsmodels",
                ],
                [
                  "Confidence Intervals",
                  "Uncertainty quantification",
                  "Model performance reporting",
                  "scipy, bootstrapped",
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

      {/* Key Takeaways - Updated background */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-emerald-900/30" : "bg-amber-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-emerald-300" : "text-emerald-800"
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
              Essential Statistics for ML
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>
                Understanding distributions helps select appropriate models and loss functions
              </li>
              <li>
                Bayesian methods provide principled uncertainty quantification
              </li>
              <li>
                Hypothesis testing validates model improvements and feature importance
              </li>
              <li>
                Confidence intervals communicate model reliability to stakeholders
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
              Practical Implementation Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              Modern ML implementations leverage:
              <br />
              <br />
              <strong>For large datasets:</strong> Streaming algorithms for statistics<br />
              <strong>For high dimensions:</strong> Regularized covariance estimates<br />
              <strong>For non-normal data:</strong> Appropriate transformations<br />
              <strong>For production:</strong> Monitoring statistical properties for drift
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
              <strong>Probabilistic Programming:</strong> Flexible Bayesian modeling<br />
              <strong>Causal Inference:</strong> Understanding treatment effects<br />
              <strong>Time Series:</strong> Modeling temporal dependencies<br />
              <strong>Reinforcement Learning:</strong> Uncertainty-aware policies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Probability;