var Application = Application || {};

(function () {
	var startTestBtn = $('.btn-starttest'),
		nextBtn = $('.btn-next'),
		greetingsScreen = $('.greeting-section'),
		question = $('.question'),
		questionNumber = $('.number'),
		questionCounter = 1,
		activeNode = Application.questions[0];

	question.text(activeNode.get('data'));	
	questionNumber.text(questionCounter);

	startTestBtn.click(function () {
		greetingsScreen.animate({
			opacity: 0
		}, 300, 'swing', function () {
			greetingsScreen.css({
				display: 'none',
				opacity: 1
			});
		});
	});	

	nextBtn.click(function () {
		var answer;
		
		if($('#answer-affirmative').prop('checked')) {
			answer = 0;
		}
		if($('#answer-negative').prop('checked')) {
			answer = 1;
		}
		if(answer !== undefined) {
			activeNode = activeNode.get('children')[answer];
			if(activeNode instanceof Application.Graph.Node) {
				question.text(activeNode.get('data'));
				questionCounter += 1;
				questionNumber.text(questionCounter);
			} else if(activeNode instanceof Application.Graph.LeafNode) {
				alert(activeNode.get('data'));
			}

		}
	});

})();