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

accordItems.forEach((item, index, list) => {
    item.addEventListener('click', (event) => {
        list.forEach(classItem => {
            classItem.classList.remove('accordion__item_active');
            item.classList.add('accordion__item_active');
        });
        item.addEventListener('click', ()=> {
            item.classList.toggle('accordion__item_active');
        })
    });
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
        count = 0;
        // sliderList.style.transform = `translateX(${-current * 2}px)`;
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
        count = current * (sliderList.childElementCount - 1);
        // sliderList.style.transform = 'translateX(0px)';
    }
});

