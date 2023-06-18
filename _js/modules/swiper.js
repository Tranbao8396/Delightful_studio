import Swiper from 'swiper/bundle';

var swiper_fv = document.querySelector(".swiper-fv");

if (swiper_fv) {
  const swiperFv = new Swiper(swiper_fv, {
    speed: 2500,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true
    },
  });
}
