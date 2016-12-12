<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost:3307", "root", "cley", "saedb");

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
					$nome = $request->paciente->nome;
					$idade = $request->paciente->idade;
					$sexo = $request->paciente->sexo;
					$estado_Civil = $request->paciente->estadoCivil;
					$religiao = $request->paciente->religiao;
					$profissao = $request->paciente->profissao;
					$naturalidade = $request->paciente->naturalidade;
					$procedencia = $request->paciente->procedencia;
					$dataInternacao = $request->paciente->dataInternacao;
					$registro = $request->paciente->registro;
					$setorDeProcedencia = $request->paciente->setorDeProcedencia;
					$diagnosticoMedico = $request->paciente->diagnosticoMedico;
					$internacaoAnterior = $request->paciente->internacaoAnterior;
					$alergias = implode(",",$request->paciente->alergias);
					$vacinas = implode(",",$request->paciente->vacinas);
					$leito = $request->paciente->leito;
					$cardiopatia = $request->paciente->cardiopatia;
					$motivoInternacao = array();
					$antecedentes = array();
					$consciencia = array();
					$pupila = array();
					$fala = array();
					$mmssDireita = $request->paciente->mmssDireita;
					$mmssEsquerda = $request->paciente->mmssEsquerda;
					$mmiiDireita = array();
					$mmiiEsquerda = array();
					$respiracoes = array();
					$o = $request->paciente->o;
					$sop = $request->paciente->sop;
					$fr = $request->paciente->fr;
					$oxigenacao = array();
					$modalidade = $request->paciente->modalidade;
					$fiO2 = $request->paciente->fiO2;
					$peep = $request->paciente->peep;
					$spO2 = $request->paciente->spO2;
					$mvPresente = array();
					$ruidos = array();
					$presencaoDeTosse = array();
					$presencaoDeTosseExpectoracao = "";
					$aspiracao = "";
					$drenagem = array();
					$mamas = array();
					$avaliacaoCardiovascularFC = $request->paciente->avaliacaoCardiovascularFC;
					$avaliacaoCardiovascularPA = $request->paciente->avaliacaoCardiovascularPA;
					$avaliacaoCardiovascularPVC = $request->paciente->avaliacaoCardiovascularPVC;
					$avaliacaoCardiovascularPAM = $request->paciente->avaliacaoCardiovascularPAM;
					$pulso = array();
					$presencaDeEdema = array();
					$turgidezDaPele = $request->paciente->turgidezDaPele;
					$eliminacaoUrinariaVolume = $request->paciente->eliminacaoUrinariaVolume;
					$eliminacaoUrinaria = array();
					$hidratacaoCaracteristica = array();
					date_default_timezone_set('America/Sao_Paulo');
					$today = date('Y-m-d H:i:s');
					if ($nome != "") {
						
						if($request->paciente->cardiopatia){
							$motivoInternacao[] = "Cardiopatia";
						}
						if($request->paciente->convulsao){
							$motivoInternacao[] = "Convulsão";
						}
						if($request->paciente->asma){
							$motivoInternacao[] = "Asma";
						}
						if($request->paciente->drogas){
							$motivoInternacao[] = "Drogas";
						}
						if($request->paciente->has){
							$antecedentes[] = "HAS";
						}
						if($request->paciente->tabagismo){
							$antecedentes[] = "Tabagismo";
						}
						if($request->paciente->diabetesMellitus){
							$antecedentes[] = "Diabetes Mellitus";
						}
						if($request->paciente->alcoolismo){
							$antecedentes[] = "Alcoolismo";
						}
			
						$motivoInternacao = array_merge($motivoInternacao,$request->paciente->motivo);
						$motivoInternacao = implode(",",$motivoInternacao);
						//motivos
						
						$antecedentes = array_merge($antecedentes,$request->paciente->antecedentes);
						$antecedentes = implode(",",$antecedentes);
						//antecedentes
						
						if($request->paciente->alerta){
							$consciencia[] = "Alerta";
						}
						if($request->paciente->letargico){
							$consciencia[] = "Letargico";
						}
						if($request->paciente->obnubilado){
							$consciencia[] = "Obnubilado";
						}
						if($request->paciente->torporoso){
							$consciencia[] = "Torporoso";
						}
						if($request->paciente->comatoso){
							$consciencia[] = "Comatoso";
						}
						if($request->paciente->glasgow>0){
							$atualstring = "Glasgow = " . $request->paciente->glasgow;
							$consciencia[] = $atualstring;
						}
						$consciencia = implode(",",$consciencia);
						//consciencia
						
						if($request->paciente->isocorica){
							$pupila[] = "Isocorica";
						}
						if($request->paciente->anisocorica){
							$pupila[] = "Anisocorica";
						}
						if($request->paciente->miose){
							$pupila[] = "Miose";
						}
						if($request->paciente->midriase){
							$pupila[] = "Midriase";
						}
						if($request->paciente->rfm){
							$pupila[] = "RFM";
						}
						$pupila = implode(",",$pupila);
						//pupila
						
						if($request->paciente->preservadaDireita){
							$mmiiDireita[] = "Preservada";
						}
						if($request->paciente->paresiaDireita){
							$mmiiDireita[] = "Paresia";
						}
						if($request->paciente->plegiaDireita){
							$mmiiDireita[] = "Plegia";
						}
						if($request->paciente->parestesiaDireita){
							$mmiiDireita[] = "Parestesia";
						}
						if($request->paciente->movimentosLentosDireita){
							$mmiiDireita[] = "Movimentos Lentos";
						}
						if($request->paciente->movimentosInvoluntariosDireita){
							$mmiiDireita[] = "Movimentos Involuntarios";
						}
						
						$mmiiDireita = implode(",",$mmiiDireita);
						//mmii direita
						
						if($request->paciente->preservadaEsquerda){
							$mmiiEsquerda[] = "Preservada";
						}
						if($request->paciente->paresiaEsquerda){
							$mmiiEsquerda[] = "Paresia";
						}
						if($request->paciente->plegiaEsquerda){
							$mmiiEsquerda[] = "Plegia";
						}
						if($request->paciente->parestesiaEsquerda){
							$mmiiEsquerda[] = "Parestesia";
						}
						if($request->paciente->movimentosLentosEsquerda){
							$mmiiEsquerda[] = "Movimentos Lentos";
						}
						if($request->paciente->movimentosInvoluntariosEsquerda){
							$mmiiEsquerda[] = "Movimentos Involuntarios";
						}
						
						$mmiiEsquerda = implode(",",$mmiiEsquerda);
						//mmii direita

						if($request->paciente->afonia){
							$fala[] = "afonia";
						}
						if($request->paciente->dislalia){
							$fala[] = "dislalia";
						}
						if($request->paciente->disartria){
							$fala[] = "disartria";
						}
						if($request->paciente->disfasia){
							$fala[] = "disfasia";
						}
						if($request->paciente->afania){
							$fala[] = "afania";
						}
						$fala = implode(",",$fala);
						//fala

					  	if($request->paciente->espontanea){
							$respiracoes[] = "Espontanea";
						}
						if($request->paciente->cateter){
							$respiracoes[] = "cateter";
						}
						if($request->paciente->mascara){
							$respiracoes[] = "mascara";
						}
						if($request->paciente->traqueostomia){
							$respiracoes[] = "traqueostomia";
						}
						
			
						$respiracoes = array_merge($respiracoes,$request->paciente->respiracoes);
						$respiracoes = implode(",",$respiracoes);
						//respiração 

						if($request->paciente->dispneia){
							$oxigenacao[] = "dispneia";
						}
						if($request->paciente->taquipneia){
							$oxigenacao[] = "taquipneia";
						}
						if($request->paciente->bradipneia){
							$oxigenacao[] = "bradipneia";
						}
						if($request->paciente->hiperventilacaoNeurogenica){
							$oxigenacao[] = "hiperventilacaoNeurogenica";
						}
						if($request->paciente->apneustica){
							$oxigenacao[] = "apneustica";
						}
						if($request->paciente->biot){
							$oxigenacao[] = "biot";
						}
						if($request->paciente->cheyne){
							$oxigenacao[] = "cheyne";
						}
						if($request->paciente->kussmaul){
							$oxigenacao[] = "kussmaul";
						}
						if($request->paciente->emSalvas){
							$oxigenacao[] = "emSalvas";
						}
						if($request->paciente->ventilacaoMecanica){
							$oxigenacao[] = "ventilacaoMecanica";
						}
						$oxigenacao = implode(",",$oxigenacao);
						//oxigenacao

						if($request->paciente->bilateralmente){
							$mvPresente[] = "bilateralmente";
						}
						if($request->paciente->diminuidos){
							$mvPresente[] = "diminuidos";
						}
						$mvPresente = implode(",",$mvPresente);
						//mvpresentes


						if($request->paciente->roncos){
							$ruidos[] = "roncos";
						}
						if($request->paciente->sibilos){
							$ruidos[] = "sibilos";
						}
						if($request->paciente->estertores){
							$ruidos[] = "estertores";
						}
						$ruidos = implode(",",$ruidos);
						//ruidos

						if($request->paciente->presencaoDeTosseNao){
							$presencaoDeTosse[] = "Não";
						}
						if($request->paciente->presencaoDeTosseSim){
							$presencaoDeTosse[] = "Sim";
						}
						if($request->paciente->presencaoDeTosseSeca){
							$presencaoDeTosse[] = "Seca";
						}
						if($request->paciente->presencaoDeTosseProdutiva){
							$presencaoDeTosse[] = "Produtiva";
						}
						if($request->paciente->presencaoDeTosseExpectoracao){
							$presencaoDeTosse[] = "Expectoracao";
							$presencaoDeTosseExpectoracao=$request->paciente->presencaoDeTosseExpectoracaoQtd .":". $request->paciente->presencaoDeTosseExpectoracaoCarc;
						}
						$presencaoDeTosse = implode(",",$presencaoDeTosse);
						//presencaoDeTosse $aspiracao = "";

						if($request->paciente->aspiracao){
							$aspiracao= $request->paciente->aspiracaoQuantidade .":". $request->paciente->aspiracaoCaracteristica;
						}
						//arpiracao

						if($request->paciente->drenagemToracicaDTE){
							$drenagem[] = "DTE";
						}
						if($request->paciente->drenagemToracicaDTD){
							$drenagem[] = "DTD";
						}
						if($request->paciente->drenagemToracica=="sim"){
							$drenagemValores= $request->paciente->aspiracaoQuantidade .":". $request->paciente->aspiracaoCaracteristica;
							$drenagem[]= $drenagemValores;
						}
						$drenagem = implode(",",$drenagem);
						//drenagem

						if($request->paciente->mamaSemAltecacoes){
							$mamas[] = "Sem Altecações";
						}
						if($request->paciente->Nodulos){
							$mamas[] = "Nódulos";
						}
						if($request->paciente->mamaDor){
							$mamas[] = "Dor";
						}
						if($request->paciente->mamaAssimetrica){
							$mamas[] = "Assimetrica";
						}
						if($request->paciente->mamaOutros!=""){
							$mamas[] = $request->paciente->mamaOutros;
						}		
						$mamas = implode(",",$mamas);
						//mamas

						if($request->paciente->pulsoRegular){
							$pulso[] = "Regular";
						}
						if($request->paciente->pulsoIrregular){
							$pulso[] = "Irregular";
						}
						if($request->paciente->pulsoPalpavel){
							$pulso[] = "Palpavel";
						}
						if($request->paciente->pulsoImpalpavel){
							$pulso[] = "Impalpavel";
						}
						if($request->paciente->pulsoCheio){
							$pulso[] = "Cheio";
						}	
						if($request->paciente->pulsoFiliforme){
							$pulso[] = "Filiforme";
						}		
						$pulso = implode(",",$pulso);
						//pulso

						if($request->paciente->presencaDeEdemaNao){
							$presencaDeEdema[] = "Não";
						}
						if($request->paciente->presencaDeEdemaSim){
							$presencaDeEdema[] = "Sim";
						}
						if($request->paciente->presencaDeEdemaPes){
							$presencaDeEdema[] = "Pes";
						}
						if($request->paciente->presencaDeEdemaMMII){
							$presencaDeEdema[] = "MMII";
						}
						if($request->paciente->presencaDeEdemaMMSS){
							$presencaDeEdema[] = "MMSS";
						}	
						if($request->paciente->presencaDeEdemaAnasarca){
							$presencaDeEdema[] = "Anasarca";
						}		
						$presencaDeEdema = implode(",",$presencaDeEdema);
						//presencaDeEdema

						if($request->paciente->eliminacaoUrinariaEspontanea){
							$eliminacaoUrinaria[] = "Espontânea";
						}
						if($request->paciente->eliminacaoUrinariaRetencao){
							$eliminacaoUrinaria[] = "Retenção";
						}
						if($request->paciente->eliminacaoUrinariaIncontinencia){
							$eliminacaoUrinaria[] = "Incontinencia";
						}
						if($request->paciente->eliminacaoUrinariaSVD){
							$eliminacaoUrinaria[] = "SVD";
						}	
						if($request->paciente->eliminacaoUrinariaDispositivoUrinario){
							$eliminacaoUrinaria[] = "Dispositivo Urinário";
						}		
						$eliminacaoUrinaria = implode(",",$eliminacaoUrinaria);
						//eliminacaoUrinaria

						if($request->paciente->caracteristicasDisuria){
							$hidratacaoCaracteristica[] = "Disúria";
						}
						if($request->paciente->caracteristicasOliguria){
							$hidratacaoCaracteristica[] = "Oligúria";
						}
						if($request->paciente->caracteristicasAnuria){
							$hidratacaoCaracteristica[] = "Anúria";
						}
						if($request->paciente->caracteristicasPoliuria){
							$hidratacaoCaracteristica[] = "Poliúria";
						}	
						if($request->paciente->caracteristicasHematuria){
							$hidratacaoCaracteristica[] = "Hematúria";
						}		
						if($request->paciente->caracteristicasOutros!=""){
							$hidratacaoCaracteristica[] = $request->paciente->caracteristicasOutros;
						}	
						$hidratacaoCaracteristica = implode(",",$hidratacaoCaracteristica);
						//hidratacaoCaracteristica


						$sel = "INSERT INTO `saeapp_paciente` ( Data, Nome, Idade, Sexo, Estado_Civil, Religiao, Profissao, Naturalidade, Procedencia, Data_de_internacao, Registro, Setor_de_Procedencia, Leito, Diagnostico_Medico, Internacao_Anterior, Alergias, Vacinas) 
						VALUES ('$today','$nome', '$idade', '$sexo', '$estado_Civil', '$religiao', '$profissao', '$naturalidade', '$procedencia', '$dataInternacao', '$registro', '$setorDeProcedencia', '$leito', '$diagnosticoMedico', '$internacaoAnterior', '$alergias', '$vacinas')";
				    	$result = $conn->query($sel);
						$idPaciente = "SELECT * FROM saedb.saeapp_paciente where Nome = '$nome' and Data_de_internacao = '$dataInternacao' and Registro = '$registro'";
						$result = $conn->query($idPaciente);
						$idPacienteValor = $result->fetch_assoc();
						$idPacienteValor = $idPacienteValor['id'];
						$historico = "INSERT INTO `saedb`.`saeapp_historico` (`idPaciente`, `internacoes`, `motivoInternacao`, `antecedentes`, `alergias`, `vacinas`, `consciencia`, `pupilas`, `mmii_esquerdo`, `mmii_direito`, `mmss_esquerdo`, `mmss_direito`, `falaELinguagem`, `respiracao`, `O2`, `SpO`, `FR`, `oxigenacao`, `modalidade`, `FiO2`, `Peep`, `SpO2`, `auscultaPulmonar_MvPresente`, `auscultaPulmonar_Ruidos`, `prevencaoDeTosse`, `presencaoDeTosse_xpectoracao`, `aspiracao`, `drenagemToracica`, `mamas`, `avaliacaoCardiovascular_Fc`, `avaliacaoCardiovascular_Pa`, `avaliacaoCardiovascular_PVC`, `avaliacaoCardiovascular_PAM`, `pulso`, `presencaDeEdema`, `turgidezDaPele`, `eliminacaoUrinaria_Volume`, `eliminacaoUrinaria`, `hidratacao_Caracteristicas`, `tipoDeDieta`, `glicemia`, `apetite`, `alimentacao_ViasDeAdministracao`, `presencaoDe`, `abdome`, `RHA`, `ostomia`, `eliminacaoIntestinal`, `eliminacaoIntestinal_frequencia`, `pele`, `pele_temperatura`, `olhos`, `AVP`, `AVP_local_tempo`, `CVC`, `CVC_local_tempo`, `dreno`, `dreno_caracteristicas`, `dreno_tipo`, `genitalia`, `genitalia_lesoes`, `necessidadeDeContencao`, `riscoParaQueda`, `escore`, `observacoes`) 
						VALUES ('$idPacienteValor', '$internacaoAnterior', '$motivoInternacao', '$antecedentes', '$alergias', '$vacinas', '$consciencia', '$pupila', '$mmiiEsquerda', '$mmiiDireita', '$mmssEsquerda', '$mmssDireita', '$fala', '$respiracoes', '$o', '$sop', '$fr', '$oxigenacao', '$modalidade', '$fiO2', '$peep', '$spO2', '$mvPresente', '$ruidos', '$presencaoDeTosse', '$presencaoDeTosseExpectoracao', '$aspiracao', '$drenagem', '$mamas', '$avaliacaoCardiovascularFC', '$avaliacaoCardiovascularPA', '$avaliacaoCardiovascularPVC', '$avaliacaoCardiovascularPAM', '$pulso', '$presencaDeEdema', '$turgidezDaPele', '$eliminacaoUrinariaVolume', '$eliminacaoUrinaria', '$hidratacaoCaracteristica', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32')";
						$result = $conn->query($historico);
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
