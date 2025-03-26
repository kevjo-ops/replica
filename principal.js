$(document).ready(function(){
    $('.hero-main-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<', '>'],
        dots: false,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        onInitialized: addBackgroundTransition,
        onTranslated: addBackgroundTransition
    });
    
    
    $('.carousel-item').each(function(index) {
        if(index === 1) {
            $(this).addClass('second-slide');
        }
    });
    
    function addBackgroundTransition(event) {
        $('.overlay-box').css({
            'opacity': 0,
            'transform': 'translateX(-50px)'
        });
        
        setTimeout(function() {
            $('.active .overlay-box').css({
                'opacity': 1,
                'transform': 'translateX(0)'
            });
        }, 300);
    }
});