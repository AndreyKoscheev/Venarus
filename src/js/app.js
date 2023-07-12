import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();  

const iconMenu = document.querySelector('.burger-btn');
if (iconMenu) {   
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

const close = document.querySelector(".icon-cross");
if (close) {
    const disclaimerBody = document.querySelector('.disclaimer');
    close.addEventListener("click", function () {
        disclaimerBody.style = "display: none";
    })
}
//import Swiper   from 'swiper/bundle';
const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    allowTouchMove: true,
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    effect: "coverflow",
    grabCursor: true,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 300,
        modifier: 1,
        slideShadows: false
    },
    breakpoints: {
        // when window width is <= 768px
        768: {
            slidesPerView: 1,
            centeredSlides: true,
            effect: "slide",
           
        }
    }
  });