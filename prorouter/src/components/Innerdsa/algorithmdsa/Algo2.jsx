import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../../ThemeContext.jsx";

const CodeExample = React.memo(
  ({ example, isVisible, language, code, darkMode }) => (
    <div
      className={`rounded-lg overflow-hidden border-2 ${getBorderColor(
        language
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

const getBorderColor = (language) => {
  switch (language) {
    case "cpp":
      return "border-indigo-100 dark:border-indigo-900";
    case "java":
      return "border-green-100 dark:border-green-900";
    case "python":
      return "border-yellow-100 dark:border-yellow-900";
    default:
      return "border-gray-100 dark:border-gray-800";
  }
};

const getButtonColor = (language) => {
  switch (language) {
    case "cpp":
      return "from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 dark:from-pink-600 dark:to-red-600 dark:hover:from-pink-700 dark:hover:to-red-700";
    case "java":
      return "from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 dark:from-green-600 dark:to-teal-600 dark:hover:from-green-700 dark:hover:to-teal-700";
    case "python":
      return "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 dark:from-yellow-600 dark:to-orange-600 dark:hover:from-yellow-700 dark:hover:to-orange-700";
    default:
      return "from-gray-500 to-blue-500 hover:from-gray-600 hover:to-blue-600 dark:from-gray-600 dark:to-blue-600 dark:hover:from-gray-700 dark:hover:to-blue-700";
  }
};

const ToggleCodeButton = ({ language, isVisible, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-block bg-gradient-to-r ${getButtonColor(
      language
    )} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      language === "cpp"
        ? "focus:ring-pink-500 dark:focus:ring-pink-600"
        : language === "java"
        ? "focus:ring-green-500 dark:focus:ring-green-600"
        : "focus:ring-yellow-500 dark:focus:ring-yellow-600"
    }`}
    aria-expanded={isVisible}
    aria-controls={`${language}-code`}
  >
    {isVisible
      ? `Hide ${
          language === "cpp" 
            ? "C++" 
            : language === "java" 
            ? "Java" 
            : "Python"
        } Code`
      : `Show ${
          language === "cpp" 
            ? "C++" 
            : language === "java" 
            ? "Java" 
            : "Python"
        } Code`}
  </button>
);

function Algo2() {
  const { darkMode } = useTheme();
  const [visibleCodes, setVisibleCodes] = useState({
    cpp: null,
    java: null,
    python: null,
  });
  const [expandedSections, setExpandedSections] = useState({});

  const toggleCodeVisibility = (language, index) => {
    setVisibleCodes(prev => ({
      ...prev,
      [language]: prev[language] === index ? null : index
    }));
  };

  const toggleDetails = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const formatDescription = (desc) => {
    return desc.split("\n").map((paragraph, i) => (
      <p key={i} className="mb-4 whitespace-pre-line dark:text-gray-300">
        {paragraph}
      </p>
    ));
  };

  const greedyAlgorithms = [
    {
      title: "Fractional Knapsack",
      description: `The Fractional Knapsack problem is a classic greedy algorithm problem where the goal is to maximize the total value of items in a knapsack without exceeding its capacity. Unlike the 0/1 Knapsack problem, items can be broken into fractions in this version.

Key Points:
- Sort items by value-to-weight ratio in descending order
- Take as much as possible of the item with the highest ratio first
- If the item can't fit entirely, take a fraction of it`,
      approach: `
1. Calculate the value-to-weight ratio for each item
2. Sort all items in decreasing order of this ratio
3. Initialize total value and current weight in knapsack to 0
4. Iterate through the sorted items:
   a. If adding the entire item doesn't exceed capacity, add it
   b. Otherwise, take a fraction of the item that fits
5. Return the total value obtained`,
      algorithm: `
• Time Complexity: O(n log n) due to sorting
• Space Complexity: O(1) if sorted in-place
• Always provides optimal solution for fractional case
• Doesn't work for 0/1 Knapsack problem
• Example applications: resource allocation, portfolio optimization`,
      cppcode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Item {
    int value, weight;
    Item(int v, int w) : value(v), weight(w) {}
};

bool cmp(Item a, Item b) {
    double r1 = (double)a.value / a.weight;
    double r2 = (double)b.value / b.weight;
    return r1 > r2;
}

double fractionalKnapsack(int W, vector<Item>& items) {
    sort(items.begin(), items.end(), cmp);
    double totalValue = 0.0;
    for (auto& item : items) {
        if (W >= item.weight) {
            W -= item.weight;
            totalValue += item.value;
        } else {
            totalValue += item.value * ((double)W / item.weight);
            break;
        }
    }
    return totalValue;
}

int main() {
    int W = 50; // Knapsack capacity
    vector<Item> items = {{60, 10}, {100, 20}, {120, 30}};
    cout << "Maximum value: " << fractionalKnapsack(W, items);
    return 0;
}`,
      javacode: `import java.util.Arrays;
import java.util.Comparator;

class Item {
    int value, weight;
    Item(int v, int w) {
        value = v;
        weight = w;
    }
}

public class FractionalKnapsack {
    static double fractionalKnapsack(int W, Item[] arr) {
        Arrays.sort(arr, new Comparator<Item>() {
            public int compare(Item a, Item b) {
                double r1 = (double)a.value / a.weight;
                double r2 = (double)b.value / b.weight;
                return Double.compare(r2, r1);
            }
        });
        
        double totalValue = 0.0;
        for (Item item : arr) {
            if (W >= item.weight) {
                W -= item.weight;
                totalValue += item.value;
            } else {
                totalValue += item.value * ((double)W / item.weight);
                break;
            }
        }
        return totalValue;
    }
    
    public static void main(String[] args) {
        int W = 50; // Knapsack capacity
        Item[] arr = {new Item(60, 10), new Item(100, 20), new Item(120, 30)};
        System.out.println("Maximum value: " + fractionalKnapsack(W, arr));
    }
}`,
      pythoncode: `def fractional_knapsack(value, weight, capacity):
    index = list(range(len(value)))
    ratio = [v/w for v, w in zip(value, weight)]
    index.sort(key=lambda i: ratio[i], reverse=True)
    
    total_value = 0
    for i in index:
        if weight[i] <= capacity:
            total_value += value[i]
            capacity -= weight[i]
        else:
            total_value += value[i] * (capacity / weight[i])
            break
    return total_value

value = [60, 100, 120]
weight = [10, 20, 30]
capacity = 50
print("Maximum value:", fractional_knapsack(value, weight, capacity))`,
      complexity: "Time Complexity: O(n log n), Space Complexity: O(1)",
      link: "https://www.geeksforgeeks.org/fractional-knapsack-problem/",
    },
    {
      title: "Activity Selection",
      description: `The Activity Selection Problem involves selecting the maximum number of activities that can be performed by a single person or machine, assuming that a person can only work on a single activity at a time.

Key Points:
- Activities are sorted by their finish time
- The first activity is always selected
- Subsequent activities are selected if their start time is greater than or equal to the finish time of the previously selected activity`,
      approach: `
1. Sort all activities by their finish time in ascending order
2. Select the first activity from the sorted array
3. For each remaining activity:
   a. If the start time of this activity is greater than or equal to the finish time of the previously selected activity
   b. Then select this activity and update the previously selected activity
4. Return the count or list of selected activities`,
      algorithm: `
• Time Complexity: O(n log n) for sorting, O(n) for selection
• Space Complexity: O(1) if sorted in-place
• Works for both weighted and unweighted cases
• Demonstrates optimal substructure property
• Example applications: scheduling, time management`,
      cppcode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Activity {
    int start, finish;
};

bool activityCompare(Activity a1, Activity a2) {
    return a1.finish < a2.finish;
}

void selectActivities(vector<Activity>& activities) {
    sort(activities.begin(), activities.end(), activityCompare);
    cout << "Selected Activities:\n";
    int i = 0;
    cout << "(" << activities[i].start << ", " << activities[i].finish << ") ";
    for (int j = 1; j < activities.size(); j++) {
        if (activities[j].start >= activities[i].finish) {
            cout << "(" << activities[j].start << ", " << activities[j].finish << ") ";
            i = j;
        }
    }
}

int main() {
    vector<Activity> activities = {{1, 2}, {3, 4}, {0, 6}, {5, 7}, {8, 9}, {5, 9}};
    selectActivities(activities);
    return 0;
}`,
      javacode: `import java.util.Arrays;
import java.util.Comparator;

class Activity {
    int start, finish;
    Activity(int s, int f) {
        start = s;
        finish = f;
    }
}

public class ActivitySelection {
    static void selectActivities(Activity[] arr) {
        Arrays.sort(arr, new Comparator<Activity>() {
            public int compare(Activity a1, Activity a2) {
                return a1.finish - a2.finish;
            }
        });
        
        System.out.println("Selected Activities:");
        int i = 0;
        System.out.print("(" + arr[i].start + ", " + arr[i].finish + ") ");
        for (int j = 1; j < arr.length; j++) {
            if (arr[j].start >= arr[i].finish) {
                System.out.print("(" + arr[j].start + ", " + arr[j].finish + ") ");
                i = j;
            }
        }
    }
    
    public static void main(String[] args) {
        Activity[] arr = {new Activity(1, 2), new Activity(3, 4), 
                         new Activity(0, 6), new Activity(5, 7),
                         new Activity(8, 9), new Activity(5, 9)};
        selectActivities(arr);
    }
}`,
      pythoncode: `def activity_selection(start, finish):
    activities = list(zip(start, finish))
    activities.sort(key=lambda x: x[1])
    
    i = 0
    print("Selected Activities:")
    print(f"({activities[i][0]}, {activities[i][1]})", end=" ")
    for j in range(1, len(activities)):
        if activities[j][0] >= activities[i][1]:
            print(f"({activities[j][0]}, {activities[j][1]})", end=" ")
            i = j

start = [1, 3, 0, 5, 8, 5]
finish = [2, 4, 6, 7, 9, 9]
activity_selection(start, finish)`,
      complexity: "Time Complexity: O(n log n), Space Complexity: O(1)",
      link: "https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/",
    },
    {
      title: "Huffman Coding",
      description:`Huffman Coding is a lossless data compression algorithm that assigns variable-length codes to input characters, with shorter codes assigned to more frequent characters.

Key Points:
- Uses prefix codes (no code is prefix of another)
- Builds a binary tree based on character frequencies
- More frequent characters get shorter codes
- Achieves optimal prefix coding`,
      approach: `
1. Calculate frequency of each character in input
2. Create a leaf node for each character and build a min heap
3. While heap has more than one node:
   a. Extract two nodes with minimum frequency
   b. Create new internal node with sum of frequencies
   c. Make first extracted node left child and second right child
   d. Add new node to heap
4. The remaining node is root of Huffman Tree
5. Traverse tree to assign codes to characters`,
      algorithm: `
• Time Complexity: O(n log n) where n is number of unique characters
• Space Complexity: O(n)
• Widely used in compression formats (ZIP, JPEG, MP3)
• Optimal when character frequencies are powers of two
• Example applications: file compression, data transmission`,
      cppcode: `#include <iostream>
#include <queue>
#include <unordered_map>
using namespace std;

struct Node {
    char ch;
    int freq;
    Node *left, *right;
    Node(char c, int f) : ch(c), freq(f), left(nullptr), right(nullptr) {}
};

struct compare {
    bool operator()(Node* l, Node* r) {
        return l->freq > r->freq;
    }
};

void encode(Node* root, string str, unordered_map<char, string> &huffmanCode) {
    if (!root) return;
    if (!root->left && !root->right) {
        huffmanCode[root->ch] = str;
    }
    encode(root->left, str + "0", huffmanCode);
    encode(root->right, str + "1", huffmanCode);
}

void buildHuffmanTree(string text) {
    unordered_map<char, int> freq;
    for (char ch : text) {
        freq[ch]++;
    }
    
    priority_queue<Node*, vector<Node*>, compare> pq;
    for (auto pair : freq) {
        pq.push(new Node(pair.first, pair.second));
    }
    
    while (pq.size() != 1) {
        Node *left = pq.top(); pq.pop();
        Node *right = pq.top(); pq.pop();
        int sum = left->freq + right->freq;
        Node *newNode = new Node('\0', sum);
        newNode->left = left;
        newNode->right = right;
        pq.push(newNode);
    }
    
    Node* root = pq.top();
    unordered_map<char, string> huffmanCode;
    encode(root, "", huffmanCode);
    
    cout << "Huffman Codes:\n";
    for (auto pair : huffmanCode) {
        cout << pair.first << " " << pair.second << endl;
    }
}

int main() {
    string text = "huffman coding example";
    buildHuffmanTree(text);
    return 0;
}`,
      javacode: `import java.util.*;

class HuffmanNode implements Comparable<HuffmanNode> {
    char ch;
    int freq;
    HuffmanNode left, right;
    
    HuffmanNode(char c, int f) {
        ch = c;
        freq = f;
    }
    
    public int compareTo(HuffmanNode node) {
        return this.freq - node.freq;
    }
}

public class HuffmanCoding {
    static void encode(HuffmanNode root, String str, Map<Character, String> huffmanCode) {
        if (root == null) return;
        if (root.left == null && root.right == null) {
            huffmanCode.put(root.ch, str);
        }
        encode(root.left, str + "0", huffmanCode);
        encode(root.right, str + "1", huffmanCode);
    }
    
    static void buildHuffmanTree(String text) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : text.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        PriorityQueue<HuffmanNode> pq = new PriorityQueue<>();
        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
            pq.add(new HuffmanNode(entry.getKey(), entry.getValue()));
        }
        
        while (pq.size() > 1) {
            HuffmanNode left = pq.poll();
            HuffmanNode right = pq.poll();
            int sum = left.freq + right.freq;
            HuffmanNode newNode = new HuffmanNode('\0', sum);
            newNode.left = left;
            newNode.right = right;
            pq.add(newNode);
        }
        
        HuffmanNode root = pq.peek();
        Map<Character, String> huffmanCode = new HashMap<>();
        encode(root, "", huffmanCode);
        
        System.out.println("Huffman Codes:");
        for (Map.Entry<Character, String> entry : huffmanCode.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
    }
    
    public static void main(String[] args) {
        String text = "huffman coding example";
        buildHuffmanTree(text);
    }
}`,
      pythoncode: `import heapq

class Node:
    def __init__(self, ch, freq, left=None, right=None):
        self.ch = ch
        self.freq = freq
        self.left = left
        self.right = right
    
    def __lt__(self, other):
        return self.freq < other.freq

def encode(root, s, huffman_code):
    if root is None:
        return
    if root.left is None and root.right is None:
        huffman_code[root.ch] = s
    encode(root.left, s + '0', huffman_code)
    encode(root.right, s + '1', huffman_code)

def build_huffman_tree(text):
    freq = {}
    for ch in text:
        freq[ch] = freq.get(ch, 0) + 1
    
    pq = [Node(ch, f) for ch, f in freq.items()]
    heapq.heapify(pq)
    
    while len(pq) > 1:
        left = heapq.heappop(pq)
        right = heapq.heappop(pq)
        total = left.freq + right.freq
        heapq.heappush(pq, Node(None, total, left, right))
    
    root = pq[0]
    huffman_code = {}
    encode(root, '', huffman_code)
    
    print("Huffman Codes:")
    for ch, code in huffman_code.items():
        print(f"{ch}: {code}")

text = "huffman coding example"
build_huffman_tree(text)`,
      complexity: "Time Complexity: O(n log n), Space Complexity: O(n)",
      link: "https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/",
    },
    {
      title: "Dijkstra's Algorithm",
      description: `Dijkstra's algorithm finds the shortest paths from a source vertex to all other vertices in a graph with non-negative edge weights.

Key Points:
- Uses greedy approach to select vertex with minimum distance
- Maintains a set of visited vertices
- Updates distances to adjacent vertices
- Works for both directed and undirected graphs`,
      approach: `
1. Initialize distances to all vertices as infinite and source as 0
2. Create a priority queue (min-heap) of all vertices
3. While queue is not empty:
   a. Extract vertex u with minimum distance
   b. For each adjacent vertex v of u:
      i. If distance to v through u is less than current distance
      ii. Update distance to v
4. Repeat until all vertices are processed`,
      algorithm: `
• Time Complexity: O((V+E) log V) with min-heap
• Space Complexity: O(V)
• Doesn't work for graphs with negative weights
• Basis for many routing protocols
• Example applications: network routing, GPS navigation`,
      cppcode: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

void dijkstra(vector<vector<pair<int, int>>>& graph, int src) {
    int V = graph.size();
    vector<int> dist(V, INT_MAX);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    
    dist[src] = 0;
    pq.push({0, src});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        
        for (auto& edge : graph[u]) {
            int v = edge.first;
            int weight = edge.second;
            if (dist[v] > dist[u] + weight) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
    
    cout << "Vertex Distance from Source\n";
    for (int i = 0; i < V; i++) {
        cout << i << "\t\t" << dist[i] << endl;
    }
}

int main() {
    int V = 5;
    vector<vector<pair<int, int>>> graph(V);
    graph[0].push_back({1, 2});
    graph[0].push_back({3, 6});
    graph[1].push_back({2, 3});
    graph[1].push_back({3, 8});
    graph[1].push_back({4, 5});
    graph[2].push_back({4, 7});
    graph[3].push_back({4, 9});
    
    dijkstra(graph, 0);
    return 0;
}`,
      javacode: `import java.util.*;

public class Dijkstra {
    static void dijkstra(List<List<int[]>> graph, int src) {
        int V = graph.size();
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        
        dist[src] = 0;
        pq.add(new int[]{src, 0});
        
        while (!pq.isEmpty()) {
            int[] node = pq.poll();
            int u = node[0];
            
            for (int[] edge : graph.get(u)) {
                int v = edge[0];
                int weight = edge[1];
                if (dist[v] > dist[u] + weight) {
                    dist[v] = dist[u] + weight;
                    pq.add(new int[]{v, dist[v]});
                }
            }
        }
        
        System.out.println("Vertex Distance from Source");
        for (int i = 0; i < V; i++) {
            System.out.println(i + "\t\t" + dist[i]);
        }
    }
    
    public static void main(String[] args) {
        int V = 5;
        List<List<int[]>> graph = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            graph.add(new ArrayList<>());
        }
        graph.get(0).add(new int[]{1, 2});
        graph.get(0).add(new int[]{3, 6});
        graph.get(1).add(new int[]{2, 3});
        graph.get(1).add(new int[]{3, 8});
        graph.get(1).add(new int[]{4, 5});
        graph.get(2).add(new int[]{4, 7});
        graph.get(3).add(new int[]{4, 9});
        
        dijkstra(graph, 0);
    }
}`,
      pythoncode: `import heapq

def dijkstra(graph, src):
    V = len(graph)
    dist = [float('inf')] * V
    dist[src] = 0
    heap = [(0, src)]
    
    while heap:
        current_dist, u = heapq.heappop(heap)
        if current_dist > dist[u]:
            continue
        for v, weight in graph[u]:
            if dist[v] > dist[u] + weight:
                dist[v] = dist[u] + weight
                heapq.heappush(heap, (dist[v], v))
    
    print("Vertex Distance from Source")
    for i in range(V):
        print(f"{i}\t\t{dist[i]}")

V = 5
graph = [[] for _ in range(V)]
graph[0].append((1, 2))
graph[0].append((3, 6))
graph[1].append((2, 3))
graph[1].append((3, 8))
graph[1].append((4, 5))
graph[2].append((4, 7))
graph[3].append((4, 9))

dijkstra(graph, 0)`,
      complexity: "Time Complexity: O((V+E) log V), Space Complexity: O(V)",
      link: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
    },
    {
      title: "Prim's Algorithm (MST)",
      description: `Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.

Key Points:
- Grows the MST one vertex at a time
- Starts from arbitrary root vertex
- At each step, adds cheapest connection from tree to non-tree vertex
- Uses priority queue to efficiently select next edge`,
      approach: `
1. Initialize a tree with a single vertex (chosen arbitrarily)
2. Grow the tree by one edge:
   a. Find the minimum-weight edge that connects the tree to a vertex not in the tree
   b. Add the new edge and vertex to the tree
3. Repeat step 2 until all vertices are in the tree
4. The resulting tree is a minimum spanning tree`,
      algorithm: `
• Time Complexity: O(E log V) with binary heap
• Space Complexity: O(V)
• Always finds the global minimum spanning tree
• Works for both connected and disconnected graphs
• Example applications: network design, cluster analysis`,
      cppcode: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

void primMST(vector<vector<pair<int, int>>>& graph) {
    int V = graph.size();
    vector<int> parent(V, -1);
    vector<int> key(V, INT_MAX);
    vector<bool> inMST(V, false);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    
    key[0] = 0;
    pq.push({0, 0});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        inMST[u] = true;
        
        for (auto& edge : graph[u]) {
            int v = edge.first;
            int weight = edge.second;
            if (!inMST[v] && weight < key[v]) {
                parent[v] = u;
                key[v] = weight;
                pq.push({key[v], v});
            }
        }
    }
    
    cout << "Edges in MST:\n";
    for (int i = 1; i < V; i++) {
        cout << parent[i] << " - " << i << " \t" << key[i] << endl;
    }
}

int main() {
    int V = 5;
    vector<vector<pair<int, int>>> graph(V);
    graph[0].push_back({1, 2});
    graph[0].push_back({3, 6});
    graph[1].push_back({0, 2});
    graph[1].push_back({2, 3});
    graph[1].push_back({3, 8});
    graph[1].push_back({4, 5});
    graph[2].push_back({1, 3});
    graph[2].push_back({4, 7});
    graph[3].push_back({0, 6});
    graph[3].push_back({1, 8});
    graph[3].push_back({4, 9});
    graph[4].push_back({1, 5});
    graph[4].push_back({2, 7});
    graph[4].push_back({3, 9});
    
    primMST(graph);
    return 0;
}`,
      javacode: `import java.util.*;

public class PrimsMST {
    static void primMST(List<List<int[]>> graph) {
        int V = graph.size();
        int[] parent = new int[V];
        int[] key = new int[V];
        boolean[] inMST = new boolean[V];
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        
        Arrays.fill(key, Integer.MAX_VALUE);
        key[0] = 0;
        pq.add(new int[]{0, 0});
        
        while (!pq.isEmpty()) {
            int[] node = pq.poll();
            int u = node[0];
            inMST[u] = true;
            
            for (int[] edge : graph.get(u)) {
                int v = edge[0];
                int weight = edge[1];
                if (!inMST[v] && weight < key[v]) {
                    parent[v] = u;
                    key[v] = weight;
                    pq.add(new int[]{v, key[v]});
                }
            }
        }
        
        System.out.println("Edges in MST:");
        for (int i = 1; i < V; i++) {
            System.out.println(parent[i] + " - " + i + " \t" + key[i]);
        }
    }
    
    public static void main(String[] args) {
        int V = 5;
        List<List<int[]>> graph = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            graph.add(new ArrayList<>());
        }
        graph.get(0).add(new int[]{1, 2});
        graph.get(0).add(new int[]{3, 6});
        graph.get(1).add(new int[]{0, 2});
        graph.get(1).add(new int[]{2, 3});
        graph.get(1).add(new int[]{3, 8});
        graph.get(1).add(new int[]{4, 5});
        graph.get(2).add(new int[]{1, 3});
        graph.get(2).add(new int[]{4, 7});
        graph.get(3).add(new int[]{0, 6});
        graph.get(3).add(new int[]{1, 8});
        graph.get(3).add(new int[]{4, 9});
        graph.get(4).add(new int[]{1, 5});
        graph.get(4).add(new int[]{2, 7});
        graph.get(4).add(new int[]{3, 9});
        
        primMST(graph);
    }
}`,
      pythoncode: `import heapq

def prim_mst(graph):
    V = len(graph)
    parent = [-1] * V
    key = [float('inf')] * V
    in_mst = [False] * V
    heap = []
    
    key[0] = 0
    heapq.heappush(heap, (0, 0))
    
    while heap:
        _, u = heapq.heappop(heap)
        in_mst[u] = True
        
        for v, weight in graph[u]:
            if not in_mst[v] and weight < key[v]:
                parent[v] = u
                key[v] = weight
                heapq.heappush(heap, (key[v], v))
    
    print("Edges in MST:")
    for i in range(1, V):
        print(f"{parent[i]} - {i} \t{key[i]}")

V = 5
graph = [[] for _ in range(V)]
graph[0].append((1, 2))
graph[0].append((3, 6))
graph[1].append((0, 2))
graph[1].append((2, 3))
graph[1].append((3, 8))
graph[1].append((4, 5))
graph[2].append((1, 3))
graph[2].append((4, 7))
graph[3].append((0, 6))
graph[3].append((1, 8))
graph[3].append((4, 9))
graph[4].append((1, 5))
graph[4].append((2, 7))
graph[4].append((3, 9))

prim_mst(graph)`,
      complexity: "Time Complexity: O(E log V), Space Complexity: O(V)",
      link: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-12 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-indigo-50 to-purple-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-indigo-400 to-purple-400"
            : "bg-gradient-to-r from-indigo-600 to-purple-600"
        } mb-8 sm:mb-12`}
      >
        Greedy Algorithms
      </h1>

      <div className="space-y-8">
        {greedyAlgorithms.map((example, index) => (
          <article
            key={index}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-indigo-100"
            }`}
            aria-labelledby={`algorithm-${index}-title`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleDetails(index)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  id={`algorithm-${index}-title`}
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-indigo-300" : "text-indigo-800"
                  }`}
                >
                  {example.title}
                </h2>
                <span
                  className={darkMode ? "text-indigo-400" : "text-indigo-600"}
                >
                  {expandedSections[index] ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </span>
              </button>

              {expandedSections[index] && (
                <div className="space-y-4 mt-4">
                  <div
                    className={`p-4 sm:p-6 rounded-lg shadow-sm border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-100"
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
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } font-medium leading-relaxed`}
                    >
                      {formatDescription(example.description)}
                    </div>
                  </div>

                  <div
                    className={`p-4 sm:p-6 rounded-lg shadow-sm border ${
                      darkMode
                        ? "bg-blue-900 border-blue-800"
                        : "bg-blue-50 border-blue-100"
                    }`}
                  >
                    <h3
                      className={`font-bold mb-3 text-lg ${
                        darkMode ? "text-blue-300" : "text-blue-800"
                      }`}
                    >
                      Approach
                    </h3>
                    <div
                      className={`${
                        darkMode ? "text-blue-300" : "text-blue-800"
                      } font-semibold leading-relaxed whitespace-pre-line`}
                    >
                      {formatDescription(example.approach)}
                    </div>
                  </div>

                  <div
                    className={`p-4 sm:p-6 rounded-lg shadow-sm border ${
                      darkMode
                        ? "bg-green-900 border-green-800"
                        : "bg-green-50 border-green-100"
                    }`}
                  >
                    <h3
                      className={`font-bold mb-3 text-lg ${
                        darkMode ? "text-green-300" : "text-green-800"
                      }`}
                    >
                      Algorithm Characteristics
                    </h3>
                    <div
                      className={`${
                        darkMode ? "text-green-300" : "text-green-800"
                      } font-semibold leading-relaxed whitespace-pre-line`}
                    >
                      {formatDescription(example.algorithm)}
                    </div>
                  </div>
                </div>
              )}

              <p
                className={`font-semibold mt-4 ${
                  darkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                <span
                  className={`font-bold ${
                    darkMode ? "text-indigo-400" : "text-indigo-700"
                  }`}
                >
                  Complexity:
                </span>{" "}
                {example.complexity}
              </p>
            </header>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={example.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-gradient-to-r ${
                  darkMode
                    ? "from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                    : "from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                } text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                View Problem
              </a>

              <ToggleCodeButton
                language="cpp"
                isVisible={visibleCodes.cpp === index}
                onClick={() => toggleCodeVisibility("cpp", index)}
              />

              <ToggleCodeButton
                language="java"
                isVisible={visibleCodes.java === index}
                onClick={() => toggleCodeVisibility("java", index)}
              />

              <ToggleCodeButton
                language="python"
                isVisible={visibleCodes.python === index}
                onClick={() => toggleCodeVisibility("python", index)}
              />
            </div>

            <CodeExample
              example={example}
              isVisible={visibleCodes.cpp === index}
              language="cpp"
              code={example.cppcode}
              darkMode={darkMode}
            />

            <CodeExample
              example={example}
              isVisible={visibleCodes.java === index}
              language="java"
              code={example.javacode}
              darkMode={darkMode}
            />

            <CodeExample
              example={example}
              isVisible={visibleCodes.python === index}
              language="python"
              code={example.pythoncode}
              darkMode={darkMode}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export default Algo2;