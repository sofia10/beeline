$('.bundles-menu_item').click(function(){
   $('.bundles-menu_item').removeClass('active');
   $(this).addClass('active');
   var type = $(this).attr('but-type');
   $('.bundles-block').removeClass('active');
   $(".bundles-block[sec-type="+type+"]").addClass('active');
   $('.tariff-info').removeClass('active');
});

$('.card-item .more').click(function(){
    $('.card-item .active').not(this).removeClass('active');
    $(this).toggleClass('active');
    var type = $(this).attr('but-type');
    $('.tariff-info').removeClass('active');
    $('.tariff-info[tariff='+type+']').addClass('active');
    if (!$(this).hasClass("active")) {
        $('.tariff-info[tariff='+type+']').removeClass('active');
    }
});

$('.tariff-menu_item').click(function(){
    $(this).closest('.tariff-info').find('.tariff-menu_item').removeClass('active');
   $(this).addClass('active');
   var type = $(this).attr('btn');
   $(this).closest('.tariff-info').find('.tariff-info_item').removeClass('active');
   // $('.tariff-info_item').removeClass('active');
   $('.tariff-info_item[sec='+type+']').addClass('active');
});