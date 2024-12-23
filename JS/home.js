const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursoR: true,
    spaceBetween: 40,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        240: {
            slidesPerView: 2
        },
        640: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        },
        1280: {
            slidesPerView: 6
        }
    }
  
  });