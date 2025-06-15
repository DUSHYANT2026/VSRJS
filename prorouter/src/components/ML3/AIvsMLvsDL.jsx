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

function AIvsMLvsDL() {
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
      title: "🤖 Artificial Intelligence (AI)",
      id: "ai",
      description:
        "The broad discipline of creating intelligent machines capable of performing tasks that typically require human intelligence.",
      keyPoints: [
        "Encompasses all approaches to machine intelligence",
        "Includes both symbolic and sub-symbolic methods",
        "Goal: Create systems that can reason, learn, and act",
        "Applications: Robotics, NLP, expert systems, planning",
      ],
      detailedExplanation: [
        "AI Characteristics:",
        "- Reasoning and problem solving",
        "- Knowledge representation",
        "- Planning and decision making",
        "- Natural language processing",
        "- Perception (vision, speech)",
        "- Motion and manipulation",
        "",
        "Approaches:",
        "- Symbolic AI (rule-based systems)",
        "- Statistical methods",
        "- Computational intelligence",
        "- Machine learning (subset)",
        "",
        "Historical Milestones:",
        "- 1950: Turing Test proposed",
        "- 1956: Dartmouth Conference (AI founding)",
        "- 1997: Deep Blue beats chess champion",
        "- 2011: IBM Watson wins Jeopardy",
      ],
      code: {
        python: `# Simple Expert System (Rule-Based AI)
class MedicalDiagnosisSystem:
    def __init__(self):
        self.knowledge_base = {
            'flu': {'symptoms': ['fever', 'cough', 'fatigue']},
            'allergy': {'symptoms': ['sneezing', 'itchy eyes']},
            'migraine': {'symptoms': ['headache', 'nausea']}
        }
    
    def diagnose(self, symptoms):
        possible_conditions = []
        for condition, data in self.knowledge_base.items():
            if all(symptom in symptoms for symptom in data['symptoms']):
                possible_conditions.append(condition)
        return possible_conditions

# Usage
system = MedicalDiagnosisSystem()
print(system.diagnose(['fever', 'cough']))  # Output: ['flu']`,
        complexity: "Rule-based systems: O(n) where n is number of rules",
      },
    },
    {
      title: "📊 Machine Learning (ML)",
      id: "ml",
      description:
        "A subset of AI focused on developing algorithms that improve automatically through experience and data-driven pattern recognition.",
      keyPoints: [
        "Learns from data without explicit programming",
        "Three main types: Supervised, Unsupervised, Reinforcement",
        "Requires feature engineering",
        "Applications: Recommendation systems, fraud detection",
      ],
      detailedExplanation: [
        "ML Characteristics:",
        "- Data-driven pattern recognition",
        "- Improves with experience (data)",
        "- Generalizes from examples",
        "- Focuses on predictive accuracy",
        "",
        "Key Components:",
        "- Feature extraction/engineering",
        "- Model selection",
        "- Training process",
        "- Evaluation metrics",
        "",
        "Common Algorithms:",
        "- Linear Regression",
        "- Decision Trees",
        "- Support Vector Machines",
        "- Random Forests",
        "- k-Nearest Neighbors",
        "",
        "Workflow:",
        "1. Data collection and preprocessing",
        "2. Feature engineering",
        "3. Model training",
        "4. Evaluation",
        "5. Deployment",
      ],
      code: {
        python: `# Complete ML Pipeline Example
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Sample data
X, y = make_classification(n_samples=1000, n_features=20)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Create pipeline
ml_pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier(n_estimators=100))
])

# Train model
ml_pipeline.fit(X_train, y_train)

# Evaluate
predictions = ml_pipeline.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, predictions):.2f}")

# Feature importance
importances = ml_pipeline.named_steps['classifier'].feature_importances_
print("Feature importances:", importances)`,
        complexity: "Random Forest: O(m*n log n), where m=features, n=samples",
      },
    },
    {
      title: "🧠 Deep Learning (DL)",
      id: "dl",
      description:
        "A specialized subset of ML using hierarchical neural networks to model complex patterns in large datasets.",
      keyPoints: [
        "Uses artificial neural networks with multiple layers",
        "Automates feature extraction",
        "Excels with unstructured data (images, text, audio)",
        "Applications: Computer vision, speech recognition",
      ],
      detailedExplanation: [
        "DL Characteristics:",
        "- Multiple processing layers (deep architectures)",
        "- Automatic feature learning",
        "- Scalable with data and compute",
        "- State-of-the-art on many tasks",
        "",
        "Architectures:",
        "- Convolutional Neural Networks (CNNs)",
        "- Recurrent Neural Networks (RNNs)",
        "- Transformers",
        "- Autoencoders",
        "- Generative Adversarial Networks (GANs)",
        "",
        "Key Advances:",
        "- 2012: AlexNet breakthrough on ImageNet",
        "- 2014: GANs introduced",
        "- 2017: Transformer architecture",
        "- 2018: BERT for NLP",
        "- 2020: GPT-3 for generative tasks",
        "",
        "Implementation Considerations:",
        "- Requires large datasets",
        "- GPU/TPU acceleration essential",
        "- Hyperparameter tuning critical",
        "- Regularization techniques important",
      ],
      code: {
        python: `# Deep Learning with PyTorch
import torch
import torch.nn as nn
import torch.optim as optim

# Define neural network
class NeuralNet(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(NeuralNet, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size) 
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, num_classes)  
    
    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

# Initialize model
model = NeuralNet(input_size=784, hidden_size=500, num_classes=10)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(num_epochs):
    for i, (images, labels) in enumerate(train_loader):
        # Forward pass
        outputs = model(images)
        loss = criterion(outputs, labels)
        
        # Backward pass and optimize
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
    print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# CNN Example
class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3)
        self.fc1 = nn.Linear(64 * 6 * 6, 128)
        self.fc2 = nn.Linear(128, 10)
    
    def forward(self, x):
        x = self.pool(nn.functional.relu(self.conv1(x)))
        x = self.pool(nn.functional.relu(self.conv2(x)))
        x = x.view(-1, 64 * 6 * 6)
        x = nn.functional.relu(self.fc1(x))
        x = self.fc2(x)
        return x`,
        complexity:
          "Training: O(n × (k × d + m)), n=layers, k=kernel size, d=depth, m=parameters",
      },
    },
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
        AI vs ML vs DL: Understanding the Differences
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-fuchsia-900/20" : "bg-fuchsia-100"
        } border-l-4 border-fuchsia-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-fuchsia-500 text-fuchsia-800">
          Introduction to Machine Learning → Differences
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning
          (DL) are often used interchangeably but represent distinct concepts
          with hierarchical relationships. This section clarifies their
          differences and relationships.
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
                      Implementation Example
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

      {/* Hierarchical Relationship */}
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
          Hierarchical Relationship
        </h2>
        <div className="flex flex-col items-center gap-4">
          <div
            className={`px-8 py-4 rounded-lg font-bold text-xl text-center ${
              darkMode
                ? "bg-fuchsia-700 text-white"
                : "bg-fuchsia-600 text-white"
            }`}
          >
            Artificial Intelligence
          </div>
          <div
            className={`text-2xl ${
              darkMode ? "text-fuchsia-400" : "text-fuchsia-600"
            }`}
          >
            ↓
          </div>
          <div
            className={`px-6 py-3 rounded-lg font-bold text-lg text-center ${
              darkMode ? "bg-purple-700 text-white" : "bg-purple-600 text-white"
            }`}
          >
            Machine Learning
          </div>
          <div
            className={`text-2xl ${
              darkMode ? "text-purple-400" : "text-purple-600"
            }`}
          >
            ↓
          </div>
          <div
            className={`px-4 py-2 rounded-lg font-bold text-base text-center ${
              darkMode ? "bg-violet-700 text-white" : "bg-violet-600 text-white"
            }`}
          >
            Deep Learning
          </div>
        </div>
        <p
          className={`mt-6 text-center ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Deep Learning is a specialized subset of Machine Learning, which
          itself is a subset of Artificial Intelligence.
          <br />
          This hierarchy represents increasing specialization and technical
          complexity.
        </p>
      </div>

      {/* Comparative Analysis */}
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
          Comparative Analysis
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-fuchsia-900" : "bg-fuchsia-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Characteristic</th>
                <th className="p-4 text-left">AI</th>
                <th className="p-4 text-left">ML</th>
                <th className="p-4 text-left">DL</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Scope",
                  "Broadest (All intelligent systems)",
                  "Subset of AI",
                  "Subset of ML",
                ],
                [
                  "Data Dependency",
                  "Rules-based or Data-driven",
                  "Requires structured data",
                  "Requires big data",
                ],
                [
                  "Hardware Needs",
                  "Basic computing",
                  "Medium resources",
                  "GPUs/TPUs required",
                ],
                [
                  "Interpretability",
                  "High (Rule-based)",
                  "Moderate",
                  "Low (Black box)",
                ],
                [
                  "Development Approach",
                  "Symbolic logic + Learning",
                  "Statistical learning",
                  "Neural architectures",
                ],
                [
                  "Example Systems",
                  "Expert systems, Chatbots",
                  "Spam filters, Recommendation engines",
                  "Self-driving cars, GPT models",
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
          darkMode ? "bg-fuchsia-900/30" : "bg-fuchsia-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-fuchsia-300" : "text-fuchsia-800"
          }`}
        >
          Practical Implications
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
              When to Use Each Approach
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>
                <strong>AI:</strong> When explicit rules can solve the problem
              </li>
              <li>
                <strong>ML:</strong> When patterns exist in structured data
              </li>
              <li>
                <strong>DL:</strong> When dealing with unstructured data or
                complex patterns
              </li>
              <li>
                <strong>Hybrid:</strong> Often combine approaches for best
                results
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
                darkMode ? "text-fuchsia-300" : "text-fuchsia-800"
              }`}
            >
              Technology Evolution
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ["1950s-70s", "Symbolic AI and Expert Systems"],
                ["1980s-2000s", "Machine Learning foundations"],
                ["2010s", "Deep Learning revolution"],
                ["2020s", "Large Language Models"],
              ].map(([era, description], index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    darkMode
                      ? "bg-gray-700 border-fuchsia-500"
                      : "bg-fuchsia-50 border-fuchsia-400"
                  }`}
                >
                  <div
                    className={`font-bold ${
                      darkMode ? "text-fuchsia-400" : "text-fuchsia-700"
                    }`}
                  >
                    {era}
                  </div>
                  <div
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {description}
                  </div>
                </div>
              ))}
            </div>
          </div>

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
              Application Spectrum
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>AI:</strong> Comprehensive problem-solving across domains
              <br />
              <strong>ML:</strong> Pattern recognition in structured data
              <br />
              <strong>DL:</strong> Complex feature detection in unstructured
              data
              <br />
              <br />
              Most real-world systems combine elements of all three approaches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIvsMLvsDL;
