/**
 * THIRD PAGE HORIZONTAL SLIDER
 */

const drug = document.getElementById("slider-drug");

const moovingIndex = null;

const sliderLine = document.getElementById("slider-line");

const paragraphs = document.querySelectorAll(".lighten-text");

const sliderDrugLine = document.getElementById("slider-drug-line");

const sliderContentBlock = document.getElementById("third-page-bottom-content");

const firstBlock = document.getElementById("slider-block-1");

const activeTextDelimeter = window.innerWidth / 2;

const header = document.getElementById("header");

let firstSwiper;

firstSwiper = new Swiper(".third-page-slider-line", {
  direction: "horizontal",
  speed: 500,
  grabCursor: true,
  scrollbar: {
    el: ".third-page-slider-scrollbar",
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

if (windowWidth > 1023) {
  firstSwiper.on("activeIndexChange", function (e) {
    let index = firstSwiper.activeIndex;
    let previousIndex = firstSwiper.previousIndex;
    console.log(index);
    console.log(previousIndex);

    if (index === 0 && previousIndex === 3) {
    } else if (index === 0) {
      window.scroll({
        top:
          document.querySelector(".center-trigger-1").getBoundingClientRect()
            .top +
          window.scrollY -
          50,
      });
    } else if (index === 1 && previousIndex < index) {
      window.scroll({
        top:
          document.querySelector(".center-trigger-2").getBoundingClientRect()
            .top +
          window.scrollY -
          (windowHeight - 50),
      });
    } else if (index === 1 && previousIndex > index) {
      window.scroll({
        top:
          document.querySelector(".center-trigger-2").getBoundingClientRect()
            .top +
          window.scrollY -
          50,
      });
    } else if (index === 2 && previousIndex < index) {
      window.scroll({
        top:
          document.querySelector(".center-trigger-3").getBoundingClientRect()
            .top +
          window.scrollY -
          (windowHeight - 50),
      });
    } else if (index === 2 && previousIndex > index) {
      window.scroll({
        top:
          document.querySelector(".center-trigger-3").getBoundingClientRect()
            .top +
          window.scrollY -
          50,
      });
    } else if (index === 3) {
      console.log("scrolling to trigger 4");

      window.scroll({
        top:
          document.querySelector(".center-trigger-4").getBoundingClientRect()
            .top +
          window.scrollY -
          (windowHeight - 50),
      });
    }
  });

  document.addEventListener("scroll", function (e) {
    if (isInView(document.querySelector(".center-trigger-1"))) {
      firstSwiper.slideTo(0, 1000);
    } else if (isInView(document.querySelector(".center-trigger-2"))) {
      firstSwiper.slideTo(1, 1000);
    } else if (isInView(document.querySelector(".center-trigger-3"))) {
      firstSwiper.slideTo(2, 1000);
    } else if (isInView(document.querySelector(".center-trigger-4"))) {
      firstSwiper.slideTo(3, 1000);
    }
  });
}
