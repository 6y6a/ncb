$(document).ready(function () {
    $('.answers__trigger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('answers__trigger--active');

        var $text = $(this).next();

        if ($text.css('max-height') == '0px') {
            $text.css({
                'max-height': $text[0].scrollHeight + 'px',
                'opacity': '1'
            })
        } else {
            $text.css({
                'max-height': '0px',
                'opacity': '0'
            });
        }
    });


});