/**
 * SLIDER
 */

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal", //vertical..
  // loop: true,
  speed: 500,
  // If we need pagination
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  slidesPerView: 1.23,
  slideToClickedSlide: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1.23,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 1.7,
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 2.72,
      spaceBetween: 20,
    },
  },
});

/**
 * PHOTOS SECTION - MOVE ON SCROLL
 */

const photosBlock = document.getElementById("images-block-photos");
const moovingBlocks = document.querySelectorAll(".mooving-block");
const blockHeight = photosBlock.offsetHeight;
let deviceDelta = 40;
if (window.innerWidth > 1024) {
  deviceDelta = 70;
}
const delimeter = blockHeight / deviceDelta;

document.addEventListener("scroll", function (e) {
  let blockPosition = photosBlock.getBoundingClientRect().top;
  console.log(blockPosition);
  num = blockPosition;
  if (blockPosition > blockHeight) {
    num = blockHeight;
  } else if (blockPosition < 0) {
    num = 1;
  }
  moovingBlocks.forEach(
    (el) => (el.style.top = `${deviceDelta - num / delimeter}px`)
  );
});
