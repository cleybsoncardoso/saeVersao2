<?php
	include 'mySQL.php';
	require 'mySQL.php';
?>
<?php 
	$the_request = &$_GET;
	if (isset($_GET["registro"])){
		if ($_GET["registro"] != ""){
			$registro= $_GET["registro"];
			$sql = "SELECT * FROM saeapp_paciente where Registro = '$registro'";
			$result = $con->query($sql);
			$numrow = $result->num_rows;
			if($numrow == 1){
				echo json_encode($result->fetch_assoc());
			} else {
				echo json_encode(false);
			}
		} 

	} 
?>