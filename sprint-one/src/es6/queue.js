class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  size() {
    var sizeOfQueue = Object.keys(this.storage).length;
    return sizeOfQueue;
  }
  enqueue(value) {
    var sizeOfQueue = Object.keys(this.storage).length;
    if (sizeOfQueue === 0) {
      this.storage[0] = value;
    } else {
      this.storage[sizeOfQueue] = value;
    }
  }
  dequeue() {
    var sizeOfQueue = Object.keys(this.storage).length;
    var dequeued = this.storage[0];
    delete this.storage[0];
    for (var i = 0; i < sizeOfQueue; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[sizeOfQueue - 1];
    return dequeued;
  }
}
