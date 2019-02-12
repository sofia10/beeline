$('select').selectpicker();

$('.bundles-menu_item').click(function(){
    var type = $(this).attr('but-type');
    $('.bundles-menu_item').removeClass('active');
    $(this).addClass('active');
    $('.bundles-block').removeClass('active');
    $(".bundles-block[sec-type="+type+"]").addClass('active');
    $('.more-block').removeClass('active');
});

$('.bundles-block_item .more, .edu-block_item .more').click(function(){
    $('.bundles-block_item .active, .edu-block_item .active').not(this).removeClass('active');
    $(this).toggleClass('active');
    var type = $(this).attr('but-type');
    $('.more-block').removeClass('active');
    $('.more-block[tariff='+type+']').addClass('active');
    if (!$(this).hasClass("active")) {
        $('.more-block[tariff='+type+']').removeClass('active');
    }
});
