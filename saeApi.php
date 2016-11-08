<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "cley", "myTest");

//Switch case que identifica qual método de acesso ao servidor GET, POST, PUT...
switch($_SERVER['REQUEST_METHOD']){
	//Caso seja GET:
	case 'GET': $the_request = &$_GET;
		$arr=array();
		//se for um get id ex: http://localhost/saeApi.php?id=1
		if(isset($_GET["id"])){
			$id=$_GET["id"];
			$st="SELECT * FROM tb_cadastros WHERE id = $id";//retorna os cadastros por id
		//se for um get login ex: http://localhost/saeApi.php?login=lucas
		}elseif(isset($_GET["login"])){
			$login = $_GET["login"];
			$st = "SELECT id FROM tb_cadastros WHERE login = '$login'";//retorna os cadastros por login
		//se for um get paciente sem especificar o nome, ex: http://localhost/saeApi.php?pacientes
		}elseif(isset($_GET["pacientes"])){
			if($_GET["pacientes"]==""){
				$st = "SELECT * FROM tb_pacientes";//retorna todos os pacientes		
			}else{ //se for especificado o nome, ex: http://localhost/saeApi.php?pacientes=joao
				$pacientes = $_GET["pacientes"];
				$st = "SELECT * FROM tb_pacientes WHERE nome = '$pacientes'";//retorna os pacientes por nome
			}
		}else{
			header('HTTP/1.1 401 Unauthorized', true, 401);//se nao for nada, retorna acesso negado
		}
		//insere os dados num array
		$qr=$conn->query($st);
		while($row=$qr->fetch_assoc()){
			$arr[]=$row;
		}
		//retorna o array json
		echo json_encode($arr);

		break;

	//Caso seja POST:
	case 'POST': $the_request = &$_POST;
		$postdata = file_get_contents("php://input");
		if (isset($postdata)) {
			$request = json_decode($postdata);
			$type = $request->type;
			switch($type){
				case 'cadastro':
					$username = $request->username;
					$password = $request->password;
					if ($password != "" && $username != "") {
						$sel = "INSERT INTO tb_cadastros (login, senha) VALUES ('$username', '$password')";
				    		$result = $conn->query($sel);
					    	$numrow = $result->num_rows;
					}else {
						header('HTTP/1.1 401 Unauthorized', true, 401);
					}
					break;
					
				case 'cadastroPaciente':
					$nome = $request->nome;
					$leito = $request->leito;
					if ($nome != "" && $leito != "") {
						$sel = "INSERT INTO tb_pacientes (nome, leito) VALUES ('$nome', '$leito')";
				    		$result = $conn->query($sel);
					    	$numrow = $result->num_rows;
					}else {
						header('HTTP/1.1 401 Unauthorized', true, 401);
					}
					break;
				
				default:
					$username = $request->username;
					$password = $request->password;
					if ($password != "" && $username != "") {
						$sel = "SELECT id FROM tb_cadastros WHERE login='$username' AND senha='$password'";
				    		$result = $conn->query($sel);
					    	$numrow = $result->num_rows;
					    	if($numrow !== 1){
					      		header('HTTP/1.1 401 Unauthorized', true, 401);
					   	}
					}else {
						header('HTTP/1.1 401 Unauthorized', true, 401);
					}			
			}			
		}else {
			echo "Not called properly with username parameter!";
		}
		break;

	default:
}


?>
