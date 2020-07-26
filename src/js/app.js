import lazySizes from 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import 'alpinejs';

import Swiper from 'swiper/bundle'; // import Swiper styles
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // loop: true,
//   autoHeight: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  // slidesPerGroup: 4,
  grapCursor: true,
  freeMode: true,
  freeModeSticky: true,
  observer: true,
  observeParents: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

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