<?php
include 'mySQL.php';
require 'mySQL.php';
?>
<?php

	$the_request = &$_POST;

	$postdata = file_get_contents("php://input");

	if (isset($postdata)) {
		$request = json_decode($postdata);
		$id = $request->id;
		$nome = $request->Nome;
		$idade = $request->Idade;
		$sexo = $request->Sexo;
		$estadoCivil = $request->Estado_Civil;
		$religiao = $request->Religiao;
		$profissao = $request->Profissao;
		$naturalidade = $request->Naturalidade;
		$procedencia = $request->Procedencia;
		$leito = $request->Leito;
		$datadeInter = $request->Data_de_internacao;
		$registro = $request->Registro;
		$setor = $request->Setor_de_Procedencia;
		$clinica = $request->Clinica;
		$diagnostico = $request->Diagnostico_Medico;
		date_default_timezone_set('America/Sao_Paulo');
		$today = date('Y-m-d H:i:s');
		if($request != ''){
			if ($id == "0") {
				$sql = "INSERT INTO saeapp_paciente (Nome, Data, Idade, Sexo, Estado_Civil, Religiao, Profissao, Naturalidade, Procedencia, Data_de_internacao, Registro, Setor_de_Procedencia, Leito, Diagnostico_Medico, Clinica) 
				VALUES ('$nome', '$today', '$idade', '$sexo', '$estadoCivil', '$religiao', '$profissao', '$naturalidade', '$procedencia', '$datadeInter', '$registro', '$setor', '$leito', '$diagnostico', '$clinica')";
				$con->query($sql);
				$sql = "SELECT * FROM saeapp_paciente WHERE Nome = '$nome' AND Data = '$today'";
				$result = $con->query($sql);
				$numrow = $result->num_rows;
				$row = $result->fetch_assoc();

				if ($numrow == 1) {
					echo json_encode($row);
				} else {
					echo false;
					}
				} else {
					$sql = "SELECT * FROM saeapp_paciente WHERE id = '$id'";
					$result = $con->query($sql);
					$numrow = $result->num_rows;
					if ($numrow == 1) {
						$sql = "UPDATE saeapp_paciente SET Nome='$nome', Data='$today', Idade='$idade', Sexo='$sexo', Estado_Civil='$estadoCivil', Religiao='$religiao', Profissao='$profissao', Naturalidade='$naturalidade', Procedencia='$procedencia', Data_de_internacao='$datadeInter', Registro='$registro', Setor_de_Procedencia='$setor', Leito='$leito', Diagnostico_Medico='$diagnostico', Clinica='$clinica' WHERE id='$id'";
						echo true;
					} else {
						echo false;
					}
				}
			}
			echo false;
		}
		


			
?>