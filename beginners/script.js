//переключение аккордиона
const accordItems = document.querySelectorAll('.accordion__item');
const accordLinks = document.querySelectorAll('.accordion__subtitle');

const menuItems = document.querySelectorAll('.menu__item');
const menuLinks = document.querySelectorAll('.menu__name');

const accordToggle = (items, links, activeClass) => {
    links.forEach(clickItem => {
        clickItem.addEventListener('click', (evt) => {
            evt.preventDefault();
            let item = clickItem.parentNode;
            if (item.classList.contains(activeClass)) {
                item.classList.remove(activeClass);
            } else {
                items.forEach(item => {
                    item.classList.remove(activeClass);
                });
                item.classList.toggle(activeClass);
            }
        });
    })
};

accordToggle(accordItems, accordLinks, 'accordion__item_active');
accordToggle(menuItems, menuLinks, 'menu__item_active');

// слайдер
const arrowLeft = document.querySelector('.slider__arrow-left');
const arrowRight = document.querySelector('.slider__arrow-right');
const sliderList = document.querySelector('.slider__list');
const sliderEnd = sliderList.childElementCount - 1;

let current = sliderList.offsetWidth;
let count = 0;

const sliderMove = (number) => {sliderList.style.transform = `translateX(${number}px)`};

const autoMoveSliders = () => {
    if (count >  -current * sliderEnd) {
        count -= current;
        sliderMove(count);
    }
    else {
        count = 0;
        sliderMove(count);
    }
};

setInterval(autoMoveSliders, 4000);

arrowLeft.addEventListener('click', (e) => {
    e.preventDefault();

    if (count < 0) {
        count += current;
        sliderMove(count);
    }
    else {
        count = -current * 2;
        sliderMove(count);
    }
});

arrowRight.addEventListener('click', (e) => {
    e.preventDefault();
    if (count >  -current * sliderEnd) {
        count -= current;
        sliderMove(count);
    }
    else {
        count = 0;
        sliderMove(count);
    }
});

// форма
const form = document.querySelector('.form');
const sendBtn = document.querySelector('.form__send');
const modalForm = document.querySelector('.modal__send');
const formClose = document.querySelector('.modal__send_close');

// перебор элементов формы
const formElements = (form) => {
    let arr = [];
    for (let i = 0; i < form.length; i++) {
        if (form[i].type !== 'submit' && form[i].type !== 'reset')
        arr.push(form[i]);
    }
    return arr;
};

//Проверка полей формы
const formValidate = (form) => {
  let valid = true;
    formElements(form).forEach(elem => {
        if (!fieldValidate(elem)) {
            valid = false;
        }
    });
    console.log('formValidate ' + valid);
    return valid;
};

//Проверка поля
const fieldValidate = (elem) => {
    if (elem.type === 'text' || elem.type === 'textarea') {
        elem.nextElementSibling.textContent = elem.validationMessage;
    }
    return elem.checkValidity();
};

// получение значений полей из формы
// const formDate = (form) => {
//     let date = {};
//     formElements(form).forEach(item => {
//         let nameElem = item.name;
//         if (item.type === 'text' || item.type === 'textarea') {
//             date[nameElem] = item.value;
//         }
//         if (item.type === 'checkbox') {
//             item.checked ? date.call = ('Не перезванивать') : date.call = 'Перезванивать';
//         }
//     });
//     (form.elements.payment.value === 'cash') ?
//         date.payment = 'Потребуется сдача' :
//         date.payment =  'Оплата по карте';
//
//     date.to = 'test@test.ru';
//     return date;
// };

// отправка формы
sendBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (formValidate(form)) {
        let formData = new FormData(form);
        formData.append('to', 'exp@mail.com');
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formData);
        xhr.addEventListener('load', ()=> {
            if (xhr.response.status === 1) {
                modalForm.classList.add('modal_show');
            }
        });
    }
});

// закрытие нав меню
const btn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav_mobile');

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    btn.classList.toggle('close-btn_active');
    navMenu.classList.toggle('nav_mobile-show');
});

// закрытие меню на мобильной версии
const menuBtn = document.querySelectorAll('.menu__item_close');

menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let parent = btn.parentNode;
        parent.classList.remove('menu__item_active')
    });
});

// закрытие модольнык окна
const reviewsModal = document.querySelector('.modal__reviews');
const reviewsBtn = document.querySelectorAll('.reviews__btn');
const reviewsClose = document.querySelector('.modal__reviews_close');

console.log(reviewsBtn);

formClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalForm.classList.remove('modal_show');
});

reviewsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        reviewsModal.classList.add('modal_show');
    });
});

reviewsClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    reviewsModal.classList.remove('modal_show');
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
