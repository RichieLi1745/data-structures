var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var sizeOfStorage = Object.keys(storage).length;
    if (sizeOfStorage === 0) {
      storage[0] = value;
    } else {
      storage[sizeOfStorage] = value;
    }
  };

  someInstance.pop = function() {
    var sizeOfStorage = Object.keys(storage).length;
    var popped = storage[sizeOfStorage - 1];

    delete storage[sizeOfStorage - 1];

    return popped;
  };

  someInstance.size = function() {
    var sizeOfStack = Object.keys(storage).length;
    return sizeOfStack;
  };

  return someInstance;
};
