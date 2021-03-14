
/* === SLIDER === */
//slider using slick library with responsive breaking points and custom buttons/arrows

$('#slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
        {
            breakpoint: 1000,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
        {
          breakpoint: 700,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  /* === POPUP === */
// Simple onclick function to show my love

  $('.love').click(function(){
    if ( $('#popup').css('display') == 'none' )
    $("#popup").css('display', 'block');
    else
    $("#popup").css('display', 'none');
  });

