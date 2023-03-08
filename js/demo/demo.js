// ------------------------------------------------
// Project Name: Punchy - Coming Soon and Landing Page Template with Morphing Effects
// Project Description: Punchy - awesome coming soon template to kick-start your project
// Tags: mix_design, punchy, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
// Version: 2.0.2
// Build Date: October 2018
// Last Update: December 2022
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: demo.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader
//  2. SVG Fallback
//  3. Chrome Smooth Scroll
//  4. Images Moving Ban
//  5. Smooth Scroll To Top
//  6. Morphing Objects
//  7. Mailchimp Subscribition Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader Start
  // --------------------------------------------- //
  // Logo Animate Out
  $('.loader__container').removeClass('white-shadow');
  var loadingLogo = anime({
    targets: '.loader__logo',
    scale: '0',
    opacity: 0,
    easing: 'easeInBack',
    duration: 600
  });
  // Morphing Transition Animation
  setTimeout(function(){
    var loading = anime({
      targets: '.loader',
      translateY: '-200vh',
      easing: 'linear',
      duration: 1300
    });
    var loadMorphing = anime({
      targets: '.loader-morphing-path',
      d: [
        { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
        { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
      ],
      easing: 'easeOutQuad',
      elasticity: 100,
      duration: 800,
      delay: 0
    });
    // Removing 'overflow: hidden' Property from <body>
    $('body').removeClass('overflow-hidden');
  },800);
  // --------------------------------------------- //
  // Loader End
  // --------------------------------------------- //

});

$(function() {

  // --------------------------------------------- //
  // SVG Fallback Start
  // --------------------------------------------- //
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };
  // --------------------------------------------- //
  // SVG Fallback End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Chrome Smooth Scroll Start
  // --------------------------------------------- //
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };
  // --------------------------------------------- //
  // Chrome Smooth Scroll End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Images Moving Ban Start
  // --------------------------------------------- //
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  // --------------------------------------------- //
  // Images Moving Ban End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Smooth Scroll To Top Start
  // --------------------------------------------- //
  var offset = 300,
      offset_opacity = 1200,
      scroll_top_duration = 500,
      $back_to_top = $('.to-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
  // --------------------------------------------- //
  // Smooth Scroll To Top End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Morphing Objects Start
  // --------------------------------------------- //
  var morphing = anime({
    targets: '#texture-path',
    d: [
      { value: 'M398,75C370.3,7.5,315.5-5.7,248,22s-90.7,92.5-63,160s118.5,90.7,186,63S425.7,142.5,398,75z' },
      { value: 'M398,75C370.3,7.5,315.5-5.7,248,22s-90.7,92.5-63,160s118.5,90.7,186,63S425.7,142.5,398,75z' },
      { value: 'M401,103C373.3,35.5,313.5-19.7,246,8s-122.7,109.5-95,177s89.5,104.7,157,77S428.7,170.5,401,103z' },
      { value: 'M399,93C371.3,25.5,317.5-8.7,250,19s-123.7,89.5-96,157s125.5,110.7,193,83S426.7,160.5,399,93z' },
    ],
    easing: 'easeOutQuad',
    duration: 6000,
    loop: true,
    autoplay: true
  });

  var morphing = anime({
    targets: '#radicalred-path',
    d: [
      { value: 'M467,47c0,67.4-18.6,147-86,147S205,157.4,205,90S253.6-68,321-68S467-20.4,467,47z' },
      { value: 'M451,76c0,67.4-62.6,116-130,116S177,124.4,177,57S239.6-76,307-76S451,8.6,451,76z' },
      { value: 'M467,47c0,67.4-58.6,156-126,156S210,123.4,210,56S254.6-77,322-77S467-20.4,467,47z' },
    ],
    easing: 'easeOutQuad',
    duration: 6000,
    loop: true,
    autoplay: true
  });

  var morphing = anime({
    targets: '#intro-bottom-path',
    d: [
      { value: 'M0,0c0,0-14,59,12,57s43-44,74-42s66,56,123,55s25-53,101-44s80,57,153,62s176.5-39.5,223.5-46.5S796,71,800,100c0-54,0-100,0-100H0z' },
      { value: 'M0,0c0,0,12,57,38,55s28-16,59-14s54-29,111-30s80,70,156,79s114-73,187-68s88.5,26.5,135.5,19.5S796,71,800,100c0-54,0-100,0-100H0z' },
      { value: 'M0,0c0,0,9.5,25.5,35.5,23.5s31-18,62-16s58,33,115,32s90-33,166-24s99,80,172,85s89-52,136-59S796,71,800,100c0-54,0-100,0-100H0z' },
    ],
    easing: 'easeOutQuad',
    duration: 9000,
    loop: true,
    autoplay: true
  });

  var morphing = anime({
    targets: '#subscribe-morphing-path',
    d: [
      { value: 'M496,273c0,127.6-53.4,223-181,223C86,496,2,365.6,2,238S108.4,5,236,5S496,99,496,273z' },
      { value: 'M496,280c0,127.6-154.4,212-282,212C-15,492,4,297.6,4,170S164.4,2,292,2S496,106,496,280z' },
      { value: 'M498,208c0,127.6-78.4,290-206,290C63,498,2,374.6,2,247S55.4,4,183,4S498,34,498,208z' },
    ],
    easing: 'easeOutQuad',
    duration: 9000,
    loop: true,
    autoplay: true
  });
  // --------------------------------------------- //
  // Morphing Objects End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Subscribition Form Start
  // --------------------------------------------- //
  $('.subscribe-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=b382fff780'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.subscribe__container').find('.form').addClass('is-hidden');
      $('.subscribe__container').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.subscribe__container').find('.subscription-ok').removeClass('is-visible');
        $('.subscribe__container').find('.form').delay(300).removeClass('is-hidden');
        $('.subscribe-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.subscribe__container').find('.form').addClass('is-hidden');
      $('.subscribe__container').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.subscribe__container').find('.subscription-error').removeClass('is-visible');
        $('.subscribe__container').find('.form').delay(300).removeClass('is-hidden');
        $('.subscribe-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Subscribition Form End
  // --------------------------------------------- //

});
