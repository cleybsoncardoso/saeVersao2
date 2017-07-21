<?php
	include 'mySQL.php';
	require 'mySQL.php';
?>
<?php 

	$vetor   = array();
	$the_request = &$_GET;
	if (isset($_GET["id"])){
		if ($_GET["id"] == ""){
			$sql = "SELECT * FROM auth_user ORDER BY id DESC";
			$result = $con->query($sql);
			while($row=$result->fetch_assoc()){
				$vetor[] = $row;
			}
			echo json_encode($vetor);
		}else{
			$id = $_GET["id"];
			$sql = "SELECT * FROM auth_user WHERE id = '$id'";
			$result = $con->query($sql);
			
			$row = $result->fetch_assoc();
							
			echo json_encode($row);	
		}
	} 	
?>