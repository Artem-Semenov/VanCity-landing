firstSwiper = new Swiper(".second-page-slider-line", {
  direction: "horizontal",
  speed: 500,
  grabCursor: true,
  scrollbar: {
    el: ".second-page-slider-scrollbar",
    draggable: true,
  },

  slidesPerView: 1.23,
  slideToClickedSlide: true,
  centeredSlides: false,
  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: 1.25,
    },
    640: {},
    1024: {
      spaceBetween: 80,
      slidesPerView: 1.35,
    },
    1300: {
      spaceBetween: 100,
      slidesPerView: 1.3,
    },
  },
});

const firstSubSwiper = new Swiper(".second-page-images-slider", {
  direction: "horizontal",
  speed: 500,
  // slideToClickedSlide: true,
  centeredSlides: true,
  simulateTouch: true,
  grabCursor: true,
  spaceBetween: 5,
  breakpoints: {
    320: {
      slidesPerView: 1.08,
    },
    370: {
      slidesPerView: 1.1,
    },
    380: {
      slidesPerView: 1.125,
    },
    390: {
      slidesPerView: 1.15,
    },
    410: {
      slidesPerView: 1.2,
    },
    450: {
      slidesPerView: 1.3,
    },
    480: {
      slidesPerView: 1.4,
    },
    640: {
      slidesPerView: 1.5,
    },
    1024: {
      spaceBetween: 15,
      slidesPerView: 1.53,
    },
    1300: {
      spaceBetween: 15,
      slidesPerView: 2,
    },
  },
});

firstSwiper.controller.control = firstSubSwiper;
firstSubSwiper.controller.control = firstSwiper;

