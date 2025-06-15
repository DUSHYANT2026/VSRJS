import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-amber-100 dark:border-amber-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-amber-600 to-brown-600 hover:from-amber-700 hover:to-brown-700 dark:from-amber-700 dark:to-brown-700 dark:hover:from-amber-800 dark:hover:to-brown-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function DQN() {
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
      title: "🧠 DQN Fundamentals",
      id: "fundamentals",
      description: "Deep Q Networks combine Q-Learning with deep neural networks to solve complex RL problems.",
      keyPoints: [
        "Q-Learning with function approximation",
        "Experience replay for stability",
        "Target network to prevent oscillations",
        "Handling high-dimensional state spaces"
      ],
      detailedExplanation: [
        "Core Components:",
        "- Q-Learning: Off-policy TD learning algorithm",
        "- Neural Network: Approximates Q-value function",
        "- Experience Replay: Breaks temporal correlations",
        "- Target Network: Provides stable learning targets",
        "",
        "Key Innovations:",
        "- First successful combination of DL and RL",
        "- Solved Atari games from raw pixels",
        "- Demonstrated generalization across similar states",
        "- Introduced important training stabilizations",
        "",
        "Mathematics:",
        "- Q(s,a) = Expected return from state s, action a",
        "- Bellman equation: Q(s,a) = r + γmaxQ(s',a')",
        "- Loss function: MSE between Q and target Q",
        "- ε-greedy policy for exploration"
      ],
      code: {
        python: `# DQN Implementation Outline
import numpy as np
import tensorflow as tf
from collections import deque
import random

class DQNAgent:
    def __init__(self, state_size, action_size):
        self.state_size = state_size
        self.action_size = action_size
        self.memory = deque(maxlen=2000)  # Experience replay buffer
        self.gamma = 0.95  # Discount factor
        self.epsilon = 1.0  # Exploration rate
        self.epsilon_min = 0.01
        self.epsilon_decay = 0.995
        self.learning_rate = 0.001
        self.model = self._build_model()  # Main network
        self.target_model = self._build_model()  # Target network
        self.update_target_model()

    def _build_model(self):
        # Neural Net for Deep-Q learning Model
        model = tf.keras.Sequential()
        model.add(tf.keras.layers.Dense(24, input_dim=self.state_size, activation='relu'))
        model.add(tf.keras.layers.Dense(24, activation='relu'))
        model.add(tf.keras.layers.Dense(self.action_size, activation='linear'))
        model.compile(loss='mse', optimizer=tf.keras.optimizers.Adam(lr=self.learning_rate))
        return model

    def update_target_model(self):
        # Copy weights from model to target_model
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
        for state, action, reward, next_state, done in minibatch:
            target = self.model.predict(state)
            if done:
                target[0][action] = reward
            else:
                t = self.target_model.predict(next_state)
                target[0][action] = reward + self.gamma * np.amax(t[0])
            self.model.fit(state, target, epochs=1, verbose=0)
        if self.epsilon > self.epsilon_min:
            self.epsilon *= self.epsilon_decay

    def load(self, name):
        self.model.load_weights(name)

    def save(self, name):
        self.model.save_weights(name)`,
        complexity: "Training: O(b*d) per batch, where b=batch size, d=network depth"
      }
    },
    {
      title: "⚙️ DQN Architecture",
      id: "architecture",
      description: "Key architectural components and design decisions in DQN implementations.",
      keyPoints: [
        "Input preprocessing for Atari games",
        "Convolutional neural network backbone",
        "Dueling network variants",
        "Prioritized experience replay"
      ],
      detailedExplanation: [
        "Network Architecture:",
        "- Input: 84x84x4 stacked grayscale frames",
        "- First layer: 32 8x8 filters, stride 4, ReLU",
        "- Second layer: 64 4x4 filters, stride 2, ReLU",
        "- Third layer: 64 3x3 filters, stride 1, ReLU",
        "- Fully connected: 512 units",
        "- Output: One Q-value per action",
        "",
        "Advanced Variants:",
        "- Double DQN: Decouples action selection and evaluation",
        "- Dueling DQN: Separates value and advantage streams",
        "- Prioritized Replay: Important transitions sampled more often",
        "- Noisy Nets: Parameter space exploration",
        "",
        "Implementation Details:",
        "- Frame skipping: Repeat actions for k frames",
        "- Max pooling over last 2 frames",
        "- Reward clipping: [-1, 1]",
        "- Terminal signal when life lost",
        "- Stacking 4 frames for temporal information"
      ],
      code: {
        python: `# Advanced DQN Architectures
import tensorflow as tf

# Dueling DQN Architecture
class DuelingDQN(tf.keras.Model):
    def __init__(self, action_size):
        super(DuelingDQN, self).__init__()
        self.conv1 = tf.keras.layers.Conv2D(32, 8, strides=4, activation='relu')
        self.conv2 = tf.keras.layers.Conv2D(64, 4, strides=2, activation='relu')
        self.conv3 = tf.keras.layers.Conv2D(64, 3, strides=1, activation='relu')
        self.flatten = tf.keras.layers.Flatten()
        self.value_fc = tf.keras.layers.Dense(512, activation='relu')
        self.value = tf.keras.layers.Dense(1)
        self.advantage_fc = tf.keras.layers.Dense(512, activation='relu')
        self.advantage = tf.keras.layers.Dense(action_size)
        
    def call(self, inputs):
        x = self.conv1(inputs)
        x = self.conv2(x)
        x = self.conv3(x)
        x = self.flatten(x)
        value = self.value_fc(x)
        value = self.value(value)
        advantage = self.advantage_fc(x)
        advantage = self.advantage(advantage)
        return value + (advantage - tf.reduce_mean(advantage, axis=1, keepdims=True))

# Prioritized Experience Replay
class PrioritizedReplayBuffer:
    def __init__(self, capacity, alpha=0.6):
        self.capacity = capacity
        self.alpha = alpha
        self.buffer = []
        self.priorities = np.zeros((capacity,), dtype=np.float32)
        self.pos = 0
        
    def add(self, experience):
        max_prio = self.priorities.max() if self.buffer else 1.0
        if len(self.buffer) < self.capacity:
            self.buffer.append(experience)
        else:
            self.buffer[self.pos] = experience
        self.priorities[self.pos] = max_prio
        self.pos = (self.pos + 1) % self.capacity
        
    def sample(self, batch_size, beta=0.4):
        if len(self.buffer) == self.capacity:
            prios = self.priorities
        else:
            prios = self.priorities[:self.pos]
        probs = prios ** self.alpha
        probs /= probs.sum()
        indices = np.random.choice(len(self.buffer), batch_size, p=probs)
        samples = [self.buffer[idx] for idx in indices]
        total = len(self.buffer)
        weights = (total * probs[indices]) ** (-beta)
        weights /= weights.max()
        return samples, indices, weights
        
    def update_priorities(self, batch_indices, batch_priorities):
        for idx, prio in zip(batch_indices, batch_priorities):
            self.priorities[idx] = prio`,
        complexity: "Dueling DQN: Same as DQN, Prioritized Replay: O(log n) per sample"
      }
    },
    {
      title: "📈 Training DQN",
      id: "training",
      description: "Practical aspects of training Deep Q Networks effectively.",
      keyPoints: [
        "Hyperparameter tuning",
        "Monitoring training progress",
        "Debugging common issues",
        "Evaluation metrics"
      ],
      detailedExplanation: [
        "Training Process:",
        "- Initialize replay memory",
        "- Preprocess initial state",
        "- Select action using ε-greedy policy",
        "- Execute action, observe reward and next state",
        "- Store transition in replay memory",
        "- Sample random minibatch and train",
        "- Periodically update target network",
        "",
        "Hyperparameters:",
        "- Learning rate: Typically 0.0001-0.001",
        "- Discount factor (γ): 0.99 common",
        "- Replay buffer size: 1M transitions for Atari",
        "- Batch size: 32-512",
        "- Target network update frequency: Every 1K-10K steps",
        "",
        "Common Issues:",
        "- Catastrophic forgetting",
        "- Overestimation bias",
        "- Oscillating Q-values",
        "- Stuck in local optima",
        "",
        "Solutions:",
        "- Double Q-learning",
        "- Gradient clipping",
        "- Reward scaling",
        "- Frame stacking",
        "- Learning rate scheduling"
      ],
      code: {
        python: `# Complete DQN Training Loop
import gym
import numpy as np
from tqdm import tqdm

def preprocess_state(state):
    """Convert 210x160x3 uint8 frame to 84x84x1 float"""
    state = state[35:195]  # Crop
    state = state[::2, ::2, 0]  # Downsample
    state[state == 144] = 0  # Erase background
    state[state == 109] = 0
    state[state != 0] = 1  # Set paddles and ball to 1
    return np.expand_dims(state.astype(np.float32), axis=-1)

env = gym.make('Pong-v0')
state_size = (84, 84, 1)
action_size = env.action_space.n
agent = DQNAgent(state_size, action_size)
batch_size = 32
episodes = 1000

for e in tqdm(range(episodes)):
    state = env.reset()
    state = preprocess_state(state)
    total_reward = 0
    done = False
    
    while not done:
        # Get action and execute
        action = agent.act(state)
        next_state, reward, done, _ = env.step(action)
        next_state = preprocess_state(next_state)
        
        # Store experience and train
        agent.remember(state, action, reward, next_state, done)
        state = next_state
        total_reward += reward
        
        if done:
            print(f"episode: {e}/{episodes}, score: {total_reward}, e: {agent.epsilon:.2f}")
            break
            
        if len(agent.memory) > batch_size:
            agent.replay(batch_size)
            
    # Update target network periodically
    if e % 10 == 0:
        agent.update_target_model()

# Save trained model
agent.save("dqn_pong.h5")`,
        complexity: "Per episode: O(T*(a + r)), T=timesteps, a=action selection, r=replay"
      }
    },
    {
      title: "🚀 Advanced DQN Variants",
      id: "variants",
      description: "Improvements and extensions to the original DQN algorithm.",
      keyPoints: [
        "Rainbow DQN: Combining six improvements",
        "Distributional DQN: Learning value distributions",
        "Recurrent DQN: Handling partial observability",
        "Multi-step DQN: N-step returns"
      ],
      detailedExplanation: [
        "Rainbow DQN Components:",
        "- Double DQN: Reduces overestimation bias",
        "- Prioritized Replay: Focuses on important transitions",
        "- Dueling Networks: Separates value and advantage",
        "- Multi-step Learning: N-step returns",
        "- Distributional RL: Learns value distribution",
        "- Noisy Nets: Exploration through parameter noise",
        "",
        "Distributional DQN:",
        "- Models full distribution of returns",
        "- Uses quantile regression",
        "- Provides better learning signals",
        "- More robust to noisy environments",
        "",
        "Recurrent DQN:",
        "- Adds LSTM layers to handle partial observability",
        "- Maintains internal state",
        "- Useful for POMDPs",
        "- Requires careful backpropagation through time",
        "",
        "Practical Considerations:",
        "- Rainbow typically performs best",
        "- Distributional DQN good for risk-sensitive tasks",
        "- Recurrent DQN adds significant complexity",
        "- Multi-step helps with delayed rewards"
      ],
      code: {
        python: `# Rainbow DQN Components
class RainbowDQN:
    def __init__(self, state_size, action_size, atoms=51):
        self.atoms = atoms  # Number of quantiles for distributional DQN
        self.v_min = -10  # Minimum possible return
        self.v_max = 10   # Maximum possible return
        self.delta_z = (self.v_max - self.v_min) / (self.atoms - 1)
        self.z = np.linspace(self.v_min, self.v_max, self.atoms)
        
        # Network architecture would combine:
        # 1. Noisy layers for exploration
        # 2. Dueling architecture
        # 3. Distributional output
        # 4. Multi-step learning in the replay buffer
        
    def build_model(self):
        inputs = tf.keras.layers.Input(shape=self.state_size)
        x = tf.keras.layers.Conv2D(32, 8, strides=4, activation='relu')(inputs)
        x = tf.keras.layers.Conv2D(64, 4, strides=2, activation='relu')(x)
        x = tf.keras.layers.Conv2D(64, 3, strides=1, activation='relu')(x)
        x = tf.keras.layers.Flatten()(x)
        
        # Dueling streams
        value = tf.keras.layers.Dense(512, activation='relu')(x)
        value = NoisyDense(1)(value)  # Noisy layer
        
        advantage = tf.keras.layers.Dense(512, activation='relu')(x)
        advantage = NoisyDense(self.action_size * self.atoms)(advantage)  # Noisy layer
        
        # Combine streams
        advantage = tf.reshape(advantage, [-1, self.action_size, self.atoms])
        value = tf.reshape(value, [-1, 1, self.atoms])
        q_dist = value + advantage - tf.reduce_mean(advantage, axis=1, keepdims=True)
        q_dist = tf.nn.softmax(q_dist)
        
        return tf.keras.Model(inputs, q_dist)

class NoisyDense(tf.keras.layers.Layer):
    def __init__(self, units):
        super(NoisyDense, self).__init__()
        self.units = units
        
    def build(self, input_shape):
        # Learnable parameters
        self.sigma_init = 0.5
        self.mu_w = self.add_weight(shape=(input_shape[-1], self.units),
                                   initializer='glorot_uniform',
                                   trainable=True)
        self.mu_b = self.add_weight(shape=(self.units,),
                                   initializer='zeros',
                                   trainable=True)
        self.sigma_w = self.add_weight(shape=(input_shape[-1], self.units),
                                      initializer=tf.initializers.Constant(self.sigma_init),
                                      trainable=True)
        self.sigma_b = self.add_weight(shape=(self.units,),
                                      initializer=tf.initializers.Constant(self.sigma_init),
                                      trainable=True)
        
    def call(self, inputs):
        # Noise injection
        epsilon_w = tf.random.normal(shape=(inputs.shape[-1], self.units))
        epsilon_b = tf.random.normal(shape=(self.units,))
        w = self.mu_w + self.sigma_w * epsilon_w
        b = self.mu_b + self.sigma_b * epsilon_b
        return tf.matmul(inputs, w) + b`,
        complexity: "Rainbow DQN: ~2-3x standard DQN, but with better sample efficiency"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-amber-50 to-brown-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-amber-400 to-brown-400"
            : "bg-gradient-to-r from-amber-600 to-brown-600"
        } mb-8 sm:mb-12`}
      >
        Deep Q Networks (DQN)
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-amber-900/20" : "bg-amber-100"
        } border-l-4 border-amber-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-amber-500 text-amber-800">
          Reinforcement Learning → Deep Q Networks
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          DQN revolutionized reinforcement learning by demonstrating that deep neural networks
          could learn successful policies directly from high-dimensional sensory inputs using
          end-to-end reinforcement learning.
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
                      darkMode ? "bg-brown-900/30" : "bg-brown-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-brown-400 text-brown-600">
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
            darkMode ? "text-amber-300" : "text-amber-800"
          }`}
        >
          DQN Variants Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-amber-900" : "bg-amber-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Variant</th>
                <th className="p-4 text-left">Key Improvement</th>
                <th className="p-4 text-left">Performance Gain</th>
                <th className="p-4 text-left">Complexity Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Original DQN", "Neural network function approximation", "Baseline", "Low"],
                ["Double DQN", "Reduces overestimation bias", "++", "Low"],
                ["Dueling DQN", "Separates value and advantage streams", "++", "Medium"],
                ["Prioritized Replay", "Focuses on important transitions", "+", "Medium"],
                ["Rainbow DQN", "Combines 6 improvements", "++++", "High"]
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
          DQN Practitioner's Guide
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
              When to Use DQN
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Discrete action spaces (use DDPG/SAC for continuous)</li>
              <li>Problems with high-dimensional state spaces (e.g., images)</li>
              <li>Environments where rewards are delayed but not too sparse</li>
              <li>When sample efficiency is important (use with replay buffer)</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-amber-300" : "text-amber-800"
            }`}>
              Implementation Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Start Simple:</strong> Basic DQN before Rainbow<br/>
              <strong>Monitor:</strong> Track Q-values and rewards during training<br/>
              <strong>Preprocess:</strong> Normalize states and clip rewards<br/>
              <strong>Debug:</strong> Verify learning on simple environments first
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-amber-300" : "text-amber-800"
            }`}>
              Advanced Considerations
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Partial Observability:</strong> Add recurrent layers<br/>
              <strong>Multi-agent:</strong> Independent DQN agents<br/>
              <strong>Hierarchical:</strong> Stack DQNs for temporal abstraction<br/>
              <strong>Transfer Learning:</strong> Pretrain on similar tasks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DQN;