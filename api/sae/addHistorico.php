<?php 
    include 'mySQL.php';
    require 'mySQL.php';     
?>

<?php
	$the_request = &$_POST;
	$postdata = file_get_contents("php://input");
	
	if (isset($postdata)){
		$request  = json_decode($postdata);
        $idPaciente = $request->idPaciente;
        $internacoes = $request->internacoes;
        $motivoInternacao = $request->motivoInternacao;
        $antecedentes= $request->antecedentes;
        $alergias= $request->alergias;
        $vacinas= $request->vacinas;
        $consciencia= $request->consciencia;
        $glasgow= $request->glasgow;
        $pupilas= $request->pupilas;
        $mmii_esquerdo= $request->mmii_esquerdo;
        $mmii_direito= $request->mmii_direito;
        $mmss_esquerdo= $request->mmss_esquerdo;
        $mmss_direito= $request->mmss_direito;
        $falaELinguagem= $request->mmss_esquerdo;
        $O2= $request->O2;
        $SpO= $request->SpO;
        $FR= $request->FR;
        $oxigenacao= $request->oxigenacao;
        $modalidade= "";
        $FiO2= $request->FiO2;
        $Peep= $request->Peep;
        $SpO2= $request->SpO2;
        $auscultaPulmonar_MvPresente= $request->auscultaPulmonar_MvPresente;
        $auscultaPulmonar_Ruidos= $request->auscultaPulmonar_Ruidos;
        $prevencaoDeTosse= "sim";
        $presencaoDeTosse_xpectoracao= $request->presencaoDeTosse_xpectoracao;
        if($request->drenagemToracicaDTE == true){
            $drenagemToracicaDTE = 1;
        } else {
            $drenagemToracicaDTE = 0;            
        }
        if($request->drenagemToracicaDTD == true){
            $drenagemToracicaDTD = 1;
        } else {
            $drenagemToracicaDTD = 0;            
        }
        $aspiracao= $request->aspiracao;
        $drenagemToracica= $request->drenagemToracica;
        $mamas= $request->mamas;
        $avaliacaoCardiovascular_Fc= $request->avaliacaoCardiovascular_Fc;
        $avaliacaoCardiovascular_Pa= $request->avaliacaoCardiovascular_Pa;
        $avaliacaoCardiovascular_PVC= $request->avaliacaoCardiovascular_PVC;
        $avaliacaoCardiovascular_PAM= $request->avaliacaoCardiovascular_PAM;
        $pulso= $request->pulso;
        $presencaDeEdema= $request->presencaDeEdema;
        $turgidezDaPele= $request->turgidezDaPele;
        $eliminacaoUrinaria_Volume= $request->eliminacaoUrinaria_Volume;
        $eliminacaoUrinaria= $request->eliminacaoUrinaria;
        $hidratacao_Caracteristicas= $request->hidratacao_Caracteristicas;
        $tipoDeDieta= $request->tipoDeDieta;
        $glicemia= $request->glicemia;
        $alimentacao_ViasDeAdministracao= $request->alimentacao_ViasDeAdministracao;
        $presencaoDe= "tosse";
        $abdome= $request->abdome;
        $RHA= $request->RHA;
        $ostomia= $request->ostomia;
        $eliminacaoIntestinal= $request->eliminacaoIntestinal;
        $eliminacaoIntestinal_frequencia= $request->eliminacaoIntestinal_frequencia;
        $pele= $request->pele;
        $pele_temperatura= $request->pele_temperatura;
        $olhos= $request->olhos;
        $AVP= $request->AVP;
        $AVP_local_tempo= $request->AVP_local_tempo;
        $CVC= $request->CVC;
        $CVC_local_tempo= $request->CVC_local_tempo;
        $dreno= $request->dreno;
        $dreno_caracteristicas= $request->dreno_caracteristicas;
        $dreno_tipo= $request->dreno_tipo;
        $genitalia= $request->genitalia;
        $genitalia_lesoes= "nenhuma";
        $necessidadeDeContencao= $request->necessidadeDeContencao;
        $riscoParaQueda= $request->riscoParaQueda;
        $escore= $request->escore;
        $observacoes= $request->observacoes;

        $sql = "SELECT * FROM saeapp_historico WHERE idPaciente = '$idPaciente'";
        $result = $con->query($sql);

        $num = $result->num_rows;

            $sql = "INSERT INTO saeapp_historico (idPaciente, internacoes,motivoInternacao, antecedentes, alergias,vacinas,consciencia, glasgow, pupilas, 
        mmii_esquerdo, mmii_direito, mmss_esquerdo, mmss_direito, falaELinguagem, O2, SpO, FR, oxigenacao, 
        modalidade, FiO2, Peep, SpO2, auscultaPulmonar_MvPresente, auscultaPulmonar_Ruidos, prevencaoDeTosse, 
        presencaoDeTosse_xpectoracao, drenagemToracicaDTE , drenagemToracicaDTD , aspiracao, drenagemToracica, 
        mamas, avaliacaoCardiovascular_Fc, avaliacaoCardiovascular_Pa, avaliacaoCardiovascular_PVC, 
        avaliacaoCardiovascular_PAM, pulso, presencaDeEdema, turgidezDaPele, eliminacaoUrinaria_Volume, 
        eliminacaoUrinaria, hidratacao_Caracteristicas, tipoDeDieta, glicemia, alimentacao_ViasDeAdministracao, 
        presencaoDe, abdome, RHA, ostomia, eliminacaoIntestinal, eliminacaoIntestinal_frequencia, pele, 
        pele_temperatura, olhos, AVP, AVP_local_tempo, CVC, CVC_local_tempo, dreno, dreno_caracteristicas, 
        dreno_tipo, genitalia, genitalia_lesoes, necessidadeDeContencao, riscoParaQueda, escore, observacoes) VALUES ('$idPaciente', '$internacoes','$motivoInternacao', '$antecedentes', '$alergias','$vacinas','$consciencia', '$glasgow', '$pupilas', 
        '$mmii_esquerdo', '$mmii_direito', '$mmss_esquerdo', '$mmss_direito', '$falaELinguagem', '$O2', '$SpO', '$FR', '$oxigenacao', 
        '$modalidade', '$FiO2', '$Peep', '$SpO2', '$auscultaPulmonar_MvPresente', '$auscultaPulmonar_Ruidos', '$prevencaoDeTosse', 
        '$presencaoDeTosse_xpectoracao', '$drenagemToracicaDTE ', '$drenagemToracicaDTD ', '$aspiracao', '$drenagemToracica', 
        '$mamas', '$avaliacaoCardiovascular_Fc', '$avaliacaoCardiovascular_Pa', '$avaliacaoCardiovascular_PVC', 
        '$avaliacaoCardiovascular_PAM', '$pulso', '$presencaDeEdema', '$turgidezDaPele', '$eliminacaoUrinaria_Volume', 
        '$eliminacaoUrinaria', '$hidratacao_Caracteristicas', '$tipoDeDieta', '$glicemia', '$alimentacao_ViasDeAdministracao', 
        '$presencaoDe', '$abdome', '$RHA', '$ostomia', '$eliminacaoIntestinal', '$eliminacaoIntestinal_frequencia', '$pele', 
        '$pele_temperatura', '$olhos', '$AVP', '$AVP_local_tempo', '$CVC', '$CVC_local_tempo', '$dreno', '$dreno_caracteristicas', 
        '$dreno_tipo', '$genitalia', '$genitalia_lesoes', '$necessidadeDeContencao', '$riscoParaQueda', '$escore', '$observacoes')";
        $con->query($sql);
        echo json_encode($sql);
        
	}
	$con->close();
?>