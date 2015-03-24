// Implementation of multiparent graph

var Graph = Graph || {};

(function (global) {

	// Explicit definition of all variables at the top of the scope
	var get, set, addParent, removeParent, addChild, removeParent;

	Graph.Node = function (data) {

		// Preventing for invoking w/o new keyword
		if(!(this instanceof Graph.Node)) {
			return new Graph.Node();
		}

		// Definition of the elements needed for Node class
		this.elements = {
			children: [],
			parents: [],
			data: null
		};

		if(data !== undefined) {
			this.elements.data = data;
		}

		// Explicit returning of the new instance
		return this;
	}


	Graph.LeafNode = function (data) {
		
		// Preventing for invoking w/o new keyword
		if(!(this instanceof Graph.LeafNode)) {
			return new Graph.LeafNode();
		}

		// Definition of the elements needed for LeafNode class
		this.elements = {
			parents: [],
			data: null
		};
		
		if(data !== undefined) {
			this.elements.data = data;
		}

		// Explicit returning of the new instance
		return this;
	}

	get = function (name) {
		if(name in this.elements) {
			return this.elements[name];
		} else {
			return null;
		}
	};

	set = function (name, value) {
		if(name in this.elements) {
			if(value !== undefined) {
					this.elements[name] = value;
			}
			return null;
		}
		return null;
	};

	// Just syntactical sugar for 'push'
	addParent = function (parent) {
		var parents = this.elements.parents;
		parents.push(parent);
		parents[parents.length - 1].elements.children.push(this);
	};


	removeParent = function (parent) {
		if (parent in this.parents) {
			var parents = this.elements.parents;
			for(var i = 0, length = parents.length; i < length; i += 1) {
				if(parent in parents) {
					// Delete such element from the list
					parents.splice(i - 1, 1);
				}
			}
			parent.removeChild(this);
		} else {
			return null;
		}
	};

	// The same as 'addParent'
	addChild = function (child) {
		var children = this.elements.children;
		children.push(child);
		children[children.length - 1].elements.parents.push(this);
	};

	removeChild = function (child) {
		if (child in this.children) {
			var children = this.elements.children;
			for(var i = 0, length = children.length; i < length; i += 1) {
				if(child === children[i]) {
					// Delete this element from the list
					children.splice(i - 1, 1);
				}
			}
			child.removeParent(this);
		}
	};

	// Saving created methods in prototype
	Graph.Node.prototype.set = set;
	Graph.Node.prototype.get = get;
	Graph.Node.prototype.addParent = addParent;
	Graph.Node.prototype.removeParent = removeParent;
	Graph.Node.prototype.addChild = addChild;
	Graph.Node.prototype.removeChild = removeChild;

	Graph.LeafNode.prototype.set = set;
	Graph.LeafNode.prototype.get = get;
	Graph.LeafNode.prototype.addParent = addParent;
	Graph.LeafNode.prototype.removeParent = removeParent;
	Graph.LeafNode.prototype.addChild = addChild;
	Graph.LeafNode.prototype.removeChild = removeChild;

})(this);
