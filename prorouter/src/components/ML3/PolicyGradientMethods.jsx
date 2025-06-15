import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-lime-200 dark:border-lime-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-lime-500 to-[#BFFF00] hover:from-lime-600 hover:to-[#A5E000] dark:from-lime-600 dark:to-[#BFFF00] dark:hover:from-lime-700 dark:hover:to-[#A5E000] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function PolicyGradientMethods() {
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
      title: "🎯 Policy Gradient Fundamentals",
      id: "fundamentals",
      description: "Directly optimizing policy parameters to maximize expected rewards.",
      keyPoints: [
        "Direct policy parameterization (no value function required)",
        "Gradient ascent on expected return",
        "REINFORCE algorithm as simplest implementation",
        "High variance but simple to implement"
      ],
      detailedExplanation: [
        "Core Idea:",
        "- Represent policy π(a|s;θ) directly with parameters θ",
        "- Adjust θ in the direction that increases expected return",
        "- Uses the policy gradient theorem: ∇J(θ) = E[∇logπ(a|s;θ) * Q(s,a)]",
        "",
        "Key Components:",
        "- Score function ∇logπ(a|s;θ)",
        "- Advantage estimation methods",
        "- Variance reduction techniques",
        "- Entropy regularization",
        "",
        "Advantages:",
        "- Can learn stochastic policies",
        "- Naturally handles continuous action spaces",
        "- Directly optimizes what we care about (policy performance)",
        "- Better convergence properties than value-based methods for some problems"
      ],
      code: {
        python: `# REINFORCE Algorithm Implementation
import numpy as np
import torch
import torch.optim as optim
import torch.nn.functional as F

class PolicyNetwork(torch.nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.fc1 = torch.nn.Linear(state_dim, 64)
        self.fc2 = torch.nn.Linear(64, action_dim)
        
    def forward(self, state):
        x = F.relu(self.fc1(state))
        return F.softmax(self.fc2(x), dim=-1)

def reinforce(env, policy, episodes=1000, gamma=0.99, lr=0.01):
    optimizer = optim.Adam(policy.parameters(), lr=lr)
    
    for episode in range(episodes):
        state = env.reset()
        log_probs = []
        rewards = []
        
        # Generate episode
        done = False
        while not done:
            state = torch.FloatTensor(state)
            action_probs = policy(state)
            action = torch.multinomial(action_probs, 1).item()
            
            next_state, reward, done, _ = env.step(action)
            
            log_prob = torch.log(action_probs[action])
            log_probs.append(log_prob)
            rewards.append(reward)
            
            state = next_state
        
        # Calculate returns and update policy
        returns = []
        G = 0
        for r in reversed(rewards):
            G = r + gamma * G
            returns.insert(0, G)
        
        returns = torch.FloatTensor(returns)
        returns = (returns - returns.mean()) / (returns.std() + 1e-9)
        
        policy_loss = []
        for log_prob, G in zip(log_probs, returns):
            policy_loss.append(-log_prob * G)
        
        optimizer.zero_grad()
        torch.stack(policy_loss).sum().backward()
        optimizer.step()`,
        complexity: "Time: O(T) per episode, Space: O(T) for storing trajectories"
      }
    },
    {
      title: "📈 Actor-Critic Methods",
      id: "actor-critic",
      description: "Combining policy gradients with value function approximation for reduced variance.",
      keyPoints: [
        "Actor: Policy that selects actions",
        "Critic: Value function that evaluates actions",
        "Lower variance than pure policy gradients",
        "Can use bootstrapping for faster learning"
      ],
      detailedExplanation: [
        "Architecture:",
        "- Two networks: policy (actor) and value (critic)",
        "- Critic provides baseline for variance reduction",
        "- Actor updates policy using critic's estimates",
        "",
        "Advantage Estimation:",
        "- A(s,a) = Q(s,a) - V(s)",
        "- Can use n-step returns or GAE (Generalized Advantage Estimation)",
        "- TD(λ) methods for efficient credit assignment",
        "",
        "Implementation Variants:",
        "- Synchronous vs asynchronous updates",
        "- Shared vs separate network parameters",
        "- Experience replay vs on-policy updates",
        "- Trust region optimization (e.g., PPO, TRPO)"
      ],
      code: {
        python: `# Actor-Critic Implementation
class ActorCritic(torch.nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        # Shared feature extractor
        self.fc1 = torch.nn.Linear(state_dim, 64)
        
        # Actor head
        self.actor = torch.nn.Linear(64, action_dim)
        
        # Critic head
        self.critic = torch.nn.Linear(64, 1)
        
    def forward(self, state):
        x = F.relu(self.fc1(state))
        return F.softmax(self.actor(x), self.critic(x)

def actor_critic(env, model, episodes=1000, gamma=0.99, lr=0.01):
    optimizer = optim.Adam(model.parameters(), lr=lr)
    
    for episode in range(episodes):
        state = env.reset()
        done = False
        total_reward = 0
        
        while not done:
            state_tensor = torch.FloatTensor(state)
            action_probs, value = model(state_tensor)
            action = torch.multinomial(action_probs, 1).item()
            
            next_state, reward, done, _ = env.step(action)
            next_state_tensor = torch.FloatTensor(next_state)
            _, next_value = model(next_state_tensor)
            
            # Calculate TD error
            td_target = reward + gamma * next_value * (1 - int(done))
            td_error = td_target - value
            
            # Actor loss (policy gradient)
            log_prob = torch.log(action_probs[action])
            actor_loss = -log_prob * td_error.detach()
            
            # Critic loss (value estimation)
            critic_loss = F.mse_loss(value, td_target.detach())
            
            # Total loss
            loss = actor_loss + critic_loss
            
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            
            state = next_state
            total_reward += reward`,
        complexity: "Time: O(T) per episode, Space: O(1) for online updates"
      }
    },
    {
      title: "🛡️ Trust Region Methods",
      id: "trust-region",
      description: "Constraining policy updates to prevent destructive large steps.",
      keyPoints: [
        "TRPO: Trust Region Policy Optimization",
        "PPO: Proximal Policy Optimization (simpler alternative)",
        "KL divergence constraints on policy updates",
        "More stable training than vanilla policy gradients"
      ],
      detailedExplanation: [
        "Motivation:",
        "- Naive policy gradients can take overly large steps",
        "- Destructive updates degrade performance",
        "- Need to constrain how much policy can change",
        "",
        "TRPO Approach:",
        "- Uses conjugate gradient to compute updates",
        "- Constrains KL divergence between old and new policies",
        "- Theoretically justified but complex to implement",
        "",
        "PPO Approach:",
        "- Clips probability ratios to constrain updates",
        "- Simpler than TRPO with similar performance",
        "- Two main variants: PPO-Clip and PPO-Penalty",
        "- Works well with parallel environments",
        "",
        "Practical Considerations:",
        "- Importance of advantage normalization",
        "- Multiple epochs of minibatch updates",
        "- Adaptive KL coefficients",
        "- Value function clipping"
      ],
      code: {
        python: `# PPO-Clip Implementation
def ppo_clip(env, policy, episodes=1000, gamma=0.99, lr=0.001, 
             clip_ratio=0.2, epochs=4, batch_size=64):
    optimizer = optim.Adam(policy.parameters(), lr=lr)
    
    for episode in range(episodes):
        # Collect trajectories
        states, actions, rewards, old_probs = [], [], [], []
        state = env.reset()
        done = False
        
        while not done:
            state_tensor = torch.FloatTensor(state)
            action_probs = policy(state_tensor)
            action = torch.multinomial(action_probs, 1).item()
            
            next_state, reward, done, _ = env.step(action)
            
            states.append(state)
            actions.append(action)
            rewards.append(reward)
            old_probs.append(action_probs[action].detach())
            
            state = next_state
        
        # Calculate advantages
        returns = []
        G = 0
        for r in reversed(rewards):
            G = r + gamma * G
            returns.insert(0, G)
        returns = torch.FloatTensor(returns)
        advantages = returns - returns.mean()
        
        # Convert to tensors
        states = torch.FloatTensor(states)
        actions = torch.LongTensor(actions)
        old_probs = torch.FloatTensor(old_probs)
        
        # Optimize policy for K epochs
        for _ in range(epochs):
            # Get current probabilities
            current_probs = policy(states).gather(1, actions.unsqueeze(1))
            
            # Calculate ratio
            ratio = current_probs / old_probs.unsqueeze(1)
            
            # Calculate clipped surrogate loss
            surr1 = ratio * advantages.unsqueeze(1)
            surr2 = torch.clamp(ratio, 1-clip_ratio, 1+clip_ratio) * advantages.unsqueeze(1)
            policy_loss = -torch.min(surr1, surr2).mean()
            
            # Update policy
            optimizer.zero_grad()
            policy_loss.backward()
            optimizer.step()`,
        complexity: "Time: O(K*T) per episode (K epochs), Space: O(T) for trajectories"
      }
    },
    {
      title: "⚡ Advanced Policy Gradients",
      id: "advanced",
      description: "Recent innovations and improvements to policy gradient methods.",
      keyPoints: [
        "GAE: Generalized Advantage Estimation",
        "DDPG: Deep Deterministic Policy Gradient",
        "SAC: Soft Actor-Critic (entropy-regularized)",
        "A3C: Asynchronous Advantage Actor-Critic"
      ],
      detailedExplanation: [
        "Generalized Advantage Estimation (GAE):",
        "- Low-variance advantage estimation",
        "- Balances bias and variance with λ parameter",
        "- Works well with PPO and other policy gradient methods",
        "",
        "Deep Deterministic Policy Gradient (DDPG):",
        "- For continuous action spaces",
        "- Uses target networks for stability",
        "- Experience replay buffer",
        "- Actor-critic architecture with deterministic policy",
        "",
        "Soft Actor-Critic (SAC):",
        "- Maximizes both reward and entropy",
        "- Automatically trades off exploration and exploitation",
        "- State-of-the-art for many continuous control tasks",
        "",
        "Asynchronous Methods:",
        "- A3C: Multiple parallel agents",
        "- IMPALA: Importance-weighted actor-learner",
        "- Faster training through parallelism",
        "- Better exploration through diverse policies"
      ],
      code: {
        python: `# SAC Implementation (simplified)
class SAC:
    def __init__(self, state_dim, action_dim, action_space):
        # Networks
        self.actor = GaussianPolicy(state_dim, action_dim, action_space)
        self.critic = QNetwork(state_dim, action_dim)
        self.critic_target = QNetwork(state_dim, action_dim)
        
        # Target entropy (auto-tuning)
        self.target_entropy = -torch.prod(torch.Tensor(action_space.shape)).item()
        self.log_alpha = torch.zeros(1, requires_grad=True)
        
        # Optimizers
        self.actor_optimizer = optim.Adam(self.actor.parameters())
        self.critic_optimizer = optim.Adam(self.critic.parameters())
        self.alpha_optimizer = optim.Adam([self.log_alpha])
        
    def update(self, batch):
        states, actions, rewards, next_states, dones = batch
        
        # Update critic
        with torch.no_grad():
            next_actions, next_log_probs = self.actor.sample(next_states)
            q_next = self.critic_target(next_states, next_actions)
            q_target = rewards + (1 - dones) * self.gamma * (q_next - self.alpha * next_log_probs)
        
        q_current = self.critic(states, actions)
        critic_loss = F.mse_loss(q_current, q_target)
        
        self.critic_optimizer.zero_grad()
        critic_loss.backward()
        self.critic_optimizer.step()
        
        # Update actor
        actions_pred, log_probs = self.actor.sample(states)
        q_values = self.critic(states, actions_pred)
        actor_loss = (self.alpha * log_probs - q_values).mean()
        
        self.actor_optimizer.zero_grad()
        actor_loss.backward()
        self.actor_optimizer.step()
        
        # Update temperature
        alpha_loss = -(self.log_alpha * (log_probs + self.target_entropy).detach()).mean()
        
        self.alpha_optimizer.zero_grad()
        alpha_loss.backward()
        self.alpha_optimizer.step()
        
        # Update target networks
        soft_update(self.critic_target, self.critic, self.tau)`,
        complexity: "SAC: O(B) per update (B=batch size), DDPG: Similar to DQN"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-lime-50 to-[#F0FFD0]"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-lime-400 to-[#BFFF00]"
            : "bg-gradient-to-r from-lime-600 to-[#BFFF00]"
        } mb-8 sm:mb-12`}
      >
        Policy Gradient Methods
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-lime-900/20" : "bg-lime-100"
        } border-l-4 border-[#BFFF00]`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-[#BFFF00] text-lime-800">
          Reinforcement Learning → Policy Gradient Methods
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Policy gradient methods optimize policies directly by ascending the gradient of expected return.
          These methods form the foundation of modern deep reinforcement learning and are particularly
          effective for continuous control problems and complex environments.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-lime-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-lime-300" : "text-lime-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-[#BFFF00] dark:text-lime-400">
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
                      darkMode ? "bg-lime-900/30" : "bg-lime-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-[#BFFF00] text-lime-600">
                      Implementation Example
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
            darkMode ? "text-lime-300" : "text-lime-800"
          }`}
        >
          Method Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-lime-900" : "bg-[#BFFF00]"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Method</th>
                <th className="p-4 text-left">Variance</th>
                <th className="p-4 text-left">Sample Efficiency</th>
                <th className="p-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["REINFORCE", "High", "Low", "Simple problems, discrete actions"],
                ["Actor-Critic", "Medium", "Medium", "General RL problems"],
                ["PPO", "Low", "High", "Continuous control, robotics"],
                ["SAC", "Low", "High", "Continuous control with exploration"],
                ["DDPG", "Medium", "High", "Deterministic continuous policies"]
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
          darkMode ? "bg-lime-900/30" : "bg-lime-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-lime-300" : "text-lime-800"
          }`}
        >
          Practical Considerations
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-lime-300" : "text-lime-800"
              }`}
            >
              When to Use Policy Gradients
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Continuous action spaces (robotics, control)</li>
              <li>Stochastic optimal policies required</li>
              <li>Problems where value functions are hard to learn</li>
              <li>Environments with partial observability</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-lime-300" : "text-lime-800"
            }`}>
              Implementation Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Normalization:</strong> Always normalize advantages<br/>
              <strong>Entropy:</strong> Add entropy bonus for exploration<br/>
              <strong>Clipping:</strong> Use gradient clipping for stability<br/>
              <strong>Parallelism:</strong> Consider asynchronous methods for speed
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-lime-300" : "text-lime-800"
            }`}>
              Advanced Techniques
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>GAE:</strong> Generalized Advantage Estimation for lower variance<br/>
              <strong>PPO-Clip:</strong> Simple and effective for most problems<br/>
              <strong>SAC:</strong> State-of-the-art for continuous control<br/>
              <strong>IMPALA:</strong> Scalable distributed policy gradients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyGradientMethods;