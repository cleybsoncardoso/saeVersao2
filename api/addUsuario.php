<?php
include 'mySQL.php';
require 'mySQL.php';
?>
<?php

	$the_request = &$_POST;

	$postdata = file_get_contents("php://input");

	if (isset($postdata)) {
		$request = json_decode($postdata);
		
		$username   	= $request->username;
		$password  		= $request->password;
		$is_staff   	= $request->is_staff;
		$is_superuser   = $request->is_superuser;
		$first_name 	= $request->first_name;
		$last_name 		= $request->last_name;
		$email 			= $request->email;
		
		if($is_staff == true){
			$is_staff = 1;
		} else {
			$is_staff = 0;
		}
		
		if($is_superuser == true){
			$is_superuser = 1;
		} else {
			$is_superuser = 0;
		}

		date_default_timezone_set('America/Sao_Paulo');
		$today = date('Y-m-d H:i:s');
		
		if($username !== ""){
		
		
			$sql = "SELECT * FROM auth_user WHERE username = '$username'";
			$result = $con->query($sql);
			$numrow = $result->num_rows;
			
			if($numrow == 0) {
				$sql = "INSERT INTO auth_user (
					password,
					is_superuser,
					username,
					first_name,
					last_name,
					email,
					is_staff,
					is_active,
					date_joined
				)
				VALUES (
					'$password',
					'$is_superuser',
					'$username',
					'$first_name',
					'$last_name',
					'$email',
					'$is_staff',
					'1',
					'$today'
				)";
				
				$con->query($sql);
				echo json_encode(true); 
				
			} else {
				echo json_encode(false); 
			}
		} else {
			echo json_encode(false);
		}
	}
					
?>