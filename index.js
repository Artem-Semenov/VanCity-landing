const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let firstSwiper;
/**
 * IS IN VIEW FUNCTION
 */

function isInView(el) {
  let bounding = el.getBoundingClientRect();
  if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
    return true;
  } else return false;
}

/**
 * Fade in - Fade out functions
 */
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

/** layout js */

function layout() {
  /**
   * SLIDER
   */

  const swiper = new Swiper(".layout-swiper", {
    direction: "horizontal",
    speed: 500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      enabled: true,
      el: ".layout-swiper-scrollbar",
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
    document.body.classList.add("scroll-off");
  });

  closeButton.addEventListener("click", function (e) {
    popup.classList.remove("active");
    document.body.classList.remove("scroll-off");
  });

  /**
   * CONTACT POP-UP // CAREERS POP-UP
   */
  const contactUsMenu = document.getElementById("contact-us-menu");
  const contactButtons = document.querySelectorAll(".contact-button");
  const contactCloseButton = document.getElementById("contact-us-close-button");

  const careersMenu = document.getElementById("careers-menu");
  const careersMenuButton = document.getElementById("careers-button");
  const careersCloseButton = document.getElementById("careers-close-button");

  careersMenuButton.addEventListener("click", () => {
    careersMenu.classList.add("active");
    document.body.classList.add("scroll-off");
  });
  careersCloseButton.addEventListener("click", () => {
    careersMenu.classList.remove("active");
    document.body.classList.remove("scroll-off");
  });
  contactButtons.forEach((el) => {
    el.addEventListener("click", function (e) {
      contactUsMenu.classList.add("active");
      document.body.classList.add("scroll-off");
    });
  });

  contactCloseButton.addEventListener("click", function (e) {
    contactUsMenu.classList.remove("active");
    document.body.classList.remove("scroll-off");
  });

  /**
   * SMOOTH SCROLL to top - deactivating slider while scrolling to avoid bug
   */
  class SmoothAnchorScroll {
    init() {
      const anchors = document.querySelectorAll('a[href^="#"]');

      for (const anchor of anchors) {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const target = document.querySelector(this.getAttribute("href"));

          if (target) {
            if (firstSwiper) {
              firstSwiper.disable();
              setTimeout(() => {
                firstSwiper.enable();
                firstSwiper.slideTo(0, 1000);
              }, 1000);
            }
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
}
/**
 * app js
 */
/**
 * THIRD PAGE HORIZONTAL SLIDER
 */

function app() {
  const drug = document.getElementById("slider-drug");

  const moovingIndex = null;

  const sliderLine = document.getElementById("slider-line");

  const paragraphs = document.querySelectorAll(".lighten-text");

  const sliderDrugLine = document.getElementById("slider-drug-line");

  const sliderContentBlock = document.getElementById(
    "third-page-bottom-content"
  );

  const firstBlock = document.getElementById("slider-block-1");

  const activeTextDelimeter = window.innerWidth / 2;

  const header = document.getElementById("header");

  firstSwiper = new Swiper(".home-third-page-slider-line", {
    direction: "horizontal",
    speed: 500,
    grabCursor: true,
    scrollbar: {
      el: ".home-third-page-slider-scrollbar",
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
}
/**  3d visual  */

function fullScreenSlider() {
  /**
   * FULL SCREEN SLIDER
   */
  let observer = null;
  function activateFullScreenSlider() {
    if (window.innerWidth > 1023) {
      document.querySelector(".triggers").style.display = "block";

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let index = +entry.target.dataset.id.slice(-1);
          if (entry.isIntersecting) {
            if (index === 1) {
              document
                .querySelectorAll(".fixed-block:not(.fixed-block.block-1)")
                .forEach((el) => {
                  fadeOut(el);
                });
              if (
                document.querySelector(".fixed-block.block-1").style.opacity < 1
              ) {
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
              if (
                document.querySelector(".fixed-block.block-4").style.opacity < 1
              ) {
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
    } else {
      document.querySelector(".triggers").style.display = "none";
      setTimeout(() => {
        document.querySelectorAll(".fixed-block").forEach((el) => {
          fadeIn(el);
        });
      }, 200);
    }
  }
  activateFullScreenSlider();
  window.addEventListener("resize", activateFullScreenSlider);
}

function d3Vizual() {
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
        direction: "horizontal",
        slidesPerView: 1.15,
      },
      370: {
        direction: "horizontal",
        slidesPerView: 1.16,
      },
      380: {
        direction: "horizontal",
        slidesPerView: 1.21,
      },
      390: {
        direction: "horizontal",
        slidesPerView: 1.24,
      },
      400: {
        direction: "horizontal",
        slidesPerView: 1.27,
      },
      410: {
        direction: "horizontal",
        slidesPerView: 1.3,
      },
      450: {
        direction: "horizontal",
        slidesPerView: 1.35,
      },
      480: {
        direction: "horizontal",
        slidesPerView: 1.4,
      },
      640: {
        direction: "horizontal",
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
}

function asBuilt() {
  const firstSwiper = new Swiper(".second-page-slider-line", {
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
}

function modals() {
  /**
   * MOBILE BURGER
   */
  const openButton = document.getElementById("burger-button");
  const closeButton = document.getElementById("burger-close-button");
  const popup = document.getElementById("popup");

  openButton.addEventListener("click", function (e) {
    popup.classList.add("active");
    document.body.classList.add("scroll-off");
  });

  closeButton.addEventListener("click", function (e) {
    popup.classList.remove("active");
    document.body.classList.remove("scroll-off");
  });

  /**
   * CONTACT POP-UP // CAREERS POP-UP
   */
  const contactUsMenu = document.getElementById("contact-us-menu");
  const contactButtons = document.querySelectorAll(".contact-button");
  const contactCloseButton = document.getElementById("contact-us-close-button");

  const careersMenu = document.getElementById("careers-menu");
  const careersMenuButton = document.getElementById("careers-button");
  const careersCloseButton = document.getElementById("careers-close-button");

  careersMenuButton?.addEventListener("click", () => {
    careersMenu.classList.add("active");
    document.body.classList.add("scroll-off");
  });
  careersCloseButton?.addEventListener("click", () => {
    careersMenu.classList.remove("active");
    document.body.classList.remove("scroll-off");
  });
  contactButtons.forEach((el) => {
    el.addEventListener("click", function (e) {
      contactUsMenu.classList.add("active");
      document.body.classList.add("scroll-off");
    });
  });

  contactCloseButton.addEventListener("click", function (e) {
    contactUsMenu.classList.remove("active");
    document.body.classList.remove("scroll-off");
  });
}


