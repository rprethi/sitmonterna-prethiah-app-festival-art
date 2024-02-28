const swiperapp = new Swiper(".swiper-filters", {
    slidesPerView: 'auto', 
    spaceBetween: 0,
    grabCursor: true,
    freeMode: true, 
});

const swiperappartworks = new Swiper(".swiper-featured-artworks", {
    direction: "horizontal",
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
});
