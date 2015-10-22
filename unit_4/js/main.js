$(document).ready(function() {
	var wiggled = false;
	
	$('#logoLeft img').mouseenter(function() {
		if (!wiggled) {
			$('#logoLeft').effect('bounce',{times:2},500);
			wiggled = true;
		}
	});
	
	$('#logoLeft img').mouseout(function() {
		if (wiggled) {
			wiggled = false;
		}
	});
	
		$('#logoRight img').mouseenter(function() {
		if (!wiggled) {
			$('#logoRight').effect('bounce',{times:2},500);
			wiggled = true;
		}
	});
	
	$('#logoRight img').mouseout(function() {
		if (wiggled) {
			wiggled = false;
		}
	});


});