<?php
    $text = "ФИО покупателя: " . $_POST["name"] . "\r\n";
    $text .= "Номер телефона: " . $_POST["phone"] . "\r\n";
    $text .= "Код формы: " . $_POST["code"];

    mail("gubinalexeymain@gmail.com", "Лендинг заявка", $text);
    mail("call.center.bankrotstvo.476@gmail.com", "Лендинг заявка", $text);

    echo '<script>location.replace("http://#");</script>';
    exit();
?>