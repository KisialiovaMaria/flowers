//$(document).ready(function(){
  
  flowersSlider = new Swiper('.flowers-slider', {
    // параметры слайдера
    loop: true,//бесконечкая прокрутка
    slidesPerView: 6,//(количество слайдов на странице)

    // Navigation arrows(подключаем стрелки)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //настройки адаптива
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 6,
      }
    }
  });
  reviewsSlider = new Swiper('.reviews-slider', {
    // параметры слайдера
    loop: true,//бесконечкая прокрутка
    slidesPerView: 1,//(количество слайдов на странице)

    // Navigation arrows(подключаем стрелки)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $("#review-1").on('click', function() {
    $.fancybox.open([
      {
        src  : 'img/rewiews/bouqete-1.jpg',
        opts : {
          caption : 'First caption',
          thumb   : 'img/rewiews/bouqete-1.jpg'
        }
      },
      {
        src  : 'img/rewiews/bouqete-2.jpg',
        opts : {
          caption : 'Second caption',
          thumb   : 'img/rewiews/bouqete-2.jpg'
        }
      },
      {
        src  : 'img/rewiews/bouqete-3.jpg',
        opts : {
          caption : 'Second caption',
          thumb   : 'img/rewiews/bouqete-3.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });

  });
//}); 