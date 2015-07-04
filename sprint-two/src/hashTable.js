var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = [];
  if (this.retrieve(k)) {
    var storedArr = this._storage.get(i);
    var newArr = [k, v];
    value.push(storedArr, newArr);
  } else {
    value.push(k, v);
  }
  
  this._storage.set(i, value);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if(arr){
    return arr[1];
  }else{
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
     this._storage.set(i, null);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
