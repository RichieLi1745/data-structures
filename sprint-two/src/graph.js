// Instantiate a new graph
var Graph = function() {

  // declare an empty object to store nodes
  this.graph = {};

  // // declare an array to store edges
  // graph.edges = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  // create a new node object
  this.graph[node] = {};

  // a new node has a value property and a connections property
  this.graph[node].connections = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  return (node in this.graph);

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  // iterate through the node's connection,
  for (var i = 0; i < this.graph[node].connections.length; i++) {
    var eachEdge = this.graph[node].connections[i];
    var index = this.graph[eachEdge].connections.indexOf(node);
    this.graph[eachEdge].connections.splice(index, 1);
  }

  delete this.graph[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  return this.graph[fromNode].connections.includes(toNode);

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.graph[fromNode].connections.push(toNode);
  this.graph[toNode].connections.push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //const index = array.indexOf(5);
  //if (index > -1) { // only splice array when item is found
  //array.splice(index, 1); // 2nd parameter means remove one item only

  var connection1 = this.graph[fromNode].connections;
  console.log(connection1);
  var connection2 = this.graph[toNode].connections;
  console.log(connection2);
  var index1 = connection1.indexOf(toNode);
  var index2 = connection2.indexOf(fromNode);

  if (index1 > -1 && index2 > -1) {

    connection1.splice(index1, 1);
    connection2.splice(index2, 1);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var node in this.graph) {
    cb(node);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


