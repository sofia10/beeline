var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    speed:800,
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$('select').selectpicker();

$('.more-menu_item').click(function(){
    var type = $(this).attr('but-type');
    $('.more-menu_item').removeClass('active');
    $(this).addClass('active');
    $('.more-info_block').removeClass('active');
    $(".more-info_block[sec-type="+type+"]").addClass('active');
});

AOS.init({
    duration: 1000,
})