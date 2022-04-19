<?php
$user_name = "";
$user_email = "";
$category = "";
$spam_approve = "";

if ($_POST)
{
    $user_name = $_POST['user_name'];
    $user_email = $_POST['user_email'];
    $category = $_POST['category'];
    $spam_approve = $_POST['spam_approve'];

    function writeToFile($user_email, $user_name, $category, $spam_approve)
    {
        $fileName = 'data/' . strtolower($user_email) . '.txt';
        $dateString = "user-email = " .$user_email . "\n\r " . "user-name = " . $user_name . " \n\r" . "user-category = " . $category . "\n\r " . "spam-approve = " . $spam_approve;
        file_put_contents($fileName, $dateString, FILE_USE_INCLUDE_PATH);
    }

    writeToFile($user_email, $user_name, $category, $spam_approve);
}

include 'getData.php';