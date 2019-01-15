$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	
// ---- Active
	// slider slick active code


 function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            dots: true,
            autoplay:false,
            autoplaySpeed:10000,
            // fade:true,
            fade:true,
			arrows: true,
			prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i>Prev</button>',
			nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i>Next</button>',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

//	service-slider js
$('.single-top').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll:1,
  dots: true,
  autoplay:false,
  autoplaySpeed:10000,
  arrows: false,
});
//	our cases
$('.single-cases').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll:1,
  dots: false,
  autoplay:false,
  autoplaySpeed:10000,
  arrows: true,
  prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
});
//	testimonial-active
$('.testimonial-active').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  dots: false,
  autoplay:false,
  autoplaySpeed:10000,
  arrows: true,
  prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
});
$('.brad-active').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll:1,
  dots: false,
  autoplay:false,
  autoplaySpeed:10000,
  arrows: false,
});
//	our cases
$('.single-cases').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll:1,
  dots: false,
  autoplay:false,
  autoplaySpeed:10000,
  arrows: true,
  prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
});
$('select').niceSelect();
$('.test-popup-link').magnificPopup({
  type: 'image'
  // other options
});





}(jQuery));