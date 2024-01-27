var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
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
  ///this._storage.get(index)[k] = v;

  this._storage.get(index)[k] = v;

  // if the number of occupied indices is greater than 75% of _limit,


  // console.log(this._storage.length);
  // console.log(this._limit * (0.75));
     // double the size of the limit

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //return the value using index, key, and get function

  return this._storage.get(index)[k];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  delete this._storage.get(index)[k];
  //this._counter--;
  //if (this._counter < (this._limit * (0.25))) {
  //  this._limit = this._limit / 2;
  //}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */