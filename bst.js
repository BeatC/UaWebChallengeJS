// Implementation of multiparent graph

var Graph = Graph || {};


// Definition of Node module
Graph.Node = (function (global) {
	// Defining private fields
	var elements = {
				leftChild: null,
				rightChild: null,
				parents: [],
				data: null
	};

	// Fabric method for extending new nodes
	function extend (obj, cb) {
		// Saving reference to the module scope
		var that = this,
			newNode;

		// Return shallow copied module
		newNode = (function () {
			// I defined left and right childs rather than defining them through the list because
			// we know that there will be two childs in all cases. Consider replacing by list
			// (it will make module scalable)
			var elements = {};

			for(var i in that.elements) {
				if(that.elements.hasOwnProperty(i)) {
					elements[i] = that.elements[i];
				}
			}

			

			// Getter for private fields
			function get (name) {
				var result;
				if(elements[name]) {
					if(typeof elements[name] === 'object') {
						result = {};
						// Shallow copy for arrays and objects
						for(i in elements[name]) {
							if(elements[name].hasOwnProperty(i)) {
								result[i] = elements[name][i]; 
							}
						}
					} else {
						// Usual assigning for primitive values
						result = elements[name];
					}
					return result;
				} else {
					// If element isn't exist
					return null;
				}
			}

			// Setter for private fields
			function set (name, value) {
				if(elements[name] !== undefined) {
					elements[name] = value;
				}
			}

			// Add parent
			function addParent (parent, cb) {
				// Checking for existing of this parent in the list.
				var exists = parent in elements.parents;
				
				if(!exists) {
					elements.parents.push(parent);
				}
					if(typeof cb === 'function') {
					cb(!exitsts);
				}
			}

			// Remove parent
			function removeParent (parent, cb) {
				if(parent in elements.parents) {
					for(var i = 0, length = elements.parents.length; i < length; i += 1) {
						if(elements.parents[i] === parent) {
							// Removing parent from the list
							elements.parents[i].splice(i - 1, 1);
						}
					}
					// Calling back with removed parent
					if(typeof cb === 'function') {
						cb(parent);
					}
				}
			}

			return function Derived () {
				Derived.prototype = Graph.Node;

				if(!(this instanceof Graph.Node)) {
					return new Derived();
				}

				for(var i in elements) {
					
				}
			}

			return {
				set: set,
				get: get,
				extend: extend,
				addParent: addParent,
				removeParent: removeParent
			};

		})();

		// Overriding values of private fields by parameter object
		for(var i in obj) {
			if(obj.hasOwnProperty(i)) {
				newNode.set(i, obj[i]);
			}
		}

		// Checking if callback exists
		if(typeof cb === 'function') {
			cb(this);
		}
		
		return newNode;
	}

	// Definition of public fields
	return {
		extend: extend
	};

})(this);

// Definition of LeafNode module. In our task it will represent final result of answering all questions
Graph.LeafNode = (function (global) {

})(this);

var root = Graph.Node.extend({
	data: {
		questions: "Do you like JavaScript?",
		answer: true
	}
});

var node = root.extend({
	leftChild: 3,
	data: {
		questions: "That's good?",
		answer: true
	}
});

var bar = node.extend();

console.log(root.get('data'));
console.log(node.get('data'));
console.log(bar.get('data'));