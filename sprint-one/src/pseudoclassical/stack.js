var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};
Stack.prototype.size = function() {
  var sizeOfStack = Object.keys(this.storage).length;
  return sizeOfStack;
};
Stack.prototype.push = function(value) {
  var sizeOfStack = Object.keys(this.storage).length;
  if (sizeOfStack === 0) {
    this.storage[0] = value;
  } else {
    this.storage[sizeOfStack] = value;
  }
};
Stack.prototype.pop = function() {
  var sizeOfStack = Object.keys(this.storage).length;
  var popped = this.storage[sizeOfStack - 1];
  delete this.storage[sizeOfStack - 1];
  return popped;
};


