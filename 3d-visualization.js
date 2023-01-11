const firstSwiper = new Swiper(".slider-swiper-wrapper", {
  direction: "horizontal",
  // loop: true,
  // direction: 'vertical',
  speed: 500,
  // slideToClickedSlide: true,
  centeredSlides: true,
  simulateTouch: true,
  grabCursor: true,
  spaceBetween: 5,
  scrollbar: {
    enabled: true,
    el: ".visualization-slider-drug",
    draggable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.15,
    },
    370: {
      slidesPerView: 1.16,
    },
    380: {
      slidesPerView: 1.21,
    },
    390: {
      slidesPerView: 1.24,
    },
    400: {
      slidesPerView: 1.27,
    },
    410: {
      slidesPerView: 1.3,
    },
    450: {
      slidesPerView: 1.35,
    },
    480: {
      slidesPerView: 1.4,
    },
    640: {
      slidesPerView: 1.5,
    },
    1024: {
      direction: "vertical",
      spaceBetween: 15,
      slidesPerView: 1.53,
    },
    1300: {
      direction: "vertical",
      spaceBetween: 15,
      slidesPerView: 1.53,
    },
  },
});
