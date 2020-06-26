'use strict';

(function($){
	$(document).ready(function() {
		$('.nselect-1').nSelect();

		$('input[name="tel"]').mask('+380 (99) 999-99-99');
		$('input[name="tel"]').click(function(){
			$(this).focus();
		});

		//On Click Event
		$("ul.tabs li").click(function() {
			$("ul.tabs li").removeClass("active"); //Remove any "active" class
			$(this).addClass("active");
			$(".tab_content").hide(); //Hide all tab content
			var activeTab = $(this).find("label input:radio").val(); //Find the href attribute value to identify the active tab + content
			$('#' + activeTab).fadeIn(); //Fade in the active ID content
		});

		// Tabs
		var active = $('.info-tabs__btn a.active').attr('data-icon');
		$('#' + active).addClass('active');
		$('.info-tabs__btn a').click(function(e){
			if($('.info-tabs__svg--icon').hasClass('active')){
				$('.info-tabs__svg--icon').removeClass('active');
			}
			var idIcon = $(this).attr('data-icon');
			$('#' + idIcon).addClass('active');

		});


		// Slider
		$('.sl').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 7000,
			dotsClass: 'doctors__sl--dots',
			dots: true
		});

		$('.doctors__sl').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			// autoplay: true,
			// autoplaySpeed: 2000,
			dots: true,
			dotsClass: 'doctors__sl--dots',
			// appendDots: '[h]',
			responsive: [
				{
				  breakpoint: 991,
				  settings: {
				   slidesToShow: 1,
				   slidesToScroll: 1	
				 }
				}] 
		});

		$('.news-open__sl').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 7000,
			dotsClass: 'doctors__sl--dots',
			dots: true

		});
	});
})(jQuery);


var ctx = document.getElementById('appeals');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [50, 19, 3, 5, 2, 3, 6, 23, 6, 12, 53, 65, 4, 2, 4, 45, 4, 4, 4, 3, 43],
        backgroundColor: '#ACFEF7',
        borderColor: '#ACFEF7',
        borderWidth: 1
      },{
        label: '# of Votes',
        data: [50, 19, 3, 5, 2, 3, 6, 23, 6, 12, 53, 65, 4, 2, 4, 45, 4, 4, 4, 3, 43],
        backgroundColor: '#D0B8EF',
        borderColor: '#D0B8EF',
        borderWidth: 1
      },{
        label: '# of Votes',
        data: [50, 19, 3, 5, 2, 3, 6, 23, 6, 12, 53, 65, 4, 2, 4, 45, 4, 4, 4, 3, 43],
        backgroundColor: '#EFD6B8',
        borderColor: '#EFD6B8',
        borderWidth: 1
      }]
    },
    options: {
      legend: {
            display: false
      },
/*      tooltips: {
        mode: 'index',
        intersect: false
      },*/
      responsive: true,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  });