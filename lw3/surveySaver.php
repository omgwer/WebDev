<?php
$firstName = getGetParameter('first_name');
$lastName = getGetParameter('last_name');
$email = getGetParameter('email');
$age = getGetParameter('age');
$replaceArr = [$firstName, $lastName, $email, $age];
$firstNameWithText = 'First name: ' . $firstName;
$lastNameWithText = 'Last name: ' . $lastName;
$emailWithText = 'Email: ' . $email;
$ageWithText = 'Age: ' . $age;
$replaceArrWithText = [$firstNameWithText, $lastNameWithText, $emailWithText, $ageWithText];
$result = $firstNameWithText . PHP_EOL . $lastNameWithText . PHP_EOL . $emailWithText . PHP_EOL . $ageWithText;

if ($email == '') {
    echo 'Email не задан!';
} else {
    writeToFile($email, $result, $replaceArr, $replaceArrWithText);
}

function getGetParameter(string $name): string
{
    return isset($_GET[$name]) ? (string)$_GET[$name] : '';
}

function writeToFile($email, $result, $replaceArr, $replaceArrWithText)
{
    $fileName = 'data/' . $email . '.txt';

    if (!file_exists($fileName)) {
        file_put_contents($fileName, $result, FILE_USE_INCLUDE_PATH);
    } else {
        $replaceText = replaceText($fileName, $replaceArr, $replaceArrWithText);
        file_put_contents($fileName, $replaceText, FILE_USE_INCLUDE_PATH);
    }
}

function replaceText($fileName, $replaceArr, $replaceArrWithText) : array
{
    $inputString = file($fileName);
    foreach ($inputString as $i => $val) {        // бежим по массиву, если не пробел меняем текст
        if ($replaceArr[$i] != '') {
            $inputString[$i] = $replaceArrWithText[$i] . PHP_EOL;
        }
    }
    return $inputString;
}





