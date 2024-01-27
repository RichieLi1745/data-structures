var BinarySearchTree = function(value) {

  //initalize value, left, and right property for each tree
  this.left = null;
  this.right = null;
  this.value = value;

};

//create insert, contains, depthFirstLog methods

BinarySearchTree.prototype.insert = function(value) {


  // create a new node
  var newTree = new BinarySearchTree(value);

  var greater = newTree.value > this.value;

  if (greater) {

    if (this.right === null) {
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  } else {

    if (this.left === null) {
      this.left = newTree;
    } else {
      this.left.insert(value);
    }

  }


};

BinarySearchTree.prototype.contains = function(value) {

  if (this.value === value) {
    return true;
  }
  var greater = value > this.value;

  if (greater) {

    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }

  } else {

    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }

  }

};

BinarySearchTree.prototype.depthFirstLog = function(func) {

  func(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }


};
/*
 * Complexity: What is the time complexity of the above functions?
 */
