/*
This code is adapted from the codes from reference links below.
References:
  https://jarednielsen.com/data-structure-graph-depth-first-search/
  https://www.geeksforgeeks.org/iterative-depth-first-traversal/
  https://www.youtube.com/watch?v=cWNEl4HE2OE
*/

class Graph {
    constructor() {
        this.vertices = [];
        this.adjacent = {};
        this.edges = 0;
    }
    
    addVertex(v) {
        this.vertices.push(v);
        this.adjacent[v] = [];
    }
    
    addEdge(v, w) {
        this.adjacent[v].push(w);
        this.adjacent[w].push(v);
        this.edges++;
    }
    
    // Breadth First Search
    bfs(start) {
        const visited = new Set();
        const queue = [start];
        visited.add(start);
        console.log(start);
        while (queue.length > 0) {
            const vertex = queue.shift();
            const adj_list = this.adjacent[vertex];
            for (const adj of adj_list) {
                if (!visited.has(adj)) {
                    visited.add(adj);
                    queue.push(adj);
                    console.log(adj);
                }
            }
        }
    }
    
    // Depth First Search
    dfs(start) {
        const visited = new Set();
        const stack = [start];
        while (stack.length > 0) {
            const vertex = stack.pop();
            
            if (!visited.has(vertex)) {
                visited.add(vertex);
                console.log(vertex);
            }
            
            const adj_list = this.adjacent[vertex];
            for (const adj of adj_list) {
                if (!visited.has(adj)) {
                    stack.push(adj);
                }
            }
        }
    }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("A","D");
g.addEdge("B","C");
g.addEdge("B","D");
g.addEdge("C","D");
g.addEdge("C","E");
g.addEdge("D","F");
g.addEdge("F","G");

console.log("BFS Output:");
g.bfs("A");
console.log("\nDFS Output:");
g.dfs("A");
