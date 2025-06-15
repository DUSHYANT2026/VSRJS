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
    className={`inline-block bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 dark:from-amber-600 dark:to-yellow-600 dark:hover:from-amber-700 dark:hover:to-yellow-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-600 focus:ring-offset-2`}
    aria-expanded={isVisible}
  >
    {isVisible ? "Hide Python Code" : "Show Python Code"}
  </button>
);

function TimeSeriesForecasting() {
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
      title: "⏳ ARIMA Models",
      id: "arima",
      description: "Autoregressive Integrated Moving Average models for stationary time series.",
      keyPoints: [
        "AR (Autoregressive): Model future values based on past values",
        "I (Integrated): Differencing to make series stationary",
        "MA (Moving Average): Model future values based on past errors",
        "Seasonal ARIMA (SARIMA) for periodic patterns"
      ],
      detailedExplanation: [
        "Components of ARIMA(p,d,q):",
        "- p: Number of autoregressive terms",
        "- d: Degree of differencing needed for stationarity",
        "- q: Number of moving average terms",
        "",
        "Model Selection Process:",
        "1. Check stationarity (ADF test)",
        "2. Determine differencing order (d)",
        "3. Identify AR/MA terms (ACF/PACF plots)",
        "4. Estimate parameters (MLE)",
        "5. Validate residuals (Ljung-Box test)",
        "",
        "Applications:",
        "- Economic forecasting",
        "- Inventory management",
        "- Energy demand prediction",
        "- Stock price analysis"
      ],
      code: {
        python: `# ARIMA Implementation
import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
import matplotlib.pyplot as plt

# Load time series data
data = pd.read_csv('timeseries.csv', parse_dates=['date'], index_col='date')

# Check stationarity and difference if needed
def check_stationarity(series):
    from statsmodels.tsa.stattools import adfuller
    result = adfuller(series)
    return result[1] < 0.05  # p-value < 0.05 indicates stationarity

if not check_stationarity(data['value']):
    data['value'] = data['value'].diff().dropna()

# Plot ACF/PACF to identify p and q
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10,8))
plot_acf(data['value'], ax=ax1)
plot_pacf(data['value'], ax=ax2)
plt.show()

# Fit ARIMA model
model = ARIMA(data['value'], order=(2,1,1))  # (p,d,q)
results = model.fit()

# Summary of model
print(results.summary())

# Forecast next 10 periods
forecast = results.get_forecast(steps=10)
forecast_mean = forecast.predicted_mean
conf_int = forecast.conf_int()

# Plot results
data['value'].plot(figsize=(12,6), label='Observed')
forecast_mean.plot(label='Forecast')
plt.fill_between(conf_int.index,
                conf_int.iloc[:, 0],
                conf_int.iloc[:, 1], color='k', alpha=0.1)
plt.legend()
plt.title('ARIMA Forecast')
plt.show()`,
        complexity: "Fitting: O(n²), Forecasting: O(1) per step"
      }
    },
    {
      title: "📈 Exponential Smoothing",
      id: "smoothing",
      description: "Weighted average methods that give more importance to recent observations.",
      keyPoints: [
        "Simple Exponential Smoothing (no trend/seasonality)",
        "Holt's method (captures trend)",
        "Holt-Winters (captures trend and seasonality)",
        "ETS models (Error, Trend, Seasonal components)"
      ],
      detailedExplanation: [
        "Types of Exponential Smoothing:",
        "- Single (SES): Level only",
        "- Double: Level + Trend",
        "- Triple: Level + Trend + Seasonality",
        "",
        "Smoothing Parameters:",
        "- α (level): Closer to 1 weights recent obs more",
        "- β (trend): Controls trend component",
        "- γ (seasonal): Controls seasonal adjustment",
        "",
        "Model Selection:",
        "- AIC/BIC for parameter selection",
        "- Box-Cox transformation for variance stabilization",
        "- Automated model selection with ets()",
        "",
        "Applications:",
        "- Short-term demand forecasting",
        "- Inventory control systems",
        "- Financial market analysis",
        "- Web traffic prediction"
      ],
      code: {
        python: `# Exponential Smoothing Implementation
from statsmodels.tsa.holtwinters import ExponentialSmoothing
import matplotlib.pyplot as plt
import pandas as pd

# Load data
data = pd.read_csv('sales.csv', parse_dates=['month'], index_col='month')

# Fit Holt-Winters seasonal model
model = ExponentialSmoothing(data['sales'],
                            trend='add',
                            seasonal='mul',
                            seasonal_periods=12)
results = model.fit()

# Print parameters
print(f"Smoothing parameters: alpha={results.params['smoothing_level']:.3f}, "
      f"beta={results.params['smoothing_trend']:.3f}, "
      f"gamma={results.params['smoothing_seasonal']:.3f}")

# Forecast next year
forecast = results.forecast(12)

# Plot results
fig, ax = plt.subplots(figsize=(12,6))
data['sales'].plot(ax=ax, label='Observed')
forecast.plot(ax=ax, label='Forecast', color='red')
ax.fill_between(forecast.index,
               results.predict(start=data.index[-24])[-12:],
               forecast,
               color='red', alpha=0.1)
plt.title('Holt-Winters Seasonal Forecast')
plt.legend()
plt.show()

# Automated model selection
from statsmodels.tsa.api import ETSModel
best_aic = np.inf
best_model = None

# Test different combinations
for trend in ['add', 'mul', None]:
    for seasonal in ['add', 'mul', None]:
        try:
            model = ETSModel(data['sales'], trend=trend, seasonal=seasonal, seasonal_periods=12)
            results = model.fit()
            if results.aic < best_aic:
                best_aic = results.aic
                best_model = results
        except:
            continue

print(f"Best model: AIC={best_aic:.1f}")
print(best_model.summary())`,
        complexity: "Fitting: O(n), Forecasting: O(1) per step"
      }
    },
    {
      title: "🧠 LSTM for Time Series",
      id: "lstm",
      description: "Long Short-Term Memory networks for complex temporal patterns.",
      keyPoints: [
        "Special RNN architecture for long-term dependencies",
        "Memory cells with input, forget, and output gates",
        "Handles non-linear and multivariate relationships",
        "Requires careful hyperparameter tuning"
      ],
      detailedExplanation: [
        "LSTM Architecture Components:",
        "- Forget gate: Decides what information to discard",
        "- Input gate: Updates cell state with new information",
        "- Output gate: Determines next hidden state",
        "- Cell state: Carries information across time steps",
        "",
        "Implementation Considerations:",
        "- Sequence length selection",
        "- Normalization/scaling of inputs",
        "- Bidirectional LSTMs for richer context",
        "- Attention mechanisms for long sequences",
        "",
        "Training Process:",
        "1. Prepare sequential training samples",
        "2. Define network architecture",
        "3. Train with backpropagation through time",
        "4. Validate on holdout period",
        "5. Tune hyperparameters (epochs, units, etc.)",
        "",
        "Applications:",
        "- Multivariate financial forecasting",
        "- Energy load prediction",
        "- Weather forecasting",
        "- Anomaly detection in temporal data"
      ],
      code: {
        python: `# LSTM for Time Series Forecasting
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

# Load and preprocess data
data = pd.read_csv('energy.csv', parse_dates=['timestamp'], index_col='timestamp')
values = data['consumption'].values.reshape(-1,1)

# Normalize data
scaler = MinMaxScaler(feature_range=(0,1))
scaled = scaler.fit_transform(values)

# Create sequences
def create_sequences(data, seq_length):
    X, y = [], []
    for i in range(len(data)-seq_length-1):
        X.append(data[i:(i+seq_length), 0])
        y.append(data[i+seq_length, 0])
    return np.array(X), np.array(y)

seq_length = 24  # 24 hours lookback
X, y = create_sequences(scaled, seq_length)

# Split train/test
split = int(0.8 * len(X))
X_train, X_test = X[:split], X[split:]
y_train, y_test = y[:split], y[split:]

# Reshape for LSTM [samples, timesteps, features]
X_train = X_train.reshape((X_train.shape[0], X_train.shape[1], 1))
X_test = X_test.reshape((X_test.shape[0], X_test.shape[1], 1))

# Build LSTM model
model = Sequential([
    LSTM(50, activation='relu', input_shape=(seq_length, 1)),
    Dropout(0.2),
    Dense(1)
])

model.compile(optimizer='adam', loss='mse')

# Train model
history = model.fit(X_train, y_train, 
                   epochs=50, 
                   batch_size=32,
                   validation_data=(X_test, y_test),
                   verbose=1)

# Plot training history
plt.figure(figsize=(10,6))
plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('Model Training History')
plt.legend()
plt.show()

# Make predictions
test_predict = model.predict(X_test)
test_predict = scaler.inverse_transform(test_predict)
y_test = scaler.inverse_transform(y_test.reshape(-1,1))

# Plot predictions
plt.figure(figsize=(12,6))
plt.plot(y_test, label='Actual')
plt.plot(test_predict, label='Predicted')
plt.title('LSTM Time Series Forecasting')
plt.legend()
plt.show()`,
        complexity: "Training: O(n × L × H²) where L=sequence length, H=hidden units"
      }
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-14 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-amber-50 to-yellow-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-amber-400 to-yellow-400"
            : "bg-gradient-to-r from-amber-600 to-yellow-600"
        } mb-8 sm:mb-12`}
      >
        Time Series Forecasting
      </h1>

      <div
        className={`p-6 rounded-xl mb-8 ${
          darkMode ? "bg-amber-900/20" : "bg-amber-100"
        } border-l-4 border-amber-500`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-amber-500 text-amber-800">
          Advanced Machine Learning → Time Series
        </h2>
        <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Time series forecasting involves predicting future values based on previously observed values.
          This section covers traditional statistical methods and modern deep learning approaches
          for analyzing and forecasting temporal data.
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
                      darkMode ? "bg-amber-900/30" : "bg-amber-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-amber-400 text-amber-600">
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
          Forecasting Methods Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-amber-900" : "bg-amber-600"
              } text-white`}
            >
              <tr>
                <th className="p-4 text-left">Method</th>
                <th className="p-4 text-left">Strengths</th>
                <th className="p-4 text-left">Weaknesses</th>
                <th className="p-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["ARIMA", "Interpretable, handles trends/seasonality", "Requires stationary data, manual tuning", "Univariate, medium-term forecasts"],
                ["Exponential Smoothing", "Simple, handles seasonality well", "Limited to additive patterns", "Short-term, seasonal data"],
                ["LSTM", "Learns complex patterns, multivariate", "Computationally expensive, black-box", "Multivariate, long sequences"]
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
          Forecasting Best Practices
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
              Model Selection
            </h4>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Start simple (exponential smoothing) before complex models</li>
              <li>Use ARIMA for interpretable, stationary series</li>
              <li>Consider LSTMs for complex, multivariate patterns</li>
              <li>Ensemble methods can combine strengths of different approaches</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-amber-300" : "text-amber-800"
            }`}>
              Evaluation Metrics
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["MAE", "Mean Absolute Error"],
                ["RMSE", "Root Mean Squared Error"],
                ["MAPE", "Mean Absolute % Error"],
                ["MASE", "Mean Abs Scaled Error"]
              ].map(([metric, name]) => (
                <div key={metric} className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-amber-50"
                }`}>
                  <div className="font-bold text-amber-600 dark:text-amber-400">{metric}</div>
                  <div className="text-gray-800 dark:text-gray-200">{name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-sm ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-amber-300" : "text-amber-800"
            }`}>
              Advanced Techniques
            </h4>
            <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              <strong>Prophet:</strong> Facebook's additive regression model<br/>
              <strong>N-BEATS:</strong> Neural basis expansion analysis<br/>
              <strong>DeepAR:</strong> Probabilistic forecasting with RNNs<br/>
              <strong>Temporal Fusion Transformers:</strong> Attention-based models
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSeriesForecasting;