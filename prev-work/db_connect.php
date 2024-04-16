<?php
// four variable to connect to database
$host = "localhost";
$username = "root";
$password = "usbw";
$database_in_use = "test";

//connect database to webserver
$mysqli = new mysqli($host, $username,  $password, $database_in_use);
?>