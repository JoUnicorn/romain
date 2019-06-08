
"use strict";


// Prealoder
 function prealoader () {
   if ($('#preloader_1').length) {
     $('#preloader_1').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }

 // Window load function
 jQuery(window).on('load', function () {
    (function ($) {
       prealoader ()
   })(jQuery);
  });


  /*--/ Star Typed /--*/
  if ($('.text-slider').length == 1) {
  var typed_strings = $('.text-slider-items').text();
      var typed = new Typed('.text-slider', {
          strings: typed_strings.split(','),
          typeSpeed: 80,
          loop: true,
          backDelay: 1100,
          backSpeed: 30
      });
  }

  var contentWayPoint = function() {
      var i = 0;
      $('.ftco-animate').waypoint( function( direction ) {

          if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

              i++;

              $(this.element).addClass('item-animate');
              setTimeout(function(){

                  $('body .ftco-animate.item-animate').each(function(k){
                      var el = $(this);
                      setTimeout( function () {
                          var effect = el.data('animate-effect');
                          if ( effect === 'fadeIn') {
                              el.addClass('fadeIn ftco-animated');
                          } else if ( effect === 'fadeInLeft') {
                              el.addClass('fadeInLeft ftco-animated');
                          } else if ( effect === 'fadeInRight') {
                              el.addClass('fadeInRight ftco-animated');
                          } else {
                              el.addClass('fadeInUp ftco-animated');
                          }
                          el.removeClass('item-animate');
                      },  k * 50, 'easeInOutExpo' );
                  });

              }, 100);

          }

      } , { offset: '95%' } );
  };
  contentWayPoint();


  var carousel = function() {
      $('.home-slider').owlCarousel({
      loop:true,
      autoplay: true,
      margin:0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav:false,
      autoplayHoverPause: false,
      items: 1,
      navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
      }
      });
      $('.carousel-testimony').owlCarousel({
          autoplay: true,
          center: true,
          loop: true,
          items:1,
          margin: 30,
          stagePadding: 0,
          nav: false,
          navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
          responsive:{
              0:{
                  items: 1
              },
              600:{
                  items: 1
              },
              1000:{
                  items: 1
              }
          }
      });

  };
  carousel();


  // magnific popup
  $('.image-popup').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  fixedContentPos: true,
  mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
   gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    verticalFit: true
  },
  zoom: {
    enabled: true,
    duration: 300 // don't foget to change the duration also in CSS
  }
});
