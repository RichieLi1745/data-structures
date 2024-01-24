var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  return stack;
};

var stackMethods = {};

stackMethods.push = function(string) {
  var sizeOfStack = Object.keys(this.storage).length;
  if (sizeOfStack === 0 ) {
    this.storage[0] = string;
  } else {
    this.storage[sizeOfStack] = string;
  }
};
stackMethods.pop = function() {
  var sizeOfStack = Object.keys(this.storage).length;
  var popped = this.storage[sizeOfStack - 1];
  delete this.storage[sizeOfStack - 1];

  return popped;
};
stackMethods.size = function() {
  var sizeOfStack = Object.keys(this.storage).length;
  return sizeOfStack;
};
