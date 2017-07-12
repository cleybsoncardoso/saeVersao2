<?php 
    include 'mySQL.php';
    require 'mySQL.php';     
?>

<?php
	$the_request = &$_POST;
	$postdata = file_get_contents("php://input");
	
	if (isset($postdata)){
		$request  = json_decode($postdata);
        $idsaeapp_historico          = $request->idsaeapp_historico;
        $internacoes                 = $request->internacoes;
        $motivoInternacao            = $request->motivoInternacao;
        $antecedentes                = $request->antecedentes;
        $alergias                    = $request->alergias;
		$aspiracao                   = $request->aspiracao;
        $vacinas                     = $request->vacinas;
        $consciencia                 = $request->consciencia;
        $glasgow                     = $request->glasgow;
        $pupilas                     = $request->pupilas;
        $mmii_esquerdo               = $request->mmii_esquerdo;
        $mmii_direito		         = $request->mmii_direito;
        $mmss_esquerdo				 = $request->mmss_esquerdo;
        $mmss_direito                = $request->mmss_direito;
        $falaELinguagem				 = $request->mmss_esquerdo;
        $O2							 = $request->O2;
        $SpO						 = $request->SpO;
        $FR							 = $request->FR;
        $oxigenacao					 = $request->oxigenacao;
        $modalidade					 = $request->modalidade;
        $FiO2						 = $request->FiO2;
        $Peep                        = $request->Peep;
        $SpO2						 = $request->SpO2;
        $auscultaPulmonar_MvPresente = $request->auscultaPulmonar_MvPresente;
        $auscultaPulmonar_Ruidos     = $request->auscultaPulmonar_Ruidos;
        $prevencaoDeTosse 		     = $request->prevencaoDeTosse;;
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
		
        $drenagemToracica				 = $request->drenagemToracica;
        $mamas							 = $request->mamas;
        $avaliacaoCardiovascular_Fc 	 = $request->avaliacaoCardiovascular_Fc;
        $avaliacaoCardiovascular_Pa 	 = $request->avaliacaoCardiovascular_Pa;
        $avaliacaoCardiovascular_PVC	 = $request->avaliacaoCardiovascular_PVC;
        $avaliacaoCardiovascular_PAM	 = $request->avaliacaoCardiovascular_PAM;
        $pulso							 = $request->pulso;
        $presencaDeEdema				 = $request->presencaDeEdema;
        $turgidezDaPele					 = $request->turgidezDaPele;
        $eliminacaoUrinaria_Volume		 = $request->eliminacaoUrinaria_Volume;
        $eliminacaoUrinaria				 = $request->eliminacaoUrinaria;
        $hidratacao_Caracteristicas 	 = $request->hidratacao_Caracteristicas;
        $tipoDeDieta					 = $request->tipoDeDieta;
        $glicemia						 = $request->glicemia;
        $alimentacao_ViasDeAdministracao = $request->alimentacao_ViasDeAdministracao;
        $presencaoDe					 = $request->presencaoDe;
        $abdome							 = $request->abdome;
        $RHA							 = $request->RHA;
        $ostomia						 = $request->ostomia;
        $eliminacaoIntestinal			 = $request->eliminacaoIntestinal;
        $eliminacaoIntestinal_frequencia = $request->eliminacaoIntestinal_frequencia;
        $pele							 = $request->pele;
        $pele_temperatura				 = $request->pele_temperatura;
        $olhos							 = $request->olhos;
        $AVP							 = $request->AVP;
        $AVP_local						 = $request->AVP_local;
		$AVP_tempo						 = $request->AVP_tempo;
        $CVC        					 = $request->CVC;
        $CVC_local						 = $request->CVC_local;
		$CVC_tempo						 = $request->CVC_tempo;
        $dreno							 = $request->dreno;
        $dreno_local					 = $request->dreno_local;
        $dreno_tipo						 = $request->dreno_tipo;
        $genitalia			 			 = $request->genitalia;
        $genitalia_lesoes				 = $request->genitalia_lesoes;
        $necessidadeDeContencao			 = $request->necessidadeDeContencao;
        $riscoParaQueda					 = $request->riscoParaQueda;
        $escore				  	 	 	 = $request->escore;
        $observacoes				     = $request->observacoes;

        $sql = "SELECT * FROM saeapp_historico WHERE idsaeapp_historico = '$idsaeapp_historico'";
        $result = $con->query($sql);
        $num = $result->num_rows;
		
		if ($numrow == 1) {
			$sql = "UPDATE saeapp_historico (
				internacoes = '$internacoes',
				motivoInternacao = '$motivoInternacao',
				antecedentes = '$antecedentes',
				alergias = '$alergias',
				aspiracao = '$aspiracao',
				vacinas = '$vacinas',
				consciencia = '$consciencia',
				glasgow = '$glasgow',
				pupilas = '$pupilas',
				mmii_esquerdo = '$mmii_esquerdo',
				mmii_direito = '$mmii_direito',
				mmss_esquerdo = '$mmss_esquerdo',
				mmss_direito = '$mmss_direito',
				falaELinguagem = '$falaELinguagem',
				O2 = '$O2',
				SpO = '$SpO',
				FR = '$FR',
				oxigenacao = '$oxigenacao',
				modalidade = '$modalidade',
				FiO2 = '$FiO2',
				Peep = '$Peep',
				SpO2 = '$SpO2',
				auscultaPulmonar_MvPresente = '$auscultaPulmonar_MvPresente',
				auscultaPulmonar_Ruidos = '$auscultaPulmonar_Ruidos',
				prevencaoDeTosse = '$prevencaoDeTosse',
				presencaoDeTosse_xpectoracao = '$presencaoDeTosse_xpectoracao',
				drenagemToracicaDTE = '$drenagemToracicaDTE',
				drenagemToracicaDTD = '$drenagemToracicaDTD',
				drenagemToracica '$drenagemToracica',
				mamas = '$mamas',
				avaliacaoCardiovascular_Fc = '$avaliacaoCardiovascular_Fc', 
				avaliacaoCardiovascular_Pa = '$avaliacaoCardiovascular_Pa',
				avaliacaoCardiovascular_PVC = '$avaliacaoCardiovascular_PVC',
				avaliacaoCardiovascular_PAM = '$avaliacaoCardiovascular_PAM',
				pulso = '$pulso',
				presencaDeEdema = '$presencaDeEdema',
				turgidezDaPele = '$turgidezDaPele',
				eliminacaoUrinaria_Volume = '$eliminacaoUrinaria_Volume',
				eliminacaoUrinaria = '$eliminacaoUrinaria',
				hidratacao_Caracteristicas = '$hidratacao_Caracteristicas',
				tipoDeDieta = '$tipoDeDieta',
				glicemia = '$glicemia',
				alimentacao_ViasDeAdministracao = '$alimentacao_ViasDeAdministracao',
				presencaoDe = '$presencaoDe',
				abdome = '$abdome',
				RHA = '$RHA',
				ostomia = '$ostomia',
				eliminacaoIntestinal = '$eliminacaoIntestinal',
				eliminacaoIntestinal_frequencia = '$eliminacaoIntestinal_frequencia',
				pele = '$pele', 
				pele_temperatura = '$pele_temperatura',
				olhos = '$olhos',
				AVP = '$AVP',
				AVP_local = '$AVP_local',
				AVP_tempo = '$AVP_tempo',
				CVC = '$CVC',
				CVC_local = '$CVC_local',
				CVC_tempo = '$CVC_tempo',
				dreno = '$dreno',
				dreno_local = '$dreno_local',
				dreno_tipo = '$dreno_tipo',
				genitalia = '$genitalia',
				genitalia_lesoes = '$genitalia_lesoes',  
				necessidadeDeContencao = '$necessidadeDeContencao',
				riscoParaQueda = '$riscoParaQueda',
				escore = '$escore', 
				observacoes = '$observacoes'
			) 
			WHERE idsaeapp_historico = '$idsaeapp_historico'";
			$con->query($sql);
			
			echo json_encode(true);
			
		} else {
			echo json_encode(false);
		}
        
	}
	$con->close();
?>