const btn = document.querySelector('.close-btn');

// закрытие нав меню
const navMenu = document.querySelector('.nav_mobile');
btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    btn.classList.toggle('close-btn_active');
    navMenu.classList.toggle('nav_mobile-show');
});

//переключение в секции команда
const accordItems = document.querySelectorAll('.accordion__item');

accordItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('accordion__item_active')) {
            item.classList.remove('accordion__item_active');
        } else {
            accordItems.forEach(item => {
                item.classList.remove('accordion__item_active');
            });
            item.classList.toggle('accordion__item_active');
        }
    })
});

// слайдер
const arrowLeft = document.querySelector('.slider__arrow-left');
const arrowRight = document.querySelector('.slider__arrow-right');
const sliderList = document.querySelector('.slider__list');
let current = 0;
let count = 0;

arrowLeft.addEventListener('click', (e) => {
    e.preventDefault();
    current = sliderList.offsetWidth;

    if (count < 0) {
        count += current;
        sliderList.style.transform = `translateX(${count}px)`;
    }
    else {
        count = -current * 2;
        sliderList.style.transform = `translateX(${-current * 2}px)`;
    }
});
arrowRight.addEventListener('click', (e) => {
    e.preventDefault();
    current = -sliderList.offsetWidth;

    if (count >  current * (sliderList.childElementCount - 1)) {
        count += current;
        sliderList.style.transform = `translateX(${count}px)`;
    }
    else {
        // count = current * (sliderList.childElementCount - 1);
        count = 0;
        sliderList.style.transform = 'translateX(0px)';
    }
});

// карта

// const map = document.querySelector('.contacts__map-block');

// ymaps.ready(init);
// function init(){
//     // Создание карты.
//     var myMap = new ymaps.Map("map", {
//         // Координаты центра карты.
//         // Порядок по умолчанию: «широта, долгота».
//         // Чтобы не определять координаты центра карты вручную,
//         // воспользуйтесь инструментом Определение координат.
//         center: [55.76, 37.64],
//         // Уровень масштабирования. Допустимые значения:
//         // от 0 (весь мир) до 19.
//         zoom: 7
//     });
// }
