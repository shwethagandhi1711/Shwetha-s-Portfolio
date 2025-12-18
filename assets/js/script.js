'use strict';

/* NAV TOGGLE */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", () => {
  header.classList.toggle("nav-active");
  navToggleBtn.classList.toggle("active");
});

/* BACK TO TOP */
const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
});




