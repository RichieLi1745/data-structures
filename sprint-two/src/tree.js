var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  // inputs: any value
  // outputs: no output, but adds to children array
  // constraints:
  // edge cases:

  // create a variable that is a tree representing the new value
  var newChild = Tree(value);

  // add that variable to the children of the tree
  this.children.push(newChild);

};

treeMethods.contains = function(target) {
  //debugger;
  // inputs: a target value that we compare to each node
  // outputs: a boolean saying whether or not the target is found
  // constraints:
  // edge cases:

  //iterate through each child
  var isTarget = false;
  for (var i = 0; i < this.children.length; i++) {
    //declare child variable
    var child = this.children[i];
    console.log(child);
    //check if target value is matching
    if (child.value === target) {
      //return true if so
      isTarget = true;
      return isTarget;
      // break;
    } else {
      //else call on contains with child
      isTarget = isTarget || child.contains(target);
    }
  }
  return isTarget;

  //return false if break out of loop
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
