$(function(){

	//console.log('ready!');
	//document.scroll
		//if window bottom is greater than about section offset.top then 
			//decrease opacity of about section content to fade in
			//may have to change the css to a different class containing an animation
	var finishLine = false;

	$(document).scroll(function() {

		var bottom = $(window).height() + $(window).scrollTop();
		var aboutTop = $('#about').offset().top;

		if((bottom  >= aboutTop) && !finishLine) {
			finishLine = true;
			//console.log('window bottom is below about section top');
			$('#about div').children().animate({opacity:1, left: '0px'}, 1250);
		}

	});

});