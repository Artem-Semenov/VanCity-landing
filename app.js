const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal", //vertical..
  loop: true,
  speed: 500,
  // If we need pagination
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
