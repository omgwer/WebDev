<?php
//require_once 'getData.php';
$data = file_get_contents('php://input');
$_POST = json_decode($data, true);

$userName = getPostParameter('userName');
$userEmail = getPostParameter('userEmail');
$category = getPostParameter('category');
$spamApprove = getPostParameter('spamApprove');
validationInputData($userName, $userEmail, $category, $spamApprove);
writeToFile($userEmail, $data);

function getPostParameter(string $name): string
{
    return isset($_POST[$name]) ? (string)$_POST[$name] : '';
}

function validationInputData($userName, $userEmail, $category, $spamApprove)
{
    $errorMessage = '';
    if ($userName == '' || $userName == 'badName') {$errorMessage = $errorMessage . ' userName undefined';}
    if ($userEmail == '' || $userEmail == 'badEmail@mail.ru') {$errorMessage = $errorMessage . ' userEmail undefined';}
    if ($category == '') {$errorMessage = $errorMessage . ' userCategory undefined';}
    if ($errorMessage != '')
    {
        badRequest($errorMessage);
    }
}

function badRequest(string $errorMessage)
{
    $data = array('type' => 'error', 'message' => 'BadRequestTest! ' . $errorMessage);
    header('HTTP/1.1 400 BadRequest');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode($data));
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