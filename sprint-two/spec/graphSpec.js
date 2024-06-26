describe('graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', function() {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
    expect(graph.removeNode).to.be.a('function');
    expect(graph.hasEdge).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.removeEdge).to.be.a('function');
    expect(graph.forEachNode).to.be.a('function');
  });

  it('should store values as nodes that were inserted', function() {
    graph.addNode(1);
    expect(graph.contains(1)).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    graph.addNode(2);
    expect(graph.contains(2)).to.equal(true);
    graph.removeNode(2);
    expect(graph.contains(2)).to.equal(false);
  });

  it('should create edges between two nodes', function() {
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);
    expect(graph.hasEdge(3, 2)).to.equal(true);
    expect(graph.hasEdge(3, 1)).to.equal(false);
  });

  it('should remove edges between nodes', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeNode(5);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should execute a callback on each node in the graph', function() {
    var connectToFive = function(item) {
      graph.addEdge(item, 5);
    };
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.forEachNode(connectToFive);
    expect(graph.hasEdge(2, 5)).to.equal(true);
    expect(graph.hasEdge(1, 5)).to.equal(true);
    expect(graph.hasEdge(3, 5)).to.equal(true);
    expect(graph.hasEdge(5, 5)).to.equal(true);
  });
  it('should execute a callback on each node in the graph where the callback has multiple edges added to each', function() {
    var connectToMultiple = function(item) {
      graph.addEdge(item, 5);
      graph.addEdge(item, 6);
      graph.addEdge(item, 7);
    };
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addNode(6);
    graph.addNode(7);
    graph.forEachNode(connectToMultiple);
    expect(graph.hasEdge(1, 5)).to.equal(true);
    expect(graph.hasEdge(2, 5)).to.equal(true);
    expect(graph.hasEdge(3, 5)).to.equal(true);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    expect(graph.hasEdge(5, 5)).to.equal(true);
    expect(graph.hasEdge(6, 5)).to.equal(true);
    expect(graph.hasEdge(7, 5)).to.equal(true);
    expect(graph.hasEdge(1, 6)).to.equal(true);
    expect(graph.hasEdge(2, 6)).to.equal(true);
    expect(graph.hasEdge(3, 6)).to.equal(true);
    expect(graph.hasEdge(4, 6)).to.equal(true);
    expect(graph.hasEdge(5, 6)).to.equal(true);
    expect(graph.hasEdge(6, 6)).to.equal(true);
    expect(graph.hasEdge(7, 6)).to.equal(true);
    expect(graph.hasEdge(1, 7)).to.equal(true);
    expect(graph.hasEdge(2, 7)).to.equal(true);
    expect(graph.hasEdge(3, 7)).to.equal(true);
    expect(graph.hasEdge(4, 7)).to.equal(true);
    expect(graph.hasEdge(5, 7)).to.equal(true);
    expect(graph.hasEdge(6, 7)).to.equal(true);
    expect(graph.hasEdge(7, 7)).to.equal(true);
  })
});
