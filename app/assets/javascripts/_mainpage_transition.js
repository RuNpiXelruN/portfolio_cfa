$(document).ready(function() {
        
    

    $('#dt-about').click(function() {
        
        if( $('.room-wrapper').hasClass('activated')) {    // ON THE WORK PAGE
            $('.about-wrapper').css('z-index',99);
            $('.works-wrapper').css('z-index',2);
            $('.works-wrapper').delay().animate({'top':'-100vh'},500);
            $('.about-wrapper').delay(500).animate({
                top :0
            },500);
            $(this).addClass('disable-click');
            $('#dt-work').removeClass('disable-click');
        } else {
            $('.room-wrapper').animate({'marginLeft':'-=100vw'},500);
            $('.about-wrapper').css('z-index',99);
            $('.about-wrapper').delay(500).animate({
                top :0
            },500);
            $('.room-wrapper').addClass('activated');
            $(this).addClass('disable-click');
        }
    });     
    
    $('#dt-work').click(function() {       // ON THE ABOUT PAGE
        
        if( $('.room-wrapper').hasClass('activated')) {
            $('.works-wrapper').css('z-index',99);
            $('.about-wrapper').css('z-index',2);
            $('.about-wrapper').delay().animate({'top':'100vh'},500);
            $('.works-wrapper').delay(500).animate({
                top :0
            },500);
            $(this).addClass('disable-click');
            $('#dt-about').removeClass('disable-click');
        } else {
            $('.room-wrapper').animate({'marginLeft':'-=100vw'},500);
            $('.works-wrapper').css('z-index',99);
            $('.works-wrapper').delay(500).animate({
                top :0
            },500);
            $('.room-wrapper').addClass('activated');
            $(this).addClass('disable-click');
        }
    });
            
    
    
    
    
    
    
    
    
    
    
    
    
    //     $('.room-wrapper').animate({'marginLeft':'-=100vw'},500);
        
    
    //     $(this).addClass('disable-click');
    //     room_state = !room_state
    // });
    
    // $('#dt-work').click(function() {
    //     $('.room-wrapper').animate({'marginLeft':'-=100vw'},500);
    //     $('.work-wrapper').delay(500).animate({'top':0},500);
        
    //     $(this).addClass('disable-click');
    //     room_state = !room_state
    // });
    // } else {
        
    //     $('#dt-about').click(function() {
    //         $('.work-wrapper').delay(500).animate({'top':'-100vh' },500);
    //         $('.about-wrapper').delay(500).animate({'top':0},500);
    //         $(this).addClass('disable-click');
    //         $('#dt-work').removeClass('disable-click');
    //     });
        
    //     $('#dt-work').click(function() {
    //         $('.about-wrapper').delay(500).animate({'top':'100vh'},500);
    //         $('.work-wrapper').delay(500).animate({'top':0 },500);
    //         $(this).addClass('disable-click');
    //         $('#dt-about').removeClass('disable-click');
    //     });
        
    // }





    
    // $('#dt-work').click(function(){
        
    //     if( $('#dt-about').hasClass('disable-click')) {  // if on about page
    //         $('.works-wrapper').animate({
    //             marginTop: '-=50%'
    //         }, 500);
    //         $(this).addClass('disable-click');
    //         $('#dt-about').removeClass('disable-click');
            
    //     } else {
    //         $('.room-wrapper').animate({'marginLeft':'-=100vw'},500);
    //         $('.works-wrapper').delay(600).animate({
    //             marginTop: '+=50%'
    //         }, 500);
    //         $(this).addClass('disable-click');
    //         $('#dt-about').removeClass('disable-click');
    //     }
    // }); 


    // $('#nav-right').click(function() {
        
    //     var x = $('.contact-wrapper').css("marginTop")
      
    //     if( parseInt(x) < 0) {
    //       $('#nav-up').trigger('click');
    //     }

    //     $(this).fadeOut();
    //     $('#nav-left').fadeIn();
    //     // $('#nav-up').trigger('click');
    //     $('.home-wrapper').animate({'marginLeft':'-=100%'},500);
    //     $('.about-wrapper').animate({'marginLeft':'-=100%'},500);
    // });
    
    
    // ---------------------------------------
    
    // $('#nav-left').click(function() {
            
    //     var x = $('.contact-wrapper').css("marginTop")
        
    //     if( parseInt(x) < 0 ) {
    //         $('#nav-up').trigger('click');
    //     }
        
    //     $(this).fadeOut();
    //     $('#nav-right').fadeIn();
    //     $('.home-wrapper').animate({'marginLeft':'+=100%'},500);
    //     $('.about-wrapper').animate({'marginLeft':'+=100%'},500);
    // });
    
    // --------------------------------------- Contact arrows ------------------
    
    // $('#nav-down').click(function() {
    //     $('.contact-wrapper').animate({
    //     marginTop: '-=32%'
    //     }, 500); 
    // });
    
    // $('#nav-up').click(function() {
    //     $('.contact-wrapper').animate({
    //     marginTop: '+=32%'
    //     }, 500); 
    // });
    
    //   GREAT CODE SNIPPET FOR CONDITIONAL BEHAVIOUR ----------------------
    
    var nav_state = true;
    $('#nav-up, img#nav-up').click(function() {
        if( nav_state ) {
            $('.contact-wrapper').animate({
                marginTop: '-=32%'
            }, 500);
            
            $('.navbar-bottom').animate({
                bottom: '-6vw'
            }, 300);
            
            $('#desktop-logo').delay(200).animate({
                bottom: '33vw'
            }, 500);
        } else {
            $('.contact-wrapper').animate({
                marginTop: '+=32%'
            }, 500); 
            
            $('.navbar-bottom').animate({
                bottom: '0vw'
            }, 300);
            
            $('#desktop-logo').delay(200).animate({
                bottom: '19vw'
            });
        }
        
        nav_state = !nav_state;
    });
    
    $('#nav-down').click(function(){
        $('.contact-wrapper').animate({
            marginTop: '+=32%'
        }, 500); 
            
        $('.navbar-bottom').animate({
            bottom: '0vw'
        }, 300);
            
        $('#desktop-logo').delay(200).animate({
            bottom: '19vw'
        });
        nav_state = !nav_state;
    });
});