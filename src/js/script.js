const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElm = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElm.addEventListener('click', () => {
    menu.classList.remove('active');
});