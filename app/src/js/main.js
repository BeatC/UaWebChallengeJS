var Application = Application || {};

(function () {
	var startTestBtn = $('.btn-starttest'),
		nextBtn = $('.btn-next'),
		greetingsScreen = $('.greeting-section'),
		testSection = $('.test-section'),
		questionSection = $('.question-section'),
		question = $('.question'),
		questionNumber = $('.number'),
		questionCounter = 1,
		activeNode = Application.questions[0];

	question.text(activeNode.get('data'));	
	questionNumber.text(questionCounter);

	testSection.css({
		top: -(($(window).height() - $('.test-section').height()) / 3),
		opacity: 0,
		display: 'none'
	});

	startTestBtn.click(function () {
		greetingsScreen.animate({
			opacity: 0
		}, 300, 'easeOutBack', function () {
			greetingsScreen.css({
				display: 'none',
				opacity: 1
			});
			testSection.css('display', 'block')
			.animate({
				opacity: 1,
				top: ($(window).height() - $('.test-section').height()) / 3 
			}, 600, 'easeOutElastic');
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
				questionSection.animate({ opacity: 0 }, 200, 'easeOutBack', function () {
					question.text(activeNode.get('data'));
					questionCounter += 1;
					questionNumber.text(questionCounter);
					questionSection.animate({ opacity: 1}, 200, 'easeInBack');
					$('#answer-affirmative').prop('checked', false);
					$('#answer-negative').prop('checked', false);
				});
			} else if(activeNode instanceof Application.Graph.LeafNode) {
				questionSection.animate({
					opacity: 0
				}, 300, 'easeOutBack', function () {
					questionSection.css('display', 'none');
					
					$('.result-section').css({
						opacity: 0,
						display: 'block'
					});

					$('.result-section').animate({
						opacity: 1
					}, 300, 'easeInBack');
				});

				$('.result-language').text(activeNode.get('data'));
			}
		}
	});

})();