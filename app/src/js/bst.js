// Implementation of multiparent graph

var Application = Application || {};

Application.Graph = Application.Graph || {};

(function (global) {

	// Explicit definition of all variables at the top of the scope
	var get, set, addParent, removeParent, addChild, removeParent;

	Application.Graph.Node = function (data) {

		// Preventing for invoking w/o new keyword
		if(!(this instanceof Application.Graph.Node)) {
			return new Application.Graph.Node();
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


	Application.Graph.LeafNode = function (data) {
		
		// Preventing for invoking w/o new keyword
		if(!(this instanceof Application.Graph.LeafNode)) {
			return new Application.Graph.LeafNode();
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

	// Method adding parent to Node
	addParent = function (parent) {
		var parents = this.elements.parents;
		parents.push(parent);
		parents[parents.length - 1].elements.children.push(this);
	};

	// Method removing parent from Node
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

	// Method adding child to Node
	addChild = function (child) {
		var children = this.elements.children;
		children.push(child);
		children[children.length - 1].elements.parents.push(this);
	};

	// Method removing child from Node
	removeChild = function (child) {
		var children = this.elements.children,
			childParents = child.parents;
		if (child in this.children) {
			for(var i = 0, length = children.length; i < length; i += 1) {
				if(child === children[i]) {
					// Delete this element from the list
					children.splice(i - 1, 1);
				}
			}

			// Implemented in such way because of preventing of infinite recursion
			if(this in childParents) {
				for(var i = 0, length = childParents.length; i < length; i += 1) {
					if(childParents[i] === this) {
						//Delete it from the list
						childParents.splice(i - 1, 1);
					}
				}
				child.removeParent(this);
			}
		}
	};

	// Saving created methods in prototype
	Application.Graph.Node.prototype.set = set;
	Application.Graph.Node.prototype.get = get;
	Application.Graph.Node.prototype.addParent = addParent;
	Application.Graph.Node.prototype.removeParent = removeParent;
	Application.Graph.Node.prototype.addChild = addChild;
	Application.Graph.Node.prototype.removeChild = removeChild;

	Application.Graph.LeafNode.prototype.set = set;
	Application.Graph.LeafNode.prototype.get = get;
	Application.Graph.LeafNode.prototype.addParent = addParent;
	Application.Graph.LeafNode.prototype.removeParent = removeParent;
	Application.Graph.LeafNode.prototype.addChild = addChild;
	Application.Graph.LeafNode.prototype.removeChild = removeChild;

})(this);
