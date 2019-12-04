const btn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav_mobile');
const arrowLeft = document.querySelector('.slider__arrow-left');
const arrowRight = document.querySelector('.slider__arrow-right');
const sliderList = document.querySelector('.slider__list');

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    btn.classList.toggle('close-btn_active');
    navMenu.classList.toggle('nav_mobile-show');
});

arrowLeft.addEventListener('click', (e) => {
    e.preventDefault();
    sliderList.style.transform = 'translate(-940px, 0)';
});
arrowRight.addEventListener('click', (e) => {
    e.preventDefault();
    sliderList.style.transform = 'translate(940px, 0)';
});


console.log(arrowLeft);
console.log(sliderList);
