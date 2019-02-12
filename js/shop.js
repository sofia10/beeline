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

var swiper = new Swiper('.shop-sec', {
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
        767: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//filter

$('.filter-title').click(function(){
    $( event.target ).closest( ".filter" ).toggleClass( "active" );
});

$('.filter-btn').click(function(){
    $('.filters-block').addClass('active-filter');
    $('body').css('overflow','hidden');
});
$('.filter-close').click(function(){
    $('.filters-block').removeClass('active-filter');
    $('body').css('overflow','auto');
});

$('.devices-sec_item').click(function(){
    $('.devices-sec_item').removeClass('active');
    $(this).addClass('active');
});

//responsive

$('.filter-mobile .title').click(function(){
    $('.shop-main_sort').addClass('active');
    $('body').css('overflow','hidden');
});
$('.filter-close').click(function(){
    $('.shop-main_sort').removeClass('active');
    $('body').css('overflow','auto');
});