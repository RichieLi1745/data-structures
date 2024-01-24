var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  var sizeOfQueue = Object.keys(this.storage).length;
  if (sizeOfQueue === 0) {
    this.storage[0] = string;
  } else {
    this.storage[sizeOfQueue] = string;
  }

};
queueMethods.dequeue = function() {
  var sizeOfQueue = Object.keys(this.storage).length;
  var dequeued = this.storage[0];
  delete this.storage[0];
  for (var i = 0; i < sizeOfQueue; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[sizeOfQueue - 1];
  return dequeued;
};
queueMethods.size = function() {
  var sizeOfQueue = Object.keys(this.storage).length;

  return sizeOfQueue;
};

