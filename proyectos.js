$(document).ready(function(){
    var owlCarousel = $("#destacados-carousel").owlCarousel({
        loop: true,
        margin: 20,
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
                items: 2
            },
            900: {
                items: 3
            }
        }
    });
    
    $("#prev-destacados").click(function() {
        owlCarousel.trigger('prev.owl.carousel');
    });
    
    $("#next-destacados").click(function() {
        owlCarousel.trigger('next.owl.carousel');
    });

    $(".ver-mas-btn").on("click", function(e) {
        e.preventDefault();
        const proyectoTitulo = $(this).closest('.destacado-item').find('h3').text();
        alert("Detalles del proyecto: " + proyectoTitulo + " (Implementación pendiente)");
    });
});
