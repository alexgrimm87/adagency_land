$(document).ready(function(){

  $('.burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    var menu = $('.main-menu');

    if ($('.burger').hasClass('active')) {
      menu.slideUp('fast');
      $(this).removeClass('active');
    } else {
      menu.slideDown('fast');
      $(this).addClass('active');
    }
  });

  $('.close').on('click', function(e) {
    e.preventDefault();
    var menu = $('.main-menu');
    menu.slideUp('fast');
    $('.burger').removeClass('open');
    $('.burger').removeClass('active');
  });


  $(window).resize(function() {
    var menu = $('.main-menu');
    var w = $(window).width();
    if(w > 768) {
      menu.removeAttr('style');
      $('.burger').removeClass('open');
      $('.burger').removeClass('active');
    }
  });
  
  $('.button-scroll').click(function(){
    var el = $(this).attr('href');
    $("html").animate({
      scrollTop: $(el).offset().top}, 500);
      return false;
  });

});

$(window).load(function(){

});

$(window).resize(function(){

});