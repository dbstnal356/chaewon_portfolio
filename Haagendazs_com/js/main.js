$(function () {

  AOS.init();

  let main_visualSwiper = new Swiper(".main_visual .slide", {
    loop: true,
    navigation: {
      nextEl: "main .main_visual .nextbtn",
      prevEl: "main .main_visual .prevbtn ",
    },

    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".main_visual .swiper-pagination", /*  class="swiper-pagination-bullet"*/
    }
  });

  /*     let con2Swiper = new Swiper(".con2_box1" , {
        loop:true,
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".con2_box1 .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".con2_box1 .swiper-button-next",
          prevEl: ".con2_box1 .swiper-button-prev",
        },
      }); */
  let con2Swiper = new Swiper(".con2_box1", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    // ✅ 반응형으로 설정

    breakpoints: {
      1920: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      740: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      0: {
        slidesPerView: 1.5,
        spaceBetween: 5,
      }
    },
    initialSlide: 2,
    loopedSlides: 5,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".con2_box1 .swiper-pagination",
    },
  });

  /* 헤더 390기준에 서브창 */
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close");

  hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });










});