$(document).ready(function () {

   "use strict";

   // Initiate JS animate scroll screen
   AOS.init({
      once: true
   });

   // NAVBAR
   if (window.matchMedia("(min-width: 720px)").matches) {
      $(window).scroll(function () {
         if ($(window).scrollTop() >= 500) {
            $('nav').fadeIn();
         } else {
            $('nav').fadeOut();
         }
      });
   }
   if (window.matchMedia("(max-width: 720px)").matches) {

      document.addEventListener('swiped-right', function () {
         $('nav').animate({
            left: '0'
         });
      });

      $('nav').click(function () {
         $('nav').animate({
            left: '-1000px'
         });
      });

      document.addEventListener('swiped-left', function () {
         $('nav').animate({
            left: '-1000px'
         });
      });

      setTimeout(function () {
         $('#modal_nav').removeClass('hiden_modal');
      }, 10000);
   }
   $('.nav_li').click(function () {
      var li = $(this).attr('data-tab');
      $('.nav_li').children().removeClass('active');
      $('#' + li).addClass('active');
   });

   // MODAL
   $('.close').click(function () {
      $('.modal').addClass('hiden_modal');
   });

   $('.modal').click(function (e) {
      if (e.target == e.currentTarget) {
         $(this).addClass('hiden_modal');
      }
   });

   // SCROLL LINK
   $("a[href*='#']:not([href='#'])").click(function () {
      if (
         location.hostname == this.hostname &&
         this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
      ) {
         var anchor = $(this.hash);
         anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
         if (anchor.length) {
            $("html, body").animate({
               scrollTop: anchor.offset().top
            }, 1000);
         }
      }
   });

   // TOAST
   $(function () {
      var x = document.getElementById("toast")
      setTimeout(function () {
         x.className = x.className.replace("", "show");
      }, 3000);
      setTimeout(function () {
         x.className = x.className.replace("show", "");
      }, 11000);
   });

   $(function () {
      var x = document.getElementById("desc")
      setTimeout(function () {
         x.className = x.className.replace("", "show");
      }, 3550);
      setTimeout(function () {
         x.className = x.className.replace("show", "");
      }, 10200);
   });

   // HOME BACKGROUND CAROUSEL
   const home_container = document.getElementById("home");
   const pictures_home = [
      "assets/img/cars/car2.png",
      "assets/img/cars/car86.jpg",
      "assets/img/detailing/detailing12.jpg",
      "assets/img/cars/car19.jpg",
      "assets/img/detailing/detailing11.jpg",
   ]
   const backgroundSlide = (images, container, step) => {
      images.forEach((image, index) => (
         setTimeout(() => {
            container.style.backgroundImage = `url(${image})`
         }, step * (index + 1))
      ))
      setTimeout(() => backgroundSlide(images, container, step), step * images.length)
   }
   backgroundSlide(pictures_home, home_container, 5000);

   // BIOGRAPHIE PICTURES SLIDE
   const biographie_container = document.getElementById("img_bio");
   const pictures_biographie = [
      "assets/img/detailing/detailing2.jpg",
      "assets/img/detailing/detailing22.jpg",
      "assets/img/detailing/detailing35.jpg",
      "assets/img/detailing/detailing24.jpg",
      "assets/img/detailing/detailing8.jpg",
   ]
   backgroundSlide(pictures_biographie, biographie_container, 5000);

   // SCROLL-UP BUTTON
   $(window).scroll(function () {
      if ($(window).scrollTop() >= 500) {
         $('#back_top').fadeIn();
      } else {
         $('#back_top').fadeOut();
      }
   });

   // SCROLL BUTTON MAIN HOME PICTURE
   $('#scroll_button').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: $($('#biographie')).offset().top
      }, 1000, 'linear');
   });

   // JS ANIMATION
   $('.main-animate').fadeOut().delay(1000).fadeIn(1500);
   $('#scroll_button').fadeOut().delay(2000).fadeIn(1500);

});

// STOP MOUSE CLICK
$(document).bind('contextmenu', function (e) {
   e.stopPropagation();
   e.preventDefault();
   e.stopImmediatePropagation();
   return false;
});