const heroSwiper = new Swiper('.slider-hero', {
  pagination: {
    el: '.slider-hero__nav',
    clickable: true,
  },

  grabCursor: true,
});

const spacesCurrentSlide = document.querySelector('.slider-spaces__current');
const spacesAllSlides = document.querySelector('.slider-spaces__all');

const spacesSwiper = new Swiper('.slider-spaces', {
  navigation: {
    nextEl: '.arrow-right',
    prevEl: '.arrow-left',
  },

  pagination: {
    el: '.slider-spaces__progressbar',
    type: 'progressbar',
  },

  loop: true,

  slidesPerView: 3,
  spaceBetween: 30,

  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
});

spacesSwiper.on = {
  init: function () {
    spacesAllSlides.textContent = `${spacesSwiper.slides.length}`;
  },
  slideChange: function (slider) {
    let currentSlide = ++slider.realIndex;
    spacesCurrentSlide.textContent = `${currentSlide}`;
  },
};
