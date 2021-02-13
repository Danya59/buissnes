const header = document.querySelector(".header");

window.addEventListener("scroll", checkScroll);

document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll(){
	let scrollPos = window.scrollY;
	if(scrollPos > 0){
		header.classList.add('redy');
	}else{
		header.classList.remove('redy');
	}
}


$(document).ready(function(){
    $(".menu__nav, .button").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger, .menuu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//          ЭТО ЧТОБЫ МЕНЮ
	//   ЗАКРЫВАЛОСЬ ПРИ КЛИКЕ НА ССЫЛКУ
	$('.menuLLink').click(function(e) {
		e.preventDefault();
		$('.menuu').toggleClass('active');
	})
});