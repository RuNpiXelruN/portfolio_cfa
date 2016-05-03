$(document).ready(function(){
    $('#nav-down').click(function(){
        $('.navbar-bottom').animate({
            bottom: '-6vw'
        }, 300);
        
        $('#hoot-logo').animate({
            bottom: '33vw'
        }, 500);
        
        $('#hoot-cross').animate({
            bottom: '42.2vw'
        }, 500);
        
        $(this).animate({
            opacity: 0
        }, 20, function(){
            $(this).hide();
        });
    });
    
    $('#nav-up').click(function(){
        $('.navbar-bottom').animate({
            bottom: '0vw'
        }, 300);
        
        $('#hoot-logo').animate({
            bottom: '24vw'
        }, 500);
        
        $('#hoot-cross').animate({
            bottom: '33.2vw'
        }, 500);
        
        $('#nav-down').show();
        $('#nav-down').animate({
            opacity: 1
        }, 20);
    });
});