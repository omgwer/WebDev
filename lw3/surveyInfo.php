<?php
header("Content-Type: text/plain");

$inputString = getGetParameter('email');

$existFileName = 'data/' . $inputString . '.txt';

if (file_exists($existFileName)) {
    $file = file($existFileName);
    foreach ($file as $i => $val) {
        echo $val . PHP_EOL;
    }
} else {
    echo 'Email не найден';
}

function getGetParameter(string $name): string
{
    return isset($_GET[$name]) ? (string)$_GET[$name] : '';
}
