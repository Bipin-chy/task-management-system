<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept');
header('Content-Type: application/json');


$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "task_management_system";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM Register");

$data = array();

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo "Data is " . json_encode($data);

$conn->close();
