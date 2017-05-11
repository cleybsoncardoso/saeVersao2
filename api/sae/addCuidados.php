<?php
include 'mySQL.php';
require 'mySQL.php';
?>
<?php

$the_request = &$_POST;

$postdata = file_get_contents("php://input");

if (isset($postdata)) {

    $request = json_decode($postdata);
    $idpaciente = $request->idpaciente;
    $cuidados = $request->cuidados;

    date_default_timezone_set('America/Bahia');
    $today = date('Y-m-d H:i:s');

    foreach($cuidados as $cuidado) {
        $sql = "INSERT INTO saeapp_planodecuidados (Data, dataInicio, intervalo, intervencao, ultimoHorario, horarioInicio, paciente_id)
				VALUES ('$today', '$cuidado->dataInicio', '$cuidado->intervalo', '$cuidado->id', '$cuidado->ultimoHorario', '$cuidado->inicio', '$idpaciente')";
        $con->query($sql);
    }

    echo json_encode(true);

}

?>
