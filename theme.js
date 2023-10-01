(function($){
	'use strict';

	
	// testimonial_area slider js
	$('.testimonial_area .test_slide').slick({
		dots: false,
		infinite: true,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,

	});

	/*---------------------
    Client slide
    --------------------- */
    $('.educhild_blog').slick({
    	infinite: true,
    	autoplay: true,
    	dots: false,
    	arrows: false,
    	speed: 1500,
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	pauseOnHover: false,
    	responsive: [
    	{
    		breakpoint: 1024,
    		settings: {
    			slidesToShow: 2,
    			slidesToScroll: 1,
    		}
    	},
    	{
    		breakpoint: 768,
    		settings: {
    			slidesToShow: 1,
    			slidesToScroll: 1,	        
    			arrows: false
    		}
    	},
    	{
    		breakpoint: 480,
    		settings: {
    			slidesToShow: 1,
    			slidesToScroll: 1,
    			arrows: false,

    		}
    	}
    	]
    });


	// Counter js
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	}); 
	
    // CounterUp Skillbar js
    $('.counter_s').counterUp({
    	delay: 10,
    	time: 1000
    }); 
    
    // VenoBox
    new VenoBox();

	// wow js
	new WOW().init();

	// scrolltotop
	$('.scrolltotop').click(function(){

		$(html).animate({'scrollTop' : '0'}, 1000);
		
		return false;
	});

	$(window).scroll(function() {

		if ($(window).scrollTop() > 200) {
			$('.scrolltotop').addClass('myclass');
		} else {
			$('.scrolltotop').removeClass('myclass');
		}
	});
	
	// sticky menu js
	$("#sticker").sticky({
		topSpacing:0,
		zIndex:9999
	});

	 // Sticky logo
	 $(window).scroll(function() {

	 	if ($(window).scrollTop() > 50) {
	 		$('.sticky_logo').addClass('stick_logo');
	 	} else {
	 		$('.sticky_logo').removeClass('stick_logo');
	 	}
	 });

	 $(window).scroll(function() {

	 	if ($(window).scrollTop() > 50) {
	 		$('.main_logo').addClass('header_logo');
	 	} else {
	 		$('.main_logo').removeClass('header_logo');
	 	}
	 });

	  // mobile_menu js
	  $('.mobile_menu nav').meanmenu({
	  	meanScreenWidth: "991",
	  	meanMenuContainer: ".mobile_menu"
	  });

	 // top_search_btn
	 $(".top_search_btn a").click(function(){
	 	$(".header_query_inner").addClass("query_show");
	 });

	 $(".header_query_close").click(function(){
	 	$(".header_query_inner").removeClass("query_show");
	 });


	// slide_list_dragable
	$('.edu_slide_list_dragable .slide_feature').slick({
		dots: false,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,	        
				arrows: false
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,

			}
		}
		]
	});

	// educhild_team_area
	$('.team_slide_area .slide_team').slick({
		dots: false,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,	        
				arrows: false
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,

			}
		}
		]
	});
		// educhild_team_area
		$('.educhild_team_area .slide_team').slick({
			dots: false,
			infinite: true,
			arrows: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,	        
					arrows: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,

				}
			}
			]
		});

	// abt_testmonial__right_area slide
	$('.abt_testmonial__right_area .testi_slide').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	// accordion 

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
    	panel.style.display = "none";
    } else {
    	panel.style.display = "block";
    }
});
	}

	// direction js

	

$('.dh-container').directionalHover();

/*==== Portfolio ====*/
	if ($.fn.isotope) {
		var $portfolio = $('.portfolio_active');
		$portfolio.isotope({
			itemSelector: '.grid-item',
			filter: '*',
			resizesContainer: true,
			layoutMode: 'masonry',
			transitionDuration: '0.8s'
		});
		$('.portfolio_filter li').on('click', function() {

			$('.portfolio_filter li').removeClass('current_menu_item');
			$(this).addClass('current_menu_item');

			var selector = $(this).attr('data-filter');

			$portfolio.isotope({
				filter: selector,
			});
		});
	};
	/*==== End Portfolio ====*/	








})(jQuery);