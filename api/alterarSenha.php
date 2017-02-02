<?php
	include 'mySQL.php';
	require 'mySQL.php';
?>
<?php

	$the_request = &$_POST;

	$postdata = file_get_contents("php://input");
	
	if (isset($postdata)){
		$request = json_decode($postdata);
		
		$id = $request->id;
		$senha = $request->senha;
		$novaSenha = $request->novaSenha;
		
		$sql = "SELECT * FROM auth_user WHERE id = '$id' and password = '$senha'";
		
		$result = $con->query($sql);
		$numrow = $result->num_rows;		
		
		if($numrow == 1){
			
			$sql = "UPDATE auth_user set password = '$novaSenha' WHERE id = '$id'";
			$result = $con->query($sql);
			
			echo json_encode(true);
		}else{
			echo json_encode(false);
		}
	}else{
		echo json_encode(false);
	}
?>