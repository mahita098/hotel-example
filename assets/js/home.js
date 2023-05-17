


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".hamburger").on("click", function(){
  $(this).toggleClass("active");
  $(".menu-item").toggleClass("active");
})

$(document).ready(function(){
  $("select").niceSelect();
})


var swiper = new Swiper(".theSwiper", {

  spaceBetween: 75,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    750: {
      slidesPerView: 2,
      spaceBetween: 75,
    },


  },
});