'use strict';

(function($){
	$(document).ready(function() {
		// Code
		// Slider
		$('.sl').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 7000,
			dots: true
		});

		$('.doctors__sl').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			// autoplay: true,
			// autoplaySpeed: 2000,
			dots: true,
			dotsClass: 'slick-dots slider__dots doctors__sl--dots',
			responsive: [
				{
				  breakpoint: 991,
				  settings: {
				   slidesToShow: 1,
				   slidesToScroll: 1	
				 }
				}] 
		});
	});
})(jQuery);
