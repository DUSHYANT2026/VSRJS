import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const TimelineItem = ({ year, event, darkMode }) => (
  <div className="flex items-center space-x-4">
    <div
      className={`px-3 py-1 rounded-full font-semibold ${
        darkMode ? "bg-rose-600 text-white" : "bg-rose-500 text-white"
      }`}
    >
      {year}
    </div>
    <div className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
      {event}
    </div>
  </div>
);

function HistoryML() {
  const { darkMode } = useTheme();
  const [visibleSection, setVisibleSection] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const content = [
    {
      title: "🕰️ Origins of Machine Learning",
      id: "origins",
      description:
        "The foundational ideas and early developments that shaped modern machine learning.",
      keyPoints: [
        "1940s-50s: Birth of neural networks and cybernetics",
        "1950: Alan Turing's 'Computing Machinery and Intelligence'",
        "1956: Dartmouth Workshop - birth of AI as a field",
        "1957: Frank Rosenblatt's Perceptron",
      ],
      detailedExplanation: [
        "Early Pioneers:",
        "- Warren McCulloch & Walter Pitts (1943): First mathematical model of neural networks",
        "- Alan Turing (1950): Proposed the Turing Test and learning machines",
        "- Arthur Samuel (1959): Coined 'machine learning' while working on checkers program",
        "",
        "Key Breakthroughs:",
        "- Perceptron (1957): First trainable neural network model",
        "- Adaline/Madaline (1960): Practical neural network for real-world problems",
        "- Nearest Neighbor (1967): Early instance-based learning algorithm",
        "",
        "Theoretical Foundations:",
        "- Norbert Wiener's Cybernetics (1948)",
        "- Claude Shannon's Information Theory",
        "- Frank Rosenblatt's Perceptron Convergence Theorem",
        "- Marvin Minsky's work on AI foundations",
      ],
      timeline: [
        ["1943", "McCulloch-Pitts neuron model"],
        ["1950", "Turing's seminal paper on machine intelligence"],
        ["1956", "Dartmouth Conference - AI founding event"],
        ["1957", "Rosenblatt's Perceptron"],
        ["1959", "Arthur Samuel defines machine learning"],
      ],
    },
    {
      title: "📉 AI Winters and Resurgences",
      id: "winters",
      description:
        "Periods of reduced funding and interest followed by renewed excitement in AI/ML.",
      keyPoints: [
        "1974-80: First AI winter (Perceptron limitations)",
        "1987-93: Second AI winter (expert systems plateau)",
        "1990s: Resurgence with statistical approaches",
        "2000s: Emergence of practical applications",
      ],
      detailedExplanation: [
        "First AI Winter (1974-1980):",
        "- Minsky & Papert's 'Perceptrons' (1969) highlighted limitations",
        "- Reduced funding for neural network research",
        "- Shift to symbolic AI and expert systems",
        "",
        "Interim Progress:",
        "- Backpropagation algorithm (1974, rediscovered 1986)",
        "- Hopfield Networks (1982)",
        "- Boltzmann Machines (1985)",
        "",
        "Second AI Winter (1987-1993):",
        "- Expert systems failed to scale",
        "- LISP machine market collapse",
        "- DARPA cuts AI funding",
        "",
        "Factors in Resurgence:",
        "- Increased computational power",
        "- Availability of large datasets",
        "- Improved algorithms and theoretical understanding",
      ],
      timeline: [
        ["1969", "Minsky & Papert expose Perceptron limitations"],
        ["1974", "First AI winter begins"],
        ["1986", "Backpropagation rediscovered"],
        ["1987", "Second AI winter begins"],
        ["1995", "Support Vector Machines introduced"],
      ],
    },
    {
      title: "🚀 Modern Machine Learning Era",
      id: "modern",
      description:
        "The explosion of machine learning in the 21st century and current state of the field.",
      keyPoints: [
        "2006: Deep learning breakthrough (Hinton et al.)",
        "2012: AlexNet dominates ImageNet competition",
        "2015: ResNet enables very deep networks",
        "2017: Transformer architecture revolutionizes NLP",
      ],
      detailedExplanation: [
        "Key Developments:",
        "- Deep Belief Networks (2006): Enabled training of deep architectures",
        "- AlexNet (2012): Demonstrated power of GPUs for deep learning",
        "- Word2Vec (2013): Effective word embeddings",
        "- GANs (2014): Generative Adversarial Networks",
        "",
        "Architectural Advances:",
        "- ResNet (2015): Solved vanishing gradient problem",
        "- Transformer (2017): Self-attention mechanisms",
        "- BERT (2018): Bidirectional language models",
        "- GPT models (2018-2023): Large language models",
        "",
        "Current Landscape:",
        "- Widespread industry adoption",
        "- Ethical concerns and responsible AI",
        "- Hardware specialization (TPUs, neuromorphic chips)",
        "- Multimodal models and AGI research",
      ],
      timeline: [
        ["2006", "Deep learning renaissance begins"],
        ["2012", "AlexNet wins ImageNet"],
        ["2015", "ResNet enables 100+ layer networks"],
        ["2017", "Transformer architecture introduced"],
        ["2020", "GPT-3 demonstrates few-shot learning"],
      ],
    },
    {
      title: "🔮 Future Directions",
      id: "future",
      description:
        "Emerging trends and potential future developments in machine learning.",
      keyPoints: [
        "Self-supervised and unsupervised learning",
        "Neuromorphic computing and brain-inspired architectures",
        "Explainable AI (XAI) and interpretability",
        "AI safety and alignment research",
      ],
      detailedExplanation: [
        "Technical Frontiers:",
        "- Few-shot and zero-shot learning",
        "- Neural-symbolic integration",
        "- Continual/lifelong learning",
        "- Energy-efficient AI",
        "",
        "Societal Impact Areas:",
        "- AI for scientific discovery",
        "- Personalized medicine",
        "- Climate change modeling",
        "- Education and accessibility",
        "",
        "Challenges to Address:",
        "- Bias and fairness in ML systems",
        "- Privacy-preserving learning",
        "- Robustness to adversarial attacks",
        "- Sustainable AI development",
        "",
        "Potential Paradigm Shifts:",
        "- Quantum machine learning",
        "- Biological learning systems",
        "- Artificial general intelligence",
        "- Human-AI collaboration frameworks",
      ],
      timeline: [
        ["2022", "Large language models become mainstream"],
        ["2025", "Projected growth in edge AI"],
        ["2030", "Potential AGI milestones"],
        ["2040", "Speculative brain-computer interfaces"],
      ],
    },
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-rose-50 to-pink-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-rose-400 to-pink-400"
            : "bg-gradient-to-r from-rose-600 to-pink-600"
        } mb-8 sm:mb-12`}
      >
        History of Machine Learning
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-rose-900/20" : "bg-rose-100"
        } border-l-4 border-rose-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-rose-500 text-rose-800">
          Introduction to Machine Learning → History
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Machine learning has evolved through decades of research, setbacks,
          and breakthroughs. Understanding this history provides context for
          current techniques and insights into future developments in artificial
          intelligence.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-rose-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-rose-300" : "text-rose-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-rose-600 dark:text-rose-400">
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
                      Key Developments
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
                      Historical Context
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
                      Timeline
                    </h3>
                    <div className="space-y-3">
                      {section.timeline.map(([year, event], index) => (
                        <TimelineItem
                          key={index}
                          year={year}
                          event={event}
                          darkMode={darkMode}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </header>
          </article>
        ))}
      </div>

      {/* Key Figures */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? "text-rose-300" : "text-rose-800"
          }`}
        >
          Pioneers of Machine Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Alan Turing",
              contribution:
                "Theoretical foundations of computation and learning",
              period: "1930s-1950s",
            },
            {
              name: "Frank Rosenblatt",
              contribution: "Invented the Perceptron (early neural network)",
              period: "1950s-1960s",
            },
            {
              name: "Geoffrey Hinton",
              contribution: "Backpropagation, Deep Learning revival",
              period: "1980s-present",
            },
            {
              name: "Yann LeCun",
              contribution: "Convolutional Neural Networks",
              period: "1980s-present",
            },
            {
              name: "Yoshua Bengio",
              contribution: "Probabilistic models, sequence learning",
              period: "1990s-present",
            },
            {
              name: "Andrew Ng",
              contribution: "Popularizing ML education, practical applications",
              period: "2000s-present",
            },
          ].map((person, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-rose-50 border-rose-200"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-2 ${
                  darkMode ? "text-rose-300" : "text-rose-700"
                }`}
              >
                {person.name}
              </h3>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } mb-3`}
              >
                {person.contribution}
              </p>
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  darkMode
                    ? "bg-rose-900 text-rose-200"
                    : "bg-rose-200 text-rose-800"
                }`}
              >
                {person.period}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-rose-900/30" : "bg-rose-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-rose-300" : "text-rose-800"
          }`}
        >
          Lessons from ML History
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-rose-300" : "text-rose-800"
              }`}
            >
              Patterns of Progress
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>
                Alternating cycles of hype and disillusionment (AI winters)
              </li>
              <li>
                Theoretical breakthroughs often precede practical applications
                by decades
              </li>
              <li>
                Hardware advances frequently enable algorithmic breakthroughs
              </li>
              <li>Interdisciplinary cross-pollination drives innovation</li>
            </ul>
          </div>
          
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <h4
              style={{
                fontSize: "1.3rem",
                fontWeight: "600",
                color: "#7c3aed",
                marginBottom: "0.75rem",
              }}
            >
              Historical Context for Current ML
            </h4>
            <p
              style={{
                color: "#374151",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              Many "new" concepts in machine learning have deep historical
              roots:
              <br />
              <br />
              - Modern neural networks build on 1940s neurobiological models
              <br />
              - Attention mechanisms relate to 1990s memory networks
              <br />
              - GANs extend earlier work on adversarial training
              <br />- Transfer learning concepts date to 1970s psychological
              theories
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <h4
              style={{
                fontSize: "1.3rem",
                fontWeight: "600",
                color: "#7c3aed",
                marginBottom: "0.75rem",
              }}
            >
              Future Outlook
            </h4>
            <p
              style={{
                color: "#374151",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              Based on historical patterns, we can anticipate:
              <br />
              <br />
              - Continued cycles of hype and consolidation
              <br />
              - Gradual progress toward more general AI capabilities
              <br />
              - Increasing focus on ethical and societal impacts
              <br />- Convergence of symbolic and connectionist approaches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryML;
