import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function graph1() {
  const codeExamples = [
 
    {
      title: "Breadth First Search (BFS): Level Order Traversal",
      description: "The Breadth-First Search (BFS) algorithm operates using a queue data structure that follows the First In, First Out (FIFO) principle and always starts with the initial node. A visited array, initialized to zero, is used to keep track of nodes that have been explored. BFS begins by selecting a “starting” node, marking it as visited, and adding it to the queue. During each iteration, the node at the front of the queue, referred to as ‘v,’ is removed and added to the solution vector as it is being traversed. Subsequently, all unvisited adjacent nodes of ‘v’ are marked as visited and pushed into the queue. The adjacent neighbors of a node are accessed using the adjacency list. This process of visiting and queueing continues until the queue becomes empty, ensuring all nodes in the graph are traversed.",
      code: `
#include <bits/stdc++.h>
using namespace std;
class Solution {
  public:
    // Function to return Breadth First Traversal of given graph.
    vector<int> bfsOfGraph(int v, vector<int> adj[]) {
        int visted[v]={0};
        visted[0]=1;
        queue<int>q;
        q.push(0);
        vector<int> ans;
        while(!q.empty()){
            int temp=q.front();
            q.pop();
            ans.push_back(temp);
            
            for(auto it:adj[temp]){
                if(!visted[it]){
                   visted[it]=1;
                   q.push(it);
                }
            } 
        }
        return ans;
    }
};
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int V, E;
        cin >> V >> E;

        // Now using vector of vectors instead of array of vectors
        vector<vector<int>> adj(V);

        for (int i = 0; i < E; i++) {
            int u, v;
            cin >> u >> v;
            adj[u].push_back(v);
            adj[v].push_back(u); // For undirected graph, add both u->v and v->u
        }

        Solution obj;
        vector<int> ans = obj.bfsOfGraph(adj);
        for (int i = 0; i < ans.size(); i++) {
            cout << ans[i] << " ";
        }
        cout << endl;
    }
    return 0;
}
      `,
      language: "cpp",
      complexity: "Time : O(N) + O(2E), Where N = Nodes, 2E is for total degrees as we traverse all adjacent nodes.  Space : O(3N) ~ O(N), Space for queue data structure visited array and an adjacency list ",
    },

    {
      title: "Depth First Search (DFS)",
      description: "Depth-First Search (DFS) is a graph traversal technique that employs recursion and backtracking. It explores nodes deeply by moving forward along a path until no further nodes are available, at which point it backtracks along the same path to traverse other unvisited nodes. The process begins with a node, say ‘v,’ which is marked as visited and stored in the solution vector. Initially, ‘v’ is unexplored because its adjacent nodes have not been visited. DFS examines all adjacent nodes of ‘v’ and recursively calls the DFS function to explore each unvisited node. For instance, if an adjacent node ‘u’ of ‘v’ is unvisited, DFS explores ‘u,’ and the process repeats. The adjacency list, which stores the neighbors of each node, is used to facilitate this exploration. The neighbor list of node ‘v’ is traversed in a loop, where each neighbor, such as nodes ‘u’ and ‘w,’ is explored in depth. When a node, like ‘u,’ is fully explored, the algorithm backtracks to node ‘v’ and then proceeds to explore the next neighbor, such as ‘w.’",
      code: `
#include <bits/stdc++.h>
using namespace std;
class Solution {
  private:
    void dfs(vector<int> adj[], int vis[],vector<int> &ls, int node){
        vis[node]=1;
        ls.push_back(node);
        for(auto it: adj[node]){
            if(!vis[it]){
                dfs(adj,vis,ls,it);
            }
        }
    }
  public:
    // Function to return a list containing the DFS traversal of the graph.
    vector<int> dfsOfGraph(int V, vector<int> adj[]) {
        // Code here
        int vis[V]={0};
        int startnode=0;
        vector<int> ls;
        dfs(adj,vis,ls,startnode);
        return ls;
    }
};
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int V, E;
        cin >> V >> E;

        vector<vector<int>> adj(V); 

        for (int i = 0; i < E; i++) {
            int u, v;
            cin >> u >> v;
            adj[u].push_back(v);
            adj[v].push_back(u);
        }
        Solution obj;
        vector<int> ans = obj.dfsOfGraph(adj);
        for (int i = 0; i < ans.size(); i++) {
            cout << ans[i] << " ";
        }
        cout << endl;
        cout << "~" << endl;
    }
    return 0;
}
      `,
      language: "C++",
      complexity: "Time: For an undirected graph, O(N) + O(2E), For a directed graph, O(N) + O(E), Because for every node we are calling the recursive function once, the time taken is O(N) and 2E is for total degrees as we traverse for all adjacent nodes. Space: O(3N) ~ O(N), Space for dfs stack space, visited array and an adjacency list.",
  } , 

  {
    title: "Insertion Sort",
    description: "Time: For an undirected graph, O(N) + O(2E), For a directed graph, O(N) + O(E), Because for every node we are calling the recursive function once, the time taken is O(N) and 2E is for total degrees as we traverse for all adjacent nodes. Space: O(3N) ~ O(N), Space for dfs stack space, visited array and an adjacency list.",
    code: `
    #include <iostream>
    #include <vector>
    using namespace std;

    void insertionSort(vector<int>& arr) {
        int n = arr.size();
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
    int main() {
        vector<int> arr = {64, 25, 12, 22, 11};
        cout << "Original array: ";
        for (int num : arr) {
            cout << num << " ";
        }
        cout << endl;
        insertionSort(arr);
        cout << "Sorted array: ";
        for (int num : arr) {
            cout << num << " ";
        }
        cout << endl;
        return 0;
    }
    `,
    language: "C++",
    complexity: "Time Complexity: O(n^2), Space Complexity: O(1)",
},

{
  title: "Merge Sort",
  description: "Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves.",
  code: `
  #include <iostream>
  #include <vector>
  using namespace std;

  void merge(vector<int>& arr, int left, int mid, int right) {
      int n1 = mid - left + 1;
      int n2 = right - mid;

      vector<int> L(n1), R(n2);
      for (int i = 0; i < n1; i++)
          L[i] = arr[left + i];
      for (int j = 0; j < n2; j++)
          R[j] = arr[mid + 1 + j];

      int i = 0, j = 0, k = left;
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          } else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }
      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }
  void mergeSort(vector<int>& arr, int left, int right) {
      if (left < right) {
          int mid = left + (right - left) / 2;
          mergeSort(arr, left, mid);
          mergeSort(arr, mid + 1, right);
          merge(arr, left, mid, right);
      }
  }
  int main() {
      vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
      cout << "Original array: ";
      for (int num : arr) {
          cout << num << " ";
      }
      cout << endl;
      mergeSort(arr, 0, arr.size() - 1);
      cout << "Sorted array: ";
      for (int num : arr) {
          cout << num << " ";
      }
      cout << endl;
      return 0;
  }`
  ,
  language: "cpp",
  complexity: "Time Complexity: O(n log n), Space Complexity: O(n)",
},

{
  title: "Quick Sort",
  description: "Quick Sort is a divide-and-conquer algorithm that picks an element as a pivot and partitions the array around the pivot.",
  code: `
  #include <iostream>
  #include <vector>
  using namespace std;

  int partition(vector<int>& arr, int low, int high) {
      int pivot = arr[high];
      int i = (low - 1);
      for (int j = low; j < high; j++) {
          if (arr[j] < pivot) {
              i++;
              swap(arr[i], arr[j]);
          }
      }
      swap(arr[i + 1], arr[high]);
      return (i + 1);
  }
  void quickSort(vector<int>& arr, int low, int high) {
      if (low < high) {
          int pi = partition(arr, low, high);
          quickSort(arr, low, pi -1);
          quickSort(arr, pi + 1, high);
        }
    }
    int main() {
        vector<int> arr = {64, 34, 25, 12, 22, 11, 90};

        cout << "Original array: ";
        for (int num : arr) {
            cout << num << " ";
        }
        cout << std::endl;
        quickSort(arr, 0, arr.size() - 1);
        cout << "Sorted array: ";
        for (int num : arr) {
            cout << num << " ";
        }
        cout << endl;
        return 0;
    }` ,
    language: "cpp",
    complexity: "Time Complexity: O(n log n), Space Complexity: O(n)",
  }, 
   
  {
    title: "Heap Sort using Min-Heap and Max-Heap",
    description: "This program demonstrates sorting an array using both Min-Heap and Max-Heap algorithms. It includes separate heapify functions for each heap type and sorts the array in ascending or descending order accordingly.",
    code: `
#include <iostream>
#include <algorithm> 
using namespace std;

void minHeapify(int n, int a[], int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && a[left] < a[smallest])
        smallest = left;
    if (right < n && a[right] < a[smallest])
        smallest = right;

    if (smallest != i) {
        swap(a[smallest], a[i]);
        minHeapify(n, a, smallest);
    }
}
void maxHeapify(int n, int a[], int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && a[left] > a[largest])
        largest = left;
    if (right < n && a[right] > a[largest])
        largest = right;

    if (largest != i) {
        swap(a[largest], a[i]);
        maxHeapify(n, a, largest);
    }
}
void heapSortMin(int n, int a[]) {
    // Build Min-Heap
    for (int i = n / 2 - 1; i >= 0; i--)
        minHeapify(n, a, i);

    for (int i = n - 1; i > 0; i--) {
        swap(a[0], a[i]);
        minHeapify(i, a, 0);
    }
}

void heapSortMax(int n, int a[]) {
    // Build Max-Heap
    for (int i = n / 2 - 1; i >= 0; i--)
        maxHeapify(n, a, i);

    for (int i = n - 1; i > 0; i--) {
        swap(a[0], a[i]);
        maxHeapify(i, a, 0);
    }
}
int main() {
    int n;

    cout << "Enter the size of the array: ";
    cin >> n;
    int a[n];

    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; i++)
        cin >> a[i];

    cout << "\nArray before sorting: ";
    for (int i = 0; i < n; i++)
        cout << a[i] << " ";
    cout << endl;

    // Min-Heap Sort
    int minHeapArray[n];
    copy(a, a + n, minHeapArray);
    heapSortMin(n, minHeapArray);
    cout << "\nArray after Min-Heap Sort: ";
    for (int i = 0; i < n; i++)
        cout << minHeapArray[i] << " ";
    cout << endl;

    // Max-Heap Sort
    int maxHeapArray[n];
    copy(a, a + n, maxHeapArray);
    heapSortMax(n, maxHeapArray);
    cout << "\nArray after Max-Heap Sort: ";
    for (int i = 0; i < n; i++)
        cout << maxHeapArray[i] << " ";
    cout << endl;

    return 0;
}
    `
    ,
    language: "C++",
    complexity: "O(n log n) for both Min-Heap and Max-Heap sorting",
},

{
  title : "Convert Min Heap to Max Heap " ,
  description : "This program demonstrates sorting an array using both Min-Heap and Max-Heap algorithms. It includes separate heapify functions for each heap type and sorts the array in ascending or descending order accordingly",
  code : `
#include<bits/stdc++.h>
using namespace std;
class Solution{
private: 
    void heapify(int n, vector<int>& arr, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        
        if (left < n && arr[left] > arr[largest])
            largest = left;
        if (right < n && arr[right] > arr[largest])
            largest = right;
        
        if (largest != i) {
            swap(arr[i], arr[largest]);
            heapify(n, arr, largest);
        }
    }
    void buildMaxHeap(vector<int>& arr, int n) {
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(n, arr, i);
    }
public:
    void convertMinToMaxHeap(vector<int> &arr, int N){
        buildMaxHeap(arr,N);
    }  
};
int main(){
    int t = 1;
    cin >> t;
    while(t--){
       int n; cin >> n;
       vector<int> vec(n);
       for(int i = 0;i<n;i++) cin >> vec[i];

        Solution obj;
        obj.convertMinToMaxHeap(vec,n);
        for(int i = 0;i<n;i++) cout << vec[i] << " ";
        cout << endl;
cout << "~" << "\n";
}
    return 0;
}
  `,
  language : "cpp",
  complexity : "O(n log n) for both Min-Heap and Max-Heap sorting",
},

  
  ];

  return (
    <div className="container mx-auto p-10 bg-gradient-to-br from-indigo-50 to-gray-100 rounded-lg shadow-xl max-w-8xl">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-10 underline underline-offset-8">
        Theory And Code
      </h1>
      {codeExamples.map((example, index) => (
        <div
          key={index}
          className="mb-10 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 border border-indigo-200"
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            {example.title}
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {example.description}
          </p>
          <p className="text-gray-700 font-semibold mb-4">
            <span className="text-indigo-700">Complexity:</span> {example.complexity}
          </p>
          <div className="rounded-lg overflow-hidden border-2 border-indigo-300">
            <SyntaxHighlighter
              language={example.language}
              style={tomorrow}
              customStyle={{
                padding: "1rem",
                fontSize: "0.9rem",
                background: "#f9f9f9",
                borderRadius: "0.5rem",
              }}
            >
              {example.code}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
}

export default graph1;
