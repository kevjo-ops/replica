$(document).ready(function(){
    $("#proyectos-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ["<span>&lt;</span>", "<span>&gt;</span>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            900: {
                items: 3
            }
        }
    });

    $(".saber-mas").on("click", function(e) {
        e.preventDefault();
        const proyectoTitulo = $(this).closest('.proyecto-item').find('h3').text();
        alert("Detalles del proyecto: " + proyectoTitulo + " (Implementación pendiente)");
    });
});