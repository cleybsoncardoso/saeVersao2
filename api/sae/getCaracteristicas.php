<?php
	include 'mySQL.php';
	require 'mySQL.php';
?>
<?php 

	$vetor   = array();
	$auxdiagnosticos   = array();
	$diagnosticos   = array();
	$the_request = &$_GET;
	if (isset($_GET["id"])){
		if ($_GET["id"] == ""){
			$sql = "SELECT * FROM saeapp_caracteristica ORDER BY titulo";
			$result = $con->query($sql);
			while($row=$result->fetch_assoc()){
				$vetor[] = $row;
			}
			echo json_encode($vetor);
		} else {
			$request = $_GET["id"];
			$ids = explode(",", $request);
			foreach ( $ids as $id) {
				$sql = "SELECT * FROM saeapp_diagnostico_caracteristicas WHERE caracteristica_id= '$id'";
				$result = $con->query($sql);
				while($caracteristica=$result->fetch_assoc()){
					if(in_array($caracteristica['diagnostico_id'], $auxdiagnosticos)){
						$diagnosticos[] = $caracteristica['diagnostico_id'];
					} else {
						$auxdiagnosticos[] = $caracteristica['diagnostico_id'];
					}
				}
			}
			foreach ( $diagnosticos as $idDiagnostico) {
				$sql = "SELECT * FROM saeapp_diagnostico WHERE id= '$idDiagnostico'";
				$result = $con->query($sql);
				while($diagnosticoAtual=$result->fetch_assoc()){
					$diagnosticoAtual['intervencao'] = array();
					$sql = "SELECT * FROM saeapp_diagnostico_intervencoes WHERE diagnostico_id= '$idDiagnostico'";
					$resultDiagnostico = $con->query($sql);
					while($intervencaoRelativa=$resultDiagnostico->fetch_assoc()){
						$idInter = $intervencaoRelativa['intervencao_id'];
						$sql = "SELECT * FROM saeapp_intervencao WHERE id= '$idInter'";
						$result = $con->query($sql);
						$diagnosticoAtual['intervencao'][] =$interventacao=$result->fetch_assoc();
					}
					$vetor[] = $diagnosticoAtual;
				}
			}
			
			
			echo json_encode($vetor);
		}
	} 
?>