$(document).ready(function() {

    var $code = $('#code')
        $callback = $('#callback'),
        $question = $('#question'),
        $calc = $('#calc-callback');


    $callback.on('click', function() {
       $code.val("Заказать звонок шапка");
    });

    $callback.magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-3d-unfold'
    });

    $question.on('click', function() {
        $code.val("Заказать обратный звонок, остались вопросы?");
    });

    $question.magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-3d-unfold'
    });

    $calc.magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-3d-unfold'
    });
});