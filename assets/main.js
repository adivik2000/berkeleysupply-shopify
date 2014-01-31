;(function( $, window, document, undefined ) {

	'use strict';

	var $window   = $(window);
	var $document = $(document);

	// The page (singleton object) controller
	var page = {

		init: function() {

			var self = this;

			self.$loader  = $('#loader');
			self.$visit = $('.visit');
			self.$visitTxt = $('.visit-text');

			// Init click event handlers
			//self.$navBtn.on("click", self.closetNav);
			self.hideLoader();
			self.toggleDesc();
			self.slider();

			self.$visit.on( 'click', self.visit );

		},

		slider: function () {
			var $slider = $('#main-slider');
			var $brands = $('#brands');

			$slider.flexslider({
				controlNav: false, 
				prevText: "←",
				nextText: "→"
			});

			$brands.flexslider({
				 animation: "slide",
				 slideshow: false,
			   animationLoop: false,
			   controlNav: false, 
			   itemWidth: 200,
			   itemMargin: 0,
			   prevText: "←",
				 nextText: "→"
			});
		},

		visit: function() {
			 $('html, body').animate({
         scrollTop: $('#visit-text').offset().top - 85
     }, 2000);
		},

		toggleDesc: function () {
			var $descTrigger = $('.more-desc');
			var $desc = $('#product-description');

			$descTrigger.on('click', function() {
				$desc.toggleClass('open');
				$descTrigger.toggleClass('open');
			});

		},

		calculateWindowDimensions: function() {

			var self = this;

			self.wW = $window.width();
			self.wH = $window.height();

		},

		hideLoader: function() {

			var self = this;

			setTimeout( function(){

				self.$loader.fadeOut();

			}, 500)

		}

	};

	// Window load
	$window.load(function() {

		page.init();
		//page.calculateWindowDimensions();

	});

	// Window scroll
	$window.scroll(function() {


	});

	// Window resize
	$window.resize(function() {

		page.calculateWindowDimensions();

	});

}( jQuery, window, document ));