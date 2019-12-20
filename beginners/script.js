// отключение скрола
const scroll = (value) => {document.body.style = `overflow-y: ${value}`};


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

const sliderMove = (number) => {sliderList.style.transform = `translateX(${number * 100}%)`};
let count = 0;

const autoMoveSliders = () => {
    if (count >  -sliderEnd) {
        count -= 1;
        sliderMove(count);
        sliderList.style.transition = '.7s'
    }
    else {
        count = 0;
        sliderMove(count);
        sliderList.style.transition = '.7s'
    }
};

setInterval(autoMoveSliders, 4000);

arrowLeft.addEventListener('click', (e) => {
    e.preventDefault();
    if (count < 0) {
        count += 1;
        sliderMove(count);
    } else {
        count = -sliderEnd;
        sliderMove(count);
    }
});

arrowRight.addEventListener('click', (e) => {
    e.preventDefault();
    if (count >  -sliderEnd) {
        count -= 1;
    sliderMove(count);
    } else {
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
                scroll('hidden');
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
        parent.classList.remove('menu__item_active');
    });
});

// закрытие модольнык окна
const reviewsModal = document.querySelector('.modal__reviews');
const reviewsBtn = document.querySelectorAll('.reviews__btn');
const reviewsClose = document.querySelector('.modal__reviews_close');

formClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalForm.classList.remove('modal_show');
    scroll('auto');

});

reviewsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        reviewsModal.classList.add('modal_show');
        scroll('hidden');
    });
});

reviewsClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    reviewsModal.classList.remove('modal_show');
    scroll('auto');

});


// пагинация
const content = document.querySelector('.wrapper__content');
const sliderMoveY = (number) => {content.style.transform = `translateY(${-number * 100}%)`};
let length = content.children.length -1;
let countPage = 0;

// const OnePageScroll =
window.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowDown') {
        if (countPage < length) {
            countPage += 1;
            sliderMoveY(countPage);
        } else {
            countPage = length;
        }
    }
});
window.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowUp') {
       if (countPage > 0) {
           countPage -= 1;
           sliderMoveY(countPage);
       } else {
           countPage = 0;
       }
    }
});

window.addEventListener('wheel', (evt) => {
    let delta = evt.deltaY;

    if (delta >= 0) {
        if (countPage < length) {
            countPage += 1;
            sliderMoveY(countPage);
        } else {
            countPage = length;
        }
    }
    if (delta < 0) {
        if (countPage > 0) {
            countPage -= 1;
            sliderMoveY(countPage);
        } else {
            countPage = 0;
        }
    }
});

// карта

let marksArr = [
    [59.95251655256589, 30.305354801650306],
    [59.940115955176864, 30.3625180401757],
    [59.9198688719761, 30.361831394667888],
    [59.913318225357315, 30.299861637587817]
];
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.9332247231502, 30.336768833632735],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12,
        controls: []
    });

    // myMap.events.add('click', function (e) {
    //     // Получение координат щелчка
    //     let coords = e.get('coords');
    //     createPoint(coords);
    // });
    marksArr.forEach(coords => {
        createPoint(coords)
    });

    function createPoint(coords) {
        let myPlacemark = new ymaps.Placemark(coords, {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
        myMap.geoObjects.add(myPlacemark);
    }
}
