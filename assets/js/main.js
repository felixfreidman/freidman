"use strict";

// $(window).on("load", function() {
//     $(window)
//         .scroll(function() {
//             var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//             $(".fade").each(function() {
//                 /* Check the location of each desired element */
//                 var objectBottom = $(this).offset().top + $(this).outerHeight();
//                 /* If the element is completely within bounds of the window, fade it in */
//                 if (objectBottom <= windowBottom) {
//                     //object comes into view (scrolling down)
//                     if ($(this).css("opacity") == 0) {
//                         $(this).fadeTo(500, 1);
//                     }
//                 } else {
//                     //object goes out of view (scrolling up)
//                     if ($(this).css("opacity") == 1) {
//                         $(this).fadeTo(500, 0);
//                     }
//                 }
//             });
//         })
//         .scroll(); //invoke scroll-handler on page-load
// });
AOS.init({
  startEvent: "DOMContentLoaded"
}); // // header-swiper
// var swiper = new Swiper('#main-swiper', {
//   fadeEffect: {
//     crossFade: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next--header',
//     prevEl: '.swiper-button-prev--header',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   loop: true,
//   // autoplay: {
//   //   delay: 2300,
//   // },
//   fadeEffect: {
//     crossFade: true
//   },
//   speed: 800,
//   watchSlidesProgress: true,
//   watchVisibility: true,
//   disableOnInteraction: true,
// });