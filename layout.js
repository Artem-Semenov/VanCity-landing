const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
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
  centeredSlides: false,
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
 * hide header on fullScreen Slider
 */

const sliderWrapper = document.querySelector(".inview-hide-header");

const sliderWrapperHeight = sliderWrapper.offsetHeight;


const photosBlock = document.getElementById("images-block-photos");
const moovingBlocks = document.querySelectorAll(".mooving-block");
const blockHeight = photosBlock.offsetHeight;
let deviceDelta = 40;
if (window.innerWidth > 1024) {
  deviceDelta = 70;
}
const delimeter = blockHeight / deviceDelta;

document.addEventListener("scroll", function (e) {
//slider 

let sliderPosition = sliderWrapper.getBoundingClientRect().top;
//determine slider position
if (sliderPosition < 100 && sliderPosition > -sliderWrapperHeight) {
  header.classList.add("hide");
} else {
  header.classList.remove("hide");
}

//




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
 * MOBILE BURGER
 */
const openButton = document.getElementById("burger-button");
const closeButton = document.getElementById("burger-close-button");
const popup = document.getElementById("popup");

openButton.addEventListener("click", function (e) {
  popup.classList.add("active");
});

closeButton.addEventListener("click", function (e) {
  popup.classList.remove("active");
});

/**
 * CONTACT POP-UP
 */
const contactUsMenu = document.getElementById("contact-us-menu");
const contactButtons = document.querySelectorAll(".contact-button");
const contactCloseButton = document.getElementById("contact-us-close-button");

const careersMenu = document.getElementById("careers-menu");
const careersMenuButton = document.getElementById("careers-button");
const careersCloseButton = document.getElementById("careers-close-button");

careersMenuButton.addEventListener("click", () => {
  careersMenu.classList.add("active");
});
careersCloseButton.addEventListener("click", () => {
  careersMenu.classList.remove("active");
});
contactButtons.forEach((el) => {
  el.addEventListener("click", function (e) {
    contactUsMenu.classList.add("active");
  });
});

contactCloseButton.addEventListener("click", function (e) {
  contactUsMenu.classList.remove("active");
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
 * IS IN VIEW FUNCTION
 */

function isInView(el) {
  let bounding = el.getBoundingClientRect();
  if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
    return true;
  } else return false;
}

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}



