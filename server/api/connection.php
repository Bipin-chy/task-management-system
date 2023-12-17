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

$conn->close();
