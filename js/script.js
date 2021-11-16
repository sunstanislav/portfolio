//скрипт меню
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElm = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElm.addEventListener('click', () => {
    menu.classList.remove('active');
});
//скрипт автоматического пересчета процентов
const counters = document.querySelectorAll('.skills__rating-counter'),
      lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});