<?php
//require_once 'getData.php';
$data = file_get_contents('php://input');
$_POST = json_decode($data, true);

$userName = getPostParameter('userName');
$userEmail = getPostParameter('userEmail');
$category = getPostParameter('category');
$spamApprove = getPostParameter('spamApprove');
validationInputData($userName, $userEmail, $category);
writeToFile($userEmail, $data);

function getPostParameter(string $name): string
{
    return isset($_POST[$name]) ? (string)$_POST[$name] : '';
}

function validationInputData($userName, $userEmail, $category)
{
    $errorMessage = [];
    if ($userName == '' || $userName == 'badName') {$errorMessage['Name'] = $userName . ' Name is undefined';}
    if ($userEmail == '' || $userEmail == 'badEmail@mail.ru')  {$errorMessage['Email'] = $userEmail . ' Email is undefined';}
    if ($category == '') {$errorMessage['Category'] = $category . ' Category is undefined';}
    if ($errorMessage != [])
    {
        badRequest($errorMessage);
    }
}

function badRequest(array $errorMessage)
{
    header('HTTP/1.1 400 BadRequest');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode($errorMessage));
}

function writeToFile($userEmail, $data) {
    $fileName = 'data/' . strtolower($userEmail) . '.txt';
    if (!is_dir('data/'))
    {
        $data = array('type' => 'error', 'message' => 'Directory not found!');
        header('HTTP/1.1 500 Server error');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode($data));
    }
    file_put_contents($fileName, $data, FILE_USE_INCLUDE_PATH);
}