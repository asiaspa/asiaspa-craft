import lazySizes from 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import 'alpinejs';

import Swiper from 'swiper/bundle'; // import Swiper styles
import 'swiper/swiper-bundle.css';

// import ScrollBooster from 'scrollbooster';

// new ScrollBooster({
//   viewport: document.querySelector('.hs'),
//   scrollMode: 'native',
//   direction: 'horizontal',
//   emulateScroll: true,
//   lockScrollOnDragDirection: true
// });


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // loop: true,
//   autoHeight: true,
  speed:300,
  watchOverflow: true,
  spaceBetween: 32,
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

window.setTrueVw = function () {
  let vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--true-vw', `${vw}px`);
  console.log('screen size now is ' + vw + '*100')
}

setTrueVw();
window.addEventListener('resize', setTrueVw);


// window.carousel = function () {
//     return {
//         active: 0,
//         init() {
//             var flkty = new Flickity(this.$refs.carousel, {});
//             flkty.on('change', i => this.active = i);
//         }
//     }
// }

// window.carouselFilter = function() {
//     return {
//         active: 0,
//         changeActive(i) {
//             console.log(i);
//             this.active = i;
//             this.$nextTick(() => {
//                 let flkty = Flickity.data(this.$el.querySelectorAll('.carousel')[i]);
//                 flkty.resize();
//                 console.log(flkty);
//             });
//         }
//     }
// }