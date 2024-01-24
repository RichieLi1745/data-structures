class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};

  }

  size() {
    var sizeOfStack = Object.keys(this.storage).length;
    return sizeOfStack;
  }
  push(value) {
    var sizeOfStack = Object.keys(this.storage).length;
    if (sizeOfStack === 0) {
      this.storage[0] = value;
    } else {
      this.storage[sizeOfStack] = value;
    }
  }
  pop() {
    var sizeOfStack = Object.keys(this.storage).length;
    var popped = this.storage[sizeOfStack - 1];
    delete this.storage[sizeOfStack - 1];
    return popped;
  }
}