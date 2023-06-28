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
import Swiper   from 'swiper/bundle';
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    initialSlide: 1,
    grabCursor: true,
    // spaceBetween: 28,
    // allowTouchMove: true,
    loop: true,
    // slideToClickedSlide: true,
    // autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
//     effect: 'creative',
//     creativeEffect: {
//         limitProgress: 2,
//   },
   
   
  });