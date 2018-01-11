/**
 * Created by Gubin Alexey on 10.01.2018.
 */

$(document).ready(function () {

    var $money = $('#money'),
        $month = $('#month'),
        $moneyTotal = $('#moneyTotal'),
        $monthTotal = $('#monthTotal'),
        $bank = $('#bank'),
        $mfo = $('#mfo'),
        $fiz = $('#fiz'),
        $im1 = $('#im1'),
        $im2 = $('#im2'),
        $im3 = $('#im3'),
        $result = $('#result'),
        $monthRes = $('#monthRes'),
        $handMoney = $('#hand-money'),
        $handMonth = $('#hand-month'),
        $calc = $('#calc-callback'),
        $code = $('#code');


    var result = {
        money: 2300000,
        month: 6,
        bank: 0,
        mfo: 0,
        fiz: 0,
        im: 0
    };

    $money.rangeslider({
        polyfill: false,

        onInit: function () {
            $moneyTotal.html($money.val());
        },

        onSlide: function (pos, val) {
            $moneyTotal.html(val);
            result.money = val;
            $(document).trigger('calc');
        }
    });

    $month.rangeslider({
        polyfill: false,

        onInit: function () {
            $monthTotal.html($month.val());
        },

        onSlide: function (pos, val) {
            $monthTotal.html(val);
            $monthRes.text(val + " месяцев");
            result.month = val;
            $(document).trigger('calc');
        }
    });

    $bank
        .add($mfo)
        .add($fiz)
        .add($im1)
        .add($im2)
        .add($im3)
        .iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });


    $bank.on('ifChecked', function () {
        result.bank = 1;
        $(document).trigger('calc');
    });

    $bank.on('ifUnchecked', function () {
        result.bank = 0;
        $(document).trigger('calc');
    });

    $mfo.on('ifChecked', function () {
        result.mfo = 1;
        $(document).trigger('calc');
    });

    $mfo.on('ifUnchecked', function () {
        result.mfo = 0;
        $(document).trigger('calc');
    });

    $fiz.on('ifChecked', function () {
        result.fiz = 1;
        $(document).trigger('calc');
    });

    $fiz.on('ifUnchecked', function () {
        result.fiz = 0;
        $(document).trigger('calc');
    });

    $im1.on('ifChecked', function () {
        result.im = 0;
        $(document).trigger('calc');
    });

    $im2.on('ifChecked', function () {
        result.im = 2.5;
        $(document).trigger('calc');
    });

    $im3.on('ifChecked', function () {
        result.im = 5;
        $(document).trigger('calc');
    });

    $handMoney.on('change focusout', function(){
        var value = parseInt($handMoney.val());

        if( value >= 500000 && value <= 40000000) {
            $money.val(value).change();
        }
    });

    $handMonth.on('change focusout', function(){
        var value = parseInt($handMonth.val());

        if( value >= 3 && value <= 10) {
            $month.val(value).change();
        }
    });

    $calc.on('click', function() {
        $code.val("Калькулятор cумма " + result.money +
            " месяцы " + result.month +
            " банк " + result.bank +
            " мфо " + result.mfo +
            " физ.лица " + result.fiz +
            " имущество " + result.im +
            " Общая сумма помесячно " + reCalc(result));
    });


    $moneyTotal.appendTo($money.next('.rangeslider').find('.rangeslider__handle'));
    $monthTotal.appendTo($month.next('.rangeslider').find('.rangeslider__handle'));

    $(document).on('calc', function () {
        $result.text(reCalc(result) + ' р');
    });

    $(document).trigger('calc');

    function reCalc(obj) {
        var value, key;

        key = calcRate(obj.money, obj.bank, obj.mfo, obj.fiz, obj.im) * obj.money / 100;


        value = (key - 25000) / result.month;

        return parseInt(value);
    }

    function calcRate(sum, bank, mfo, fiz, im) {
        var result = 0;

        if (sum < 500000) {
            result = 28;
        } else if (sum >= 500000 && sum < 800000) {
            result = 27;
        } else if (sum >= 800000 && sum < 900000) {
            result = 19;
        } else if (sum >= 900000 && sum < 1000000) {
            result = 18;
        } else if (sum >= 1000000 && sum < 1300000) {
            result = 17;
        } else if (sum >= 1300000 && sum < 1600000) {
            result = 16;
        } else if (sum >= 1600000 && sum < 1900000) {
            result = 15;
        } else if (sum >= 1900000 && sum < 2200000) {
            result = 13;
        } else if (sum >= 2200000 && sum < 2500000) {
            result = 12;
        } else if (sum >= 2500000 && sum < 3000000) {
            result = 11;
        } else if (sum >= 3000000 && sum < 3500000) {
            result = 10;
        } else if (sum >= 3500000 && sum < 4000000) {
            result = 9;
        }  else if (sum >= 4000000) {
            result = 8;
        }

        result += (bank * 1) / 10 + (mfo * 1) / 100 + (fiz * 1) / 1000 + im;

        return result;
    }


});

