/**
 * THIRD PAGE HORIZONTAL SLIDER
 */

const sliderWrapper = document.getElementById("fixed-slider-wrapper");

const sliderWrapperHeight = sliderWrapper.offsetHeight;

const drug = document.getElementById("slider-drug");

const moovingIndex = null;

const sliderLine = document.getElementById("slider-line");

const paragraphs = document.querySelectorAll(".lighten-text");

const sliderDrugLine = document.getElementById("slider-drug-line");

const sliderContentBlock = document.getElementById("third-page-bottom-content");

const firstBlock = document.getElementById("slider-block-1");

const activeTextDelimeter = window.innerWidth / 2;

const header = document.getElementById("header");

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

let numberDelta;
let drugNumberDelimeter;
let numberDelimeter;
let moveDrugDelimeter;
let index;
/*  if (window.innerWidth < 641) {
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
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1.8,
    },
    640: {},
    1024: {
      spaceBetween: 80,
      slidesPerView: 2,
    },
    1300: {
      spaceBetween: 100,
      slidesPerView: 2,
    },
  },
});

// let y = document.querySelector('.center-trigger-2').getBoundingClientRect().top + window.scrollY

if (windowWidth > 1024) {
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
      document.querySelector(".center-trigger-1").getBoundingClientRect().top +
        window.scrollY -
        (windowHeight - 50);
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

  //scrolling up
  /* firstSwiper.on("slidePrevTransitionStart", function (e) {
  // console.log(sliderWrapper.getBoundingClientRect().top, window.scrollY);
  let index = firstSwiper.activeIndex;
  console.log(index);

  if (
    index === 0   && !isInView(document.querySelector('.center-trigger-1')) 
  ) {window.scroll({
    top:  document.querySelector('.center-trigger-1').getBoundingClientRect().top + window.scrollY - 50
  })
    
    // document.getElementById("trigger-1").scrollIntoView();
  } else if (
    index === 1  && !isInView(document.querySelector('.center-trigger-2')) 
  ) {
    window.scroll({
      top:  document.querySelector('.center-trigger-2').getBoundingClientRect().top + window.scrollY - 50
    })
    //  document.getElementById("trigger-2").scrollIntoView();
  } else if (
    index === 2 && !isInView(document.querySelector('.center-trigger-3')) 
  ) {
    window.scroll({
      top: document.querySelector('.center-trigger-3').getBoundingClientRect().top + window.scrollY - 50
    })

    //  document.getElementById("trigger-3").scrollIntoView();
  } else if (
    index === 3 &&  !isInView(document.querySelector('.center-trigger-4')) 
  ) {
    window.scroll({
      top:  document.querySelector('.center-trigger-4').getBoundingClientRect().top + window.scrollY - 50
    })
    // document.getElementById("trigger-4").scrollIntoView();
  }
});
 */

  // console.log(document.querySelector('.center-trigger-2').getBoundingClientRect().top)
  function isInView(el) {
    let bounding = el.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      return true;
    } else return false;
  }

  /* if (window.innerWidth > 1024) { */

  document.addEventListener("scroll", function (e) {
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

    /*    let blockPosition = sliderWrapper.getBoundingClientRect().top
   //determine slider position
  if (blockPosition < 0 && blockPosition > -sliderWrapperHeight) {
header.classList.add('hide')
// console.log('We are in slider');
blockPosition > - (sliderWrapperHeight / 8) ? firstSwiper.slideTo(0, 1000) :
blockPosition > - (sliderWrapperHeight / 3) ? firstSwiper.slideTo(1, 1000) :
blockPosition > - (sliderWrapperHeight / 1.5) ? firstSwiper.slideTo(2, 1000) :
firstSwiper.slideTo(3,1000);
  } else {
    header.classList.remove('hide')
  }
  }) */
  });
}
/* 
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

}); */
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
    enabled: true,
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
      spaceBetween: 5,
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
  // console.log(firstSwiper.activeIndex);
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
          firstSwiper.disable();
          setTimeout(() => {
            firstSwiper.enable();
            firstSwiper.slideTo(0, 1000);
          }, 1000);
          window.scroll({
            top: 0,
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
const button = document.getElementById("burger-button");

button.addEventListener("click", function (e) {});
