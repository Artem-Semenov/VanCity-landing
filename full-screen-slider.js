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
    },200)
   
  }
}
activateFullScreenSlider();
window.addEventListener("resize", activateFullScreenSlider);
