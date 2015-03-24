(function () {
	var startTestBtn = $('.btn-starttest'),
		greetingsScreen = $('.greeting-section'),
		s = Snap('.progress-graph'),
		outerCircle,
		innerCircle,
		progressPath;

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

	outerCircle = s.circle(75, 75, 74);
	innerCircle = s.circle(75, 75, 60);
	outerCircle.addClass('circle-outer');
	innerCircle.addClass('circle-inner');

	//progressPath = s.circle(75, 75, 72);

	//progressPath.addClass('path-progress');
})();