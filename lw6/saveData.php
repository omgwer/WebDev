<?php
require_once 'getData.php';

if ($_POST) {
    $userName = getGetParameter('user_name');
    $userEmail = getGetParameter('user_email');
    $category = getGetParameter('category');
    $spamApprove = getGetParameter('spam_approve');
    writeToFile($userEmail, $userName, $category, $spamApprove);
}

function getGetParameter(string $name): string
{
    return isset($_GET[$name]) ? (string)$_GET[$name] : '';
}

function writeToFile($userEmail, $userName, $category, $spamApprove) {
    $fileName = 'data/' . strtolower($userEmail) . '.txt';
    $dateString = "user-email = " . $userEmail . "\n\r " . "user-name = " . $userName . " \n\r" . "user-category = "
        . $category . "\n\r " . "spam-approve = " . $spamApprove;
    file_put_contents($fileName, $dateString, FILE_USE_INCLUDE_PATH);
}