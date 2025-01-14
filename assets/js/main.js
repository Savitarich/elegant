// HEADER
// Burger menu
const burgerMenu = document.querySelector(".header__menu-row");
const burgerBtn = document.querySelector(".header__burger-icon");
const burgerBtnClose = document.querySelector(".header__burger-close");
const overlay = document.querySelector('.overlay');
const body = document.body;

if (burgerBtn && burgerMenu && overlay) {
    burgerBtn.addEventListener("click", () => {
        burgerMenu.classList.add("active");
        overlay.classList.add("active");
        body.classList.add("lock");
    });
}

// Закрыть меню (по кнопке закрытия или overlay)
if (burgerBtnClose && overlay) {
    const closeMenu = () => {
        burgerMenu.classList.remove("active");
        overlay.classList.remove("active");
        body.classList.remove("lock"); 
    };

    burgerBtnClose.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
}

// HOME SLIDER
jQuery(document).ready(function ($) {
    $('.home-slider__slides').slick({
      dots: true, // Включаем точки навигации
      arrows: true, // Стрелки
      infinite: true, // Бесконечный скролл
      speed: 500, // Скорость переключения
      fade: false, // Плавный переход
      cssEase: 'ease-in-out', // Анимация переключения
      autoplay: true, // Автопрокрутка
      autoplaySpeed: 3000 // Задержка между слайдами
    });
});


//HOME PRODUCTS-CAROUSEL
document.querySelectorAll('.swiper-container').forEach((swiperContainer, index) => {
    swiperContainer.classList.add(`swiper-slider-${index}`);
    
    const dragSize = swiperContainer.dataset.dragSize || 50;
const freeMode = swiperContainer.dataset.freeMode === 'true';
const loop = swiperContainer.dataset.loop === 'true';
const slidesDesktop = swiperContainer.dataset.slidesDesktop || 4;
const slidesTablet = swiperContainer.dataset.slidesTablet || 3;
const slidesMobile = swiperContainer.dataset.slidesMobile || 2;
const slidesMobileSmall = swiperContainer.dataset.slidesMobileSmall || 1; // Исправление: добавлен новый параметр для маленьких мобильных устройств
const spaceBetween = swiperContainer.dataset.spaceBetween || 20;
  
    new Swiper(`.swiper-slider-${index}`, {
      direction: 'horizontal',
      loop,
      freeMode,
      spaceBetween,
      breakpoints: {
        992: {
          slidesPerView: parseInt(slidesDesktop, 10), // Десктоп: 4 слайда
        },
        621: {
          slidesPerView: parseInt(slidesTablet, 10), // Планшет: 3 слайда
        },
        480: {
          slidesPerView: parseInt(slidesMobile, 10), // Для экранов до 620px: 2 слайда
        },
        320: {
          slidesPerView: parseInt(slidesMobileSmall, 10), // Для экранов до 480px: 1 слайд
        },
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: parseInt(dragSize, 10),
      },
    });
  });