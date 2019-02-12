$(document).ready(function () {
    //change language
    $('.lang').click(function(){
        $(this).toggleClass('active',100,'easeOutSine');
    });
    //end language

    $(".header-menu_link.active").click(function(event){
        event.preventDefault();
    });

    $( ".header-menu_link" ).mouseover(function()
    {
        $('.header-menu_link').removeClass("style");
    });

    $( ".header-menu_link" ).mouseout(function()
    {
        $('.header-menu_link.active').addClass("style");
    });

    // Bootstrap Select
    var $selectpicker = $('.selectpicker');
    $selectpicker.selectpicker();

    $(".for-btn").on('click',function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    });

    $('.burger-btn').click(function(){
        $('.burger-nav').toggleClass('active');
        $( "body" ).css( "overflow-y", "hidden" );
    });
    $('.clicker-menu').click(function(){
        $('.bg-inner-menu').toggleClass('active');
    });

    /* Click Menu Button */
    $('#js_menu_button').on('click', function(){
        if(!$(this).hasClass('on_menu')){
            $('#js_menu_button').addClass('on_menu');
        }else{
            $('#js_menu_button').removeClass('on_menu');
        }
        return false;
    });

//accordion

    $('.mb-0').click(function(){
        $(this).closest('.card').toggleClass('active').siblings().removeClass('active');
    })

    $('.mb-0.collapsed').click(function(){
        $(this).closest('.card').removeClass('active');
        return false;
    });

    $('.scroll-icon').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});