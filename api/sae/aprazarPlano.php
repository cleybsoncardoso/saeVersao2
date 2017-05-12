<?php
	include 'mySQL.php';
	require 'mySQL.php';
	include 'somaHr.php';
?>
<?php

	
	$the_request = &$_POST;

	$postdata = file_get_contents("php://input");
	$vetor = array();
	if (isset($postdata)){
		$request = json_decode($postdata);
		
		$idPaciente = $request->idPaciente;
		$idCuidado = $request->idCuidado;
		
		$today = date('H:i');
		
		$sql = "UPDATE saeapp_planodecuidados SET ultimoHorario = '$today' WHERE paciente_id = '$idPaciente' AND intervencao = '$idCuidado'";
		$con->query($sql);

        $sql = "SELECT * FROM saeapp_planodecuidados WHERE paciente_id = '$idPaciente'";
        $result = $con->query($sql);
        $numrow = $result->num_rows;
        if ($numrow > 0) {
            while ($row = $result->fetch_assoc()) {
				$idInterv = $row['intervencao'];
				$sql = "SELECT * FROM saeapp_intervencao WHERE id = '$idInterv'";
				$resultInter = $con->query($sql);
				$interv = $resultInter->fetch_assoc();
				$interv['horarioInicio'] = $row['horarioInicio'];
				$interv['ultimoHorario'] = $row['ultimoHorario'];
				$horas = array();
				$horarios = soma($horas, $row['horarioInicio'].":00", $row['intervalo'].":00:00", $row['ultimoHorario'].":00");
				$interv['proximaHora'] = $horarios[0];
                $vetor[] = $interv;
            }
            echo json_encode($vetor);
        } else {
			echo json_encode($vetor);
		}
		
	}else{
		echo json_encode(false);
	}
?>