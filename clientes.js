$(document).ready(function(){
    $('.clientes-carousel-top').owlCarousel({
      loop: true,
      margin: 20,
      center: true,
      nav: false, 
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 }
      }
    });

    $('.clientes-carousel-bottom').owlCarousel({
      loop: true,
      margin: 20,
      center: true,
      nav: false, 
      dots: false,
      autoplay: true,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      rtl: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 }
      }
    });
  });
