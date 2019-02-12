$('.filter-mobile .title').click(function(){
    $('.filters-block').show();
    $('.filter-mobile').addClass('active');
});
$('.filter-mobile .close-btn').click(function(){
    $('.filters-block').hide();
    $('.filter-mobile').removeClass('active');
});

var swiper = new Swiper('.s1', {
    spaceBetween: 0,
    centeredSlides: true,
    speed:1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});
