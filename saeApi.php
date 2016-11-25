<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "cley", "saedb");

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
			$st = "SELECT * FROM `auth_user` WHERE username = '$login'";//retorna os cadastros por login
			//insere os dados num array
			$qr=$conn->query($st);
			while($row=$qr->fetch_assoc()){
				$arr[]=$row;
			}
		//se for um get paciente sem especificar o nome, ex: http://localhost/saeApi.php?pacientes
		}elseif(isset($_GET["pacientes"])){
			if($_GET["pacientes"]==""){
				$st = "SELECT * FROM `saeapp_paciente` order by nome asc";//retorna todos os pacientes		
				
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
				$st = "SELECT * FROM saeapp_caracteristica order by titulo asc";//retorna todas as caracteristicas	
			}else{ //se for especificado o nome, ex: http://localhost/saeApi.php?pacientes=joao
				$id = $_GET["caracteristicas"];
				$st = "SELECT * FROM 'saeapp_caracteristica' WHERE id = '$id'";//retorna a caracteristica pela id
			}
			//insere os dados num array
			$qr=$conn->query($st);
			while($row=$qr->fetch_assoc()){
				$arr[]=$row;
			}
		}elseif(isset($_GET["plano"])){
			if($_GET["plano"]==""){
				$st = "SELECT * FROM saeapp_planodecuidados order by intervencao asc";//retorna todos os planos	
			}else{ //se for especificado o nome, ex: http://localhost/saeApi.php?pacientes=joao
				$id = $_GET["plano"];
				$st = "SELECT * FROM saeapp_planodecuidados WHERE paciente_id = '$id' order by dataInicio asc";//retorna a caracteristica pela id
			}
			//insere os dados num array
			$qr=$conn->query($st);
			while($row=$qr->fetch_assoc()){
				$arr[]=$row;
			}
			
		}elseif(isset($_GET["diagnosticos"])){
			if($_GET["diagnosticos"]==""){
				$st = "SELECT * FROM saeapp_caracteristica";//retorna todas as caracteristicas	
			}else{ //se for especificado as caracteristica, ex: http://localhost/saeApi.php?diagnosticos=1;3
				$auxiliar=array();//vetor auxiliar que armazena as relacoes entre caracteristicas e diagnosticos
				$ids = $_GET["diagnosticos"]; //pega todas as ids das caracteristicas que foram selecionadas
				$idsSeparados = array(); //vetor que armazena as ids separadas uma por cada elemento
				$idsSeparados = explode(";", $ids); //separa ids
				
				for($i = 0; $i < count($idsSeparados);$i++){//percorre todas ids armazenando todas as relacoes no vetor auxiliar
					$st = "SELECT diagnostico_id FROM saeapp_diagnostico_caracteristicas WHERE caracteristica_id = '$idsSeparados[$i]'";//retorna a caracteristica pela id
					$qr=$conn->query($st);
					while($row=$qr->fetch_assoc()){
						$auxiliar[]=$row;
					}
				}
				$idUtilizadas = array();//vetor criar para saber se o diagnostico ja esta na lista que será enviada ao software
				$idUtilizadas2 = array();
				for($i = 0; $i < count($auxiliar);$i++){
					if(!in_array($auxiliar[$i]['diagnostico_id'],$idUtilizadas)){
						$idUtilizadas[] = $auxiliar[$i]['diagnostico_id'];
					}else{
						if(!in_array($auxiliar[$i]['diagnostico_id'],$idUtilizadas2)){
							$idUtilizadas2[] = $auxiliar[$i]['diagnostico_id'];
							$j = $auxiliar[$i]['diagnostico_id'];
							$st = "SELECT * FROM saeapp_diagnostico WHERE id = '$j'";//retorna a caracteristica pela id
							$qr=$conn->query($st);
							while($row=$qr->fetch_assoc()){
								$diagnosticosCertos[]=$row;
							}
						}
					}
				} 

				for($i = 0; $i < count($diagnosticosCertos);$i++){
					$elemento = array();
					$idintervencoes = array();
					$elemento['diagnostico'] = $diagnosticosCertos[$i];
					$j = $diagnosticosCertos[$i]['id'];
					$st = "SELECT * FROM saeapp_diagnostico_intervencoes WHERE diagnostico_id = '$j'";//retorna a caracteristica pela id
					$qr=$conn->query($st);
					while($row=$qr->fetch_assoc()){
						$idintervencoes[] = $row;
					}
					
					for($k = 0; $k < count($idintervencoes);$k++ ){
						$l = $idintervencoes[$k]['intervencao_id'];
						$st = "SELECT * FROM saeapp_intervencao WHERE id = '$l'";//retorna a caracteristica pela id
						$qr=$conn->query($st);
						while($row=$qr->fetch_assoc()){
							$elemento['intervencao'][] = $row;
						}
					}
					$arr[] = $elemento;
					
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
					$idade = $request->idade;
					$sexo = $request->sexo;
					$estado_Civil = $request->estado_Civil;
					$religiao = $request->religiao;
					$profissao = $request->profissao;
					$naturalidade = $request->naturalidade;
					$procedencia = $request->procedencia;
					$dataInternacao = $request->dataInternacao;
					$registro = $request->registro;
					$setorDeProcedencia = $request->setorDeProcedencia;
					$diagnosticoMedico = $request->diagnosticoMedico;
					$internacaoAnterior = $request->internacaoAnterior;
					$alergias = $request->alergias;
					$vacinas = $request->vacinas;
					$leito = $request->leito;
					date_default_timezone_set('America/Sao_Paulo');
					$today = date('Y-m-d H:i:s');
					if ($nome != "") {
						$sel = "INSERT INTO `saeapp_paciente` ( Data, Nome, Idade, Sexo, Estado_Civil, Religiao, Profissao, Naturalidade, Procedencia, Data_de_internacao, Registro, Setor_de_Procedencia, Leito, Diagnostico_Medico, Internacao_Anterior, Alergias, Vacinas) 
						VALUES ('$today','$nome', '$idade', '$sexo', '$estado_Civil', '$religiao', '$profissao', '$naturalidade', '$procedencia', '$dataInternacao', '$registro', '$setorDeProcedencia', '$leito', '$diagnosticoMedico', '$internacaoAnterior', '$alergias', '$vacinas')";
				    	$result = $conn->query($sel);
					}else {
						header('HTTP/1.1 401 Unauthorized', true, 401);
					}
				break;
				
				case 'aprazar':
				
					$intervencoes = $request->intervencoes;
					$idPaciente = $request->idPaciente;
					
					if ($idPaciente != "") {
						for($i = 0; $i < count($intervencoes);$i++){
							
							$dataInicio = $intervencoes[$i]->dataInicio;
							$intervalo = $intervencoes[$i]->intervalo;
							$intervencao = $intervencoes[$i]->intervencao;
							$ultimoHorario = $intervencoes[$i]->fim;
							$horarioInicio = $intervencoes[$i]->inicio;
							date_default_timezone_set('America/Sao_Paulo');
							$today = date('Y-m-d H:i:s');
							$testes = "INSERT INTO saeapp_planodecuidados (`Data`, `dataInicio`, `intervalo`, `intervencao`, `ultimoHorario`, `horarioInicio`, `paciente_id`) 
							VALUES ('$today', '$dataInicio', '$intervalo', '$intervencao', '$ultimoHorario', '$horarioInicio', '$idPaciente')";
							$result = $conn->query($testes);
						}
						
					}else {
						header('HTTP/1.1 401 Unauthorized', true, 401);
					}
					
				break;
				
				
				case 'senha':
					
					$id = $request->id;
					$senhaAntiga = $request->senhaAntiga;
					$senhanova = $request->senhanova;
					if ($senhaAntiga != "" && $senhanova != "") {
						$st = "SELECT * FROM `auth_user` WHERE id = '$id'";//retorna o usuario que quer trocar de senha
						$qr=$conn->query($st);
						$senhaTeste = $qr->fetch_assoc();  //recebe o valor do usuario,
						$senha = $senhaTeste['password'];
						if($senha==$senhaAntiga){
							$st = "UPDATE `auth_user` SET password = '$senhanova' WHERE id ='$id'";
							$buscaSenha = $conn->query($st);
						}else{
							header('HTTP/1.1 401 Unauthorized', true, 401);
						}
					}else {
						header('HTTP/1.1 401 Unauthorized', true, 401);
					}
				break;
				
				case 'alta':
					
					$id = $request->id;
					$senha = $request->senha;
					$pacienteNome = $request->pacienteNome;
					
					if ($senha != "" && $pacienteNome != "") {
						$st = "SELECT * FROM auth_user WHERE id = '$id'";//retorna o usuario que quer trocar de senha
						$qr=$conn->query($st);
						$senhaBd = $qr->fetch_assoc();  //recebe o valor do usuario
						if($senhaBd['password']==$senha){
							$st = "DELETE FROM saeapp_paciente WHERE nome = '$pacienteNome'";
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
						$sel = "SELECT id FROM `auth_user` WHERE username='$username' AND password='$password'";
				    	$result = $conn->query($sel);
					    $numrow = $result->num_rows;
					    if($numrow !== 1){
					    	header('HTTP/1.1 401 Unauthorized', true, 401);
						}else{
							
							//insere os dados num array
							$qr=$conn->query($sel);
							$row=$qr->fetch_assoc();
							$id = $row['id'];
							date_default_timezone_set('America/Sao_Paulo'); //atualizar hr que entrou
							$today = date('Y-m-d H:i:s');
							$st = "UPDATE `auth_user` SET last_login = '$today' WHERE id ='$id'";
							$atualizarHr = $conn->query($st);
							//retorna o array json
							echo json_encode($row);						
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
