var swiper = new Swiper('.about', {
    spaceBetween: 0,
    centeredSlides: true,
    speed:1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
$(".slider-menu_link.active").click(function(event){
    event.preventDefault();
});

$( ".slider-menu_link" ).mouseover(function()
{
    $('.slider-menu_link').removeClass("style");
});

$( ".slider-menu_link" ).mouseout(function()
{
    $('.slider-menu_link.active').addClass("style");
});