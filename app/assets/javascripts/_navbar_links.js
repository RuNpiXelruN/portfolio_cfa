$(document).ready(function(){
    $('.nav-item-3').click(function(){
        
        var x = $('.about-wrapper').css('marginLeft');
        
        if( parseInt(x) < 0 ) {
            $('.works-wrapper').delay().animate({
                top: '0%'
            }, 500);            
        } else {
            $('#nav-right').trigger('click');
            $('.works-wrapper').delay(500).animate({
                top: '0%'
            }, 500);
        }
    }); 
    
    $('#nav-home').click(function(){
        $('#nav-left').trigger('click');
        $('.works-wrapper').delay().animate({
            top: '-100%'
        }, 700);
        
    });
})