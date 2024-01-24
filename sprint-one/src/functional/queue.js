var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var sizeOfStorage = Object.keys(storage).length;
    if (sizeOfStorage === 0) {
      storage[0] = value;
    } else {
      storage[sizeOfStorage] = value;
    }
  };

  someInstance.dequeue = function() {
    var sizeOfStorage = Object.keys(storage).length;
    var front = storage[0];
    delete storage[0];
    for (var i = 0; i < sizeOfStorage; i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[sizeOfStorage - 1];
    return front;
  };

  someInstance.size = function() {
    var sizeOfStorage = Object.keys(storage).length;
    return sizeOfStorage;
  };

  return someInstance;
};
