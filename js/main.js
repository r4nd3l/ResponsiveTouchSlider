// Default DevCorner JavaScript Setting
var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,   // 0 - 60
        stretch: 0,
        depth: 100,   // 100 - 500
        modifier: 1,  // 1 - 5
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
