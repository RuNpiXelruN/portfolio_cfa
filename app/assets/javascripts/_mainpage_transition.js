$(document).ready(function() {
        

    $('#nav-right').click(function() {
        
        var x = $('.contact-wrapper').css("marginTop")
      
        if( parseInt(x) < 0) {
          $('#nav-up').trigger('click');
        }

        $(this).fadeOut();
        $('#nav-left').fadeIn();
        // $('#nav-up').trigger('click');
        $('.home-wrapper').animate({'marginLeft':'-=100%'},500);
        $('.about-wrapper').animate({'marginLeft':'-=100%'},500);
    });
    
    
    // ---------------------------------------
    
    $('#nav-left').click(function() {
            
        var x = $('.contact-wrapper').css("marginTop")
        
        if( parseInt(x) < 0 ) {
            $('#nav-up').trigger('click');
        }
        
        $(this).fadeOut();
        $('#nav-right').fadeIn();
        $('.home-wrapper').animate({'marginLeft':'+=100%'},500);
        $('.about-wrapper').animate({'marginLeft':'+=100%'},500);
    });
    
    // --------------------------------------- Contact arrows ------------------
    
    $('#nav-down').click(function() {
        $('.contact-wrapper').animate({
        marginTop: '-=32%'
        }, 500); 
    });
    
    $('#nav-up').click(function() {
        $('.contact-wrapper').animate({
        marginTop: '+=32%'
        }, 500); 
    });
});