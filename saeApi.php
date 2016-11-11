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
			//insere os dados num array
			$qr=$conn->query($st);
			while($row=$qr->fetch_assoc()){
				$arr[]=$row;
			}
		//se for um get login ex: http://localhost/saeApi.php?login=lucas
		}elseif(isset($_GET["login"])){
			$login = $_GET["login"];
			$st = "SELECT * FROM tb_cadastros WHERE login = '$login'";//retorna os cadastros por login
			//insere os dados num array
			$qr=$conn->query($st);
			while($row=$qr->fetch_assoc()){
				$arr[]=$row;
			}
		//se for um get paciente sem especificar o nome, ex: http://localhost/saeApi.php?pacientes
		}elseif(isset($_GET["pacientes"])){
			if($_GET["pacientes"]==""){
				$st = "SELECT * FROM tb_pacientes  order by nome asc";//retorna todos os pacientes		
				
			}else{ //se for especificado o nome, ex: http://localhost/saeApi.php?pacientes=joao
				$pacientes = $_GET["pacientes"];
				$st = "SELECT * FROM tb_pacientes WHERE nome = '$pacientes'";//retorna os pacientes por nome
			}
			//insere os dados num array
			$qr=$conn->query($st);
			while($row=$qr->fetch_assoc()){
				$arr[]=$row;
			}
		}elseif(isset($_GET["caracteristicas"])){
			if($_GET["caracteristicas"]==""){
				$st = "SELECT * FROM caracteristicas_definidoras order by titulo asc";//retorna todas as caracteristicas	
			}else{ //se for especificado o nome, ex: http://localhost/saeApi.php?pacientes=joao
				$id = $_GET["caracteristicas"];
				$st = "SELECT * FROM caracteristicas_definidoras WHERE id = '$id'";//retorna a caracteristica pela id
			}
			//insere os dados num array
			$qr=$conn->query($st);
			while($row=$qr->fetch_assoc()){
				$arr[]=$row;
			}
		}elseif(isset($_GET["diagnosticos"])){
			if($_GET["diagnosticos"]==""){
				$st = "SELECT * FROM caracteristicas_definidoras";//retorna todas as caracteristicas	
			}else{ //se for especificado as caracteristica, ex: http://localhost/saeApi.php?diagnosticos=1;3
				$auxiliar=array();//vetor auxiliar que armazena as relacoes entre caracteristicas e diagnosticos
				$ids = $_GET["diagnosticos"]; //pega todas as ids das caracteristicas que foram selecionadas
				$idsSeparados = array(); //vetor que armazena as ids separadas uma por cada elemento
				$idsSeparados = explode(";", $ids); //separa ids
				
				for($i = 0; $i < count($idsSeparados);$i++){//percorre todas ids armazenando todas as relacoes no vetor auxiliar
					$st = "SELECT diagnostico FROM tb_relacao WHERE caracteristica = '$idsSeparados[$i]'";//retorna a caracteristica pela id
					$qr=$conn->query($st);
					while($row=$qr->fetch_assoc()){
						$auxiliar[]=$row;
					}
				}
				$idUtilizadas = array();//vetor criar para saber se o diagnostico ja esta na lista que será enviada ao software
				$idUtilizadas2 = array();
				for($i = 0; $i < count($auxiliar);$i++){
					if(!in_array($auxiliar[$i]['diagnostico'],$idUtilizadas)){
						$idUtilizadas[] = $auxiliar[$i]['diagnostico'];
					}else{
						if(!in_array($auxiliar[$i]['diagnostico'],$idUtilizadas2)){
							$idUtilizadas2[] = $auxiliar[$i]['diagnostico'];
							$j = $auxiliar[$i]['diagnostico'];
							$st = "SELECT * FROM tb_definicoes WHERE id = '$j'";//retorna a caracteristica pela id
							$qr=$conn->query($st);
							while($row=$qr->fetch_assoc()){
								$arr[]=$row;
							}
						}
					}
				}
					
				
			}
		}else{
			header('HTTP/1.1 401 Unauthorized', true, 401);//se nao for nada, retorna acesso negado
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
				
				case 'senha':
					
					$id = $request->id;
					$senhaAntiga = $request->senhaAntiga;
					$senhanova = $request->senhanova;
					if ($senhaAntiga != "" && $senhanova != "") {
						$st = "SELECT * FROM tb_cadastros WHERE id = '$id'";//retorna o usuario que quer trocar de senha
						$qr=$conn->query($st);
						$senhaTeste = $qr->fetch_assoc();  //recebe o valor do usuario
						if($senhaTeste['senha']==$senhaAntiga){
							$st = "UPDATE tb_cadastros SET senha = '$senhanova' WHERE id ='$id'";
							$buscaSenha = $conn->query($st);
						}else{
							header('HTTP/1.1 401 Unauthorized', true, 401);
						}
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
						}else{
							//insere os dados num array
							$qr=$conn->query($sel);
							while($row=$qr->fetch_assoc()){
								$arr[]=$row;
							}
							//retorna o array json
							echo json_encode($arr);						
						}
					}else {
						header('HTTP/1.1 401 Unauthorized', true, 401);
					}
				break;					
			}					
		}else {
			echo "Not called properly with username parameter!";
		}
				

	default:
	break;
}


?>
