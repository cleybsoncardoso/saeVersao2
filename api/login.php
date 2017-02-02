<?php
	include 'mySQL.php';
	require 'mySQL.php';
?>
<?php

	$the_request = &$_POST;

	$postdata = file_get_contents("php://input");
	
	if (isset($postdata)){
		$request = json_decode($postdata);
		
		$login = $request->login;
		$senha = $request->senha;
		
		$sql = "SELECT * FROM auth_user WHERE username = '$login'";
		
		$result = $con->query($sql);
		$numrow = $result->num_rows;		
		
		if($numrow == 0){
			echo json_encode('login');
		}else{
			$row = $result->fetch_assoc();
			if(strcmp($row['password'], $senha) !== 0){
				echo json_encode('senha');
			}else{
				echo json_encode($row);
			}
		}
	}else{
		echo json_encode(false);
	}
?>