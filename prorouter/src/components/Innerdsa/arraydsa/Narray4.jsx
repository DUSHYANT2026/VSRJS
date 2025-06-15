import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown } from "react-feather";
import { useTheme } from "../../../ThemeContext.jsx";

const formatDescription = (desc, darkMode) => {
  if (Array.isArray(desc)) {
    return (
      <ul
        className={`list-disc pl-6 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {desc.map((item, i) => (
          <li key={i} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return desc.split("\n").map((paragraph, i) => (
    <p key={i} className="mb-4 whitespace-pre-line">
      {paragraph}
    </p>
  ));
};

const CodeExample = React.memo(
  ({ example, isVisible, language, code, darkMode }) => (
    <div
      className={`rounded-lg overflow-hidden border-2 ${getBorderColor(
        language,
        darkMode
      )} transition-all duration-300 ${isVisible ? "block" : "hidden"}`}
    >
      <SyntaxHighlighter
        language={language}
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
  )
);

const getBorderColor = (language, darkMode) => {
  const base = darkMode ? "border-gray-700" : "border-gray-100";
  switch (language) {
    case "cpp":
      return darkMode ? "border-blue-900" : "border-blue-100";
    case "java":
      return darkMode ? "border-red-900" : "border-red-100";
    case "python":
      return darkMode ? "border-yellow-900" : "border-yellow-100";
    default:
      return base;
  }
};

const LanguageLogo = ({ language, size = 24, darkMode }) => {
  const baseClasses = "rounded-md p-1 flex items-center justify-center";

  const getGradient = (language) => {
    switch (language) {
      case "cpp":
        return darkMode
          ? "bg-gradient-to-br from-blue-900 to-blue-600"
          : "bg-gradient-to-br from-blue-500 to-blue-700";
      case "java":
        return darkMode
          ? "bg-gradient-to-br from-red-800 to-red-600"
          : "bg-gradient-to-br from-red-500 to-red-700";
      case "python":
        return darkMode
          ? "bg-gradient-to-br from-yellow-700 to-yellow-600"
          : "bg-gradient-to-br from-yellow-400 to-yellow-600";
      default:
        return darkMode
          ? "bg-gradient-to-br from-gray-700 to-gray-600"
          : "bg-gradient-to-br from-gray-400 to-gray-600";
    }
  };

  const getLogo = (language) => {
    switch (language) {
      case "cpp":
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={size * 1.5}
              height={size * 1.5}
              viewBox="0 0 48 48"
            >
              <path
                fill="#00549d"
                fillRule="evenodd"
                d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                clipRule="evenodd"
              />
              <path
                fill="#0086d4"
                fillRule="evenodd"
                d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                clipRule="evenodd"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                clipRule="evenodd"
              />
              <path
                fill="#0075c0"
                fillRule="evenodd"
                d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                clipRule="evenodd"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M31 21H33V27H31zM38 21H40V27H38z"
                clipRule="evenodd"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M29 23H35V25H29zM36 23H42V25H36z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        );
        case "java":
          return (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%"
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size * 1.5}
                height={size * 1.5}
                viewBox="0 0 50 50"
              >
                <path
                  d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"
                />
              </svg>
            </div>
          );case "python":
        return (
          <svg viewBox="0 0 128 128" width={size} height={size}>
            <path
              fill="#3776AB"
              d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
              transform="translate(0 10.26)"
            ></path>
            <path
              fill="#FFDC41"
              d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.283 16.221 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.678-8.084 2.491-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
              transform="translate(0 10.26)"
            ></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${baseClasses} ${getGradient(language)}`}>
      {getLogo(language)}
    </div>
  );
};

const getButtonColor = (language, darkMode) => {
  switch (language) {
    case "cpp":
      return darkMode
        ? "from-blue-300 to-blue-500 hover:from-blue-400 hover:to-blue-700"
        : "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700";
    case "java":
      return darkMode
        ? "from-red-700 to-red-900 hover:from-red-800 hover:to-red-950"
        : "from-red-500 to-red-700 hover:from-red-600 hover:to-red-800";
    case "python":
      return darkMode
        ? "from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
        : "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600";
    default:
      return darkMode
        ? "from-gray-600 to-blue-600 hover:from-gray-700 hover:to-blue-700"
        : "from-gray-500 to-blue-500 hover:from-gray-600 hover:to-blue-600";
  }
};

const CollapsibleSection = ({
  title,
  content,
  isExpanded,
  onToggle,
  darkMode,
  colorScheme,
}) => (
  <div className="group">
    <button
      onClick={onToggle}
      className={`w-full flex justify-between items-center focus:outline-none p-3 rounded-lg transition-all ${
        isExpanded
          ? `${colorScheme.bg} ${colorScheme.border} border`
          : "hover:bg-opacity-10 hover:bg-gray-500"
      }`}
      aria-expanded={isExpanded}
    >
      <div className="flex items-center">
        <span className={`mr-3 text-lg ${colorScheme.icon}`}>
          {isExpanded ? "▼" : "►"}
        </span>
        <h3 className={`font-bold text-lg ${colorScheme.text}`}>{title}</h3>
      </div>
      <span className={`transition-transform duration-200 ${colorScheme.icon}`}>
        <ChevronDown size={20} className={isExpanded ? "rotate-180" : ""} />
      </span>
    </button>

    {isExpanded && (
      <div
        className={`p-4 sm:p-6 rounded-lg border mt-1 transition-all duration-200 ${colorScheme.bg} ${colorScheme.border} animate-fadeIn`}
      >
        <div
          className={`${colorScheme.text} font-medium leading-relaxed space-y-3`}
        >
          {typeof content === "string" ? (
            <div className="prose prose-sm max-w-none">
              {content.split("\n").map((paragraph, i) => (
                <p key={i} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : Array.isArray(content) ? (
            <ul className="space-y-2 list-disc pl-5 marker:text-opacity-60">
              {content.map((item, i) => (
                <li key={i} className="pl-2">
                  {item.includes(":") ? (
                    <>
                      <span className="font-semibold">
                        {item.split(":")[0]}:
                      </span>
                      {item.split(":").slice(1).join(":")}
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>
      </div>
    )}
  </div>
);

const ToggleCodeButton = ({ language, isVisible, onClick, darkMode }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center bg-gradient-to-br ${
      darkMode
        ? language === "cpp"
          ? "from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600"
          : language === "java"
          ? "from-red-900 to-red-700 hover:from-red-800 hover:to-red-600"
          : "from-yellow-800 to-yellow-600 hover:from-yellow-700 hover:to-yellow-500"
        : language === "cpp"
        ? "from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700"
        : language === "java"
        ? "from-red-600 to-red-800 hover:from-red-500 hover:to-red-700"
        : "from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600"
    } text-white font-medium px-4 py-1.5 rounded-lg transition-all transform hover:scale-[1.05] focus:outline-none focus:ring-2 ${
      language === "cpp"
        ? "focus:ring-blue-400"
        : language === "java"
        ? "focus:ring-red-400"
        : "focus:ring-yellow-400"
    } ${
      darkMode ? "focus:ring-offset-gray-900" : "focus:ring-offset-white"
    } shadow-md ${
      darkMode ? "shadow-gray-800/50" : "shadow-gray-500/40"
    } border ${darkMode ? "border-gray-700/50" : "border-gray-400/50"}`}
    aria-expanded={isVisible}
    aria-controls={`${language}-code`}
  >
    <LanguageLogo
      language={language}
      size={18}
      darkMode={darkMode}
      className="mr-2"
    />
    {language === "cpp" ? "C++" : language === "java" ? "Java" : "Python"}
  </button>
);

function Narray4() {
  const { darkMode } = useTheme();
  const [visibleCode, setVisibleCode] = useState({
    index: null,
    language: null,
  });
  const [expandedSections, setExpandedSections] = useState({});

  const toggleCodeVisibility = (language, index) => {
    setVisibleCode((prev) => {
      // If clicking the same code that's already open, close it
      if (prev.index === index && prev.language === language) {
        return { index: null, language: null };
      }
      // Otherwise open the new code
      return { index, language };
    });
  };

  const toggleDetails = (index, section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [`${index}-${section}`]: !prev[`${index}-${section}`],
    }));
  };

  const codeExamples = [
    {
        title: "Spiral Matrix from Array",
        description: "Create a spiral matrix of N*M size from a given 1D array, filling elements in a clockwise spiral pattern.",
        approach: [
            "1. Initialize an empty N x M matrix",
            "2. Define boundaries (top, bottom, left, right)",
            "3. Traverse the array while filling matrix in layers:",
            "   - Left to right along top boundary",
            "   - Top to bottom along right boundary",
            "   - Right to left along bottom boundary",
            "   - Bottom to top along left boundary",
            "4. Adjust boundaries after completing each layer"
        ],
        algorithmCharacteristics: [
            "Layer-by-Layer: Fills matrix in concentric layers",
            "Boundary Tracking: Maintains current layer boundaries",
            "Order Preservation: Maintains original array order",
            "Rectangular Support: Works for any N x M dimensions"
        ],
        complexityDetails: {
            time: "O(N*M)",
            space: "O(N*M)",
            explanation: "Must fill every element exactly once and store the resulting matrix"
        },
        cppcode: `vector<vector<int>> spiralMatrixFromArray(vector<int>& arr, int rows, int cols) {
    if (arr.size() != rows * cols) return {};
    
    vector<vector<int>> matrix(rows, vector<int>(cols));
    int top = 0, bottom = rows - 1;
    int left = 0, right = cols - 1;
    int index = 0;
    
    while (top <= bottom && left <= right) {
        // Fill top row
        for (int i = left; i <= right; i++) {
            matrix[top][i] = arr[index++];
        }
        top++;
        
        // Fill right column
        for (int i = top; i <= bottom; i++) {
            matrix[i][right] = arr[index++];
        }
        right--;
        
        if (top <= bottom) {
            // Fill bottom row
            for (int i = right; i >= left; i--) {
                matrix[bottom][i] = arr[index++];
            }
            bottom--;
        }
        
        if (left <= right) {
            // Fill left column
            for (int i = bottom; i >= top; i--) {
                matrix[i][left] = arr[index++];
            }
            left++;
        }
    }
    return matrix;
}`,
        javacode: `public int[][] spiralMatrixFromArray(int[] arr, int rows, int cols) {
    if (arr.length != rows * cols) return new int[0][0];
    
    int[][] matrix = new int[rows][cols];
    int top = 0, bottom = rows - 1;
    int left = 0, right = cols - 1;
    int index = 0;
    
    while (top <= bottom && left <= right) {
        // Fill top row
        for (int i = left; i <= right; i++) {
            matrix[top][i] = arr[index++];
        }
        top++;
        
        // Fill right column
        for (int i = top; i <= bottom; i++) {
            matrix[i][right] = arr[index++];
        }
        right--;
        
        if (top <= bottom) {
            // Fill bottom row
            for (int i = right; i >= left; i--) {
                matrix[bottom][i] = arr[index++];
            }
            bottom--;
        }
        
        if (left <= right) {
            // Fill left column
            for (int i = bottom; i >= top; i--) {
                matrix[i][left] = arr[index++];
            }
            left++;
        }
    }
    return matrix;
}`,
        pythoncode: `def spiral_matrix_from_array(arr, rows, cols):
    if len(arr) != rows * cols:
        return []
    
    matrix = [[0 for _ in range(cols)] for _ in range(rows)]
    top, bottom = 0, rows - 1
    left, right = 0, cols - 1
    index = 0
    
    while top <= bottom and left <= right:
        # Fill top row
        for i in range(left, right + 1):
            matrix[top][i] = arr[index]
            index += 1
        top += 1
        
        # Fill right column
        for i in range(top, bottom + 1):
            matrix[i][right] = arr[index]
            index += 1
        right -= 1
        
        if top <= bottom:
            # Fill bottom row
            for i in range(right, left - 1, -1):
                matrix[bottom][i] = arr[index]
                index += 1
            bottom -= 1
        
        if left <= right:
            # Fill left column
            for i in range(bottom, top - 1, -1):
                matrix[i][left] = arr[index]
                index += 1
            left += 1
    
    return matrix`,
        jscode: `function spiralMatrixFromArray(arr, rows, cols) {
    if (arr.length !== rows * cols) return [];
    
    const matrix = Array.from({length: rows}, () => new Array(cols).fill(0));
    let top = 0, bottom = rows - 1;
    let left = 0, right = cols - 1;
    let index = 0;
    
    while (top <= bottom && left <= right) {
        // Fill top row
        for (let i = left; i <= right; i++) {
            matrix[top][i] = arr[index++];
        }
        top++;
        
        // Fill right column
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = arr[index++];
        }
        right--;
        
        if (top <= bottom) {
            // Fill bottom row
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = arr[index++];
            }
            bottom--;
        }
        
        if (left <= right) {
            // Fill left column
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = arr[index++];
            }
            left++;
        }
    }
    return matrix;
}`,
        language: "python",
        complexity: "Time Complexity: O(N*M), Space Complexity: O(N*M)",
        link: "https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/"
    },
    {
        title: "Rotate Matrix 90 Degrees Clockwise",
        description: "Rotate an N x N matrix by 90 degrees in clockwise direction without using extra space (in-place rotation).",
        approach: [
            "1. Transpose the matrix (swap rows and columns)",
            "2. Reverse each row of the transposed matrix",
            "3. For non-square matrices, create new matrix with different approach"
        ],
        algorithmCharacteristics: [
            "In-Place: Modifies matrix without extra space",
            "Two-Step: Transpose followed by row reversal",
            "Square Only: Works only for N x N matrices",
            "Efficient: Performs operation in minimal passes"
        ],
        complexityDetails: {
            time: "O(N²)",
            space: "O(1)",
            explanation: "Each element is moved exactly twice (transpose and reverse)"
        },
        cppcode: `void rotate90Clockwise(vector<vector<int>>& matrix) {
    int n = matrix.size();
    // Transpose matrix
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    
    // Reverse each row
    for (int i = 0; i < n; i++) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
}`,
        javacode: `public void rotate90Clockwise(int[][] matrix) {
    int n = matrix.length;
    // Transpose matrix
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    // Reverse each row
    for (int i = 0; i < n; i++) {
        int left = 0, right = n - 1;
        while (left < right) {
            int temp = matrix[i][left];
            matrix[i][left] = matrix[i][right];
            matrix[i][right] = temp;
            left++;
            right--;
        }
    }
}`,
        pythoncode: `def rotate_90_clockwise(matrix):
    n = len(matrix)
    # Transpose matrix
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse each row
    for row in matrix:
        row.reverse()
    return matrix`,
        jscode: `function rotate90Clockwise(matrix) {
    const n = matrix.length;
    // Transpose matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
}`,
        language: "python",
        complexity: "Time Complexity: O(N²), Space Complexity: O(1)",
        link: "https://leetcode.com/problems/rotate-image/"
    },
    {
        title: "Search in Sorted Matrix",
        description: "Search for a target value in a matrix where each row and column is sorted in ascending order (Binary Search approach).",
        approach: [
            "1. Start from top-right corner (or bottom-left)",
            "2. If current element == target: return position",
            "3. If current element > target: move left",
            "4. If current element < target: move down",
            "5. Continue until element found or boundaries exceeded"
        ],
        algorithmCharacteristics: [
            "Staircase Search: Moves in two possible directions",
            "Efficient: Eliminates rows/columns with each comparison",
            "No Extra Space: Uses constant space",
            "Boundary Aware: Handles matrix edges properly"
        ],
        complexityDetails: {
            time: "O(N+M)",
            space: "O(1)",
            explanation: "In worst case, traverses one full row and column"
        },
        cppcode: `vector<int> searchSortedMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.empty()) return {-1, -1};
    
    int rows = matrix.size(), cols = matrix[0].size();
    int row = 0, col = cols - 1;  // Start from top-right corner
    
    while (row < rows && col >= 0) {
        if (matrix[row][col] == target) {
            return {row, col};
        } else if (matrix[row][col] > target) {
            col--;  // Move left
        } else {
            row++;  // Move down
        }
    }
    return {-1, -1};
}`,
        javacode: `public int[] searchSortedMatrix(int[][] matrix, int target) {
    if (matrix.length == 0) return new int[]{-1, -1};
    
    int rows = matrix.length, cols = matrix[0].length;
    int row = 0, col = cols - 1;  // Start from top-right corner
    
    while (row < rows && col >= 0) {
        if (matrix[row][col] == target) {
            return new int[]{row, col};
        } else if (matrix[row][col] > target) {
            col--;  // Move left
        } else {
            row++;  // Move down
        }
    }
    return new int[]{-1, -1};
}`,
        pythoncode: `def search_sorted_matrix(matrix, target):
    if not matrix:
        return [-1, -1]
    
    rows, cols = len(matrix), len(matrix[0])
    row, col = 0, cols - 1  # Start from top-right corner
    
    while row < rows and col >= 0:
        if matrix[row][col] == target:
            return [row, col]
        elif matrix[row][col] > target:
            col -= 1  # Move left
        else:
            row += 1  # Move down
    
    return [-1, -1]`,
        jscode: `function searchSortedMatrix(matrix, target) {
    if (!matrix.length) return [-1, -1];
    
    const rows = matrix.length, cols = matrix[0].length;
    let row = 0, col = cols - 1;  // Start from top-right corner
    
    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return [row, col];
        } else if (matrix[row][col] > target) {
            col--;  // Move left
        } else {
            row++;  // Move down
        }
    }
    return [-1, -1];
}`,
        language: "python",
        complexity: "Time Complexity: O(N+M), Space Complexity: O(1)",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/"
    },
    // Remaining problems would continue in this format...
    {
        title: "Set Matrix Zeroes",
        description: "If an element in an M x N matrix is 0, set its entire row and column to 0, do it in-place.",
        approach: [
            "1. First pass: mark rows and columns containing zeros",
            "2. Use first row and column as markers to save space",
            "3. Second pass: set elements to zero based on markers",
            "4. Handle first row and column separately"
        ],
        algorithmCharacteristics: [
            "In-Place Marking: Uses matrix itself for storage",
            "Two-Pass: First marks, second applies changes",
            "Edge Case Handling: Special treatment for first row/column",
            "Efficient: Avoids O(M+N) extra space"
        ],
        complexityDetails: {
            time: "O(M*N)",
            space: "O(1)",
            explanation: "Two complete passes through the matrix with constant extra space"
        },
        cppcode: `void setZeroes(vector<vector<int>>& matrix) {
    if (matrix.empty()) return;
    
    int rows = matrix.size(), cols = matrix[0].size();
    bool firstRowZero = false, firstColZero = false;
    
    // Check if first row/column needs to be zeroed
    for (int j = 0; j < cols; j++) {
        if (matrix[0][j] == 0) {
            firstRowZero = true;
            break;
        }
    }
    for (int i = 0; i < rows; i++) {
        if (matrix[i][0] == 0) {
            firstColZero = true;
            break;
        }
    }
    
    // Mark zeros on first row and column
    for (int i = 1; i < rows; i++) {
        for (int j = 1; j < cols; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    // Set zeros based on marks
    for (int i = 1; i < rows; i++) {
        for (int j = 1; j < cols; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Handle first row and column
    if (firstRowZero) {
        for (int j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }
    if (firstColZero) {
        for (int i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}`,
        javacode: `public void setZeroes(int[][] matrix) {
    if (matrix.length == 0) return;
    
    int rows = matrix.length, cols = matrix[0].length;
    boolean firstRowZero = false, firstColZero = false;
    
    // Check if first row/column needs to be zeroed
    for (int j = 0; j < cols; j++) {
        if (matrix[0][j] == 0) {
            firstRowZero = true;
            break;
        }
    }
    for (int i = 0; i < rows; i++) {
        if (matrix[i][0] == 0) {
            firstColZero = true;
            break;
        }
    }
    
    // Mark zeros on first row and column
    for (int i = 1; i < rows; i++) {
        for (int j = 1; j < cols; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    // Set zeros based on marks
    for (int i = 1; i < rows; i++) {
        for (int j = 1; j < cols; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Handle first row and column
    if (firstRowZero) {
        for (int j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }
    if (firstColZero) {
        for (int i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}`,
        pythoncode: `def set_zeroes(matrix):
    if not matrix:
        return
    
    rows, cols = len(matrix), len(matrix[0])
    first_row_has_zero = any(matrix[0][j] == 0 for j in range(cols))
    first_col_has_zero = any(matrix[i][0] == 0 for i in range(rows))
    
    # Mark zeros on first row and column
    for i in range(1, rows):
        for j in range(1, cols):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0
    
    # Set zeros based on marks
    for i in range(1, rows):
        for j in range(1, cols):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0
    
    # Handle first row and column
    if first_row_has_zero:
        for j in range(cols):
            matrix[0][j] = 0
    if first_col_has_zero:
        for i in range(rows):
            matrix[i][0] = 0`,
        jscode: `function setZeroes(matrix) {
    if (!matrix.length) return;
    
    const rows = matrix.length, cols = matrix[0].length;
    let firstRowZero = false, firstColZero = false;
    
    // Check if first row/column needs to be zeroed
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }
    
    // Mark zeros on first row and column
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    // Set zeros based on marks
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Handle first row and column
    if (firstRowZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }
    if (firstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}`,
        language: "python",
        complexity: "Time Complexity: O(M*N), Space Complexity: O(1)",
        link: "https://leetcode.com/problems/set-matrix-zeroes/"
    },
    {
      title: "Rotate Matrix 180 Degrees Counter-Clockwise",
      description: "Rotate an N x N matrix by 180 degrees in counter-clockwise direction using efficient in-place operations.",
      approach: [
          "1. Reverse each row of the matrix",
          "2. Then reverse the matrix column-wise (first row becomes last)",
          "3. Alternatively, rotate 90 degrees twice"
      ],
      algorithmCharacteristics: [
          "In-Place Rotation: Modifies matrix without extra space",
          "Double Reversal: Row reversal followed by column reversal",
          "Equivalent Operations: Same as upside-down flip",
          "Square Matrix: Works for N x N matrices"
      ],
      complexityDetails: {
          time: "O(N²)",
          space: "O(1)",
          explanation: "Each element is moved exactly twice during reversals"
      },
      cppcode: `void rotate180CounterClockwise(vector<vector<int>>& matrix) {
  int n = matrix.size();
  // Reverse each row
  for (int i = 0; i < n; i++) {
      reverse(matrix[i].begin(), matrix[i].end());
  }
  
  // Reverse the matrix vertically
  reverse(matrix.begin(), matrix.end());
}`,
      javacode: `public void rotate180CounterClockwise(int[][] matrix) {
  int n = matrix.length;
  // Reverse each row
  for (int i = 0; i < n; i++) {
      int left = 0, right = n - 1;
      while (left < right) {
          int temp = matrix[i][left];
          matrix[i][left] = matrix[i][right];
          matrix[i][right] = temp;
          left++;
          right--;
      }
  }
  
  // Reverse the matrix vertically
  int top = 0, bottom = n - 1;
  while (top < bottom) {
      int[] temp = matrix[top];
      matrix[top] = matrix[bottom];
      matrix[bottom] = temp;
      top++;
      bottom--;
  }
}`,
      pythoncode: `def rotate_180_counterclockwise(matrix):
  n = len(matrix)
  # Reverse each row
  for row in matrix:
      row.reverse()
  
  # Reverse the matrix vertically
  matrix.reverse()
  return matrix`,
      jscode: `function rotate180CounterClockwise(matrix) {
  const n = matrix.length;
  // Reverse each row
  for (let i = 0; i < n; i++) {
      matrix[i].reverse();
  }
  
  // Reverse the matrix vertically
  matrix.reverse();
  return matrix;
}`,
      language: "python",
      complexity: "Time Complexity: O(N²), Space Complexity: O(1)",
      link: "https://www.geeksforgeeks.org/rotate-matrix-180-degree/"
  },
  {
      title: "Generate Matrix with Given Row/Column Sums",
      description: "Construct a matrix where each row sums to given row sums and each column sums to given column sums.",
      approach: [
          "1. Initialize matrix with zeros",
          "2. For each cell (i,j), set value to min(row_sum[i], col_sum[j])",
          "3. Subtract this value from both row_sum[i] and col_sum[j]",
          "4. Proceed until all sums are satisfied",
          "5. Works for non-negative integers"
      ],
      algorithmCharacteristics: [
          "Greedy Approach: Always takes minimum possible value",
          "Non-Negative: Works only for positive sums",
          "Multiple Solutions: May have different valid matrices",
          "Efficient: Single pass through matrix"
      ],
      complexityDetails: {
          time: "O(M*N)",
          space: "O(M*N)",
          explanation: "Must fill each cell exactly once and store the resulting matrix"
      },
      cppcode: `vector<vector<int>> generateMatrix(vector<int>& rowSum, vector<int>& colSum) {
  int rows = rowSum.size(), cols = colSum.size();
  vector<vector<int>> matrix(rows, vector<int>(cols, 0));
  
  for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
          int minVal = min(rowSum[i], colSum[j]);
          matrix[i][j] = minVal;
          rowSum[i] -= minVal;
          colSum[j] -= minVal;
      }
  }
  return matrix;
}`,
      javacode: `public int[][] generateMatrix(int[] rowSum, int[] colSum) {
  int rows = rowSum.length, cols = colSum.length;
  int[][] matrix = new int[rows][cols];
  
  for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
          int minVal = Math.min(rowSum[i], colSum[j]);
          matrix[i][j] = minVal;
          rowSum[i] -= minVal;
          colSum[j] -= minVal;
      }
  }
  return matrix;
}`,
      pythoncode: `def generate_matrix(row_sum, col_sum):
  rows, cols = len(row_sum), len(col_sum)
  matrix = [[0 for _ in range(cols)] for _ in range(rows)]
  
  for i in range(rows):
      for j in range(cols):
          min_val = min(row_sum[i], col_sum[j])
          matrix[i][j] = min_val
          row_sum[i] -= min_val
          col_sum[j] -= min_val
  
  return matrix`,
      jscode: `function generateMatrix(rowSum, colSum) {
  const rows = rowSum.length, cols = colSum.length;
  const matrix = Array.from({length: rows}, () => new Array(cols).fill(0));
  
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          const minVal = Math.min(rowSum[i], colSum[j]);
          matrix[i][j] = minVal;
          rowSum[i] -= minVal;
          colSum[j] -= minVal;
      }
  }
  return matrix;
}`,
      language: "python",
      complexity: "Time Complexity: O(M*N), Space Complexity: O(M*N)",
      link: "https://www.geeksforgeeks.org/find-a-matrix-with-given-row-and-column-sums/"
  },
  {
      title: "Make Matrix Beautiful",
      description: "A matrix is beautiful if all rows and columns sums are equal. Find minimum operations to make matrix beautiful by incrementing elements.",
      approach: [
          "1. Calculate maximum of all row sums and column sums",
          "2. The target beautiful sum is this maximum value",
          "3. For each row/column not matching target, increment elements",
          "4. Count total operations needed"
      ],
      algorithmCharacteristics: [
          "Target Sum: Uses maximum existing sum as goal",
          "Greedy Increment: Always adds minimum needed",
          "Operation Counting: Tracks total increments",
          "Non-Decreasing: Only increases element values"
      ],
      complexityDetails: {
          time: "O(M*N)",
          space: "O(M+N)",
          explanation: "Requires calculating row and column sums, then adjusting elements"
      },
      cppcode: `int makeMatrixBeautiful(vector<vector<int>>& matrix) {
  if (matrix.empty()) return 0;
  
  int rows = matrix.size(), cols = matrix[0].size();
  vector<int> rowSums(rows, 0), colSums(cols, 0);
  
  // Calculate row and column sums
  for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
          rowSums[i] += matrix[i][j];
          colSums[j] += matrix[i][j];
      }
  }
  
  int maxSum = max(*max_element(rowSums.begin(), rowSums.end()),
                  *max_element(colSums.begin(), colSums.end()));
  int operations = 0;
  
  // Adjust matrix to make beautiful
  for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
          int diff = min(maxSum - rowSums[i], maxSum - colSums[j]);
          matrix[i][j] += diff;
          rowSums[i] += diff;
          colSums[j] += diff;
          operations += diff;
      }
  }
  return operations;
}`,
      javacode: `public int makeMatrixBeautiful(int[][] matrix) {
  if (matrix.length == 0) return 0;
  
  int rows = matrix.length, cols = matrix[0].length;
  int[] rowSums = new int[rows], colSums = new int[cols];
  
  // Calculate row and column sums
  for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
          rowSums[i] += matrix[i][j];
          colSums[j] += matrix[i][j];
      }
  }
  
  int maxRowSum = Arrays.stream(rowSums).max().getAsInt();
  int maxColSum = Arrays.stream(colSums).max().getAsInt();
  int maxSum = Math.max(maxRowSum, maxColSum);
  int operations = 0;
  
  // Adjust matrix to make beautiful
  for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
          int diff = Math.min(maxSum - rowSums[i], maxSum - colSums[j]);
          matrix[i][j] += diff;
          rowSums[i] += diff;
          colSums[j] += diff;
          operations += diff;
      }
  }
  return operations;
}`,
      pythoncode: `def make_matrix_beautiful(matrix):
  if not matrix:
      return 0
  
  rows, cols = len(matrix), len(matrix[0])
  row_sums = [sum(row) for row in matrix]
  col_sums = [sum(matrix[i][j] for i in range(rows)) for j in range(cols)]
  
  max_sum = max(max(row_sums), max(col_sums))
  operations = 0
  
  for i in range(rows):
      for j in range(cols):
          diff = min(max_sum - row_sums[i], max_sum - col_sums[j])
          matrix[i][j] += diff
          row_sums[i] += diff
          col_sums[j] += diff
          operations += diff
  
  return operations`,
      jscode: `function makeMatrixBeautiful(matrix) {
  if (!matrix.length) return 0;
  
  const rows = matrix.length, cols = matrix[0].length;
  const rowSums = new Array(rows).fill(0);
  const colSums = new Array(cols).fill(0);
  
  // Calculate row and column sums
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          rowSums[i] += matrix[i][j];
          colSums[j] += matrix[i][j];
      }
  }
  
  const maxSum = Math.max(Math.max(...rowSums), Math.max(...colSums));
  let operations = 0;
  
  // Adjust matrix to make beautiful
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          const diff = Math.min(maxSum - rowSums[i], maxSum - colSums[j]);
          matrix[i][j] += diff;
          rowSums[i] += diff;
          colSums[j] += diff;
          operations += diff;
      }
  }
  return operations;
}`,
      language: "python",
      complexity: "Time Complexity: O(M*N), Space Complexity: O(M+N)",
      link: "https://www.geeksforgeeks.org/make-matrix-beautiful-incrementing-rows-and-columns/"
  }
];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-12 rounded-2xl shadow-xl max-w-7xl transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50"
      }`}
    >
      <h1
        className={`text-4xl pb-4 sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text mb-8 sm:mb-12 ${
          darkMode
            ? "bg-gradient-to-r from-indigo-300 to-purple-400"
            : "bg-gradient-to-r from-indigo-600 to-purple-700"
        }`}
      >
        Matrix Problems with Solutions
        </h1>

      <div className="space-y-8">
        {codeExamples.map((example, index) => (
          <article
            key={index}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800/90 border-gray-700 hover:border-gray-600"
                : "bg-white/90 border-indigo-100 hover:border-indigo-200"
            }`}
          >
            <header className="mb-6">
              <h2
                className={`text-2xl sm:text-3xl font-bold text-left mb-4 ${
                  darkMode ? "text-indigo-300" : "text-indigo-800"
                }`}
              >
                {example.title}
              </h2>

              <div
                className={`p-4 sm:p-6 rounded-lg border transition-colors ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <h3
                  className={`font-bold mb-3 text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  Description
                </h3>
                <div
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  } font-medium leading-relaxed space-y-2`}
                >
                  {formatDescription(example.description, darkMode)}
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <CollapsibleSection
                  title="Approach"
                  content={example.approach}
                  isExpanded={expandedSections[`${index}-approach`]}
                  onToggle={() => toggleDetails(index, "approach")}
                  darkMode={darkMode}
                  colorScheme={{
                    bg: darkMode ? "bg-blue-900/30" : "bg-blue-50",
                    border: darkMode ? "border-blue-700" : "border-blue-200",
                    text: darkMode ? "text-blue-200" : "text-blue-800",
                    icon: darkMode ? "text-blue-300" : "text-blue-500",
                    hover: darkMode
                      ? "hover:bg-blue-900/20"
                      : "hover:bg-blue-50/70",
                  }}
                />

                <CollapsibleSection
                  title="Algorithm Characteristics"
                  content={example.algorithmCharacteristics}
                  isExpanded={expandedSections[`${index}-characteristics`]}
                  onToggle={() => toggleDetails(index, "characteristics")}
                  darkMode={darkMode}
                  colorScheme={{
                    bg: darkMode ? "bg-purple-900/30" : "bg-purple-50",
                    border: darkMode
                      ? "border-purple-700"
                      : "border-purple-200",
                    text: darkMode ? "text-purple-200" : "text-purple-800",
                    icon: darkMode ? "text-purple-300" : "text-purple-500",
                    hover: darkMode
                      ? "hover:bg-purple-900/20"
                      : "hover:bg-purple-50/70",
                  }}
                />

                <CollapsibleSection
                  title="Complexity Analysis"
                  content={
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-4">
                        <div
                          className={`px-3 py-2 rounded-lg ${
                            darkMode
                              ? "bg-blue-900/30 border border-blue-800"
                              : "bg-blue-100"
                          }`}
                        >
                          <div
                            className={`text-xs font-semibold ${
                              darkMode ? "text-blue-300" : "text-blue-600"
                            }`}
                          >
                            TIME COMPLEXITY
                          </div>
                          <div
                            className={`font-bold ${
                              darkMode ? "text-blue-100" : "text-blue-800"
                            }`}
                          >
                            {example.complexityDetails.time}
                          </div>
                        </div>
                        <div
                          className={`px-3 py-2 rounded-lg ${
                            darkMode
                              ? "bg-green-900/30 border border-green-800"
                              : "bg-green-100"
                          }`}
                        >
                          <div
                            className={`text-xs font-semibold ${
                              darkMode ? "text-green-300" : "text-green-600"
                            }`}
                          >
                            SPACE COMPLEXITY
                          </div>
                          <div
                            className={`font-bold ${
                              darkMode ? "text-green-100" : "text-green-800"
                            }`}
                          >
                            {example.complexityDetails.space}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`prose prose-sm max-w-none ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <p className="font-semibold">Explanation:</p>
                        <p>{example.complexityDetails.explanation}</p>
                      </div>
                    </div>
                  }
                  isExpanded={expandedSections[`${index}-complexity`]}
                  onToggle={() => toggleDetails(index, "complexity")}
                  darkMode={darkMode}
                  colorScheme={{
                    bg: darkMode ? "bg-green-900/30" : "bg-green-50",
                    border: darkMode ? "border-green-700" : "border-green-200",
                    text: darkMode ? "text-green-200" : "text-green-800",
                    icon: darkMode ? "text-green-300" : "text-green-500",
                    hover: darkMode
                      ? "hover:bg-green-900/20"
                      : "hover:bg-green-50/70",
                  }}
                />
              </div>
            </header>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={example.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center bg-gradient-to-r ${
                  darkMode
                    ? "from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600"
                    : "from-gray-600 to-gray-800 hover:from-gray-600 hover:to-gray-900"
                } text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${
                  darkMode
                    ? "focus:ring-offset-gray-900"
                    : "focus:ring-offset-white"
                }`}
              >
                <img
                  src={
                    darkMode
                      ? "https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg"
                      : "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  }
                  alt="LeetCode Logo"
                  className="w-6 h-6 mr-2"
                />
                View Problem
              </a>

              <ToggleCodeButton
                language="cpp"
                isVisible={
                  visibleCode.index === index && visibleCode.language === "cpp"
                }
                onClick={() => toggleCodeVisibility("cpp", index)}
                darkMode={darkMode}
              />

              <ToggleCodeButton
                language="java"
                isVisible={
                  visibleCode.index === index && visibleCode.language === "java"
                }
                onClick={() => toggleCodeVisibility("java", index)}
                darkMode={darkMode}
              />

              <ToggleCodeButton
                language="python"
                isVisible={
                  visibleCode.index === index &&
                  visibleCode.language === "python"
                }
                onClick={() => toggleCodeVisibility("python", index)}
                darkMode={darkMode}
              />
            </div>

            <div className="space-y-4">
              <CodeExample
                example={example}
                isVisible={
                  visibleCode.index === index && visibleCode.language === "cpp"
                }
                language="cpp"
                code={example.cppcode}
                darkMode={darkMode}
              />

              <CodeExample
                example={example}
                isVisible={
                  visibleCode.index === index && visibleCode.language === "java"
                }
                language="java"
                code={example.javacode}
                darkMode={darkMode}
              />

              <CodeExample
                example={example}
                isVisible={
                  visibleCode.index === index &&
                  visibleCode.language === "python"
                }
                language="python"
                code={example.pythoncode}
                darkMode={darkMode}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Narray4;
