var swiper = new Swiper('.slider', {
    slidesPerView: 5,
    spaceBetween: 0,
    navigation: {
        nextEl: '.cart-slider .swiper-button-next',
        prevEl: '.cart-slider .swiper-button-prev',
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 1,
        },
    }
});