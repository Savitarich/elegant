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
