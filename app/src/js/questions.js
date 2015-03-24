var Application = Application || {}

Application.questions = Application.questions || [];
Application.results = Application.results || [];

(function () {
	// Let's define nodes in the graph
	var questions = Application.questions,
		results = Application.results;


	questions.push(new Application.Graph.Node('Чи подобаються тобі динамічні мови програмування?'));
	questions.push(new Application.Graph.Node('Ти хіпстер?'));
	questions.push(new Application.Graph.Node('Чи є в тебе бажання створити стартап?'));
	questions.push(new Application.Graph.Node('Ти вважаєш, що всі можливі додатки для твого смартфона вже створені?'));
	questions.push(new Application.Graph.Node('Ти любишь змій?'));
	questions.push(new Application.Graph.Node('В дитинстві, чи було в тебе бажання знайти скарб?'));
	questions.push(new Application.Graph.Node('Чи хочеш ти дізнатися як працює браузер?'));
	questions.push(new Application.Graph.Node('Ти збочинець?'));
	questions.push(new Application.Graph.Node('Строга типізація?'));
	questions.push(new Application.Graph.Node('Як щодо кави?'));
	questions.push(new Application.Graph.Node('Як щодо яблук?'));

	results.push(new Application.Graph.LeafNode('Python'));
	results.push(new Application.Graph.LeafNode('Ruby'));
	results.push(new Application.Graph.LeafNode('HTML/CSS'));
	results.push(new Application.Graph.LeafNode('JS'));
	results.push(new Application.Graph.LeafNode('Swift'));
	results.push(new Application.Graph.LeafNode('Java'));
	results.push(new Application.Graph.LeafNode('C#'));


	questions[0].addChild(questions[1]);
	questions[0].addChild(questions[3]);

	questions[1].addChild(questions[2]);
	questions[1].addChild(questions[6]);

	questions[2].addChild(questions[4]);
	questions[2].addChild(questions[6]);

	questions[3].addChild(questions[6]);
	questions[3].addChild(questions[8]);

	questions[4].addChild(results[0]);
	questions[4].addChild(questions[5]);

	questions[5].addChild(results[1]);
	questions[5].addChild(results[0]);
	
	questions[6].addChild(questions[7]);
	questions[6].addChild(questions[4]);

	questions[7].addChild(results[3]);
	questions[7].addChild(results[2]);

	questions[8].addChild(questions[9]);
	questions[8].addChild(questions[10]);

	questions[9].addChild(results[5]);
	questions[9].addChild(results[6]);

	questions[10].addChild(results[4]);
	questions[10].addChild(results[3]);

})(this);

