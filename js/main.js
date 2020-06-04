'use strict';

(function($){
	$(document).ready(function() {
		// Code
		// Slider
		$('.sl').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: false,
			// autoplaySpeed: 2000,
			dots: true
		});
	});
})(jQuery);
