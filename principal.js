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
        smartSpeed: 800,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 600
            },
            768: {
                autoplay: true,
                autoplayTimeout: 6000,
                smartSpeed: 700
            },
            992: {
                autoplay: true,
                autoplayTimeout: 6000,
                smartSpeed: 800
            }
        },
        onInitialized: carouselInitialized
    });

    function carouselInitialized(event) {
        $('.owl-item.active .overlay-box').css({
            'opacity': 1,
            'transform': 'translateX(0)'
        });
    }

    $('.hero-main-carousel').on('translate.owl.carousel', function(event) {
        $('.overlay-box').css({
            'opacity': 0,
            'transform': 'translateX(-30px)'
        });
    });

    $('.hero-main-carousel').on('translated.owl.carousel', function(event) {
        setTimeout(function() {
            $('.owl-item.active .overlay-box').css({
                'opacity': 1,
                'transform': 'translateX(0)'
            });
        }, 100);
    });

    function adjustCarouselHeight() {
        if ($(window).width() <= 576) {
            var contentHeight = $('.overlay-box').outerHeight() + 100; 
            var minHeight = 400;
            $('.hero-carousel, .carousel-item').css('height', Math.max(contentHeight, minHeight) + 'px');
        } else if ($(window).width() <= 768) {
            $('.hero-carousel, .carousel-item').css('height', '80vh');
        } else if ($(window).width() <= 1200) {
            $('.hero-carousel, .carousel-item').css('height', '80vh');
        } else {
            $('.hero-carousel, .carousel-item').css('height', '100vh');
        }
    }

    adjustCarouselHeight();
    $(window).resize(function() {
        adjustCarouselHeight();
    });
});
