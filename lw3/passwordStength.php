<?php
//3) #10 Разработайте программу для проверки надежности пароля Password Strength. В GET параметре password передается пароль для анализа. Пароль может состоять только из английских символов в верхнем и нижнем регистрах, а также из цифр.
//Надежность пароля вычисляется по следующему принципу, (len это длинна пароля)
//Изначально считаем надежность равной 0.
//К надежности прибавляется (4*n), где n - количество всех символов пароля
//К надежности прибавляется +(n*4), где n - количество цифр в пароле
//К надежности прибавляется +((len-n)*2) в случае, если пароль содержит n символов в верхнем регистре, если символов в верхнем регистре нет, то ничего не прибавляется
//К надежности прибавляется +((len-n)*2) в случае, если пароль содержит n символов в нижнем регистре, если символов в нижнем регистре нет, то ничего не прибавляется
//Если пароль состоит только из букв вычитаем число равное количеству символов.
//Если пароль состоит только из цифр вычитаем число равное количеству символов.
//За каждый повторяющийся символ в пароле вычитается количество повторяющихся символов
//Например: abcd1a, вычитаем -2 по скольку символ a встречается дважды. Программа должна выводить на экран надежность пароля в виде числа.
//случае, если в каком-то из правил n=0, то расчёт для этого правила не производится.

//$inputString = $_GET['password'];
$testInputString = 'asdb123421AD';

function initArray($inputString): array  // инициализируем массив описывающий состояние строки для последующей обработки
{
    $initArray = [
        "counterDigits" => 0,
        "counterSymbols" => 0,
        "counterUpperCaseSymbols" => 0,
        "counterLowerCaseSymbols" => 0,
        "isOnlySymbolsDecrement" => 0,
        "isOnlyDigitsDecrement" => 0,
        "countRepeatedSymbols" => 0
    ];

    for ($i = 0; $i < strlen($inputString); $i++) {            // считаем количество Lower and upper symbols
        if (is_numeric($inputString[$i])) {
            $initArray['counterSymbols']++;
        } elseif (ctype_alpha($inputString[$i])) {
            $initArray['counterDigits']++;
        }
    }

    if ($initArray['counterSymbols'] != 0) {                     // считаем количество lower and upper symbols
        for ($i = 0; $i < strlen($inputString); $i++) {
            if (ctype_upper($inputString[$i])) {
                $initArray['counterUpperCaseSymbols']++;
            } else {
                $initArray['counterLowerCaseSymbols']++;
            }
        }
    }



    return $initArray;
}

//function getQuantity($inputString): int   // считаем символы или цифры, в зависимости от параметров.
//{
//    $counter = 0;
//
//    return $counter;
//}


initArray($testInputString);

echo 'Password security is = ';