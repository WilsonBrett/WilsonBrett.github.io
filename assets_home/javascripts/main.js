$(function(){

	//animation code for the #about section
	var finishLine = false;

	$(document).scroll(function() {
		console.log('firing');
		var bottom = $(window).height() + $(window).scrollTop();
		var aboutTop = $('#about').offset().top;

		if((bottom  >= aboutTop) && !finishLine) {
			finishLine = true;
			$('#about div').children().animate({opacity:1, left: '0px'}, 1250, function() {
				$(document).unbind("scroll");
			});
		}
	});
});