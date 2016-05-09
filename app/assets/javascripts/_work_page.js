$(document).ready(function(){
    $("#dt-arrow-right").click(function(){
       $("#dt-process-wrapper").animate({
           marginLeft: '-100vw'
       },500);
       $("#dt-clients-wrapper").animate({
           marginLeft: '0vw'
       },500);
    });
    
    $("#dt-arrow-left").click(function(){
       $("#dt-process-wrapper").animate({
           marginLeft: '0vw'
       },500);
       $("#dt-clients-wrapper").animate({
           marginLeft: '100vw'
       },500);
    });
    
    $(".nav-item-1").click(function(){
        $("#dt-process-wrapper").delay(600).animate({'marginLeft':'0vw'},100);
        $("#dt-clients-wrapper").delay(600).animate({'marginLeft':'100vw'},100);
    });
})