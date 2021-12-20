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
});
// скролл
$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
// прокрутка
$(document).ready(function(){
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {
  
      // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
      if (this.hash !== "") {
        // Запретить поведение щелчка якоря по умолчанию
        event.preventDefault();
  
        // Хранить хэш
        var hash = this.hash;
  
        // Использование метода animate() jQuery для добавления плавной прокрутки страницы
        // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
          window.location.hash = hash;
        });
      }
    });
  });
