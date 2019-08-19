$('.fa-times, .fa-bars').on("click", function () {
    $('.active').toggleClass('off');
})

$('li a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1000);
})


const $articles = document.querySelectorAll('.anim');

$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    for (let i = 0; i < $articles.length; i++) {
        if (scrollValue > $articles[i].offsetTop + $articles[i].offsetHeight - windowHeight - 150) {
            $articles[i].classList.add('active');
        }
    }

    const $p = $('.special>p');
    if (scrollValue > $p.offset().top + $p.height() - windowHeight + 50) {
        $p.addClass('active');
    }
})