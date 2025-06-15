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
    className={`inline-block bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 dark:from-red-600 dark:to-pink-600 dark:hover:from-red-700 dark:hover:to-pink-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function BasicsOfRL() {
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
      title: "🤖 RL Fundamentals",
      id: "fundamentals",
      description: "Core concepts that define the reinforcement learning paradigm.",
      keyPoints: [
        "Agent-Environment interaction loop",
        "Markov Decision Processes (MDPs)",
        "Rewards and discounting",
        "Policies, value functions, and models"
      ],
      detailedExplanation: [
        "Key components of RL:",
        "- Agent: The learner and decision maker",
        "- Environment: Everything the agent interacts with",
        "- State: Representation of current situation",
        "- Action: Choices available to the agent",
        "- Reward: Immediate feedback signal",
        "",
        "MDP Formalism:",
        "- States (S): Set of possible situations",
        "- Actions (A): Set of possible moves",
        "- Transition function (P): P(s'|s,a)",
        "- Reward function (R): R(s,a,s')",
        "- Discount factor (γ): Future reward weighting",
        "",
        "Learning objectives:",
        "- Policy (π): Strategy for choosing actions",
        "- Value function (V/Q): Expected return",
        "- Model: Agent's representation of environment"
      ],
      code: {
        python: `# Basic RL Framework
import numpy as np

class Environment:
    def __init__(self):
        self.state = None
        self.action_space = ['up', 'down', 'left', 'right']
        
    def reset(self):
        self.state = (0, 0)  # Start position
        return self.state
        
    def step(self, action):
        x, y = self.state
        if action == 'up' and y < 10:
            y += 1
        elif action == 'down' and y > 0:
            y -= 1
        elif action == 'left' and x > 0:
            x -= 1
        elif action == 'right' and x < 10:
            x += 1
            
        self.state = (x, y)
        reward = 1 if (x, y) == (10, 10) else -0.1
        done = (x, y) == (10, 10)
        return self.state, reward, done, {}

class Agent:
    def __init__(self, action_space):
        self.action_space = action_space
        self.q_table = {}
        
    def get_action(self, state, epsilon=0.1):
        if np.random.random() < epsilon or state not in self.q_table:
            return np.random.choice(self.action_space)
        return max(self.q_table[state].items(), key=lambda x: x[1])[0]
        
    def learn(self, state, action, reward, next_state):
        if state not in self.q_table:
            self.q_table[state] = {a: 0 for a in self.action_space}
        # Simple Q-learning update
        max_next_q = max(self.q_table[next_state].values()) if next_state in self.q_table else 0
        self.q_table[state][action] += 0.1 * (reward + 0.9 * max_next_q - self.q_table[state][action])

# Training loop
env = Environment()
agent = Agent(env.action_space)

for episode in range(1000):
    state = env.reset()
    done = False
    while not done:
        action = agent.get_action(state)
        next_state, reward, done, _ = env.step(action)
        agent.learn(state, action, reward, next_state)
        state = next_state`,
        complexity: "Q-learning: O(|S|×|A|) space, O(1) per update"
      }
    },
    {
      title: "⚙️ MDPs & Bellman Equations",
      id: "mdp",
      description: "Mathematical framework for modeling sequential decision problems.",
      keyPoints: [
        "Markov property: Future depends only on present",
        "Bellman equations: Recursive relationships",
        "Optimality principle: Decomposing problems",
        "Dynamic programming solutions"
      ],
      detailedExplanation: [
        "Markov Decision Process components:",
        "- S: Set of states with Markov property",
        "- A: Set of actions available",
        "- P: Transition probability matrix",
        "- R: Reward function",
        "- γ: Discount factor (0 ≤ γ ≤ 1)",
        "",
        "Bellman Equations:",
        "- Value function: V^π(s) = E[Σ γ^t r_t | s_0=s]",
        "- Q-function: Q^π(s,a) = E[Σ γ^t r_t | s_0=s, a_0=a]",
        "- Optimality equations:",
        "  V*(s) = max_a [R(s,a) + γΣ P(s'|s,a)V*(s')]",
        "  Q*(s,a) = R(s,a) + γΣ P(s'|s,a)max_a' Q*(s',a')",
        "",
        "Solution methods:",
        "- Value iteration: Repeated application of Bellman optimality",
        "- Policy iteration: Alternate policy evaluation and improvement",
        "- Linear programming: Formulate as optimization problem"
      ],
      code: {
        python: `# Solving MDPs with Dynamic Programming
import numpy as np

def value_iteration(mdp, theta=1e-6):
    """Value iteration algorithm"""
    V = {s: 0 for s in mdp.states}
    while True:
        delta = 0
        for s in mdp.states:
            v = V[s]
            # Bellman optimality update
            V[s] = max(
                sum(p*(mdp.reward(s,a,s') + mdp.gamma*V[s'])
                for a in mdp.actions(s)
                for (s', p) in mdp.transitions(s,a).items()
            )
            delta = max(delta, abs(v - V[s]))
        if delta < theta:
            break
    
    # Extract optimal policy
    policy = {}
    for s in mdp.states:
        policy[s] = max(
            mdp.actions(s),
            key=lambda a: sum(
                p*(mdp.reward(s,a,s') + mdp.gamma*V[s'])
                for (s', p) in mdp.transitions(s,a).items()
            )
        )
    return policy, V

# Example GridWorld MDP
class GridWorld:
    def __init__(self, size=4):
        self.size = size
        self.gamma = 0.9
        self.states = [(i,j) for i in range(size) for j in range(size)]
        self.actions = ['up', 'down', 'left', 'right']
        
    def transitions(self, s, a):
        i, j = s
        transitions = {}
        
        # Deterministic transitions
        if a == 'up' and i > 0:
            transitions[(i-1, j)] = 1.0
        elif a == 'down' and i < self.size-1:
            transitions[(i+1, j)] = 1.0
        elif a == 'left' and j > 0:
            transitions[(i, j-1)] = 1.0
        elif a == 'right' and j < self.size-1:
            transitions[(i, j+1)] = 1.0
        else:
            transitions[s] = 1.0  # Hit wall, stay
            
        return transitions
        
    def reward(self, s, a, s_prime):
        # Reward +1 for reaching goal at (size-1, size-1)
        return 1.0 if s_prime == (self.size-1, self.size-1) else 0.0

# Solve the MDP
mdp = GridWorld()
optimal_policy, optimal_values = value_iteration(mdp)`,
        complexity: "Value iteration: O(|S|²|A|) per iteration"
      }
    },
    {
      title: "🔄 Q-Learning & TD Methods",
      id: "qlearning",
      description: "Model-free algorithms for learning from interaction.",
      keyPoints: [
        "Temporal Difference learning",
        "Q-learning: Off-policy TD control",
        "SARSA: On-policy TD control",
        "Exploration vs exploitation tradeoff"
      ],
      detailedExplanation: [
        "Temporal Difference Learning:",
        "- Learn directly from experience without model",
        "- Update estimates based on other estimates (bootstrapping)",
        "- Combines ideas from Monte Carlo and dynamic programming",
        "",
        "Q-Learning:",
        "- Off-policy: Learns optimal policy while following exploratory policy",
        "- Update rule: Q(s,a) ← Q(s,a) + α[r + γ max_a' Q(s',a') - Q(s,a)]",
        "- Converges to optimal Q-function under certain conditions",
        "",
        "SARSA:",
        "- On-policy: Learns the policy being followed",
        "- Update rule: Q(s,a) ← Q(s,a) + α[r + γ Q(s',a') - Q(s,a)]",
        "- Generally more conservative than Q-learning",
        "",
        "Exploration Strategies:",
        "- ε-greedy: Random action with probability ε",
        "- Boltzmann exploration: Action selection based on Q-values",
        "- Optimistic initialization: Encourage exploration of all states",
        "- Upper Confidence Bound (UCB): Balance exploration/exploitation"
      ],
      code: {
        python: `# Q-Learning Implementation
import numpy as np
import random
from collections import defaultdict

class QLearningAgent:
    def __init__(self, actions, alpha=0.1, gamma=0.9, epsilon=0.1):
        self.actions = actions
        self.alpha = alpha  # Learning rate
        self.gamma = gamma  # Discount factor
        self.epsilon = epsilon  # Exploration rate
        self.q_table = defaultdict(lambda: np.zeros(len(actions)))
        
    def get_action(self, state):
        if random.random() < self.epsilon:
            return random.choice(self.actions)
        return self.actions[np.argmax(self.q_table[state])]
        
    def learn(self, state, action, reward, next_state, done):
        action_idx = self.actions.index(action)
        current_q = self.q_table[state][action_idx]
        
        # Q-learning update
        if done:
            target = reward
        else:
            target = reward + self.gamma * np.max(self.q_table[next_state])
            
        self.q_table[state][action_idx] += self.alpha * (target - current_q)

# Example usage with Gym environment
import gym

env = gym.make('FrozenLake-v1')
agent = QLearningAgent(list(range(env.action_space.n)))

num_episodes = 10000
for episode in range(num_episodes):
    state = env.reset()
    done = False
    
    while not done:
        action = agent.get_action(state)
        next_state, reward, done, _ = env.step(action)
        agent.learn(state, action, reward, next_state, done)
        state = next_state

# SARSA Implementation
class SARSAAgent:
    def __init__(self, actions, alpha=0.1, gamma=0.9, epsilon=0.1):
        self.actions = actions
        self.alpha = alpha
        self.gamma = gamma
        self.epsilon = epsilon
        self.q_table = defaultdict(lambda: np.zeros(len(actions)))
        
    def get_action(self, state):
        if random.random() < self.epsilon:
            return random.choice(self.actions)
        return self.actions[np.argmax(self.q_table[state])]
        
    def learn(self, state, action, reward, next_state, next_action, done):
        action_idx = self.actions.index(action)
        current_q = self.q_table[state][action_idx]
        
        # SARSA update
        if done:
            target = reward
        else:
            next_action_idx = self.actions.index(next_action)
            target = reward + self.gamma * self.q_table[next_state][next_action_idx]
            
        self.q_table[state][action_idx] += self.alpha * (target - current_q)`,
        complexity: "Q-learning/SARSA: O(1) per update, O(|S||A|) space"
      }
    },
    {
      title: "🧠 Policy Gradient Methods",
      id: "policygradient",
      description: "Directly optimizing policies using gradient ascent.",
      keyPoints: [
        "Policy parameterization (e.g., neural networks)",
        "Score function estimator",
        "REINFORCE algorithm",
        "Advantage estimation techniques"
      ],
      detailedExplanation: [
        "Policy Gradient Theorem:",
        "- ∇J(θ) ∝ E[∇log π(a|s) Q^π(s,a)]",
        "- Enables gradient-based optimization of policies",
        "- Works with continuous action spaces",
        "",
        "REINFORCE Algorithm:",
        "- Monte Carlo policy gradient",
        "- Uses complete episode returns",
        "- High variance but unbiased",
        "- Requires careful learning rate tuning",
        "",
        "Advantage Estimation:",
        "- Baseline subtraction reduces variance",
        "- Generalized Advantage Estimation (GAE)",
        "- Actor-Critic methods: Learn value function as baseline",
        "",
        "Modern Extensions:",
        "- Proximal Policy Optimization (PPO)",
        "- Trust Region Policy Optimization (TRPO)",
        "- Soft Actor-Critic (SAC)",
        "- Deterministic Policy Gradients (DDPG)"
      ],
      code: {
        python: `# Policy Gradient with REINFORCE
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from torch.distributions import Categorical

class PolicyNetwork(nn.Module):
    def __init__(self, state_size, action_size, hidden_size=32):
        super().__init__()
        self.fc1 = nn.Linear(state_size, hidden_size)
        self.fc2 = nn.Linear(hidden_size, action_size)
        
    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = self.fc2(x)
        return torch.softmax(x, dim=-1)

class REINFORCE:
    def __init__(self, state_size, action_size, lr=1e-2, gamma=0.99):
        self.policy = PolicyNetwork(state_size, action_size)
        self.optimizer = optim.Adam(self.policy.parameters(), lr=lr)
        self.gamma = gamma
        self.saved_log_probs = []
        self.rewards = []
        
    def select_action(self, state):
        state = torch.from_numpy(state).float()
        probs = self.policy(state)
        m = Categorical(probs)
        action = m.sample()
        self.saved_log_probs.append(m.log_prob(action))
        return action.item()
        
    def update_policy(self):
        R = 0
        policy_loss = []
        returns = []
        
        # Calculate discounted returns
        for r in self.rewards[::-1]:
            R = r + self.gamma * R
            returns.insert(0, R)
            
        returns = torch.tensor(returns)
        returns = (returns - returns.mean()) / (returns.std() + 1e-9)
        
        for log_prob, R in zip(self.saved_log_probs, returns):
            policy_loss.append(-log_prob * R)
            
        self.optimizer.zero_grad()
        policy_loss = torch.cat(policy_loss).sum()
        policy_loss.backward()
        self.optimizer.step()
        
        del self.rewards[:]
        del self.saved_log_probs[:]

# Example usage with CartPole
import gym
env = gym.make('CartPole-v1')
agent = REINFORCE(env.observation_space.shape[0], env.action_space.n)

num_episodes = 1000
for episode in range(num_episodes):
    state = env.reset()
    done = False
    
    while not done:
        action = agent.select_action(state)
        state, reward, done, _ = env.step(action)
        agent.rewards.append(reward)
        
    agent.update_policy()

# Actor-Critic Implementation
class ActorCritic(nn.Module):
    def __init__(self, state_size, action_size, hidden_size=32):
        super().__init__()
        # Shared feature layer
        self.fc1 = nn.Linear(state_size, hidden_size)
        
        # Actor (policy) head
        self.fc_actor = nn.Linear(hidden_size, action_size)
        
        # Critic (value) head
        self.fc_critic = nn.Linear(hidden_size, 1)
        
    def forward(self, x):
        x = torch.relu(self.fc1(x))
        policy = torch.softmax(self.fc_actor(x), dim=-1)
        value = self.fc_critic(x)
        return policy, value.squeeze()`,
        complexity: "REINFORCE: O(T) per episode, Actor-Critic: O(1) per step"
      }
    },
    {
      title: "🎮 Deep RL & Applications",
      id: "deeprl",
      description: "Combining deep learning with reinforcement learning for complex problems.",
      keyPoints: [
        "Deep Q-Networks (DQN)",
        "Policy gradient with neural networks",
        "Experience replay and target networks",
        "Applications in games, robotics, and more"
      ],
      detailedExplanation: [
        "Deep Q-Networks:",
        "- Q-learning with neural network function approximation",
        "- Experience replay: Break temporal correlations",
        "- Target networks: Stabilize learning",
        "- Double DQN: Reduce overestimation bias",
        "",
        "Advanced Architectures:",
        "- Dueling Networks: Separate value and advantage streams",
        "- Prioritized Experience Replay: Important transitions",
        "- Rainbow: Combining multiple improvements",
        "",
        "Applications:",
        "- Game playing (AlphaGo, Atari, StarCraft)",
        "- Robotics control and manipulation",
        "- Autonomous vehicles",
        "- Resource management",
        "- Personalized recommendations",
        "",
        "Challenges:",
        "- Sample efficiency",
        "- Stability of training",
        "- Credit assignment",
        "- Exploration in high-dimensional spaces"
      ],
      code: {
        python: `# Deep Q-Network Implementation
import numpy as np
import random
import torch
import torch.nn as nn
import torch.optim as optim
from collections import deque

class DQN(nn.Module):
    def __init__(self, state_size, action_size):
        super().__init__()
        self.fc1 = nn.Linear(state_size, 64)
        self.fc2 = nn.Linear(64, 64)
        self.fc3 = nn.Linear(64, action_size)
        
    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = torch.relu(self.fc2(x))
        return self.fc3(x)

class DQNAgent:
    def __init__(self, state_size, action_size):
        self.state_size = state_size
        self.action_size = action_size
        self.memory = deque(maxlen=10000)
        self.gamma = 0.95
        self.epsilon = 1.0
        self.epsilon_min = 0.01
        self.epsilon_decay = 0.995
        self.batch_size = 32
        self.model = DQN(state_size, action_size)
        self.target_model = DQN(state_size, action_size)
        self.optimizer = optim.Adam(self.model.parameters())
        self.criterion = nn.MSELoss()
        
    def remember(self, state, action, reward, next_state, done):
        self.memory.append((state, action, reward, next_state, done))
        
    def act(self, state):
        if np.random.rand() <= self.epsilon:
            return random.randrange(self.action_size)
        state = torch.FloatTensor(state)
        with torch.no_grad():
            act_values = self.model(state)
        return torch.argmax(act_values).item()
        
    def replay(self):
        if len(self.memory) < self.batch_size:
            return
            
        minibatch = random.sample(self.memory, self.batch_size)
        states = torch.FloatTensor(np.array([t[0] for t in minibatch]))
        actions = torch.LongTensor(np.array([t[1] for t in minibatch]))
        rewards = torch.FloatTensor(np.array([t[2] for t in minibatch]))
        next_states = torch.FloatTensor(np.array([t[3] for t in minibatch]))
        dones = torch.FloatTensor(np.array([t[4] for t in minibatch]))
        
        # Current Q values
        current_q = self.model(states).gather(1, actions.unsqueeze(1))
        
        # Target Q values
        with torch.no_grad():
            next_q = self.target_model(next_states).max(1)[0]
            target_q = rewards + (1 - dones) * self.gamma * next_q
            
        # Compute loss and update
        loss = self.criterion(current_q.squeeze(), target_q)
        self.optimizer.zero_grad()
        loss.backward()
        self.optimizer.step()
        
        # Update epsilon
        if self.epsilon > self.epsilon_min:
            self.epsilon *= self.epsilon_decay
            
    def update_target_model(self):
        self.target_model.load_state_dict(self.model.state_dict())

# Proximal Policy Optimization (PPO)
class PPONetwork(nn.Module):
    def __init__(self, state_size, action_size):
        super().__init__()
        self.fc1 = nn.Linear(state_size, 64)
        self.fc2 = nn.Linear(64, 64)
        self.actor = nn.Linear(64, action_size)
        self.critic = nn.Linear(64, 1)
        
    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = torch.relu(self.fc2(x))
        return torch.softmax(self.actor(x), dim=-1), self.critic(x)

def ppo_update(policy, optimizer, samples, clip_ratio=0.2):
    states, actions, old_log_probs, returns, advantages = samples
    
    # Calculate new policy
    new_probs, new_values = policy(states)
    dist = Categorical(new_probs)
    new_log_probs = dist.log_prob(actions)
    entropy = dist.entropy().mean()
    
    # Probability ratio
    ratio = (new_log_probs - old_log_probs).exp()
    
    # Clipped objective
    clipped_ratio = torch.clamp(ratio, 1-clip_ratio, 1+clip_ratio)
    policy_loss = -torch.min(ratio*advantages, clipped_ratio*advantages).mean()
    
    # Value loss
    value_loss = 0.5 * (returns - new_values.squeeze()).pow(2).mean()
    
    # Total loss
    loss = policy_loss + 0.5*value_loss - 0.01*entropy
    
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    
    return loss.item()`,
        complexity: "DQN: O(batch_size) per update, PPO: O(batch_size) per epoch"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-red-50 to-pink-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-red-400 to-pink-400"
            : "bg-gradient-to-r from-red-600 to-pink-600"
        } mb-8 sm:mb-12`}
      >
        Reinforcement Learning Basics
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-red-900/20" : "bg-red-100"
        } border-l-4 border-red-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-red-500 text-red-800">
          Machine Learning → Reinforcement Learning
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Reinforcement learning is a computational approach to learning from interaction.
          This section covers the fundamental concepts and algorithms that enable agents
          to learn optimal behavior through trial-and-error interactions with environments.
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
                    darkMode ? "text-red-300" : "text-red-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-pink-600 dark:text-pink-400">
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
            darkMode ? "text-red-300" : "text-red-800"
          }`}
        >
          RL Algorithm Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-red-900" : "bg-red-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Algorithm</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Strengths</th>
                <th className="p-4 text-left">Use Cases</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Value Iteration", "Model-based", "Guaranteed optimality, simple", "Small discrete MDPs"],
                ["Q-Learning", "Model-free, off-policy", "Flexible, learns optimal policy", "Discrete action spaces"],
                ["SARSA", "Model-free, on-policy", "Safer learning, conservative", "Risk-sensitive domains"],
                ["REINFORCE", "Policy gradient", "Handles continuous actions", "Robotics, control"],
                ["PPO", "Policy gradient", "Stable, good performance", "Complex environments"]
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
          darkMode ? "bg-red-900/30" : "bg-red-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-red-300" : "text-red-800"
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
                darkMode ? "text-red-300" : "text-red-800"
              }`}
            >
              Algorithm Selection
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Discrete actions & small state space → Q-learning/SARSA</li>
              <li>Continuous actions → Policy gradient methods</li>
              <li>High-dimensional states (images) → Deep RL</li>
              <li>Sample efficiency critical → Model-based RL</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-red-300" : "text-red-800"
            }`}>
              Implementation Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Hyperparameter Tuning:</strong> Learning rate most critical<br/>
              <strong>Exploration:</strong> Start high ε/τ, decay over time<br/>
              <strong>Stability:</strong> Use target networks in deep RL<br/>
              <strong>Debugging:</strong> Monitor average returns, Q-values
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-red-300" : "text-red-800"
            }`}>
              Advanced Topics
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Hierarchical RL:</strong> Temporal abstraction<br/>
              <strong>Multi-Agent RL:</strong> Competitive/cooperative agents<br/>
              <strong>Inverse RL:</strong> Learn rewards from demonstrations<br/>
              <strong>Meta-RL:</strong> Learn to learn across tasks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicsOfRL;