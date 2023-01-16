const firstSwiper = new Swiper(".slider-swiper-wrapper", {
  direction: "horizontal",
  speed: 500,
  centeredSlides: true,
  simulateTouch: true,
  grabCursor: true,
  initialSlide: 1,
  spaceBetween: 5,
  scrollbar: {
    enabled: true,
    el: ".visualization-slider-drug",
    draggable: true,
  },
  breakpoints: {
    320: {
      direction: 'horizontal',
      slidesPerView: 1.15,
    },
    370: {
      direction: 'horizontal',
      slidesPerView: 1.16,
    },
    380: {
      direction: 'horizontal',
      slidesPerView: 1.21,
    },
    390: {
      direction: 'horizontal',
      slidesPerView: 1.24,
    },
    400: {
      direction: 'horizontal',
      slidesPerView: 1.27,
    },
    410: {
      direction: 'horizontal',
      slidesPerView: 1.3,
    },
    450: {
      direction: 'horizontal',
      slidesPerView: 1.35,
    },
    480: {
      direction: 'horizontal',
      slidesPerView: 1.4,
    },
    640: {
      direction: 'horizontal',
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
