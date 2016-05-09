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
            $(".home-wrapper").animate({'marginLeft':'-=100vw'},500);
            $(".home-wrapper").addClass('off-home');
            $(".home-wrapper").removeClass('on-home');
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
            $(".home-wrapper").animate({'marginLeft':'-100vw'},500);
            $(".home-wrapper").addClass('off-home');
            $(".home-wrapper").removeClass('on-home');
            $('.room-wrapper').animate({'marginLeft':'-100vw'},500);
            $('.works-wrapper').css('z-index',99);
            $('.works-wrapper').delay(500).animate({
                top :0
            },500);
            $('.room-wrapper').addClass('activated');
            $(this).addClass('disable-click');
        }
    });
    
    $('#dt-home').click(function(){
        
        if( $('.home-wrapper').hasClass('off-home') ) {
            $(".home-wrapper").animate({'marginLeft':'0vw'},500);
            $('.home-wrapper').removeClass('off-home');
            $('.home-wrapper').addClass('on-home');
            
            $('.room-wrapper').delay(600).animate({'marginLeft':'+=100vw'},100);
            $('.room-wrapper').removeClass('activated');
            
            $('.about-wrapper').delay(600).animate({'top':'100vh'},100);
            
            $('.works-wrapper').delay(600).animate({'top':'-100vh'},100);
            
            $('#dt-work, #dt-about').removeClass('disable-click');
            
        }
    });    
    
    
    //  Nav code below
    
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