<!DOCTYPE html>
<html>
<head>
</head>
<body>

<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','sintese>marketing','usuarios');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT entrantes FROM entrantes_diarios WHERE data = '".$q."'";
$result = mysqli_query($con,$sql);

mysqli_close($con);
?>
</body>
</html>