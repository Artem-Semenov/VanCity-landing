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

/* let numberDelta;
let drugNumberDelimeter;
let numberDelimeter;
let moveDrugDelimeter;
let index; 
 if (window.innerWidth < 641) {
  index = 0.85           //sliderLine speed index
  numberDelimeter = 3.4; // default sliderLine move Index
  moveDrugDelimeter = 8.4 // Drug move index
}
else */

let firstSwiper;

firstSwiper = new Swiper(".third-page-slider-line", {
  direction: "horizontal",
  // loop: true,
  speed: 500,
  /*  freeMode:  {
      enabled: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 10,
      momentumVelocityRatio: 1,
      momentum: true,

    }, */

  /*  mousewheel: {
    releaseOnEdges: true,
    sensitivity: 0.5,
    eventsTarget: ".block-with-decor",
  }, */
  /* mousewheel: {
    releaseOnEdges: true,
    eventsTarget: ".slider"
  }, */
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
      // centeredSlides: false,
      // loopFillGroupWithBlank: true,
    },
    640: {},
    1024: {
      spaceBetween: 80,
      // centeredSlides: false,
      slidesPerView: 1.35,
    },
    1300: {
      // centeredSlides: false,
      spaceBetween: 100,
      slidesPerView: 1.3,
    },
  },
});

// let y = document.querySelector('.center-trigger-2').getBoundingClientRect().top + window.scrollY

if (windowWidth > 1023) {
  //scrolling down
  firstSwiper.on("activeIndexChange", function (e) {
    // console.log(sliderWrapper.getBoundingClientRect().top, window.scrollY);
    let index = firstSwiper.activeIndex;
    let previousIndex = firstSwiper.previousIndex;
    console.log(index);
    console.log(previousIndex);

    if (index === 0 && previousIndex === 3) {
    } else if (
      index ===
      0 /*  && !isInView(document.querySelector('.center-trigger-1')) */
    ) {
      // document.getElementById("trigger-1").scrollIntoView();
      window.scroll({
        top:
          document.querySelector(".center-trigger-1").getBoundingClientRect()
            .top +
          window.scrollY -
          50,
      });
    } else if (
      index === 1 &&
      previousIndex <
        index /* && !isInView(document.querySelector('.center-trigger-2')) */
    ) {
      window.scroll({
        top:
          document.querySelector(".center-trigger-2").getBoundingClientRect()
            .top +
          window.scrollY -
          (windowHeight - 50),
      });
      //  document.getElementById("trigger-2").scrollIntoView();
    } else if (
      index === 1 &&
      previousIndex >
        index /* && !isInView(document.querySelector('.center-trigger-2')) */
    ) {
      window.scroll({
        top:
          document.querySelector(".center-trigger-2").getBoundingClientRect()
            .top +
          window.scrollY -
          50,
      });
      //  document.getElementById("trigger-2").scrollIntoView();
    } else if (
      index === 2 &&
      previousIndex <
        index /* && !isInView(document.querySelector('.center-trigger-3')) */
    ) {
      window.scroll({
        top:
          document.querySelector(".center-trigger-3").getBoundingClientRect()
            .top +
          window.scrollY -
          (windowHeight - 50),
      });

      //  document.getElementById("trigger-3").scrollIntoView();
    } else if (
      index === 2 &&
      previousIndex >
        index /* && !isInView(document.querySelector('.center-trigger-3')) */
    ) {
      window.scroll({
        top:
          document.querySelector(".center-trigger-3").getBoundingClientRect()
            .top +
          window.scrollY -
          50,
      });

      //  document.getElementById("trigger-3").scrollIntoView();
    } else if (
      index ===
      3 /*&&  !isInView(document.querySelector('.center-trigger-4')) */
    ) {
      console.log("scrolling to trigger 4");
      // document.getElementById("trigger-4").scrollIntoView();
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
      // console.log('We have reached first trigger');
    } else if (isInView(document.querySelector(".center-trigger-2"))) {
      firstSwiper.slideTo(1, 1000);
      // console.log('We have reached second trigger');
    } else if (isInView(document.querySelector(".center-trigger-3"))) {
      firstSwiper.slideTo(2, 1000);
      // console.log('We have reached third trigger');
    } else if (isInView(document.querySelector(".center-trigger-4"))) {
      firstSwiper.slideTo(3, 1000);
      // console.log('We have reached fourth trigger');
    }
  });
}
