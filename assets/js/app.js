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
      // BOTTOM SHEET MENU
      const hamburger = document.getElementById('hamburger');
      const nav = document.querySelector('nav');

      // Toggle menu on hamburger click
      hamburger.addEventListener('click', function () {
         hamburger.classList.toggle('active');
         nav.classList.toggle('active');
         
         // Position hamburger in bottom right when navbar is open
         if (hamburger.classList.contains('active')) {
            hamburger.style.left = 'auto';
            hamburger.style.right = '20px';
         } else {
            hamburger.style.left = '20px';
            hamburger.style.right = 'auto';
         }
      });

      // Close menu when clicking on a nav link
      document.querySelectorAll('.nav_link a').forEach(link => {
         link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            hamburger.style.left = '20px';
            hamburger.style.right = 'auto';
         });
      });

      // Close menu when clicking outside
      document.addEventListener('click', function (event) {
         const isClickInside = nav.contains(event.target) || hamburger.contains(event.target);
         if (!isClickInside && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            hamburger.style.left = '20px';
            hamburger.style.right = 'auto';
         }
      });

      $(window).scroll(function () {
         if ($(window).scrollTop() >= 500) {
            $('#hamburger').fadeIn();
         } else {
            $('#hamburger').fadeOut();
         }
   });
   }

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
      "assets/img/detailing/detailing24.jpg",
      "assets/img/cars/car2.png",
      "assets/img/cars/car86.jpg",
      "assets/img/detailing/detailing12.jpg",
      "assets/img/cars/car19.jpg",
      "assets/img/detailing/detailing11.jpg",
   ]
   // Précharge toutes les images et lance le carousel après chargement
   const preloadImages = (images, callback) => {
      let loaded = 0;
      const total = images.length;
      const cache = [];
      images.forEach((src, i) => {
         const img = new Image();
         img.onload = () => {
            loaded++;
            cache[i] = img;
            if (loaded === total) callback(cache);
         };
         img.onerror = () => {
            loaded++;
            cache[i] = null;
            if (loaded === total) callback(cache);
         };
         img.src = src;
      });
   };

   const backgroundSlideOptimized = (images, container, step) => {
      let index = 0;
      const changeBackground = () => {
         if (images[index]) {
            container.style.backgroundImage = `url(${images[index].src})`;
         }
         index = (index + 1) % images.length;
         setTimeout(() => requestAnimationFrame(changeBackground), step);
      };
      changeBackground();
   };

   preloadImages(pictures_home, (preloaded) => {
      // Affiche la première image sans flash
      if (preloaded[0]) {
         home_container.style.backgroundImage = `url(${preloaded[0].src})`;
      }
      backgroundSlideOptimized(preloaded, home_container, 5000);
   });

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
const backgroundSlideOptimized = (images, container, step) => {
   let index = 0;
   const changeBackground = () => {
      container.style.backgroundImage = `url(${images[index]})`;
      index = (index + 1) % images.length;
      setTimeout(() => requestAnimationFrame(changeBackground), step);
   };
   changeBackground();
};

// CERTIFICATION
document.addEventListener("DOMContentLoaded", () => {
   const sliders = document.querySelectorAll(".emotions-slider");

   if (!sliders.length) return;

   const list = [];

   sliders.forEach((element) => {
      const [slider, prevEl, nextEl, pagination] = [
         element.querySelector(".swiper"),
         element.querySelector(".slider-nav__item_prev"),
         element.querySelector(".slider-nav__item_next"),
         element.querySelector(".slider-pagination")
      ];

      list.push(
         new Swiper(slider, {
            slidesPerView: "auto",
            spaceBetween: 20,
            speed: 600,
            observer: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            centeredSlides: true,
            initialSlide: 1,
            autoplay: {
               delay: 3000,
               disableOnInteraction: false
            },
            navigation: {
               nextEl,
               prevEl,
               disabledClass: "disabled"
            },
            pagination: {
               el: pagination,
               type: "bullets",
               modifierClass: "slider-pagination",
               bulletClass: "slider-pagination__item",
               bulletActiveClass: "active",
               clickable: true
            },
            breakpoints: {
               768: {
                  spaceBetween: 40
               }
            }
         })
      );
   });
});