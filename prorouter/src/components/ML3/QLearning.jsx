import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-fuchsia-100 dark:border-fuchsia-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 dark:from-fuchsia-600 dark:to-pink-600 dark:hover:from-fuchsia-700 dark:hover:to-pink-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 dark:focus:ring-fuchsia-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function QLearning() {
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
      title: "🧠 Q-Learning Fundamentals",
      id: "fundamentals",
      description: "A model-free reinforcement learning algorithm that learns the value of actions in particular states.",
      keyPoints: [
        "Off-policy temporal difference learning",
        "Q-table stores state-action values",
        "Bellman equation for value updates",
        "Exploration vs exploitation tradeoff"
      ],
      detailedExplanation: [
        "Core Concepts:",
        "- Q(s,a): Expected future reward for taking action a in state s",
        "- γ (gamma): Discount factor for future rewards",
        "- α (alpha): Learning rate for updates",
        "- ε (epsilon): Exploration rate",
        "",
        "Algorithm Steps:",
        "1. Initialize Q-table with zeros or random values",
        "2. Observe current state s",
        "3. Choose action a (using ε-greedy policy)",
        "4. Take action, observe reward r and new state s'",
        "5. Update Q(s,a) using Bellman equation",
        "6. Repeat until convergence or episode completion",
        "",
        "Key Properties:",
        "- Guaranteed to converge to optimal policy (given sufficient exploration)",
        "- Doesn't require environment model",
        "- Can handle stochastic environments",
        "- Tabular method (limited by state space size)"
      ],
      code: {
        python: `# Q-Learning Implementation
import numpy as np
import random

class QLearningAgent:
    def __init__(self, state_size, action_size):
        self.state_size = state_size
        self.action_size = action_size
        self.q_table = np.zeros((state_size, action_size))
        self.alpha = 0.1  # learning rate
        self.gamma = 0.99  # discount factor
        self.epsilon = 1.0  # exploration rate
        self.epsilon_min = 0.01
        self.epsilon_decay = 0.995
    
    def act(self, state):
        if random.random() < self.epsilon:
            return random.randint(0, self.action_size-1)  # explore
        return np.argmax(self.q_table[state])  # exploit
    
    def learn(self, state, action, reward, next_state, done):
        current_q = self.q_table[state, action]
        max_next_q = np.max(self.q_table[next_state])
        
        # Bellman equation update
        new_q = current_q + self.alpha * (
            reward + self.gamma * max_next_q * (1 - done) - current_q
        )
        self.q_table[state, action] = new_q
        
        # Decay exploration rate
        if done:
            self.epsilon = max(self.epsilon_min, self.epsilon * self.epsilon_decay)

# Example usage
env = GridWorld()  # hypothetical environment
agent = QLearningAgent(env.state_size, env.action_size)

for episode in range(1000):
    state = env.reset()
    done = False
    
    while not done:
        action = agent.act(state)
        next_state, reward, done = env.step(action)
        agent.learn(state, action, reward, next_state, done)
        state = next_state`,
        complexity: "Time: O(n_episodes * n_steps), Space: O(n_states * n_actions)"
      }
    },
    {
      title: "⚙️ Deep Q-Networks (DQN)",
      id: "dqn",
      description: "Extension of Q-learning that uses neural networks to approximate the Q-function for large state spaces.",
      keyPoints: [
        "Q-function approximation with neural networks",
        "Experience replay for stability",
        "Target network to reduce correlation",
        "Handles high-dimensional state spaces"
      ],
      detailedExplanation: [
        "Key Innovations:",
        "- Replaces Q-table with neural network Q(s,a;θ)",
        "- Experience replay: Stores transitions (s,a,r,s') in memory",
        "- Target network: Separate network for stable Q-targets",
        "- Frame stacking for temporal information",
        "",
        "Training Process:",
        "1. Store experiences in replay buffer",
        "2. Sample random minibatch from buffer",
        "3. Compute target Q-values using target network",
        "4. Update main network via gradient descent",
        "5. Periodically update target network",
        "",
        "Advanced Variants:",
        "- Double DQN: Reduces overestimation bias",
        "- Dueling DQN: Separates value and advantage streams",
        "- Prioritized Experience Replay: Important transitions sampled more often",
        "- Rainbow: Combines multiple improvements",
        "",
        "Applications:",
        "- Atari game playing (original DQN application)",
        "- Robotics control",
        "- Autonomous systems",
        "- Resource management"
      ],
      code: {
        python: `# Deep Q-Network Implementation
import numpy as np
import random
from collections import deque
import tensorflow as tf
from tensorflow.keras import layers

class DQNAgent:
    def __init__(self, state_shape, action_size):
        self.state_shape = state_shape
        self.action_size = action_size
        self.memory = deque(maxlen=10000)
        self.gamma = 0.95  # discount rate
        self.epsilon = 1.0  # exploration rate
        self.epsilon_min = 0.01
        self.epsilon_decay = 0.995
        self.learning_rate = 0.001
        self.model = self._build_model()
        self.target_model = self._build_model()
        self.update_target_model()
    
    def _build_model(self):
        model = tf.keras.Sequential([
            layers.Dense(24, input_dim=self.state_shape, activation='relu'),
            layers.Dense(24, activation='relu'),
            layers.Dense(self.action_size, activation='linear')
        ])
        model.compile(loss='mse', optimizer=tf.keras.optimizers.Adam(lr=self.learning_rate))
        return model
    
    def update_target_model(self):
        self.target_model.set_weights(self.model.get_weights())
    
    def remember(self, state, action, reward, next_state, done):
        self.memory.append((state, action, reward, next_state, done))
    
    def act(self, state):
        if np.random.rand() <= self.epsilon:
            return random.randrange(self.action_size)
        act_values = self.model.predict(state)
        return np.argmax(act_values[0])
    
    def replay(self, batch_size):
        minibatch = random.sample(self.memory, batch_size)
        
        states = np.array([t[0] for t in minibatch])
        actions = np.array([t[1] for t in minibatch])
        rewards = np.array([t[2] for t in minibatch])
        next_states = np.array([t[3] for t in minibatch])
        dones = np.array([t[4] for t in minibatch])
        
        targets = self.model.predict(states)
        next_q_values = self.target_model.predict(next_states)
        
        for i in range(batch_size):
            if dones[i]:
                targets[i][actions[i]] = rewards[i]
            else:
                targets[i][actions[i]] = rewards[i] + self.gamma * np.amax(next_q_values[i])
        
        self.model.fit(states, targets, epochs=1, verbose=0)
        
        if self.epsilon > self.epsilon_min:
            self.epsilon *= self.epsilon_decay`,
        complexity: "Time: O(n_episodes * n_steps * training_time), Space: O(replay_buffer_size + model_size)"
      }
    },
    {
      title: "🔄 Policy Gradient Methods",
      id: "policy-gradients",
      description: "Alternative approach that directly optimizes the policy rather than learning value functions.",
      keyPoints: [
        "Directly parameterizes and optimizes policy",
        "Gradient ascent on expected reward",
        "Better for continuous action spaces",
        "Includes REINFORCE, Actor-Critic, PPO"
      ],
      detailedExplanation: [
        "Comparison with Q-Learning:",
        "- Q-learning: Learns value function, derives policy",
        "- Policy gradients: Learns policy directly",
        "- Generally higher variance but more flexible",
        "",
        "Key Algorithms:",
        "- REINFORCE: Monte Carlo policy gradient",
        "- Actor-Critic: Combines value and policy learning",
        "- A3C: Asynchronous advantage actor-critic",
        "- PPO: Proximal policy optimization (state-of-the-art)",
        "",
        "Advantages:",
        "- Naturally handles continuous action spaces",
        "- Can learn stochastic policies",
        "- Better convergence properties in some cases",
        "- More stable in certain environments",
        "",
        "Implementation Considerations:",
        "- Importance of baseline reduction",
        "- Trust region methods for stability",
        "- Parallel sampling for variance reduction",
        "- Entropy regularization for exploration"
      ],
      code: {
        python: `# REINFORCE Policy Gradient Implementation
import numpy as np
import tensorflow as tf
from tensorflow.keras import layers

class PolicyGradientAgent:
    def __init__(self, state_size, action_size):
        self.state_size = state_size
        self.action_size = action_size
        self.gamma = 0.99  # discount factor
        self.learning_rate = 0.01
        self.states = []
        self.actions = []
        self.rewards = []
        self.model = self._build_model()
    
    def _build_model(self):
        model = tf.keras.Sequential([
            layers.Dense(24, input_dim=self.state_size, activation='relu'),
            layers.Dense(24, activation='relu'),
            layers.Dense(self.action_size, activation='softmax')
        ])
        optimizer = tf.keras.optimizers.Adam(lr=self.learning_rate)
        model.compile(loss='categorical_crossentropy', optimizer=optimizer)
        return model
    
    def act(self, state):
        state = np.reshape(state, [1, self.state_size])
        probs = self.model.predict(state)[0]
        action = np.random.choice(self.action_size, p=probs)
        return action
    
    def remember(self, state, action, reward):
        self.states.append(state)
        self.actions.append(action)
        self.rewards.append(reward)
    
    def train(self):
        discounted_rewards = self._discount_rewards()
        
        states = np.vstack(self.states)
        actions = np.array(self.actions)
        
        # One-hot encode actions
        actions_one_hot = np.zeros([len(actions), self.action_size])
        actions_one_hot[np.arange(len(actions)), actions] = 1
        
        # Scale rewards
        discounted_rewards -= np.mean(discounted_rewards)
        discounted_rewards /= np.std(discounted_rewards)
        
        # Multiply actions by discounted rewards
        actions_one_hot *= discounted_rewards[:, None]
        
        # Train
        self.model.train_on_batch(states, actions_one_hot)
        
        # Reset episode memory
        self.states = []
        self.actions = []
        self.rewards = []
    
    def _discount_rewards(self):
        discounted = np.zeros_like(self.rewards)
        running_sum = 0
        for t in reversed(range(len(self.rewards))):
            running_sum = running_sum * self.gamma + self.rewards[t]
            discounted[t] = running_sum
        return discounted`,
        complexity: "Time: O(n_episodes * n_steps * training_time), Space: O(model_size + episode_memory)"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-fuchsia-50 to-pink-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-fuchsia-400 to-pink-400"
            : "bg-gradient-to-r from-fuchsia-600 to-pink-600"
        } mb-8 sm:mb-12`}
      >
        Q-Learning and RL
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-fuchsia-900/20" : "bg-fuchsia-100"
        } border-l-4 border-fuchsia-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-fuchsia-500 text-fuchsia-800">
          Reinforcement Learning → Q-Learning
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Q-Learning is a fundamental reinforcement learning algorithm that enables agents to learn optimal 
          policies through trial-and-error interactions with an environment. This section covers both 
          classical Q-Learning and its modern deep learning extensions.
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
                      darkMode ? "bg-pink-900/30" : "bg-pink-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-pink-400 text-pink-600">
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
          RL Algorithm Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-fuchsia-900" : "bg-fuchsia-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Algorithm</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Strengths</th>
                <th className="p-4 text-left">Limitations</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Q-Learning", "Value-based", "Simple, guaranteed convergence", "Discrete actions, small state spaces"],
                ["Deep Q-Network (DQN)", "Value-based", "Handles high-dim states", "Overestimation bias, sample inefficient"],
                ["Policy Gradients", "Policy-based", "Continuous actions, stochastic policies", "High variance, slow convergence"],
                ["Actor-Critic", "Hybrid", "Lower variance than pure policy gradients", "Complex to implement/tune"],
                ["PPO", "Policy-based", "Stable, good performance", "Many hyperparameters"]
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
          RL Practitioner's Guide
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
              When to Use Q-Learning
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Discrete action spaces with limited possibilities</li>
              <li>Environments with small to medium state spaces</li>
              <li>Problems where exploration is straightforward</li>
              <li>When you need interpretable value functions</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-fuchsia-300" : "text-fuchsia-800"
            }`}>
              Implementation Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Hyperparameter Tuning:</strong> Start with α=0.1, γ=0.99, ε=1.0 (decay 0.995)<br/>
              <strong>Reward Shaping:</strong> Scale rewards to reasonable range (-1 to 1 works well)<br/>
              <strong>Exploration:</strong> Use ε-greedy or Boltzmann exploration<br/>
              <strong>Debugging:</strong> Monitor Q-value updates and reward progression
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-fuchsia-300" : "text-fuchsia-800"
            }`}>
              Advanced Applications
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Multi-Agent RL:</strong> Q-learning extensions for multiple agents<br/>
              <strong>Hierarchical RL:</strong> Combining Q-learning at different time scales<br/>
              <strong>Inverse RL:</strong> Learning reward functions from demonstrations<br/>
              <strong>Transfer Learning:</strong> Pre-trained Q-functions for new tasks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QLearning;