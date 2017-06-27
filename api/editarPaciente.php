<?php
include 'mySQL.php';
require 'mySQL.php';
?>
<?php

$the_request = &$_POST;

$postdata = file_get_contents("php://input");

if (isset($postdata)){
    $request = json_decode($postdata);

    $id                   = $request->id;
    $Alergias             = $request->Alergias;
    $Antecedentes         = $request->Antecedentes;
    $Data                 = $request->Data;
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
    $Vacinas              = $request->Vacinas;


    $sql = "SELECT * FROM saeapp_paciente WHERE id = '$id'";

    $result = $con->query($sql);
    $numrow = $result->num_rows;

    if($numrow == 1){

        $sql = "UPDATE saeapp_paciente set
		Nome='$Nome',
		Idade='$Idade',
		Sexo='$Sexo',
		Religiao='$Religiao',
		Profissao='$Profissao',
		Naturalidade='$Naturalidade',
		Procedencia='$Procedencia', 
		Data_de_internacao = '$Data_de_internacao',
		Registro = '$Registro',
		Internacao_Anterior = '$Internacao_Anterior',
		Setor_de_Procedencia = '$Setor_de_Procedencia',
		Leito = '$Leito',
		Diagnostico_Medico = '$Diagnostico_Medico',
		Alergias = '$Alergias',
		Vacinas = '$Vacinas' 
		WHERE id = '$id'";
        $result = $con->query($sql);

        echo json_encode(true);
    }else{
        echo json_encode(false);
    }
}else{
    echo json_encode(false);
}
?>