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
    on: {
      slideChangeTransitionStart: function () {
        $('.fv-lead').hide( "fade", { direction: "down" }, 500 );
      },
      slideChangeTransitionEnd: function () {
        $('.fv-lead').show( "fade", { direction: "up" }, 500 );
      },
    } 
  });
}

var swiper_image = document.querySelector(".swiper-about");

if (swiper_image) {
  const swiperImg = new Swiper(swiper_image, {
    speed: 2500,
    spaceBetween: 40,
    slidesPerView: "auto",
    centeredSlides: true,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
}