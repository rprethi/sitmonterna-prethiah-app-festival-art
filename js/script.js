const swiperapp = new Swiper(".swiper-filters", {
  slidesPerView: "auto",
  spaceBetween: 0,
  grabCursor: true,
  freeMode: true,
});

const swiperappartworks = new Swiper(".swiper-featured-artworks", {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 2.1,
  spaceBetween: 5,
  centeredSlides: false,
});

document.addEventListener("DOMContentLoaded", function () {
  const likeButton = document.querySelector(".bi-heart-fill");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("liked");
  });
});

const swiper = new Swiper(".swiper-screenshots", {
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});
