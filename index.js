const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Реализация кнопок "Показать/Скрыть"
const linkCancelShowButton = document.querySelector(".show-button");
const linkCancelHidenButton = document.querySelector(".hidden-button");

const hideImgs = document.querySelector(".company-logos");
const hideButtonForShowButton = document.querySelector(".show-button");
const showHideButton = document.querySelector(".hidden-button");

linkCancelShowButton.addEventListener("click", (event) => {
  event.preventDefault();

  hideImgs.classList.toggle("company-logos_hide");
  hideButtonForShowButton.classList.toggle("show-button_hide");
  showHideButton.classList.toggle("hidden-button_show");
});

linkCancelHidenButton.addEventListener("click", (event) => {
  event.preventDefault();

  hideImgs.classList.toggle("company-logos_hide");
  hideButtonForShowButton.classList.toggle("show-button_hide");
  showHideButton.classList.toggle("hidden-button_show");
});
