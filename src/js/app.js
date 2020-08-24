import lazySizes from 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import 'alpinejs';
import "intersection-observer";
import sal from 'sal.js';
import mediumZoom from 'medium-zoom';
import Swiper from 'swiper/bundle'; // import Swiper styles
// import 'swiper/swiper-bundle.css';\
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; 
import lax from 'lax.js';


// key - retrigger script after htmx works
function initScript() {
    console.log('init Script Run');
    sal();
    mediumZoom('[data-zoomable]');
    tippy('[data-tippy-content]');
    const swiperCarousel = new Swiper('.js-swiper-carousel', {
        // Optional parameters
        // loop: true,
        //   autoHeight: true,
        speed: 300,
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

    const swiperListicleSimpleSlider = new Swiper('.js-swiper-listicle-simple-slider', {
        // loop: true,
        autoHeight: true,
        speed: 300,
        slidesPerView: 1,
        grabCursor: true,
        mousewheel: {
            releaseOnEdges: true,
            sensitivity: 1.5
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    })

    const swiperListicleShopCarousel = new Swiper('.js-swiper-listicle-shop-carousel', {
        // loop: true,
        spaceBetween: 24,
        autoHeight: true,
        speed: 300,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grabCursor: true,
        mousewheel: {
            releaseOnEdges: true,
            sensitivity: 1.5
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })


}

// ================ trigger script when window.onload ================ 
window.onload = function () {
    console.log('window onload');
    initScript();
}

// ================ trigger script when htmx loaded ================
document.body.addEventListener('htmx:afterSettle', function(evt) {
    // evt.detail.parameters['auth_token'] = getAuthToken(); // add a new parameter into the mi
    console.log('htmx:afterSettle init')
    initScript()
});





// need for calculation
window.setTrueVw = function () {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--true-vw', `${vw}px`);
    console.log('screen size now is ' + vw + '*100')
}

setTrueVw();
window.addEventListener('resize', setTrueVw);

