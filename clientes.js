$(document).ready(function(){
    // Función para agregar contenido a los botones de navegación
    function customizeNavButtons() {
      $('.owl-prev').html('<span>&lt;</span>');
      $('.owl-next').html('<span>&gt;</span>');
    }
  
    // Inicialización del carrusel superior (izquierda a derecha)
    $('.clientes-carousel-top').owlCarousel({
      loop: true,
      margin: 20,
      center: true, // Centrar los items activos
      nav: true,
      dots: false, // Sin indicadores de posición
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navText: ['<span>&lt;</span>', '<span>&gt;</span>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      },
      onInitialized: customizeNavButtons
    });
  
    // Inicialización del carrusel inferior (derecha a izquierda)
    $('.clientes-carousel-bottom').owlCarousel({
      loop: true,
      margin: 20,
      center: true, // Centrar los items activos
      nav: true,
      dots: false, // Sin indicadores de posición
      autoplay: true,
      autoplayTimeout: 3500, // Tiempo ligeramente diferente para evitar sincronización
      autoplayHoverPause: true,
      rtl: true, // Dirección de derecha a izquierda
      navText: ['<span>&lt;</span>', '<span>&gt;</span>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      },
      onInitialized: customizeNavButtons
    });
  });