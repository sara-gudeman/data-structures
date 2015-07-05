var BinarySearchTree = function(value){
	var searchTree = {};

	searchTree.value = value;

	searchTree.insert = function(value) {
		if (searchTree.value < value) {
			if (searchTree.right === null) {
				searchTree.right = BinarySearchTree(value);
			} else {
				searchTree.right.insert(value);
			}
		} else {
			if (searchTree.left === null) {
				searchTree.left = BinarySearchTree(value);
			} else {
				searchTree.left.insert(value);
			}
		}
	};

	searchTree.contains = function(val) {
		// if searchTree value is === value
		// then value exists
		// -- return?
		// else if right is not null & value > searchTree value

			// return search.right.contains
		// else if left is not null & value < searchTree value
			//return search.left.contains
		//else
		//return false
	};

	searchTree.depthFirstLog = function(cb){};
	searchTree.right = null;
	searchTree.left = null;

	return searchTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
