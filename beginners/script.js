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
        });
        item.classList.add('accordion__item_active');
        item.addEventListener('click', ()=> {
            item.classList.toggle('accordion__item_active');
        })
    });
});

// слайдер
const arrowLeft = document.querySelector('.slider__arrow-left');
const arrowRight = document.querySelector('.slider__arrow-right');
const sliderList = document.querySelector('.slider__list');

arrowLeft.addEventListener('click', (e) => {
    e.preventDefault();
    sliderList.style.transform = 'translate(-940px, 0)';
});
arrowRight.addEventListener('click', (e) => {
    e.preventDefault();
    sliderList.style.transform = 'translate(940px, 0)';
});


