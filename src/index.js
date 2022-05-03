window.onload = () => {
  // hero slider

  const heroSwiper = new Swiper('.slider-hero', {
    pagination: {
      el: '.slider-hero__nav',
      clickable: true,
    },

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    loop: true,

    speed: 800,

    grabCursor: true,
  });

  // spaces slider

  const spacesSlider = document.querySelector('.slider-spaces');
  const spacesSlides = [...spacesSlider.querySelectorAll('.swiper-slide')];
  const spacesCurrentSlide = spacesSlider.querySelector(
    '.slider-spaces__current'
  );
  const spacesAllSlides = spacesSlider.querySelector('.slider-spaces__all');

  const spacesSwiper = new Swiper('.slider-spaces', {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.spaces-next',
      prevEl: '.spaces-prev',
    },

    pagination: {
      el: '.slider-spaces__progressbar',
      type: 'progressbar',
    },

    watchOverFlow: true,

    loop: true,

    slidesPerView: 3,
    spaceBetween: 30,

    on: {
      init: function () {
        spacesAllSlides.textContent = setZeroFormat(spacesSlides.length);
      },
      slideChange: function (slider) {
        let currentSlide = ++slider.realIndex;
        spacesCurrentSlide.textContent = setZeroFormat(currentSlide);
      },
    },
  });

  // facilities
  const facilitiesSlides = [
    ...document.querySelectorAll('.slider-facilities__image'),
  ];

  const facilitiesSlider = new Swiper('.facilities__slider', {
    observer: true,
    observeParents: true,
    thumbs: {
      swiper: {
        el: '.facilities__nav',
        slidesPerView: facilitiesSlides.length,
        direction: 'vertical',
      },
    },

    initialSlide: 1,

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  // gallery

  const gallerySlider = new Swiper('.gallery__slider', {
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
    },

    slidesPerView: 'auto',
    spaceBetween: 30,

    speed: 800,
    loop: true,
  });

  function setZeroFormat(item) {
    let result = item >= 10 ? item : '0' + item;
    return result;
  }
};
