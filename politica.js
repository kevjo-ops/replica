$(document).ready(function(){
    var owl = $("#certificaciones-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false, 
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1 
            },
            600: {
                items: 1 
            },
            992: {
                items: 3 
            }
        }
    });

    $(".custom-prev").click(function(){
        owl.trigger('prev.owl.carousel');
    });

    $(".custom-next").click(function(){
        owl.trigger('next.owl.carousel');
    });
});
