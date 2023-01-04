
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
      slidesPerView: 1.07,
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


// const sliderWrapper = document.getElementById("fixed-slider-wrapper");
// const sliderWrapperHeight = sliderWrapper.offsetHeight;


// if (windowWidth > 1024) {
//   //scrolling down
//   firstSwiper.on("activeIndexChange", function (e) {
//     // console.log(sliderWrapper.getBoundingClientRect().top, window.scrollY);
//     let index = firstSwiper.activeIndex;
//     let previousIndex = firstSwiper.previousIndex;
//     console.log(index);
//     console.log(previousIndex);

//     if (index === 0 && previousIndex === 3) {
//     } else if (
//       index ===
//       0 /*  && !isInView(document.querySelector('.center-trigger-1')) */
//     ) {
//       // document.getElementById("trigger-1").scrollIntoView();
//       window.scroll({
//         top: document.querySelector(".center-trigger-1").getBoundingClientRect().top +
//         window.scrollY - 50,
//       })
     
//     } else if (
//       index === 1 &&
//       previousIndex <
//         index /* && !isInView(document.querySelector('.center-trigger-2')) */
//     ) {
//       window.scroll({
//         top:
//           document.querySelector(".center-trigger-2").getBoundingClientRect()
//             .top +
//           window.scrollY -
//           (windowHeight - 50),
//       });
//       //  document.getElementById("trigger-2").scrollIntoView();
//     } else if (
//       index === 1 &&
//       previousIndex >
//         index /* && !isInView(document.querySelector('.center-trigger-2')) */
//     ) {
//       window.scroll({
//         top:
//           document.querySelector(".center-trigger-2").getBoundingClientRect()
//             .top +
//           window.scrollY -
//           50,
//       });
//       //  document.getElementById("trigger-2").scrollIntoView();
//     } else if (
//       index === 2 &&
//       previousIndex <
//         index /* && !isInView(document.querySelector('.center-trigger-3')) */
//     ) {
//       window.scroll({
//         top:
//           document.querySelector(".center-trigger-3").getBoundingClientRect()
//             .top +
//           window.scrollY -
//           (windowHeight - 50),
//       });

//       //  document.getElementById("trigger-3").scrollIntoView();
//     } else if (
//       index === 2 &&
//       previousIndex >
//         index /* && !isInView(document.querySelector('.center-trigger-3')) */
//     ) {
//       window.scroll({
//         top:
//           document.querySelector(".center-trigger-3").getBoundingClientRect()
//             .top +
//           window.scrollY -
//           50,
//       });

//       //  document.getElementById("trigger-3").scrollIntoView();
//     } else if (
//       index ===
//       3 /*&&  !isInView(document.querySelector('.center-trigger-4')) */
//     ) {
//       console.log("scrolling to trigger 4");
//       // document.getElementById("trigger-4").scrollIntoView();
//       window.scroll({
//         top:
//           document.querySelector(".center-trigger-4").getBoundingClientRect()
//             .top +
//           window.scrollY -
//           (windowHeight - 50),
//       });
//     }
//   });
// }




/* document.addEventListener("scroll", function (e) {
  let blockPosition = sliderWrapper.getBoundingClientRect().top;
  //determine slider position
  if (blockPosition < 100 && blockPosition > -sliderWrapperHeight) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
 
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
}); */
