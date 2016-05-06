$(document).ready(function(){
    $("#dark-1, #dark-2, #dark-3, #dark-4, #dark-5, #dark-6, #dark-7, #dark-8, #dark-9, #dark-10, #dark-11, #dark-12").hover(function(){
        $(this).animate({"opacity": 1});
        }, function(){
        $(this).animate({"opacity": 0},1500);
    });
    
    
    $('#contact-mob').click(function(){
       $('#mob-form-div').delay(200).animate({
           left: '0vw'
       }, 200); 
       $('#mob-form-div form').animate({
           left: '5vw'
       }, 200);
       $('#mob-close-form-link').animate({
           left: '2vw'
       }, 200);       
    });
    
    
    $('#mob-close-form-link').click(function(){
       $('#mob-form-div').delay(300).animate({
           left: '-95vw'
       }, 200); 
       $('#mob-form-div form').animate({
           left: '-90vw'
       }, 200);
       $('#mob-close-form-link').animate({
           left: '-10vw'
       }, 200); 
    });
    
    $('.close').click(function(){ $('.alert').css('display','none'); });
})