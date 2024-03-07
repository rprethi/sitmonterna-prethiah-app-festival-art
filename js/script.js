
/*-- SWIPPER SECTION BOUTONS APP --*/
const swiperapp = new Swiper(".swiper-filters", {
  slidesPerView: "auto",
  spaceBetween: 0,
  grabCursor: true,
  freeMode: true,
});

/*-- SWIPPER SECTION OEUVRES APP --*/
const swiperappartworks = new Swiper(".swiper-featured-artworks", {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 2.1,
  spaceBetween: 5,
  centeredSlides: false,
});

/*-- SWIPPER BOUTON ARTWORK LIKED --*/
document.addEventListener("DOMContentLoaded", function () {
  const likeButton = document.querySelector(".bi-heart-fill");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("liked");
  });
});

/*-- SWIPPER SECTION SCREENSHOTS LP --*/
const swiper = new Swiper(".swiper-screenshots", {
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});
