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
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader
//  2. Typed.js Plugin Settings
//  3. Fullpage.js Plugin Settings
//  4. KBW-Countdown
//  5. Vegas Kenburns
//  6. Mailchimp Notify Form
//  7. Contact Form
//  8. Write-a-Line Form
//  9. Homescreen Morphing Objects
//  10. Inner Sections Morphing Objects
//  11. Smooth Scroll To Top
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
  $(".loader__logo").removeClass('slideInDown').addClass('fadeOutUp');
  $(".loader__caption").removeClass('slideInUp').addClass('fadeOutDown');

  // Morphing Transition Animation
  setTimeout(function(){
    var loaderSlogan = $(".loader__slogan");
    // If there is Slogan - Morphing Transition Animation After Slogan
    if(loaderSlogan.length){
      var typedLoader = new Typed('#slogan', {
        stringsElement: '#slogan-strings',
        typeSpeed: 40,
        onComplete: function(self) {
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
              duration: 1000,
              delay: 0
            });
          },1000);
        },
      });

    // If there is No Slogan - Morphing Transition Animation After Logo Animate Out
    } else {
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
    }
    // Removing 'overflow: hidden' Property from <body>
    $('body').removeClass('overflow-hidden');
  },600);
  // --------------------------------------------- //
  // Loader End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Typed.js Plugin Settings Start
  // --------------------------------------------- //
  var animatedHeadline = $(".animated-headline");
  if(animatedHeadline.length){
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      loop: true,
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 1600
    });
  }
  // --------------------------------------------- //
  // Typed.js Plugin Settings End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // Fullpage.js Plugin Settings Start
  // --------------------------------------------- //
  var fullpageNormalScroll = $('#fullpage-scroll'),
      fullpage             = $('#fullpage');
      if (fullpage.length) {
        fullpage.fullpage({
          anchors: ['main', 'about', 'features', 'portfolio', 'blockquote', 'contact'],
          menu: '#menu',
          responsiveWidth: 1200,
          navigation: false,
      		verticalCentered: false,
          afterResponsive: function(isResponsive) {}
        });
      };

      if (fullpageNormalScroll.length) {
        fullpageNormalScroll.fullpage({
          anchors: ['main', 'about', 'features', 'blockquote', 'portfolio', 'contact'],
          menu: '#menu',
          responsiveWidth: 1183,
          navigation: false,
          autoScrolling: false,
          fitToSection: false,
    		  verticalCentered: false,
          loopBottom: false,
        });
      };
  // --------------------------------------------- //
  // Fullpage.js Plugin Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2023, 5, 19), format: 'D'});
  $('#countdown-large').countdown({until: $.countdown.UTCDate(+10, 2023, 5, 19), format: 'DHMS'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 8000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1000x1200/242424/7a7a7a" },
        { src: "https://dummyimage.com/1000x1200/242424/7a7a7a" },
        { src: "https://dummyimage.com/1000x1200/242424/7a7a7a" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  }

  var bgndKenburnsFull = $('#bgndKenburnsFull');
  if(bgndKenburnsFull.length){
    bgndKenburnsFull.vegas({
      timer: false,
      delay: 8000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1920x1080/242424/7a7a7a" },
        { src: "https://dummyimage.com/1920x1080/242424/7a7a7a" },
        { src: "https://dummyimage.com/1920x1080/242424/7a7a7a" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  }
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.contact').find('.reply-group').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Write-a-Line Form Start
  // --------------------------------------------- //
  $("#writealine-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.writealine').find('.form').addClass('is-hidden');
      $('.writealine').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.writealine').find('.reply-group').removeClass('is-visible');
        $('.writealine').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Write-a-Line Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Homescreen Morphing Objects Start
  // --------------------------------------------- //
  // First Demo Morphing Objects
  var morphing = anime({
    targets: '#home-morphing-path-2',
    d: [
      { value: 'M1052.2,541.3c0,218.7-387.1,333.1-624.3,333.1S10.6,544.9,10.6,326.2S579.5,34,816.6,34S1052.2,322.6,1052.2,541.3z' },
      { value: 'M1072.6,488.4c0,218.7-176.7,393.7-413.8,393.7S36.9,765.5,36.9,546.8S395.4,11.9,632.5,11.9S1072.6,269.7,1072.6,488.4z' },
      { value: 'M1027.1,447.6c0,218.7-248.4,432.3-485.5,432.3S19,633.1,19,414.5S357.1,18.5,594.2,18.5S1027.1,228.9,1027.1,447.6z' },
      { value: 'M1070.2,472.6c0,218.7-317.4,389.1-554.5,389.1S9.1,800.7,9.1,582.1S195.7,13,432.8,13S1070.2,253.9,1070.2,472.6z' },
    ],
    easing: 'easeOutQuad',
    duration: 9000,
    loop: true,
    autoplay: true
  });
  var morphing = anime({
    targets: '#home-morphing-path-1',
    d: [
      { value: 'M1009.6,511.6c0,218.7-263.4,380.6-500.5,380.6S52.6,623.8,52.6,405.1S370.3,18.5,607.4,18.5S1009.6,292.9,1009.6,511.6z' },
      { value: 'M1062.1,502.6c0,218.7-239.9,355.5-477,355.5S43.6,637.3,43.6,418.6S480.2,39,717.3,39S1062.1,283.9,1062.1,502.6z' },
      { value: 'M1022.4,500.3c0,218.7-243.7,379.6-480.8,379.6S19,633.1,19,414.5S238.5,45.1,475.6,45.1S1022.4,281.6,1022.4,500.3z' },
      { value: 'M1009.6,511.6c0,218.7-263.4,380.6-500.5,380.6S26.7,626.5,26.7,407.8S370.3,18.5,607.4,18.5S1009.6,292.9,1009.6,511.6z' },
    ],
    easing: 'easeOutQuad',
    duration: 9000,
    loop: true,
    autoplay: true
  });

  // Side morphing path for desktop
  var morphing = anime({
    targets: '#main-side-path-desktop',
    d: [
      { value: 'M0,0c0,0,34,29,34,52s-24,21-24,54s12,35,17,63s27,40,27,72s-42,49-42,93s22,51,22,103c0,42-20,79-19,101c1.2,26-15,62-15,62V0z' },
      { value: 'M0,0c0,0,54,25,54,48s-39,25-39,58s17,38,22,66s-26,36-26,68s33,62,33,106s-32,51-32,103c0,42,31,72,32,94c1.2,26-44,57-44,57V0z' },
      { value: 'M0,0c0,0,36,30,36,53s-26,39-26,72s47,53,52,81s-31,38-31,70s31,67,31,111s-45,58-45,110c0,42,18,39,19,61c1.2,26-36,42-36,42V0z' },
      { value: 'M0,0c0,0,28,21,28,44s-11,40-11,73s25,45,30,73s-29,53-29,85s64,36,64,80s-61,87-61,139c0,42,23,41,24,63c1.2,26-45,43-45,43V0z' },
    ],
    easing: 'easeOutQuad',
    duration: 9000,
    loop: true,
    autoplay: true
  });

  // Side morphing path for mobile
  var morphing = anime({
    targets: '#main-side-path-mobile',
    d: [
      { value: 'M600,0c0,0-27,28-50,28s-30,42-63,42s-57-49-85-44s-36,22-68,22s-32-17-76-17s-61-14-113-14c-42,0-68,17-90,18C29,36.2,0,0,0,0H600z' },
      { value: 'M600,0c0,0-25,54-48,54s-29-28-62-28s-43,12-71,17s-62-27-94-27s-48,54-92,54s-52-56-104-56c-42,0-50,29-72,30C31,45.2,0,0,0,0H600z' },
      { value: 'M600,0c0,0-30,36-53,36s-45-10-78-10s-47,31-75,36s-38-31-70-31s-67,31-111,31s-57-36-109-36c-42,0-40,9-62,10C16,37.2,0,0,0,0H600z' },
      { value: 'M600,0c0,0-21,28-44,28s-40-11-73-11s-45,25-73,30s-53-29-85-29s-36,64-80,64s-87-61-139-61c-42,0-41,23-63,24C17,46.2,0,0,0,0H600z' },
    ],
    easing: 'easeOutQuad',
    duration: 9000,
    loop: true,
    autoplay: true
  });

  // Bottom morphing path
  var morphing = anime({
    targets: '#bottom-path',
    d: [
      { value: 'M0,200c0,0-14-59,12-57s43,44,74,42s66-56,123-55s25,53,101,44s80-57,153-62s176.5,39.5,223.5,46.5S796,129,800,100c0,54,0,100,0,100H0z' },
      { value: 'M0,200c0,0,12-57,38-55s28,16,59,14s54,29,111,30s80-70,156-79s114,73,187,68s88.5-26.5,135.5-19.5S796,129,800,100c0,54,0,100,0,100H0z' },
      { value: 'M0,200c0,0,12-57,38-55s28,40,59,38s68-78,125-77s72,58,148,49s106,38,179,33s90.5-36.5,137.5-29.5S796,129,800,100c0,54,0,100,0,100H0z' },
      { value: 'M0,200c0,0,9.5-25.5,35.5-23.5s31,18,62,16s58-33,115-32s90,33,166,24s99-80,172-85s89,52,136,59S796,129,800,100c0,54,0,100,0,100H0z' },
    ],
    easing: 'easeOutQuad',
    duration: 9000,
    loop: true,
    autoplay: true
  });

  // Menu Button Morphing Object
  var menuDecoration = $(".menu-btn-morphing-object");
  if(menuDecoration.length){
    var morphing = anime({
      targets: '.menu-btn-morphing-path',
      d: [
        { value: 'M49.8,20.5c0,13.3-7.8,29.2-21.1,29.2S0.4,35.1,0.4,21.8S10.7,0.9,23.9,0.9S49.8,7.3,49.8,20.5z' },
        { value: 'M49.7,25.9c0,13.3-4.1,23.8-17.4,23.8S0.4,39.5,0.4,26.3S15.1,0.6,28.4,0.6S49.7,12.7,49.7,25.9z' },
        { value: 'M49.5,22.4c0,13.3-9.2,27-22.5,27S0.3,35.4,0.3,22.2S11,0.6,24.2,0.6S49.5,9.1,49.5,22.4z' },
        { value: 'M49.8,29.3c0,13.3-14.9,20.5-28.2,20.5S0.8,38.6,0.8,25.4S15.9,0.2,29.2,0.2S49.8,16,49.8,29.3z' },
      ],
      easing: 'easeOutQuad',
      duration: 9000,
      loop: true,
      autoplay: true
    });
  }
  // --------------------------------------------- //
  // Homescreen Morphing Objects End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Inner Sections Morphing Objects Settings Start
  // --------------------------------------------- //
  // Blockquote Morphing Object
  var quoteDecoration = $(".quote-morphing-object");
  if(quoteDecoration.length){
    var morphing = anime({
      targets: '.quote-morphing-path',
      d: [
        { value: 'M585.1,320c0,148.3-64.7,263-213.1,263S30,532.3,30,384S232.7,13.6,381,13.6S585.1,171.7,585.1,320z' },
        { value: 'M595,320c0,148.3-203.7,280-352,280S13.6,364.3,13.6,216S132.7,51,281,51S595,171.7,595,320z' },
        { value: 'M585.1,307c0,148.3-185.7,293-334.1,293S28.9,395.3,28.9,247S224.7,28,373,28S585.1,158.7,585.1,307z' },
        { value: 'M585.1,354.1c0,148.3-151.7,234-300,234S13.6,448.3,13.6,300S178.8,13.6,327.1,13.6S585.1,205.8,585.1,354.1z' }
      ],
      easing: 'easeOutQuad',
      duration: 9000,
      loop: true,
      autoplay: true
    });
  }
  // --------------------------------------------- //
  // Inner Sections Morphing Objects Settings End
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

});
