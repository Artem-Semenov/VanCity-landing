/**
 * THIRD PAGE HORIZONTAL SLIDER
 */

const sliderWrapper = document.getElementById("fixed-slider-wrapper");

const sliderWrapperHeight = sliderWrapper.offsetHeight;

const drug = document.getElementById("slider-drug");

const moovingIndex = null;

const sliderLine = document.getElementById('slider-line');

const paragraphs = document.querySelectorAll('.lighten-text')

const sliderDrugLine = document.getElementById('slider-drug-line')


const sliderContentBlock = document.getElementById('third-page-bottom-content');

const firstBlock = document.getElementById('slider-block-1')

const activeTextDelimeter = window.innerWidth / 2;

let numberDelta;
let drugNumberDelimeter;
let numberDelimeter;
let moveDrugDelimeter;
let index;
 if (window.innerWidth < 641) {
  index = 0.85           //sliderLine speed index
  numberDelimeter = 3.4; // default sliderLine move Index
  moveDrugDelimeter = 8.4 // Drug move index
}
else if (window.innerWidth < 1024) {
  index = 0.5
  numberDelimeter = 2;
  moveDrugDelimeter = 4.1
}
else if (window.innerWidth < 1300) {
  index = 0.3
  numberDelimeter = 1.35;
  moveDrugDelimeter = 2.5
}
else  {
  index = 0.3
  numberDelimeter = 1.2;
  moveDrugDelimeter = 2.15
} 

numberDelta = sliderContentBlock.offsetWidth - firstBlock.offsetWidth
drugNumberDelimeter = sliderWrapperHeight / (sliderDrugLine.offsetWidth - drug.offsetWidth);


let number;
let drugNumber;



document.addEventListener("scroll", function (e) {
  let blockPosition = sliderWrapper.getBoundingClientRect().top
  if (blockPosition > 0)  {
    console.log('we are before slider');  
    number = numberDelta;
    drugNumber = 0;
 }
 else if (blockPosition < -(sliderWrapperHeight - sliderWrapperHeight /4)) {
  console.log('We are under slider');
  drugNumber = -(sliderWrapperHeight / drugNumberDelimeter);
  number = numberDelta -(sliderWrapperHeight / numberDelimeter)
 } else {
 drugNumber = blockPosition / moveDrugDelimeter
 number = blockPosition / (numberDelimeter - index) + numberDelta
 }
 
// console.log(number);
sliderLine.style.left = `${number}px`;
drug.style.marginLeft =`${-drugNumber}px`

if (number > numberDelta - activeTextDelimeter) {
paragraphs.forEach(el => el.classList.remove('active'))
paragraphs[0].classList.add('active')
}else if (number > -activeTextDelimeter) {
paragraphs.forEach(el => el.classList.remove('active'))
paragraphs[1].classList.add('active')
} else if (number > -activeTextDelimeter * 2) {
paragraphs.forEach(el => el.classList.remove('active'))
paragraphs[2].classList.add('active')
}else  {
paragraphs.forEach(el => el.classList.remove('active'))
paragraphs[3].classList.add('active')
}
// console.log(paragraphs);

});
/**
 * SLIDER
 */

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  // loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
// freeMode: true,
/* mousewheel: {
  releaseOnEdges: true,
  eventsTarget: ".slider"
}, */
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
 * PHOTOS SECTION - PHOTOS MOOVING ON SCROLL
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


/** 
 * SMOOTH SCROLL
 */
class SmoothAnchorScroll {
  init() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    for (const anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    }
  }
}

const smoothAnchorScroll = new SmoothAnchorScroll();
smoothAnchorScroll.init();

/** 
 * MOBILE BURGER
 */
const button = document.getElementById('burger-button')

button.addEventListener('click', function(e) {

})