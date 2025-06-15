import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../ThemeContext.jsx";

const CodeExample = React.memo(({ code, darkMode }) => (
  <div className="rounded-lg overflow-hidden border-2 border-turquoise-100 dark:border-turquoise-900 transition-all duration-300">
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
    className={`inline-block bg-gradient-to-r from-turquoise-500 to-cyan-500 hover:from-turquoise-600 hover:to-cyan-600 dark:from-turquoise-600 dark:to-cyan-600 dark:hover:from-turquoise-700 dark:hover:to-cyan-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-turquoise-500 dark:focus:ring-turquoise-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function NeuralNetworks() {
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
      title: "🧠 Perceptrons and MLPs",
      id: "perceptrons",
      description: "The building blocks of neural networks, from single neurons to multi-layer architectures.",
      keyPoints: [
        "Perceptron: Single neuron with learnable weights",
        "Multi-Layer Perceptron (MLP): Stacked layers of neurons",
        "Activation functions (Sigmoid, ReLU, Tanh)",
        "Universal approximation theorem"
      ],
      detailedExplanation: [
        "Key concepts:",
        "- Input layer, hidden layers, output layer architecture",
        "- Feedforward computation: Wx + b → activation",
        "- Decision boundaries and linear separability",
        "- Capacity vs. overfitting tradeoff",
        "",
        "Implementation considerations:",
        "- Weight initialization strategies",
        "- Bias terms and their role",
        "- Choosing appropriate activation functions",
        "- Hidden layer sizing and depth",
        "",
        "Mathematical formulation:",
        "- Forward pass: a⁽ˡ⁾ = f(W⁽ˡ⁾a⁽ˡ⁻¹⁾ + b⁽ˡ⁾)",
        "- Activation functions:",
        "  • Sigmoid: 1/(1 + e⁻ˣ)",
        "  • ReLU: max(0, x)",
        "  • Tanh: (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ)"
      ],
      code: {
        python: `# Implementing MLP from scratch
import numpy as np

class MLP:
    def __init__(self, layer_sizes):
        self.weights = [np.random.randn(y, x) * 0.1 
                       for x, y in zip(layer_sizes[:-1], layer_sizes[1:])]
        self.biases = [np.zeros((y, 1)) for y in layer_sizes[1:]]
    
    def forward(self, x):
        a = x
        for w, b in zip(self.weights, self.biases):
            z = np.dot(w, a) + b
            a = self.relu(z)  # Using ReLU activation
        return a
    
    def relu(self, z):
        return np.maximum(0, z)
    
    def sigmoid(self, z):
        return 1 / (1 + np.exp(-z))

# Example usage
mlp = MLP([784, 128, 64, 10])  # For MNIST classification
output = mlp.forward(input_image)

# Using PyTorch
import torch
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(784, 128),
    nn.ReLU(),
    nn.Linear(128, 64),
    nn.ReLU(),
    nn.Linear(64, 10)
)`,
        complexity: "Forward pass: O(∑(l=1 to L) nˡnˡ⁻¹) where nˡ is layer size"
      }
    },
    {
      title: "🔄 Backpropagation",
      id: "backprop",
      description: "The fundamental algorithm for training neural networks through gradient computation.",
      keyPoints: [
        "Chain rule applied to computational graphs",
        "Gradient descent optimization",
        "Loss functions (Cross-Entropy, MSE)",
        "Vanishing/exploding gradients"
      ],
      detailedExplanation: [
        "Backpropagation steps:",
        "1. Forward pass: Compute loss",
        "2. Backward pass: Compute gradients",
        "3. Parameter update: Adjust weights",
        "",
        "Mathematical derivation:",
        "- Output layer gradients: ∂L/∂z⁽ᴸ⁾",
        "- Hidden layer gradients: ∂L/∂z⁽ˡ⁾ = (W⁽ˡ⁺¹⁾)ᵀ ∂L/∂z⁽ˡ⁺¹⁾ ⊙ f'(z⁽ˡ⁾)",
        "- Parameter gradients: ∂L/∂W⁽ˡ⁾ = ∂L/∂z⁽ˡ⁾ (a⁽ˡ⁻¹⁾)ᵀ",
        "",
        "Practical considerations:",
        "- Numerical stability issues",
        "- Gradient checking for verification",
        "- Mini-batch processing",
        "- Learning rate selection",
        "",
        "Advanced variants:",
        "- Nesterov momentum",
        "- Adagrad/RMSprop/Adam",
        "- Second-order methods"
      ],
      code: {
        python: `# Backpropagation Implementation
def backward(self, x, y_true):
    # Forward pass
    activations = [x]
    zs = []
    a = x
    for w, b in zip(self.weights, self.biases):
        z = np.dot(w, a) + b
        zs.append(z)
        a = self.relu(z)
        activations.append(a)
    
    # Backward pass
    dL_dz = (activations[-1] - y_true)  # MSE derivative
    gradients = []
    
    for l in range(len(self.weights)-1, -1, -1):
        # Gradient for weights
        dL_dW = np.dot(dL_dz, activations[l].T)
        # Gradient for biases
        dL_db = dL_dz
        # Gradient for previous layer
        if l > 0:
            dL_dz = np.dot(self.weights[l].T, dL_dz) * self.relu_derivative(zs[l-1])
        
        gradients.append((dL_dW, dL_db))
    
    return gradients[::-1]  # Reverse to match layer order

def relu_derivative(self, z):
    return (z > 0).astype(float)

# PyTorch does this automatically
loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

for epoch in range(epochs):
    optimizer.zero_grad()
    outputs = model(inputs)
    loss = loss_fn(outputs, labels)
    loss.backward()  # Backpropagation
    optimizer.step()`,
        complexity: "Backward pass: ~2-3x forward pass complexity"
      }
    },
    {
      title: "🖼️ Convolutional Neural Networks",
      id: "cnns",
      description: "Specialized architectures for processing grid-like data (images, time series).",
      keyPoints: [
        "Convolutional layers: Local receptive fields",
        "Pooling layers: Dimensionality reduction",
        "Architectural patterns (LeNet, AlexNet, ResNet)",
        "Transfer learning with pretrained models"
      ],
      detailedExplanation: [
        "CNN building blocks:",
        "- Convolution: Filter application with shared weights",
        "- Padding and stride controls",
        "- Pooling (Max, Average) for translation invariance",
        "- 1x1 convolutions for channel mixing",
        "",
        "Modern architectures:",
        "- LeNet-5 (1998): Early success on MNIST",
        "- AlexNet (2012): Deep learning breakthrough",
        "- VGG (2014): Uniform architecture",
        "- ResNet (2015): Residual connections",
        "- EfficientNet (2019): Scalable architecture",
        "",
        "Implementation details:",
        "- Kernel size selection (3x3, 5x5, etc.)",
        "- Channel depth progression",
        "- Batch normalization layers",
        "- Dropout for regularization"
      ],
      code: {
        python: `# CNN Implementation Examples
import torch
import torch.nn as nn

# Basic CNN
class SimpleCNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.fc1 = nn.Linear(64 * 8 * 8, 256)
        self.fc2 = nn.Linear(256, 10)
    
    def forward(self, x):
        x = self.pool(nn.functional.relu(self.conv1(x)))
        x = self.pool(nn.functional.relu(self.conv2(x)))
        x = torch.flatten(x, 1)
        x = nn.functional.relu(self.fc1(x))
        return self.fc2(x)

# Using pretrained model
from torchvision import models
resnet = models.resnet18(pretrained=True)
# Replace final layer
resnet.fc = nn.Linear(resnet.fc.in_features, 100)  # For 100-class problem

# Modern architecture with skip connections
class ResidualBlock(nn.Module):
    def __init__(self, in_channels, out_channels, stride=1):
        super().__init__()
        self.conv1 = nn.Conv2d(in_channels, out_channels, kernel_size=3, 
                              stride=stride, padding=1, bias=False)
        self.bn1 = nn.BatchNorm2d(out_channels)
        self.conv2 = nn.Conv2d(out_channels, out_channels, kernel_size=3,
                              padding=1, bias=False)
        self.bn2 = nn.BatchNorm2d(out_channels)
        
        self.shortcut = nn.Sequential()
        if stride != 1 or in_channels != out_channels:
            self.shortcut = nn.Sequential(
                nn.Conv2d(in_channels, out_channels, kernel_size=1,
                         stride=stride, bias=False),
                nn.BatchNorm2d(out_channels)
            )
    
    def forward(self, x):
        out = nn.functional.relu(self.bn1(self.conv1(x)))
        out = self.bn2(self.conv2(out))
        out += self.shortcut(x)
        return nn.functional.relu(out))`,
        complexity: "O(n²k²c_in c_out) per conv layer (n=spatial size, k=kernel size)"
      }
    },
    {
      title: "⏳ Recurrent Neural Networks",
      id: "rnns",
      description: "Networks with internal state for processing sequential data.",
      keyPoints: [
        "Recurrent connections for temporal processing",
        "Long Short-Term Memory (LSTM) units",
        "Gated Recurrent Units (GRUs)",
        "Sequence-to-sequence models"
      ],
      detailedExplanation: [
        "RNN fundamentals:",
        "- Hidden state carries temporal information",
        "- Unfolding through time for backpropagation",
        "- Challenges with long-term dependencies",
        "",
        "Advanced architectures:",
        "- LSTM: Input, forget, output gates",
        "- GRU: Simplified gating mechanism",
        "- Bidirectional RNNs: Context from both directions",
        "- Attention mechanisms for sequence alignment",
        "",
        "Applications:",
        "- Time series forecasting",
        "- Natural language processing",
        "- Speech recognition",
        "- Video analysis",
        "",
        "Implementation considerations:",
        "- Truncated backpropagation through time",
        "- Gradient clipping for stability",
        "- Teacher forcing for training",
        "- Beam search for decoding"
      ],
      code: {
        python: `# RNN Implementations
import torch
import torch.nn as nn

# Basic RNN
class SimpleRNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super().__init__()
        self.rnn = nn.RNN(input_size, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        out, _ = self.rnn(x)  # out: (batch, seq_len, hidden_size)
        return self.fc(out[:, -1, :])  # Last timestep

# LSTM Network
class LSTMModel(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super().__init__()
        self.lstm = nn.LSTM(input_size, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        out, (h_n, c_n) = self.lstm(x)
        return self.fc(out[:, -1, :])

# Sequence-to-sequence with attention
class Seq2SeqAttention(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super().__init__()
        self.encoder = nn.LSTM(input_size, hidden_size, bidirectional=True)
        self.decoder = nn.LSTM(output_size, hidden_size)
        self.attention = nn.Linear(2*hidden_size + hidden_size, 1)
        self.fc = nn.Linear(2*hidden_size + hidden_size, output_size)
    
    def forward(self, src, trg):
        # Encoder
        enc_output, (h, c) = self.encoder(src)
        h = h.view(2, -1).unsqueeze(0)  # Combine bidirectional
        c = c.view(2, -1).unsqueeze(0)
        
        # Decoder with attention
        outputs = []
        for t in range(trg.size(1)):
            # Attention weights
            energy = torch.tanh(self.attention(torch.cat((h.repeat(trg.size(0), 1, 1), 
                                              enc_output), dim=2))
            attention = torch.softmax(energy, dim=1)
            
            # Context vector
            context = (attention * enc_output).sum(dim=1)
            
            # Decoder step
            out, (h, c) = self.decoder(trg[:, t:t+1], (h, c))
            out = torch.cat((out.squeeze(1), context), dim=1)
            out = self.fc(out)
            outputs.append(out)
        
        return torch.stack(outputs, dim=1)`,
        complexity: "LSTM: O(nh²) per timestep (n=sequence length, h=hidden size)"
      }
    },
    {
      title: "🔄 Transformers",
      id: "transformers",
      description: "Attention-based architectures that have revolutionized NLP and beyond.",
      keyPoints: [
        "Self-attention mechanism",
        "Multi-head attention",
        "Positional encoding",
        "Encoder-decoder architecture"
      ],
      detailedExplanation: [
        "Transformer components:",
        "- Query-Key-Value attention computation",
        "- Scaled dot-product attention",
        "- Layer normalization and residual connections",
        "- Feed-forward sublayers",
        "",
        "Key architectures:",
        "- Original Transformer (Vaswani et al.)",
        "- BERT: Bidirectional pretraining",
        "- GPT: Autoregressive language modeling",
        "- Vision Transformers (ViT)",
        "",
        "Implementation details:",
        "- Masking for sequence processing",
        "- Positional encoding schemes",
        "- Multi-head attention splitting",
        "- Learning rate scheduling",
        "",
        "Applications:",
        "- Machine translation",
        "- Text generation",
        "- Image recognition",
        "- Multimodal learning"
      ],
      code: {
        python: `# Transformer Implementation
import torch
import torch.nn as nn
import math

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super().__init__()
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)
    
    def forward(self, q, k, v, mask=None):
        batch_size = q.size(0)
        
        # Linear projections
        q = self.W_q(q).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        k = self.W_k(k).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        v = self.W_v(v).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        
        # Scaled dot-product attention
        scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(self.d_k)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        attention = torch.softmax(scores, dim=-1)
        output = torch.matmul(attention, v)
        
        # Concatenate heads
        output = output.transpose(1, 2).contiguous().view(batch_size, -1, self.d_model)
        return self.W_o(output)

class TransformerBlock(nn.Module):
    def __init__(self, d_model, num_heads, ff_dim, dropout=0.1):
        super().__init__()
        self.attention = MultiHeadAttention(d_model, num_heads)
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.ff = nn.Sequential(
            nn.Linear(d_model, ff_dim),
            nn.ReLU(),
            nn.Linear(ff_dim, d_model)
        )
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, x, mask=None):
        attn_output = self.attention(x, x, x, mask)
        x = self.norm1(x + self.dropout(attn_output))
        ff_output = self.ff(x)
        return self.norm2(x + self.dropout(ff_output))

# Using Hugging Face transformers
from transformers import BertModel, BertTokenizer

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

inputs = tokenizer("Hello world!", return_tensors="pt")
outputs = model(**inputs)`,
        complexity: "O(n²d + nd²) where n=sequence length, d=embedding size"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-turquoise-50 to-cyan-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-turquoise-400 to-cyan-400"
            : "bg-gradient-to-r from-turquoise-600 to-cyan-600"
        } mb-8 sm:mb-12`}
      >
        Neural Networks Fundamentals
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-turquoise-900/20" : "bg-turquoise-100"
        } border-l-4 border-turquoise-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-turquoise-500 text-turquoise-800">
          Neural Networks
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Neural networks are the foundation of modern deep learning, capable of learning complex patterns
          through hierarchical feature extraction. This section covers architectures from basic perceptrons
          to cutting-edge transformer models.
        </p>
      </div>

      <div className="space-y-8">
        {content.map((section) => (
          <article
            key={section.id}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-turquoise-100"
            }`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-turquoise-300" : "text-turquoise-800"
                  }`}
                >
                  {section.title}
                </h2>
                <span className="text-turquoise-600 dark:text-turquoise-400">
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
                      darkMode ? "bg-cyan-900/30" : "bg-cyan-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-cyan-400 text-cyan-600">
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
            darkMode ? "text-turquoise-300" : "text-turquoise-800"
          }`}
        >
          Neural Network Architectures
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-turquoise-900" : "bg-turquoise-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Best For</th>
                <th className="p-4 text-left">Key Features</th>
                <th className="p-4 text-left">Popular Libraries</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["MLP", "Tabular data, simple patterns", "Fully connected layers", "PyTorch, Keras"],
                ["CNN", "Images, grid-like data", "Convolutional filters, pooling", "TensorFlow, FastAI"],
                ["RNN/LSTM", "Sequences, time series", "Recurrent connections, memory", "PyTorch Lightning"],
                ["Transformer", "Text, long-range dependencies", "Self-attention, positional encoding", "Hugging Face"]
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
          darkMode ? "bg-turquoise-900/30" : "bg-turquoise-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-turquoise-300" : "text-turquoise-800"
          }`}
        >
          Best Practices
        </h3>
        <div className="grid gap-6">
          <div
            className={`p-6 rounded-xl shadow-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-turquoise-300" : "text-turquoise-800"
              }`}
            >
              Architecture Selection
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>MLPs for simple structured data</li>
              <li>CNNs for images and spatial data</li>
              <li>RNNs/LSTMs for time series and sequences</li>
              <li>Transformers for text and long-range dependencies</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-turquoise-300" : "text-turquoise-800"
            }`}>
              Training Tips
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Initialization:</strong> Use He/Kaiming for ReLU networks<br/>
              <strong>Normalization:</strong> BatchNorm/LayerNorm for deep networks<br/>
              <strong>Regularization:</strong> Dropout, weight decay, early stopping<br/>
              <strong>Optimization:</strong> Adam is usually a safe choice
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-turquoise-300" : "text-turquoise-800"
            }`}>
              Emerging Trends
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Self-supervised learning:</strong> Pretraining on unlabeled data<br/>
              <strong>Neural Architecture Search:</strong> Automating model design<br/>
              <strong>Graph Neural Networks:</strong> For relational data<br/>
              <strong>Diffusion Models:</strong> State-of-the-art generation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeuralNetworks;