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
        top: document.querySelector(".center-trigger-1").getBoundingClientRect().top +
        window.scrollY - 50,
      })
     
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


