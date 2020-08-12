import lazySizes from 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import 'alpinejs';
import "intersection-observer";
import scrollama from "scrollama";
import sal from 'sal.js';
import Swiper from 'swiper/bundle'; // import Swiper styles

sal();

const swiperCarousel = new Swiper('.js-swiper-carousel', {
  // Optional parameters
  // loop: true,
//   autoHeight: true,
  speed:300,
  watchOverflow: true,
  spaceBetween: 48,
  slidesPerView: 'auto',
  // slidesPerGroup: 4,
  grabCursor: true,
  freeMode: true,
  freeModeSticky: true,
  observer: true,
  observeParents: true,
  mousewheel: {
    releaseOnEdges: true,
    sensitivity: 1.5
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  }
})

const swiperSlider = new Swiper('.js-swiper-slider', {
  // Optional parameters
  // loop: true,
  // autoHeight: true,
  speed: 300,
  watchOverflow: true,
  spaceBetween: 48,
  slidesPerView: 'auto',
  // slidesPerGroup: 3,
  grabCursor: true,
  freeMode: true,
  freeModeSticky: true,
  observer: true,
  observeParents: true,
  mousewheel: {
    releaseOnEdges: true,
    sensitivity: 1.5
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  }
})

// const swiperSlider = new Swiper('.js-swiper-slider', {
//   // Optional parameters
//   // loop: true,
//   // autoHeight: true,
//   speed: 300,
//   watchOverflow: true,
//   spaceBetween: 48,
//   slidesPerView: 'auto',
//   // slidesPerGroup: 3,
//   grabCursor: true,
//   freeMode: true,
//   freeModeSticky: true,
//   observer: true,
//   observeParents: true,
//   mousewheel: {
//     releaseOnEdges: true,
//     sensitivity: 1.5
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true
//   }
// })

window.setTrueVw = function () {
  let vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--true-vw', `${vw}px`);
  console.log('screen size now is ' + vw + '*100')
}

setTrueVw();
window.addEventListener('resize', setTrueVw);
