<?php
include "db_connect.php"; 

$keywordfromform = $_GET["keyword"];
 

$sql = "SELECT * FROM `database` WHERE Description LIKE '%$keywordfromform%'";
echo "<h2>Show all data with keyword $keywordfromform</h2>"; 
$result = $mysqli->query($sql);
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "Accession: " . $row["Accession"]. " -- Description: " . $row["Description"]. "-- Biological Process: " . $row["Biological Process"]. "<br>";
  }
} else {
  echo "0 results";
}

?>