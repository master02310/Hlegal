// Инициализация слайдера slick
$(document).ready(function () {
    $(".section_three__slider").slick({
        dots: true,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        mobileFirst: true,
    });
});

// Инициализация вкладок jQuery UI
$(function () {
    $("#tabs").tabs();
});

// Логика бургер-меню
document.addEventListener("DOMContentLoaded", () => {
    const burgerCheckbox = document.getElementById("burger");
    const burgerExit = document.querySelector(".burger_exite");
    const overlay = document.querySelector(".burger__overlay");

    if (burgerCheckbox && burgerExit && overlay) {
        // закрытие по крестику
        burgerExit.addEventListener("click", () => {
            burgerCheckbox.checked = false;
        });

        // закрытие по клику вне меню
        overlay.addEventListener("click", () => {
            burgerCheckbox.checked = false;
        });
    }
});
