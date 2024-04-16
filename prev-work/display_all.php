<?php

if ($mysqli->connect_errno){
	echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
echo $mysqli->host_info . "<br>";

//seaarch all files in database
$sql = "SELECT * FROM `database`;";
$result = $mysqli->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "Accession: " . $row["Accession"]. " -- Description: " . $row["Description"]. "-- Biological Process: " . $row["Biological Process"]. "<br>";
  }
} else {
  echo "0 results";
}

?>