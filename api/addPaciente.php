<?php
include 'mySQL.php';
require 'mySQL.php';
?>
<?php

	$the_request = &$_POST;

	$postdata = file_get_contents("php://input");

	if (isset($postdata)) {
		$request = json_decode($postdata);
		
		$Antecedentes         = $request->Antecedentes;
		$Data_de_internacao   = $request->Data_de_internacao;
		$Diagnostico_Medico   = $request->Diagnostico_Medico;
		$Estado_Civil         = $request->Estado_Civil;
		$Idade                = $request->Idade;
		$Internacao_Anterior  = $request->Internacao_Anterior;
		$Leito                = $request->Leito;
		$Naturalidade         = $request->Naturalidade;
		$Nome                 = $request->Nome;
		$Procedencia          = $request->Procedencia;
		$Profissao            = $request->Profissao;
		$Registro             = $request->Registro;
		$Religiao             = $request->Religiao;
		$Setor_de_Procedencia = $request->Setor_de_Procedencia;
		$Sexo                 = $request->Sexo;
		$Clinica              = $request->Clinica;
		
		date_default_timezone_set('America/Sao_Paulo');
		$today = date('Y-m-d H:i:s');
		
		if($request !== ''){
				$sql = "INSERT INTO saeapp_paciente 
				(Nome, Data, Idade, Sexo, Estado_Civil, Religiao, Profissao, Naturalidade, Procedencia, Data_de_internacao, Registro, Setor_de_Procedencia, Leito, Diagnostico_Medico, Clinica, ativo) 
				VALUES (
				'$Nome',
				'$today',
				'$Idade',
				'$Sexo',
				'$Estado_Civil',
				'$Religiao',
				'$Profissao',
				'$Naturalidade',
				'$Procedencia',
				'$Data_de_internacao',
				'$Registro',
				'$Setor_de_Procedencia',
				'$Leito',
				'$Diagnostico_Medico',
				'$Clinica',
				1
				)";
				
				$con->query($sql);
				$sql = "SELECT * FROM saeapp_paciente WHERE Nome = '$Nome' AND Data = '$today'";
				$result = $con->query($sql);
				$numrow = $result->num_rows;
				$row = $result->fetch_assoc();

				if ($numrow == 1) {
					echo json_encode($row['id']);
				} else {
					echo json_encode(false);
				}	
		}else {
			echo json_encode(false);
		}
	}
					
?>