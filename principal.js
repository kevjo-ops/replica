$(document).ready(function(){
    // Inicializar carrusel
    var owl = $('.hero-main-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<', '>'],
        dots: false,
        smartSpeed: 1000,
        animateOut: 'fadeOut'
    });
    
    // Asegurarse de que los overlays sean visibles inicialmente
    $('.overlay-box').css({
        'opacity': 1,
        'transform': 'translateX(0)'
    });
    
    // Agregar efecto de transición después del cambio de diapositiva
    owl.on('changed.owl.carousel', function(event) {
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
    });
});
