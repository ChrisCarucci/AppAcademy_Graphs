const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}



function printBreadthFirst(start) {
    // your code here
    let adj = adjList;
  
    visitedArr = [];
    const queue = [];
    queue.push(start);
  
    const discovered = [];
    discovered[start] = true;
          
  
  
    while(queue.length) {
        let Node = queue.shift();
        console.log("Node: " + Node)
        visitedArr.push(Node)
              
        for (let i = 0; i < adj[Node].length; i++) {
  
            if (!discovered[adj[Node][i]]) {
                      
                      
                discovered[adj[Node][i]] = true;
                queue.push(adj[Node][i]);
            }
        }
    }
    console.log(visitedArr);
    return false;
}
      
      
      
      
  console.log("First Test:")
  printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                        // One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
  console.log("Second Test:")
  printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                        // One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
  console.log("Third Test:")
  printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                        // One possible solution:  [ 4, 3, 5, 6, 2, 1 ]






function printDepthFirst(start, visited = new Set()) {
    // your code here
    let adj = adjList;
                          
                          
    const stack = [];
    stack.push(start);
    visited.add(start)
    let visitedArr = [];
                          
                          
    while(stack.length) {
                          
    let Node = stack.pop();
    visitedArr.push(Node)
    console.log(" Visited Node: " + Node)
                                      
    let neighbors = adj[Node]
                          
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(neighbors[i])) {
                stack.push(neighbors[i]);
            }
        }

        neighbors.forEach(neighbor => visited.add(neighbor))
    }

    console.log("Visited Nodes: " + JSON.stringify([...visited]))
    console.log("VisitedArr: " + visitedArr)
    return false;
}
                                    
                          
console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
 // One possible solution:  3, 4, 6, 5, 1, 2
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
 // One possible solution:  6, 4, 5, 2, 1, 3
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
// One possible solution:  4, 6, 5, 2, 1, 3




function aShortestPath(start, end) {
    // Create a queue and enqueue a path to the starting node
    const queue = [[start]];
  
    // Create a set to store visited nodes
    const visited = new Set();
  
  
  
    // While the queue is not empty...
    while (queue.length > 0) {
      // Dequeue the first path
      let path = queue.shift();
  
      // grab the last node from the path
      let currentNode = path[path.length - 1];
      
      if (currentNode === end) {
          console.log("Path: " + path)
          return "Found Node: " + currentNode;
      }
  
      // and check if it's been visited
      if (!visited.has(currentNode)) {
        // If not, mark it as visited
        visited.add(currentNode);
  
        // Put paths to all its neighbors in the back of the queue
        let neighbors = adjList[currentNode]
        
        for (let i = 0 ; i < neighbors.length ; i++) {
          let pathCopy = [...path];
          pathCopy.push(neighbors[i]);
          queue.push(pathCopy);
        }
      }
    }
  
    return "No path found. *Sad Face*";
  
  }
  
  
  console.log("First Test:");
  console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
  console.log("Second Test:");
  console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
  console.log("Third Test:");
  console.log(aShortestPath(6, 1)); // -> false






function degreesOfSeparation(start, end) {
  // Create a queue and enqueue a path to the starting node
  const queue = [[start]];

  // Create a set to store visited nodes
  const visited = new Set();

  let count = 0;

  // While the queue is not empty...
  while (queue.length > 0) {
    // Dequeue the first path
    let path = queue.shift();

    // grab the last node from the path
    let currentNode = path[path.length - 1];
    
    if (currentNode === end) {
        console.log("Path: " + path)
        console.log("Degree of separation: " + (count-1))
        return "Found Node: " + currentNode;
        
    }

    // and check if it's been visited
    if (!visited.has(currentNode)) {
      // If not, mark it as visited
      visited.add(currentNode);

      // Put paths to all its neighbors in the back of the queue
      let neighbors = adjList[currentNode]
      
      for (let i = 0 ; i < neighbors.length ; i++) {
        let pathCopy = [...path];
        pathCopy.push(neighbors[i]);
        queue.push(pathCopy);
        
      }
      count++;
    }
  }

  return "No path found. *Sad Face*";

}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false