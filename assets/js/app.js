$(document).ready(function () {

   "use strict";

   // Initiate JS animate scroll screen
   AOS.init({
      once: true,
      debounceDelay: 50,
      throttleDelay: 99
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

      // Vérifiez si l'utilisateur a déjà vu la modal
      const hasSeenModal = localStorage.getItem('hasSeenModal');
      if (!hasSeenModal) {
         // Si la modal n'a pas encore été vue, affichez-la
         $('.modal').removeClass('hiden_modal');

         $('.close').click(function () {
            $('.modal').addClass('hiden_modal');
            localStorage.setItem('hasSeenModal', 'true');
         });
      
         $('.modal').click(function (e) {
            if (e.target == e.currentTarget) {
               $(this).addClass('hiden_modal');
               localStorage.setItem('hasSeenModal', 'true');
            }
         });

      }

   }
   // $('.nav_li').click(function () {
   //    var li = $(this).attr('data-tab');
   //    $('.nav_li').children().removeClass('active');
   //    $('#' + li).addClass('active');
   // });

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

   // PRELOAD PICTURES
   const preloadImages = (images) => {
      images.slice(0, 2).forEach((src) => { // Charge uniquement les 2 premières images
         const img = new Image();
         img.src = src;
      });
   };

   // HOME BACKGROUND CAROUSEL
   const home_container = document.getElementById("home");
   const pictures_home = [
      "assets/img/detailing/detailing24.jpg",
      "assets/img/cars/car2.png",
      "assets/img/cars/car86.jpg",
      "assets/img/detailing/detailing12.jpg",
      "assets/img/cars/car19.jpg",
      "assets/img/detailing/detailing11.jpg",
   ]
   const backgroundSlideOptimized = (images, container, step) => {
      let index = 0;
      const changeBackground = () => {
         container.style.backgroundImage = `url(${images[index]})`;
         index = (index + 1) % images.length;
         setTimeout(() => requestAnimationFrame(changeBackground), step);
      };
      changeBackground();
   };
   preloadImages(pictures_home);
   backgroundSlideOptimized(pictures_home, home_container, 5000);

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

});const backgroundSlideOptimized = (images, container, step) => {
   let index = 0;
   const changeBackground = () => {
      container.style.backgroundImage = `url(${images[index]})`;
      index = (index + 1) % images.length;
      setTimeout(() => requestAnimationFrame(changeBackground), step);
   };
   changeBackground();
};