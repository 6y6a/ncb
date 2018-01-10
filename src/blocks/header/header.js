$(document).ready(function() {
    var $menu, $toggle;

    $menu = $('.header__menu');
    $toggle = $menu.find('.header__burger');
    $link = $menu.find('.header__item');

    $toggle.on('click', function(){
        $(this).next('.header__list').toggleClass('header__list--active');
    });

    $link.on( 'click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).find('a').attr('href')).offset().top
        }, 1000);
    });
});