
$(document).ready(function(){
    // Toggle para el menú hamburguesa
    $('.hamburger-menu').click(function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    $('.nav-menu a').click(function() {
        $('.hamburger-menu').removeClass('active');
        $('.nav-menu').removeClass('active');
    });
    
    // Cerrar menú al hacer clic fuera de él
    $(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('.main-nav').length && $('.nav-menu').hasClass('active')) {
            $('.hamburger-menu').removeClass('active');
            $('.nav-menu').removeClass('active');
        }
    });
    
    // Cerrar menú al redimensionar la ventana si está abierto
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.hamburger-menu').removeClass('active');
            $('.nav-menu').removeClass('active');
        }
    });
});