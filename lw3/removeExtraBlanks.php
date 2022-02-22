<?php
$result = $_GET['text'];

$result = trim($result);

while (strpos($result, "  ") !== false) {
    $result = str_replace("  ", " ", $result);
}

echo $result;