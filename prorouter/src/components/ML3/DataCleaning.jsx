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
    className={`inline-block bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 dark:from-sky-600 dark:to-cyan-600 dark:hover:from-sky-700 dark:hover:to-cyan-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function DataCleaning() {
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
      title: "🧹 Handling Missing Values",
      id: "missing",
      description:
        "Techniques to identify and address missing data in datasets.",
      keyPoints: [
        "Identifying missing data patterns (MCAR, MAR, MNAR)",
        "Deletion methods (listwise, pairwise)",
        "Imputation methods (mean, median, mode, predictive)",
        "Advanced techniques (multiple imputation, KNN imputation)",
      ],
      detailedExplanation: [
        "Types of missingness:",
        "- MCAR (Missing Completely At Random): No pattern",
        "- MAR (Missing At Random): Related to observed data",
        "- MNAR (Missing Not At Random): Related to unobserved data",
        "",
        "Deletion approaches:",
        "- Listwise deletion: Remove entire rows with missing values",
        "- Pairwise deletion: Use available data for each calculation",
        "- Column deletion: Remove features with excessive missingness",
        "",
        "Imputation methods:",
        "- Simple imputation: Fill with mean/median/mode",
        "- Model-based: Use regression, random forests",
        "- Time-series: Forward/backward fill, interpolation",
        "- Advanced: Multiple imputation, matrix completion",
        "",
        "Implementation considerations:",
        "- Impact on statistical power",
        "- Preserving data distribution",
        "- Avoiding data leakage",
        "- Tracking missingness patterns",
      ],
      code: {
        python: `# Handling Missing Values in Python
import pandas as pd
import numpy as np
from sklearn.impute import SimpleImputer, KNNImputer

# Create sample data with missing values
data = pd.DataFrame({
    'age': [25, 30, np.nan, 40, 45, np.nan],
    'income': [50000, np.nan, 70000, np.nan, 90000, 100000],
    'education': ['BS', 'MS', np.nan, 'PhD', 'BS', 'MS']
})

# 1. Identify missing values
print("Missing values per column:")
print(data.isna().sum())

# 2. Simple deletion
data_drop_rows = data.dropna()  # Remove rows with any missing values
data_drop_cols = data.dropna(axis=1)  # Remove columns with any missing values

# 3. Simple imputation
# Numeric columns
num_imputer = SimpleImputer(strategy='median')
data['age_imputed'] = num_imputer.fit_transform(data[['age']])

# Categorical columns
cat_imputer = SimpleImputer(strategy='most_frequent')
data['education_imputed'] = cat_imputer.fit_transform(data[['education']])

# 4. Advanced imputation
# KNN imputation
knn_imputer = KNNImputer(n_neighbors=2)
data[['age', 'income']] = knn_imputer.fit_transform(data[['age', 'income']])

# 5. Multiple imputation (using fancyimpute)
# from fancyimpute import IterativeImputer
# mice_imputer = IterativeImputer()
# data_imputed = mice_imputer.fit_transform(data)

# 6. Custom imputation
data['income'] = data.groupby('education')['income'].transform(
    lambda x: x.fillna(x.mean())
)`,
        complexity: "Deletion: O(n), Simple imputation: O(n), KNN: O(n²)",
      },
    },
    {
      title: "📊 Outlier Detection",
      id: "outliers",
      description:
        "Identifying and handling anomalous data points that may skew analysis.",
      keyPoints: [
        "Statistical methods (Z-score, IQR)",
        "Visual methods (box plots, scatter plots)",
        "Machine learning approaches (Isolation Forest, DBSCAN)",
        "Domain-specific outlier thresholds",
      ],
      detailedExplanation: [
        "Statistical approaches:",
        "- Z-score: Standard deviations from mean",
        "- IQR method: 1.5*IQR rule",
        "- Modified Z-score: Robust to non-normal data",
        "- Percentile-based thresholds",
        "",
        "Visual methods:",
        "- Box plots for univariate outliers",
        "- Scatter plots for bivariate outliers",
        "- Histograms for distribution tails",
        "- Heatmaps for multivariate patterns",
        "",
        "ML-based techniques:",
        "- Isolation Forest: Tree-based anomaly detection",
        "- DBSCAN: Density-based clustering",
        "- One-Class SVM: Novelty detection",
        "- Autoencoders: Reconstruction error",
        "",
        "Handling strategies:",
        "- Removal: For clear measurement errors",
        "- Capping/winsorizing: For valid extreme values",
        "- Transformation: Log, Box-Cox",
        "- Separate modeling: For important outliers",
      ],
      code: {
        python: `# Outlier Detection in Python
import numpy as np
import pandas as pd
from sklearn.ensemble import IsolationForest
from sklearn.neighbors import LocalOutlierFactor

# Sample data with outliers
data = pd.DataFrame({
    'feature1': [1.2, 1.5, 1.7, 1.3, 1.4, 1.6, 10.2, 1.3, 1.5, -8.7],
    'feature2': [0.5, 0.7, 0.6, 0.8, 0.4, 0.9, 0.6, 12.3, 0.5, 0.7]
})

# 1. Statistical methods
# Z-score method
z_scores = (data - data.mean()) / data.std()
outliers_z = np.abs(z_scores) > 3  # Threshold of 3 standard deviations

# IQR method
Q1 = data.quantile(0.25)
Q3 = data.quantile(0.75)
IQR = Q3 - Q1
outliers_iqr = (data < (Q1 - 1.5 * IQR)) | (data > (Q3 + 1.5 * IQR))

# 2. Visualization
import matplotlib.pyplot as plt
import seaborn as sns

plt.figure(figsize=(10,6))
sns.boxplot(data=data)
plt.title('Boxplot for Outlier Detection')
plt.show()

# 3. Machine Learning approaches
# Isolation Forest
iso_forest = IsolationForest(contamination=0.1)
outliers_iso = iso_forest.fit_predict(data) == -1

# Local Outlier Factor (LOF)
lof = LocalOutlierFactor(n_neighbors=5, contamination=0.1)
outliers_lof = lof.fit_predict(data) == -1

# 4. Handling outliers
# Removal
data_clean = data[~outliers_iso]

# Capping (winsorizing)
def cap_outliers(series):
    q1 = series.quantile(0.05)
    q3 = series.quantile(0.95)
    return series.clip(q1, q3)

data_capped = data.apply(cap_outliers)

# Transformation
data_log = np.log1p(data)  # For positive skewed data

# Print results
print("Z-score outliers:\n", outliers_z)
print("IQR outliers:\n", outliers_iqr)
print("Isolation Forest outliers:", outliers_iso)
print("LOF outliers:", outliers_lof)`,
        complexity:
          "Z-score/IQR: O(n), Isolation Forest: O(n log n), LOF: O(n²)",
      },
    },
    {
      title: "🔄 Data Transformation",
      id: "transformation",
      description:
        "Techniques to modify data distributions and scale features appropriately.",
      keyPoints: [
        "Normalization (Min-Max, Z-score)",
        "Logarithmic and power transformations",
        "Encoding categorical variables",
        "Feature scaling for algorithms",
      ],
      detailedExplanation: [
        "Scaling methods:",
        "- Min-Max: Scales to [0,1] range",
        "- Standardization: Z-score normalization",
        "- Robust scaling: Uses median and IQR",
        "- MaxAbs: Scales by maximum absolute value",
        "",
        "Distribution transformations:",
        "- Log transform: For right-skewed data",
        "- Square root: Moderate right skew",
        "- Box-Cox: Power transform for normality",
        "- Quantile transform: Uniform distribution",
        "",
        "Categorical encoding:",
        "- One-hot: Binary columns for categories",
        "- Ordinal: Preserving ordered relationships",
        "- Target encoding: Using outcome statistics",
        "- Embedding: Learned representations",
        "",
        "Text-specific transforms:",
        "- TF-IDF: Term frequency-inverse doc freq",
        "- Word embeddings: Learned representations",
        "- Bag-of-words: Simple frequency counts",
        "- Hashing trick: Fixed-dimensional representation",
      ],
      code: {
        python: `# Data Transformation in Python
import pandas as pd
import numpy as np
from sklearn.preprocessing import (StandardScaler, MinMaxScaler, 
                                 RobustScaler, PowerTransformer,
                                 OneHotEncoder)

# Sample data
data = pd.DataFrame({
    'age': [25, 30, 35, 40, 45],
    'income': [50000, 60000, 70000, 80000, 90000],
    'gender': ['M', 'F', 'F', 'M', 'M'],
    'purchases': [1, 3, 0, 7, 20]  # Right-skewed
})

# 1. Scaling
# Standardization (Z-score)
scaler = StandardScaler()
data[['age_z', 'income_z']] = scaler.fit_transform(data[['age', 'income']])

# Min-Max scaling
minmax = MinMaxScaler()
data[['age_mm', 'income_mm']] = minmax.fit_transform(data[['age', 'income']])

# Robust scaling (for outliers)
robust = RobustScaler()
data[['purchases_robust']] = robust.fit_transform(data[['purchases']])

# 2. Distribution transformations
# Log transform
data['purchases_log'] = np.log1p(data['purchases'])

# Box-Cox transform (for positive values only)
pt = PowerTransformer(method='box-cox')
data[['purchases_bc']] = pt.fit_transform(data[['purchases']])

# 3. Categorical encoding
# One-hot encoding
ohe = OneHotEncoder(sparse=False)
gender_encoded = ohe.fit_transform(data[['gender']])
data[['gender_M', 'gender_F']] = gender_encoded

# Ordinal encoding (manual mapping)
education_map = {'HS': 1, 'BS': 2, 'MS': 3, 'PhD': 4}
data['education_ordinal'] = data['education'].map(education_map)

# 4. Text transformation example
from sklearn.feature_extraction.text import TfidfVectorizer

corpus = [
    'machine learning is awesome',
    'python is great for machine learning',
    'data science includes machine learning'
]

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(corpus)
print(pd.DataFrame(X.toarray(), columns=vectorizer.get_feature_names_out()))`,
        complexity: "Scaling: O(n), Encoding: O(n), Box-Cox: O(n log n)",
      },
    },
    {
      title: "🔗 Handling Duplicates",
      id: "duplicates",
      description:
        "Identifying and resolving duplicate or near-duplicate records in datasets.",
      keyPoints: [
        "Exact duplicate detection",
        "Fuzzy matching for near-duplicates",
        "Record linkage techniques",
        "Deduplication strategies",
      ],
      detailedExplanation: [
        "Exact duplicates:",
        "- Identical rows across all features",
        "- Common in merged datasets",
        "- Can indicate data collection issues",
        "",
        "Fuzzy matching:",
        "- Similar but not identical records",
        "- Text similarity measures (Levenshtein, Jaro-Winkler)",
        "- Numeric similarity thresholds",
        "- Hashing techniques (minhash, simhash)",
        "",
        "Record linkage:",
        "- Deterministic vs probabilistic matching",
        "- Blocking for efficient comparison",
        "- Entity resolution in knowledge graphs",
        "- Privacy-preserving record linkage",
        "",
        "Resolution strategies:",
        "- Keep first/last occurrence",
        "- Aggregate values from duplicates",
        "- Manual review for critical cases",
        "- Create consolidated records",
      ],
      code: {
        python: `# Handling Duplicates in Python
import pandas as pd
from fuzzywuzzy import fuzz
from recordlinkage import Compare

# Sample data with duplicates
data = pd.DataFrame({
    'name': ['John Smith', 'Jon Smith', 'John Smyth', 'Jane Doe', 'John Smith'],
    'email': ['jsmith@email.com', 'jsmith@email.com', 'js@other.com', 'jdoe@email.com', 'jsmith@email.com'],
    'phone': ['555-1234', '555-1234', '555-5678', '555-9876', '555-1234']
})

# 1. Exact duplicates
duplicates = data.duplicated()
exact_dupes = data[duplicates]
data_deduped = data.drop_duplicates()

# 2. Fuzzy matching for near-duplicates
# Calculate string similarity
data['name_similarity'] = data['name'].apply(
    lambda x: fuzz.ratio(x, 'John Smith')/100
)

# Identify potential matches
potential_dupes = data[data['name_similarity'] > 0.8]

# 3. Record linkage (more sophisticated)
# Create indexer
indexer = recordlinkage.Index()
indexer.block('email')  # Block on email for efficiency
pairs = indexer.index(data)

# Compare records
compare = recordlinkage.Compare()
compare.string('name', 'name', method='jarowinkler', threshold=0.85)
compare.exact('email', 'email')
compare.exact('phone', 'phone')

features = compare.compute(pairs, data)

# Get matches
matches = features[features.sum(axis=1) >= 2]

# 4. Deduplication strategies
# Option 1: Keep first occurrence
deduped_first = data.drop_duplicates(subset=['email'])

# Option 2: Aggregate duplicates
deduped_agg = data.groupby('email').agg({
    'name': 'first',
    'phone': lambda x: x.mode()[0]
}).reset_index()

# Option 3: Create consolidated record
def consolidate(group):
    return pd.Series({
        'name': max(group['name'], key=len),  # Take longest name
        'phone': group['phone'].mode()[0],
        'count': len(group)
    })

deduped_consolidated = data.groupby('email').apply(consolidate)`,
        complexity:
          "Exact duplicates: O(n), Fuzzy matching: O(n²), Blocking: O(n log n)",
      },
    },
    {
      title: "📝 Data Validation",
      id: "validation",
      description:
        "Ensuring data quality through systematic checks and constraints.",
      keyPoints: [
        "Range and constraint checking",
        "Data type validation",
        "Cross-field validation",
        "Schema enforcement",
      ],
      detailedExplanation: [
        "Validation techniques:",
        "- Range checks: Numerical value boundaries",
        "- Type checking: Ensuring correct data types",
        "- Pattern matching: Regex for strings",
        "- Uniqueness constraints: Primary keys",
        "",
        "Schema validation:",
        "- JSON Schema for structured data",
        "- Database constraints (NOT NULL, UNIQUE)",
        "- Pandas data types (category, datetime)",
        "- Custom validation functions",
        "",
        "Automated validation:",
        "- Great Expectations framework",
        "- Pandera for DataFrame validation",
        "- Custom assertion pipelines",
        "- Unit testing for data quality",
        "",
        "Error handling:",
        "- Logging validation failures",
        "- Creating data quality reports",
        "- Automated correction where possible",
        "- Manual review for complex cases",
      ],
      code: {
        python: `# Data Validation in Python
import pandas as pd
import numpy as np
import pandera as pa
from great_expectations.dataset import PandasDataset

# Sample data with potential issues
data = pd.DataFrame({
    'id': [1, 2, 3, 4, 5],
    'age': [25, 30, -5, 40, 150],
    'email': [
        'valid@email.com',
        'invalid',
        'another@email.com',
        'missing@email.com',
        'valid2@email.com'
    ],
    'signup_date': [
        '2022-01-01',
        '2022-02-30',  # Invalid date
        '2022-03-15',
        '2022-04-31',  # Invalid date
        '2022-05-10'
    ]
})

# 1. Basic validation
# Check for negative age
invalid_age = data[data['age'] < 0]

# Check email format
valid_email = data['email'].str.contains(r'^[^@]+@[^@]+\.[^@]+$')
invalid_emails = data[~valid_email]

# 2. Using Pandera for schema validation
schema = pa.DataFrameSchema({
    "id": pa.Column(int, checks=pa.Check.ge(0)),  # >= 0
    "age": pa.Column(int, checks=[
        pa.Check.ge(0),  # >= 0
        pa.Check.le(120)  # <= 120
    ]),
    "email": pa.Column(str, checks=pa.Check.str_matches(r'^[^@]+@[^@]+\.[^@]+$')),
    "signup_date": pa.Column(pa.DateTime, checks=pa.Check.not_null())
})

try:
    schema.validate(data, lazy=True)
except pa.errors.SchemaErrors as err:
    print("Validation errors:")
    print(err.failure_cases)

# 3. Using Great Expectations
ge_data = PandasDataset(data)

# Define expectations
ge_data.expect_column_values_to_be_between(
    "age", min_value=0, max_value=120
)
ge_data.expect_column_values_to_match_regex(
    "email", r'^[^@]+@[^@]+\.[^@]+$'
)
ge_data.expect_column_values_to_not_be_null("signup_date")

# Validate
validation = ge_data.validate()
print(validation)

# 4. Custom validation function
def validate_data(df):
    errors = []
    
    # Check age range
    if not df['age'].between(0, 120).all():
        errors.append("Age out of valid range (0-120)")
    
    # Check email format
    email_pattern = r'^[^@]+@[^@]+\.[^@]+$'
    if not df['email'].str.match(email_pattern).all():
        errors.append("Invalid email format")
    
    # Check dates
    try:
        pd.to_datetime(df['signup_date'], errors='raise')
    except ValueError:
        errors.append("Invalid date format")
    
    return errors

errors = validate_data(data)
if errors:
    print("Data validation errors:", errors)`,
        complexity:
          "Basic checks: O(n), Schema validation: O(n), Great Expectations: O(n)",
      },
    },
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-sky-50 to-cyan-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-sky-400 to-cyan-400"
            : "bg-gradient-to-r from-sky-600 to-cyan-600"
        } mb-8 sm:mb-12`}
      >
        Data Cleaning for Machine Learning
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-sky-900/20" : "bg-sky-100"
        } border-l-4 border-sky-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-sky-500 text-sky-800">
          Data Preprocessing → Data Cleaning
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Data cleaning is the crucial first step in any machine learning
          pipeline, transforming raw data into a reliable foundation for
          analysis and modeling. This section covers essential techniques for
          handling real-world data quality issues.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-sky-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-sky-300" : "text-sky-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-sky-600 dark:text-sky-400">
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
                      Implementation
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

      {/* Workflow Diagram */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? "text-sky-300" : "text-sky-800"
          }`}
        >
          Data Cleaning Workflow
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🔍",
              title: "Data Profiling",
              description: "Understand structure and quality",
            },
            {
              icon: "🧹",
              title: "Missing Data",
              description: "Identify and handle gaps",
            },
            {
              icon: "📊",
              title: "Outliers",
              description: "Detect and address anomalies",
            },
            {
              icon: "🔄",
              title: "Transformation",
              description: "Normalize and encode",
            },
            {
              icon: "🔗",
              title: "Deduplication",
              description: "Remove duplicate records",
            },
            {
              icon: "✅",
              title: "Validation",
              description: "Ensure data quality",
            },
          ].map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-sky-50 border-sky-200"
              }`}
            >
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  darkMode ? "text-sky-300" : "text-sky-700"
                }`}
              >
                {step.title}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-sky-900/30" : "bg-sky-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-sky-300" : "text-sky-800"
          }`}
        >
          Data Cleaning Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-sky-300" : "text-sky-800"
              }`}
            >
              Process Guidelines
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Always profile data before cleaning</li>
              <li>Document all cleaning steps for reproducibility</li>
              <li>Validate after each major cleaning operation</li>
              <li>Maintain raw data separately from cleaned versions</li>
            </ul>
          </div>

          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-sky-300" : "text-sky-800"
              }`}
            >
              Technical Recommendations
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Automation:</strong> Create reusable cleaning pipelines
              <br />
              <strong>Versioning:</strong> Track changes to cleaning procedures
              <br />
              <strong>Testing:</strong> Implement data quality tests
              <br />
              <strong>Monitoring:</strong> Set up alerts for data quality issues
            </p>
          </div>

          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-sky-300" : "text-sky-800"
              }`}
            >
              ML-Specific Considerations
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Train-test consistency:</strong> Apply same cleaning to
              all splits
              <br />
              <strong>Feature engineering:</strong> Clean in context of feature
              creation
              <br />
              <strong>Model sensitivity:</strong> Tailor cleaning to model
              requirements
              <br />
              <strong>Monitoring:</strong> Track data drift in production
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataCleaning;
