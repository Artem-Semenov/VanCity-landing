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

/**
 * FULL SCREEN SLIDER
 */
if (window.innerWidth > 1023) {


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let index = +entry.target.dataset.id.slice(-1);
    if (entry.isIntersecting) {
      if (index === 1) {
        document
          .querySelectorAll(".fixed-block:not(.fixed-block.block-1)")
          .forEach((el) => {
            fadeOut(el);
          });
        if (document.querySelector(".fixed-block.block-1").style.opacity < 1) {
          fadeIn(document.querySelector(".fixed-block.block-1"), "flex");
        }
      }
      if (index === 2) {
        document
          .querySelectorAll(".fixed-block:not(.fixed-block.block-2)")
          .forEach((el) => {
            fadeOut(el);
          });
        fadeIn(document.querySelector(".fixed-block.block-2"), "flex");
      }
      if (index === 3) {
        document
          .querySelectorAll(".fixed-block:not(.fixed-block.block-3)")
          .forEach((el) => {
            fadeOut(el);
          });
        fadeIn(document.querySelector(".fixed-block.block-3"), "flex");
      }
      if (index === 4) {
        document
          .querySelectorAll(".fixed-block:not(.fixed-block.block-4)")
          .forEach((el) => {
            fadeOut(el);
          });
        if (document.querySelector(".fixed-block.block-4").style.opacity < 1) {
          fadeIn(document.querySelector(".fixed-block.block-4"), "flex");
        }
      }
    }
  });
});

observer.observe(document.querySelector(".center-trigger-1"));
observer.observe(document.querySelector(".center-trigger-2"));
observer.observe(document.querySelector(".center-trigger-3"));
observer.observe(document.querySelector(".center-trigger-4"));
}