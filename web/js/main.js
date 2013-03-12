var backdrop_image = new Image();
var backdrop_ratio = null;

backdrop_image.onload = function () {
	backdrop_ratio = backdrop_image.width / backdrop_image.height;
};

backdrop_image.src = 'img/tautropfen3_720.jpg';

$(document).ready(function() {


	$(window).resize(function() {
		var window_ratio = window.innerWidth / window.innerHeight;
		
		var bd_width = backdrop_image.width;
		var bd_height = backdrop_image.height;
		
		if (window_ratio > backdrop_ratio) {
			//Window is wider than image
			//stretch width to fit
			
			bd_width = window.innerWidth;
			bd_height = bd_width / backdrop_ratio;
			
		}
		else {
			//Image is wider than window
			//stretch height to fit
			
			bd_height = window.innerHeight;
			bd_width = 	bd_height * backdrop_ratio;
		}
	
		var bg_size = bd_width + 'px ' + bd_height + 'px';
		
		$('#backdrop').css('background-size', bg_size);
	});
	
	$('.attribution').click(function() {
		$(this).find('div').slideToggle();
	});

});

