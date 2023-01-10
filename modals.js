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
