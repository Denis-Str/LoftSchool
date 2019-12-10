const btn = document.querySelector('.close-btn');

// закрытие нав меню
const navMenu = document.querySelector('.nav_mobile');
btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    btn.classList.toggle('close-btn_active');
    navMenu.classList.toggle('nav_mobile-show');
});

//переключение аккордиона
const accordItems = document.querySelectorAll('.accordion__item');
const menuItems = document.querySelectorAll('.menu__item');

const accordToggle = (arrList, activeClass) => {
    arrList.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains(activeClass)) {
                item.classList.remove(activeClass);
            } else {
                arrList.forEach(item => {
                    item.classList.remove(activeClass);
                });
                item.classList.toggle(activeClass);
            }
        })
    });
};

accordToggle(accordItems, 'accordion__item_active');
accordToggle(menuItems, 'menu__item_active');


// слайдер
const arrowLeft = document.querySelector('.slider__arrow-left');
const arrowRight = document.querySelector('.slider__arrow-right');
const sliderList = document.querySelector('.slider__list');
const sliderEnd = sliderList.childElementCount - 1;

let current = sliderList.offsetWidth;
let count = 0;


const sliderMove = (number) => {sliderList.style.transform = `translateX(${number}px)`};

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
const modal = document.querySelector('.send-modal');
const modalClose = document.querySelector('.send-modal_close');

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
    // if (formValidate(form)) {
    //     modal.classList.add('send-modal_show');
    // }
    if (formValidate(form)) {
        let formData = new FormData(form);
        formData.append('to', 'exp@mail.com');
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formData);
        xhr.addEventListener('load', ()=> {
            if (console.log(xhr.response.status === true)) {
                console.log(xhr.response.status);
            }
        });
    }
});

// закрытие модольного окна формы

modalClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('send-modal_show');
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
