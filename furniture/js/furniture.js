$(function(){

    document.querySelectorAll('.fav').forEach(btn => {
  btn.addEventListener('click', () => {
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    const path = btn.querySelector('path');
    if (!pressed) { path.setAttribute('fill','currentColor'); path.setAttribute('stroke','currentColor'); }
    else { path.setAttribute('fill','none'); path.setAttribute('stroke','currentColor'); }
  });
});




const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 25,
  pagination: { el: ".swiper-pagination", type: "fraction" },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },

  // 해상도별 비율 조절
  breakpoints: {
    1280: { slidesPerView: 3.5, spaceBetween: 24 }, // 데스크톱
    1024: { slidesPerView: 3,   spaceBetween: 22 }, // 태블릿 가로
    620:  { slidesPerView: 2.25,spaceBetween: 20 }, // 태블릿 세로
    500:  { slidesPerView: 1.5, spaceBetween: 18 }, // 큰 모바일
    0:    { slidesPerView: 1.1, spaceBetween: 16 }, // 작은 모바일
  },
});


    var appendNumber = 4;
    var prependNumber = 1;

    


})