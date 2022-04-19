<?php
function getPostParameter(string $name): ?string
{
    return isset($_POST[$name]) ? $_POST[$name] : null;
}

$email = getPostParameter('email');
$fullPath = "data/" . $email . '.txt';

if (file_exists($fullPath))
{
    $lines = file($fullPath);
}

if ($lines)
{
  foreach ($lines as $line)
  {
      echo $line . "<br>";      
  }
}
else
{
    echo "Данного файла не существует";
}