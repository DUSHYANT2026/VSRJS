import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-teal-100 dark:border-teal-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-teal-600 to-[#34a0a4] hover:from-teal-700 hover:to-[#2a8a8e] dark:from-teal-700 dark:to-[#2a8a8e] dark:hover:from-teal-800 dark:hover:to-[#207478] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function RLGamingRobotics() {
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
      title: "🎮 Game AI Applications",
      id: "gaming",
      description: "How reinforcement learning is revolutionizing game artificial intelligence.",
      keyPoints: [
        "NPC behavior learning and adaptation",
        "Procedural content generation",
        "Game balancing and testing",
        "Player modeling and personalization"
      ],
      detailedExplanation: [
        "Key Applications in Gaming:",
        "- Autonomous agents that learn from experience (AlphaStar, OpenAI Five)",
        "- Dynamic difficulty adjustment based on player skill",
        "- Automated playtesting and bug detection",
        "- Real-time strategy game AI that adapts to opponents",
        "",
        "Technical Approaches:",
        "- Deep Q-Learning for action selection",
        "- Policy gradient methods for complex strategies",
        "- Self-play for competitive environments",
        "- Imitation learning from human demonstrations",
        "",
        "Notable Examples:",
        "- AlphaGo/AlphaZero: Mastering board games",
        "- OpenAI Five: Defeating human teams in Dota 2",
        "- DeepMind's Capture The Flag: 3D navigation and teamwork",
        "- MineRL: Learning to play Minecraft"
      ],
      code: {
        python: `# Game AI with RL using Stable Baselines3
import gym
from stable_baselines3 import PPO
from stable_baselines3.common.env_util import make_vec_env

# Create a vectorized environment
env = make_vec_env('LunarLander-v2', n_envs=4)

# Initialize PPO agent
model = PPO(
    'MlpPolicy',
    env,
    verbose=1,
    learning_rate=3e-4,
    n_steps=2048,
    batch_size=64,
    n_epochs=10,
    gamma=0.99
)

# Train the agent
model.learn(total_timesteps=1_000_000)

# Save the trained model
model.save("ppo_lunarlander")

# Load and test the trained model
del model  # remove to demonstrate loading
model = PPO.load("ppo_lunarlander")

obs = env.reset()
for _ in range(1000):
    action, _states = model.predict(obs)
    obs, rewards, dones, info = env.step(action)
    env.render()`,
        complexity: "Training: O(n) per episode, Inference: O(1) per step"
      }
    },
    {
      title: "🤖 Robotics Applications",
      id: "robotics",
      description: "Reinforcement learning for autonomous robot control and decision making.",
      keyPoints: [
        "Locomotion and motion control",
        "Manipulation and grasping",
        "Navigation and path planning",
        "Multi-robot coordination"
      ],
      detailedExplanation: [
        "Key Applications in Robotics:",
        "- Legged robot locomotion (Boston Dynamics-inspired)",
        "- Robotic arm control for precise manipulation",
        "- Autonomous vehicle navigation",
        "- Drone flight control and obstacle avoidance",
        "",
        "Technical Approaches:",
        "- Model-based RL for sample efficiency",
        "- Hierarchical RL for complex tasks",
        "- Sim-to-real transfer learning",
        "- Multi-agent RL for coordination",
        "",
        "Notable Examples:",
        "- OpenAI's Rubik's Cube solving robot hand",
        "- DeepMind's robotic soccer players",
        "- Boston Dynamics' adaptive locomotion",
        "- NVIDIA's autonomous warehouse robots",
        "",
        "Implementation Challenges:",
        "- Sample efficiency for real-world training",
        "- Safety constraints during exploration",
        "- Reward function design",
        "- Simulator accuracy for sim-to-real transfer"
      ],
      code: {
        python: `# Robotics RL with PyBullet and Stable Baselines3
import pybullet_envs
from stable_baselines3 import SAC
from stable_baselines3.common.evaluation import evaluate_policy

# Create environment (PyBullet's Minitaur)
env = gym.make('MinitaurBulletEnv-v0')

# Initialize Soft Actor-Critic (good for robotics)
model = SAC(
    'MlpPolicy',
    env,
    verbose=1,
    learning_rate=1e-3,
    buffer_size=1_000_000,
    learning_starts=10_000,
    batch_size=256,
    tau=0.005,
    gamma=0.99,
    ent_coef='auto'
)

# Train the agent
model.learn(total_timesteps=500_000)

# Evaluate the trained policy
mean_reward, std_reward = evaluate_policy(model, env, n_eval_episodes=10)
print(f"Mean reward: {mean_reward} ± {std_reward}")

# Sim-to-real considerations
def sim_to_real_transfer(obs):
    """Add noise/delay to simulate real-world conditions"""
    obs = obs + np.random.normal(0, 0.01, obs.shape)  # sensor noise
    return obs  # Could also add latency simulation`,
        complexity: "Training: O(n²) for complex dynamics, Inference: O(1) per step"
      }
    },
    {
      title: "🔄 Sim-to-Real Transfer",
      id: "sim2real",
      description: "Bridging the gap between simulation training and real-world deployment.",
      keyPoints: [
        "Domain randomization techniques",
        "Reality gap modeling",
        "Adaptive policy transfer",
        "System identification methods"
      ],
      detailedExplanation: [
        "Key Challenges:",
        "- Simulation inaccuracies (physics, sensors)",
        "- Partial observability in real world",
        "- Latency and control delays",
        "- Unmodeled dynamics and disturbances",
        "",
        "Technical Solutions:",
        "- Domain randomization for robustness",
        "- System identification for model calibration",
        "- Meta-learning for fast adaptation",
        "- Adversarial training to bridge reality gap",
        "",
        "Implementation Patterns:",
        "- Progressive neural networks for transfer",
        "- Ensemble of simulators with varied parameters",
        "- Real-world fine-tuning with safe exploration",
        "- Residual learning for correcting simulator errors",
        "",
        "Case Studies:",
        "- OpenAI's robotic hand transfer from simulation",
        "- NVIDIA's drone control transfer",
        "- Google's quadruped locomotion transfer",
        "- MIT's robotic manipulation transfer"
      ],
      code: {
        python: `# Sim-to-Real with Domain Randomization
import numpy as np
from domain_randomization import DomainRandomizedEnv

# Base environment
base_env = gym.make('RobotArmEnv-v0')

# Create domain randomized version
randomized_env = DomainRandomizedEnv(
    base_env,
    randomize_friction=True,  # Random friction coefficients
    randomize_mass=True,      # Random link masses
    randomize_damping=True,   # Random joint damping
    randomize_gravity=True,   # Random gravity vector
    randomize_sensor_noise=True,  # Add sensor noise
    friction_range=(0.5, 1.5),
    mass_range=(0.8, 1.2),
    gravity_range=(9.6, 10.4)
)

# Train with randomized environment
model = PPO('MlpPolicy', randomized_env, verbose=1)
model.learn(total_timesteps=1_000_000)

# Adaptive policy for real-world deployment
class AdaptivePolicy:
    def __init__(self, trained_model):
        self.model = trained_model
        self.observation_buffer = []
        
    def predict(self, obs):
        # Add real-world observations to buffer
        self.observation_buffer.append(obs)
        if len(self.observation_buffer) > 1000:
            self.adapt_to_reality()
        return self.model.predict(obs)
    
    def adapt_to_reality(self):
        # Implement online adaptation logic here
        # Could use the observation buffer to fine-tune
        pass`,
        complexity: "Domain randomization: O(n), Online adaptation: O(n²)"
      }
    },
    {
      title: "🤝 Multi-Agent Systems",
      id: "multiagent",
      description: "Reinforcement learning for cooperative and competitive multi-agent scenarios.",
      keyPoints: [
        "Cooperative multi-agent RL",
        "Competitive/Adversarial learning",
        "Communication protocols",
        "Hierarchical multi-agent control"
      ],
      detailedExplanation: [
        "Gaming Applications:",
        "- Team-based game AI (MOBAs, RTS games)",
        "- NPC crowd behavior simulation",
        "- Dynamic opponent modeling",
        "- Emergent strategy development",
        "",
        "Robotics Applications:",
        "- Swarm robotics coordination",
        "- Multi-robot manipulation tasks",
        "- Fleet learning for autonomous vehicles",
        "- Distributed sensor networks",
        "",
        "Technical Approaches:",
        "- Centralized training with decentralized execution",
        "- Learning communication protocols",
        "- Opponent modeling and meta-learning",
        "- Credit assignment in cooperative tasks",
        "",
        "Notable Examples:",
        "- DeepMind's AlphaStar (Starcraft II)",
        "- OpenAI's Hide and Seek multi-agent environment",
        "- Google's robotic grasping with multiple arms",
        "- NVIDIA's drone swarm navigation"
      ],
      code: {
        python: `# Multi-Agent RL with RLlib
from ray import tune
from ray.rllib.agents.ppo import PPOTrainer

# Configure multi-agent environment
config = {
    "env": "MultiAgentPong",
    "num_workers": 4,
    "framework": "torch",
    "multiagent": {
        "policies": {
            "player1": (None, obs_space, act_space, {"gamma": 0.99}),
            "player2": (None, obs_space, act_space, {"gamma": 0.99}),
        },
        "policy_mapping_fn": lambda agent_id: "player1" if agent_id.startswith("p1") else "player2",
    },
    "model": {
        "fcnet_hiddens": [256, 256],
    },
}

# Train both agents simultaneously
tune.run(
    PPOTrainer,
    config=config,
    stop={"training_iteration": 100},
    checkpoint_at_end=True
)

# Cooperative multi-robot example
class CooperativeRobots:
    def __init__(self, num_robots):
        self.robots = [PPOTrainer(config) for _ in range(num_robots)]
        self.shared_memory = SharedMemoryBuffer()
        
    def train_cooperatively(self):
        # Implement centralized learning with decentralized execution
        # Robots share experiences through the memory buffer
        # Each robot learns from collective experiences
        pass`,
        complexity: "Training: O(n²) for n agents, Inference: O(n) per step"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-teal-50 to-[#e6f7f7]"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-teal-400 to-[#34a0a4]"
            : "bg-gradient-to-r from-teal-600 to-[#34a0a4]"
        } mb-8 sm:mb-12`}
      >
        RL for Gaming & Robotics
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-teal-900/20" : "bg-teal-100"
        } border-l-4 border-[#34a0a4]`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-teal-400 text-[#2a8a8e]">
          Reinforcement Learning → Applications (Game AI, Robotics)
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Reinforcement learning has become a transformative technology for game AI and robotics,
          enabling systems to learn complex behaviors through interaction. This section covers
          practical applications and cutting-edge techniques in these domains.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-teal-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-teal-300" : "text-[#2a8a8e]"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-[#34a0a4] dark:text-teal-400">
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
                      darkMode ? "bg-teal-900/30" : "bg-teal-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-teal-400 text-[#2a8a8e]">
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

      {/* Case Studies */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? "text-teal-300" : "text-[#2a8a8e]"
          }`}
        >
          Notable Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "AlphaStar (Starcraft II)",
              description: "Mastered real-time strategy game at grandmaster level",
              techniques: "Self-play, imitation learning, neural architecture search"
            },
            {
              title: "OpenAI Robotic Hand",
              description: "Solved Rubik's Cube with dexterous manipulation",
              techniques: "Domain randomization, automatic domain randomization"
            },
            {
              title: "DeepMind Capture The Flag",
              description: "First-person shooter agents demonstrating teamwork",
              techniques: "Population-based training, reward shaping"
            },
            {
              title: "NVIDIA Drone Racing",
              description: "Autonomous drones racing through complex courses",
              techniques: "Sim-to-real transfer, reinforcement learning"
            },
            {
              title: "Boston Dynamics Locomotion",
              description: "Adaptive walking/running in dynamic environments",
              techniques: "Model-based RL, hierarchical control"
            },
            {
              title: "Google Robot Soccer",
              description: "Multi-robot coordination for soccer gameplay",
              techniques: "Multi-agent RL, decentralized execution"
            }
          ].map((caseStudy, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl ${
                darkMode ? "bg-gray-700" : "bg-teal-50"
              } border-l-4 border-[#34a0a4]`}
            >
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? "text-teal-300" : "text-[#2a8a8e]"
              }`}>
                {caseStudy.title}
              </h3>
              <p className={`mb-3 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}>
                {caseStudy.description}
              </p>
              <div className={`px-3 py-2 rounded ${
                darkMode ? "bg-teal-900/50" : "bg-teal-100"
              }`}>
                <p className={`text-sm ${
                  darkMode ? "text-teal-200" : "text-[#2a8a8e]"
                } font-medium`}>
                  Key Techniques: {caseStudy.techniques}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div
        className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-teal-900/30" : "bg-teal-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-teal-300" : "text-[#2a8a8e]"
          }`}
        >
          Practical Insights
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-teal-300" : "text-[#2a8a8e]"
              }`}
            >
              Implementation Best Practices
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Start with simpler environments before scaling complexity</li>
              <li>Use curriculum learning to progressively increase difficulty</li>
              <li>Implement comprehensive monitoring and logging</li>
              <li>Design reward functions carefully to avoid unintended behaviors</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-teal-300" : "text-[#2a8a8e]"
            }`}>
              Challenges and Solutions
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Sample Efficiency:</strong> Use model-based RL or demonstrations<br/>
              <strong>Exploration:</strong> Implement intrinsic motivation or curiosity<br/>
              <strong>Safety:</strong> Constrained RL or safe exploration techniques<br/>
              <strong>Transfer:</strong> Domain randomization and adaptation methods
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-teal-300" : "text-[#2a8a8e]"
            }`}>
              Emerging Trends
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Foundation Models:</strong> General-purpose RL policies<br/>
              <strong>Meta-Learning:</strong> Rapid adaptation to new tasks<br/>
              <strong>Neuro-Symbolic:</strong> Combining RL with symbolic reasoning<br/>
              <strong>Human-in-the-Loop:</strong> Interactive RL with human feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RLGamingRobotics;