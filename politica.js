$(document).ready(function(){
    // Inicializar el carrusel de certificaciones
    var owl = $("#certificaciones-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,  // Cambiado a false para ocultar los controles nativos
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1 // Móviles: 1 elemento
            },
            600: {
                items: 1 // Tablets: 1 elemento
            },
            992: {
                items: 3 // Escritorio: 3 elementos
            }
        }
    });
    
    // Botones de navegación personalizados
    $(".custom-prev").click(function(){
        owl.trigger('prev.owl.carousel');
    });

    $(".custom-next").click(function(){
        owl.trigger('next.owl.carousel');
    });
});