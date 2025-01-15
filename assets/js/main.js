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

// BANNER EXPIRE TIMER
const deadline = new Date('2025-03-28T00:00:00'); // Задайте вашу дату окончания
function updateCountdown() {
    const now = new Date();
    const timeLeft = deadline - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        document.getElementById('banner-expire-days').textContent = String(days).padStart(2, '0');
        document.getElementById('banner-expire-hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('banner-expire-minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('banner-expire-seconds').textContent = String(seconds).padStart(2, '0');
    }
}
updateCountdown();
setInterval(updateCountdown, 1000);

// SIGN IN/SIGN UP POPUP
document.addEventListener("DOMContentLoaded", () => {
    const signPopup = document.querySelector(".sign-popup");
    const privateBtn = document.querySelector(".header__private");
    const signInBtn = document.querySelector(".header__sign-in-btn");
    const signPopupBtnClose = document.querySelector(".sign-popup__close");
    
    const openPopup = () => {
      signPopup.classList.remove("hidden");
      body.classList.add("lock");
    } 
    privateBtn.addEventListener("click", openPopup);
    signInBtn.addEventListener("click", openPopup);


    const closePopup = () => {
      signPopup.classList.add("hidden");
      body.classList.remove("lock");
    } 
    signPopupBtnClose.addEventListener("click", closePopup);
});


const buttonsToggleSignInUp = document.querySelectorAll('.sign-popup__btn-togle');
const signInRow = document.getElementById('sign-in-row');
const signUpRow = document.getElementById('sign-up-row');

buttonsToggleSignInUp.forEach(button => {
  button.addEventListener('click', () => {
    signInRow.classList.toggle('hidden');
    signUpRow.classList.toggle('hidden');
  });
});

// MINI CART
document.addEventListener("DOMContentLoaded", function () {
  const minusBtns = document.querySelectorAll(".qty-btn.minus");
  const plusBtns = document.querySelectorAll(".qty-btn.plus");
  const miniCart = document.querySelector(".mini-cart");
  const closeBtn = document.querySelector(".mini-cart__close");
  const openCartBtns = document.querySelectorAll(".header__cart");

  minusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const input = this.nextElementSibling;
      const currentValue = parseInt(input.value, 10);
      if (currentValue > parseInt(input.min, 10)) {
        input.value = currentValue - 1;
      }
    });
  });

  plusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const input = this.previousElementSibling;
      const currentValue = parseInt(input.value, 10);
      input.value = currentValue + 1;
    });
  });

  closeBtn.addEventListener("click", function () {
    miniCart.classList.add("hidden");
  });

  miniCart.addEventListener("click", function (e) {
    if (e.target === miniCart) {
      miniCart.classList.add("hidden");
    }
  });

  openCartBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      miniCart.classList.remove("hidden");
    });
  });
});

