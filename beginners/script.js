const btn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav_mobile');


btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    btn.classList.toggle('close-btn_active');
    navMenu.classList.toggle('nav_mobile-show');
});


// console.log(btn);
// console.log(navMenu);
