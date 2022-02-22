<?php
//Разработайте PHP приложение Check Identifier, которое проверяет является ли
// переданный в GET параметр identifier идентификатором по правилу SR3.
// Программа должна выводить yes или no, а также поясняющую информацию в том случае,
// если переданная строка не является идентификатором.
//              <идентификатор> ::= <буква>
//			    | <идентификатор><буква>
//			    | <идентификатор><цифра>
//Для проверки цифр и букв используйте функции is_numeric и ctype_alpha. Проверять нужно только английские буквы.

$isIdentifier = $_GET['identifier'];
$res = 'YES';

if (is_numeric($isIdentifier[0]) == 0) {
    $res= 'NO';
    }
else {
    for ($i = 1; $i < strlen($isIdentifier); $i++) {
        if (!is_numeric($isIdentifier[$i]))
        {
            if (!ctype_alpha($isIdentifier[$i])) {
                $res = 'NO';
            }
        }
    }
}

echo $isIdentifier;
echo PHP_EOL;
echo $res;
