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
// отправка сообщения
$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset');
    });
    return false;
})