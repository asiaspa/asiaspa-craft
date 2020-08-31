// module 
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/blur-up/ls.blur-up';

import 'alpinejs';
import "intersection-observer";
import scrollama from "scrollama";
import sal from 'sal.js';
import Chocolat from 'chocolat'
// import mediumZoom from 'medium-zoom';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; 

// not yet
import Swiper from 'swiper/bundle'; // import Swiper styles
// import 'swiper/swiper-bundle.css';


// key - retrigger script after htmx works
function initScript() {
    console.log('initScript() Run');
    sal();
    // mediumZoom('[data-zoomable]');
    tippy('[data-tippy-content]');
    
    const swiperCarousel = new Swiper('.js-swiper-carousel', {
        // Optional parameters
        // loop: true,
        // autoHeight: true,
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

    const swiperImageSlider = new Swiper('.js-swiper-image-slider', {
        // loop: true,
        // autoHeight: true,
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

    const swiperProductCarousel = new Swiper('.js-swiper-product-carousel', {
        // loop: true,
        spaceBetween: 24,
        // autoHeight: true,
        speed: 300,
        slidesPerView: 2,
        slidesPerGroup: 2,
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
    
    const swiperSpaCarousel = new Swiper('.js-swiper-spa-carousel', {
        // loop: true,
        spaceBetween: 24,
        // autoHeight: true,
        speed: 300,
        slidesPerView: 'auto',
        // slidesPerGroup: 2,
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


    const scroller = scrollama();
    scroller.setup({
            step: ".js-step",
        })
        .onStepEnter(response => {
            document.querySelectorAll(".js-step").forEach((el) => {
                if (el.isSameNode(response.element)) {} else {
                    el.classList.add("md:opacity-0", "md:invisible");
                    el.classList.remove("md:opacity-100");
                }
            });
            response.element.classList.remove("md:opacity-0", "md:invisible");
            response.element.classList.add("md:opacity-100");
        })
        .onStepExit(response => {

    });

    // setup resize event
    window.addEventListener("resize", scroller.resize)  ;

    Chocolat(document.querySelectorAll('.chocolat-image'), {
        // options here
    })

}

// ================ trigger script when window.onload ================ 
window.onload = function () {
    console.log('window onload');
    initScript();
    
}

// ================ trigger script when htmx loaded ================
document.body.addEventListener('htmx:afterSettle', function(evt) {
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

