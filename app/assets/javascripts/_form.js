$(document).ready(function(){
    $("#dark-1, #dark-2, #dark-3, #dark-4, #dark-5, #dark-6, #dark-7, #dark-8, #dark-9, #dark-10, #dark-11, #dark-12").hover(function(){
        $(this).animate({"opacity": 1});
        }, function(){
        $(this).animate({"opacity": 0},1500);
    });
})