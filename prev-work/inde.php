<html>
<head>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</head>

<body>
<h1>Proteomics Database by Prof. Renu Deswal<h1>

<?php

include "db_connect.php";
 
//include "display_all.php"; 

?>
  


<form class="form-horizontal" action="search_keyword.php">
<fieldset>

<!-- Form Name -->
<legend>Search for your protein of interest</legend>

<!-- Search input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="keyword">Enter a suitable keyword (Do not use special characters such as @ or # symbol)</label>
  <div class="col-md-5">
    <input id="keyword" name="keyword" type="search" placeholder="e.g. Actin, Sucrose, P02580.2" class="form-control input-md" required="">
    <p class="help-block">Enter a search keyword relevant to your interest of protein. It could be its accession number or a description</p>
  </div>
</div>

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="Submit"></label>
  <div class="col-md-4">
    <button id="Submit" name="Submit" class="btn btn-primary">Search</button>
  </div>
</div>

</fieldset>
</form>








<?php
//include "search_keyword.php";


$mysqli->close();



?>

</body>

</html>