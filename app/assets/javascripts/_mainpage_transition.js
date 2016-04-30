$(document).ready(function() {
  $('#nav-right').click(function() {
    $(this).fadeOut();
    $('#nav-left').fadeIn();
    $('.home-wrapper').animate({'marginLeft':'-=100%'},500);
    $('.about-wrapper').animate({'marginLeft':'-=100%'},500);
  });
  
  $('#nav-left').click(function() {
    $(this).fadeOut();
    $('#nav-right').fadeIn();
    $('.home-wrapper').animate({'marginLeft':'+=100%'},500);
    $('.about-wrapper').animate({'marginLeft':'+=100%'},500);
  });
});