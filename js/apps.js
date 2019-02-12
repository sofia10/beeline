$('.myapp .mobile-btn').click(function(){
    $('.myapp .mobile-btn').removeClass('active');
    $(this).addClass('active');
    var type = $(this).attr('btn-type');
    $('.myapp .show-section').removeClass('active');
    $('.myapp .show-section[sec-type='+type+']').addClass('active');
});
$('.bcards .mobile-btn').click(function(){
    $('.bcards .mobile-btn').removeClass('active');
    $(this).addClass('active');
    var type = $(this).attr('btn-type');
    $('.bcards .show-section').removeClass('active');
    $('.bcards .show-section[sec-type='+type+']').addClass('active');
});