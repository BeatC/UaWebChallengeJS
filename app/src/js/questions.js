(function () {
	// Let's define nodes in the graph

	var root = new Graph.Node('Чи подобаються тобі динамічні мови програмування?');

	root.addChild(new Graph.Node('Ти хіпстер?'));

	root.addChild(new Graph.LeafNode('З тебе не вийде програміст((('));

	console.log(root);

})(this);