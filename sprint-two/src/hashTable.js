

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //if index is not occupied,
  if (!this._storage.get(index)) {
    //set empty object inside index
    this._storage.set(index, {});
  }
  //set key value pair into index
  this._storage.get(index)[k] = v;

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //return the value using index, key, and get function

  return this._storage.get(index)[k];


};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  delete this._storage.get(index)[k];


};



/*
 * Complexity: What is the time complexity of the above functions?
 */


