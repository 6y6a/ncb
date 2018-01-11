/**
 * Created by Gubin Alexey on 09.01.2018.
 */
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true
    });

    $('.examples__more').magnificPopup({
        type: 'image'
    });
});