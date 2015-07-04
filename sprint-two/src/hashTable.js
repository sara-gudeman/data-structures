var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = [];
  var retrieve = this.retrieve(k);
  if (retrieve === undefined || retrieve === null) {
    value.push(k, v);
  } else {
    var storedArr = this._storage.get(i);
    var newArr = [k, v];
    value.push(storedArr, newArr);
  }

  this._storage.set(i, value);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if(arr === undefined || arr === null){
    return null
  }


  // if there is only one tuple sorted at the index
  if(typeof arr[0] === "string"){
    return arr[1]
  }
  // return value at index 1

  // if there are more than one tuples
  if(Array.isArray(arr[0])){
  // iterate over each tuple key,
      // if key is equal to k
      // return value at subindex 1
    for(var i = 0; i < arr.length; i++){
      if(arr[i][0] === k){
        return arr[i][1]
      }
    }
  }else{
    return null;
  }
  // else 
    // two cases:
      // one: remove has been run, value is null
      // two: value has never been set (undefined)
      // either way, return null

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
     this._storage.set(i, null);
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: linear (because calls retrieve)
 retrieve: linear (for loop)
 remove: constant
 */
