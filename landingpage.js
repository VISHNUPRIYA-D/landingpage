const swiper = new Swiper('.swiper-wrapper', {
  grapCursor:true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
      slideperview:1
    },
    620:{
      slideperview:2
    },
    1024:{
      slideperview:3
    }
  }
});