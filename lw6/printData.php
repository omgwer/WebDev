<?php
$email = getPostParameter('email');
$fullPath = 'data/' . $email . '.txt';

if (file_exists($fullPath)) {
    $lines = file($fullPath);
    foreach ($lines as $line) {
        echo $line . '<br>';
    }
} else {
    echo 'File not exist!';
}

function getPostParameter(string $name): ?string
{
    return isset($_POST[$name]) ? $_POST[$name] : null;
}
