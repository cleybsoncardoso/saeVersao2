export class CadastroPaciente{

  public nome:string;
  public idade: string;
  public sexo: string;
  public estadoCivil: string;
  public religiao: string;
  public profissao: string;
  public naturalidade: string;
  public procedencia: string;
  public leito: string;
  public dataInternacao: string;
  public registro: string;
  public setorDeProcedencia: string;
  public diagnosticoMedico:  string;
  public internacaoAnterior: string;
  public cardiopatia: boolean;
  public convulsao: boolean;
  public asma: boolean;
  public drogas: boolean;
  public has: boolean;
  public tabagismo: boolean;
  public diabetesMellitus: boolean;
  public alcoolismo: boolean;
  public qtdeAntecedentes: number;
  public antecedentes: Array<string>;
  public qtdeAlergias: number;
  public alergias: Array<string>;
  public qtdeVacinas: number;
  public vacinas: Array<string>;
  public alerta: boolean;
  public letargico: boolean;
  public obnubilado: boolean;
  public torporoso: boolean;
  public comatoso: boolean;
  public glasgow: number;
  public glasgowOcular;
  public glasgowVerbal;
  public glasgowMotor;
  public isocorica: boolean;
  public anisocorica: boolean;
  public miose: boolean;
  public midriase: boolean;
  public rfm: boolean;
  public mmss ;
  public preservada: boolean;
  public paresia: boolean;
  public plegia: boolean;
  public parestesia: boolean;
  public movimentosLentos: boolean;
  public movimentosInvoluntarios: boolean;
  public obsRespiracao: number;
  public respiracoes: Array<string>;
  public espontanea: boolean;
  public cateter: boolean;
  public mascara: boolean;
  public traqueostomia: boolean;
  public o: string;
  public sop: string;
  public fr: string;
  public dispneia: boolean;
  public taquipneia: boolean;
  public bradipneia: boolean;
  public hiperventilacaoNeurogenica: boolean;
  public apneustica: boolean;
  public biot: boolean;
  public cheyne: boolean;
  public kussmaul: boolean;
  public emSalvas: boolean;
  public ventilacaoMecanica: boolean;
  public modalidade: string;
  public fiO2: string;
  public peep: string;
  public spO2: string;
  public bilateralmente: boolean;
  public diminuidos: boolean;
  public roncos: boolean;
  public sibilos: boolean;
  public estertores: boolean;
  public presencaoDeTosseNao: boolean;
  public presencaoDeTosseSim: boolean;
  public presencaoDeTosseSeca: boolean;
  public presencaoDeTosseProdutiva: boolean;
  public presencaoDeTosseExpectoracao: boolean;
  public glasgowMenu: boolean;
  public aspiracao ;
  public aspiracaoQuantidade: string;
  public aspiracaoCaracteristica: string;
  public drenagemToracica ;
  public drenagemToracicaDTE: boolean;
  public drenagemToracicaDTD: boolean;
  public drenagemToracicaQuantidade: string;
  public drenagemToracicaCaracteristica: string;
  public mamaOutros: string;
  public mamaSemAltecacoes: boolean;
  public mamaNodulos: boolean;
  public mamaDor: boolean;
  public mamaAssimetrica: boolean;
  public avaliacaoCardiovascularFC: string;
  public avaliacaoCardiovascularPA: string;
  public avaliacaoCardiovascularPVC: string;
  public avaliacaoCardiovascularPAM: string;
  public pulsoRegular: boolean;
  public pulsoIrregular: boolean;
  public pulsoPalpavel: boolean;
  public pulsoImpalpavel: boolean;
  public pulsoCheio: boolean;
  public pulsoFiliforme: boolean;
  public presencaDeEdemaNao: boolean;
  public presencaDeEdemaSim: boolean;
  public presencaDeEdemaPes: boolean;
  public presencaDeEdemaMMII: boolean;
  public presencaDeEdemaMMSS: boolean;
  public presencaDeEdemaAnasarca: boolean;
  public turgidezDaPele;
  public eliminacaoUrinariaVolume: string;
  public eliminacaoUrinariaEspontanea: boolean;
  public eliminacaoUrinariaRetencao: boolean;
  public eliminacaoUrinariaIncontinencia: boolean;
  public eliminacaoUrinariaSVD: boolean;
  public eliminacaoUrinariaDispositivoUrinario: boolean;
  public caracteristicasDisuria: boolean;
  public caracteristicasOliguria: boolean;
  public caracteristicasAnuria: boolean;
  public caracteristicasPoliuria: boolean;
  public caracteristicasHematuria: boolean;
  public caracteristicasOutros: string;
  public tipoDeDieta: string;
  public glicemia: string;
  public apetite;
  public viasDeAdministracaoOral: boolean;
  public viasDeAdministracaoSNG: boolean;
  public viasDeAdministracaoSNE: boolean;
  public viasDeAdministracaoParenteral: boolean;
  public viasDeAdministracaoOutros: string;
  public presencaoDeNausea: boolean;
  public presencaoDeVomitoQuantidade: string;
  public presencaoDeVomitoCaracteristica: string;
  public presencaoDeVomito: boolean;
  public abdomePlano: boolean;
  public abdomeGloboso: boolean;
  public abdomeDistendido: boolean;
  public abdomeDolorosoAPalpacao: boolean;
  public abdomeOutros: string;
  public rhaPresentes: boolean;
  public rhaAusentes: boolean;
  public rhaDiminuido: boolean;
  public rhaAumentado: boolean;
  public ostomia;
  public ostomiaLocal: string;
  public ostomiaCaracteristica: string;
  public eliminacaoIntestinal;
  public eliminacaoIntestinalFrequencia: string;
  public eliminacaoIntestinalOutros: string;
  public aspectosCutaneoMucosaCianose: boolean;
  public aspectosCutaneoMucosaIctericia: boolean;
  public aspectosCutaneoMucosaPalidez: boolean;
  public aspectosCutaneoMucosaPrurido: boolean;
  public aspectosCutaneoMucosaPetequias: boolean;
  public aspectosCutaneoMucosaCorado: boolean;
  public aspectosCutaneoMucosaHipocorado: boolean;
  public aspectosCutaneoMucosaHipercorado: boolean;
  public aspectosCutaneoMucosaEquimoses: boolean;
  public aspectosCutaneoMucosaHematomas: boolean;
  public aspectosCutaneoMucosaEscoriacoes: boolean;
  public aspectosCutaneoMucosaOutros: string;
  public aspectosCutaneoMucosaTemperatura: string;
  public olhosEdemaDeConjuntiva: boolean;
  public olhosIctericia: boolean;
  public olhosOutros: string;
  public avp;
  public avpLocal: string;
  public avpTempoDePermanencia: string;
  public cvc;
  public cvcLocal: string;
  public cvcTempoDePermanencia: string;
  public dreno;
  public drenoCaracteristicas: string;
  public drenoTipoDeDreno: string;
  public genitaliaSemAnormalidades: boolean;
  public genitaliaSecrecao: boolean;
  public genitaliaLesoes: boolean;
  public genitaliaLesoesCaracteristicas: string;
  public genitaliaOutros: string;
  public segurancaFisica;
  public riscoParaQueda;
  public score: string;
  public observacoes: Array<string>;
  public qtdeObservacoes: number;

  constructor(){
    this.nome  = "";
    this.idade = "";
    this.sexo = "";
    this.estadoCivil = "";
    this.religiao = "";
    this.naturalidade = "";
    this.profissao = "";
    this.procedencia = "";
    this.leito = "";
    this.dataInternacao = "";
    this.registro = "";
    this.setorDeProcedencia = "";
    this.diagnosticoMedico = "";
    this.internacaoAnterior = "";
    this.cardiopatia = false;
    this.convulsao = false;
    this.asma = false;
    this.drogas = false;
    this.has = false;
    this.tabagismo = false;
    this.diabetesMellitus = false;
    this.alcoolismo = false;
    this.qtdeAntecedentes = 0;
    this.antecedentes = [];
    this.qtdeAlergias = 0;
    this.alergias = [];
    this.qtdeVacinas = 0;
    this.vacinas = [];
    this.alerta = false;
    this.letargico = false;
    this.obnubilado = false;
    this.torporoso = false;
    this.comatoso = false;
    this.glasgow = 0;
    this.glasgowOcular;
    this.glasgowVerbal;
    this.glasgowMotor;
    this.isocorica = false;
    this.anisocorica = false;
    this.miose = false;
    this.midriase = false;
    this.rfm = false;
    this.mmss ;
    this.preservada = false;
    this.paresia = false;
    this.plegia = false;
    this.parestesia = false;
    this.movimentosLentos = false;
    this.movimentosInvoluntarios = false;
    this.obsRespiracao = 0;
    this.respiracoes= [];
    this.espontanea = false;
    this.cateter = false;
    this.mascara = false;
    this.traqueostomia = false;
    this.o = "";
    this.sop = "";
    this.fr = "";
    this.dispneia = false;
    this.taquipneia = false;
    this.bradipneia = false;
    this.hiperventilacaoNeurogenica = false;
    this.apneustica = false;
    this.biot = false;
    this.cheyne = false;
    this.kussmaul = false;
    this.emSalvas = false;
    this.ventilacaoMecanica = false;
    this.modalidade = "";
    this.fiO2 = "";
    this.peep = "";
    this.spO2 = "";
    this.bilateralmente = false;
    this.diminuidos = false;
    this.roncos = false;
    this.sibilos = false;
    this.estertores = false;
    this.presencaoDeTosseNao = false;
    this.presencaoDeTosseSim = false;
    this.presencaoDeTosseSeca = false;
    this.presencaoDeTosseProdutiva = false;
    this.presencaoDeTosseExpectoracao = false;
    this.glasgowMenu = false;
    this.aspiracao ;
    this.aspiracaoQuantidade = "";
    this.aspiracaoCaracteristica = "";
    this.drenagemToracica ;
    this.drenagemToracicaDTE = false;
    this.drenagemToracicaDTD = false;
    this.drenagemToracicaQuantidade = "";
    this.drenagemToracicaCaracteristica = "";
    this.mamaOutros = "";
    this.mamaSemAltecacoes = false;
    this.mamaNodulos = false;
    this.mamaDor = false;
    this.mamaAssimetrica = false;
    this.avaliacaoCardiovascularFC = "";
    this.avaliacaoCardiovascularPA = "";
    this.avaliacaoCardiovascularPVC = "";
    this.avaliacaoCardiovascularPAM = "";
    this.pulsoRegular = false;
    this.pulsoIrregular = false;
    this.pulsoPalpavel = false;
    this.pulsoImpalpavel = false;
    this.pulsoCheio = false;
    this.pulsoFiliforme = false;
    this.presencaDeEdemaNao = false;
    this.presencaDeEdemaSim = false;
    this.presencaDeEdemaPes = false;
    this.presencaDeEdemaMMII = false;
    this.presencaDeEdemaMMSS = false;
    this.presencaDeEdemaAnasarca = false;
    this.turgidezDaPele ;
    this.eliminacaoUrinariaVolume = "";
    this.eliminacaoUrinariaEspontanea = false;
    this.eliminacaoUrinariaRetencao = false;
    this.eliminacaoUrinariaIncontinencia = false;
    this.eliminacaoUrinariaSVD = false;
    this.eliminacaoUrinariaDispositivoUrinario = false;
    this.caracteristicasDisuria = false;
    this.caracteristicasOliguria = false;
    this.caracteristicasAnuria = false;
    this.caracteristicasPoliuria = false;
    this.caracteristicasHematuria = false;
    this.caracteristicasOutros = "";
    this.tipoDeDieta = "";
    this.glicemia = "";
    this.apetite;
    this.viasDeAdministracaoOral = false;
    this.viasDeAdministracaoSNG = false;
    this.viasDeAdministracaoSNE = false;
    this.viasDeAdministracaoParenteral = false;
    this.viasDeAdministracaoOutros = "";
    this.presencaoDeNausea = false;
    this.presencaoDeVomitoQuantidade = "";
    this.presencaoDeVomitoCaracteristica = "";
    this.presencaoDeVomito = false;
    this.abdomePlano = false;
    this.abdomeGloboso = false;
    this.abdomeDistendido = false;
    this.abdomeDolorosoAPalpacao = false;
    this.abdomeOutros = "";
    this.rhaPresentes = false;
    this.rhaAusentes = false;
    this.rhaDiminuido = false;
    this.rhaAumentado = false;
    this.ostomia ;
    this.ostomiaLocal = "";
    this.ostomiaCaracteristica = "";
    this.eliminacaoIntestinal ;
    this.eliminacaoIntestinalFrequencia = "";
    this.eliminacaoIntestinalOutros = "";
    this.aspectosCutaneoMucosaCianose = false;
    this.aspectosCutaneoMucosaIctericia = false;
    this.aspectosCutaneoMucosaPalidez = false;
    this.aspectosCutaneoMucosaPrurido = false;
    this.aspectosCutaneoMucosaPetequias = false;
    this.aspectosCutaneoMucosaCorado = false;
    this.aspectosCutaneoMucosaHipocorado = false;
    this.aspectosCutaneoMucosaHipercorado = false;
    this.aspectosCutaneoMucosaEquimoses = false;
    this.aspectosCutaneoMucosaHematomas = false;
    this.aspectosCutaneoMucosaEscoriacoes = false;
    this.aspectosCutaneoMucosaOutros = "";
    this.aspectosCutaneoMucosaTemperatura = "";
    this.olhosEdemaDeConjuntiva = false;
    this.olhosIctericia = false;
    this.olhosOutros = "";
    this.avp;
    this.avpLocal = "";
    this.avpTempoDePermanencia = "";
    this.cvc;
    this.cvcLocal = "";
    this.cvcTempoDePermanencia = "";
    this.dreno;
    this.drenoCaracteristicas = "";
    this.drenoTipoDeDreno = "";
    this.genitaliaSemAnormalidades = false;
    this.genitaliaSecrecao = false;
    this.genitaliaLesoes = false;
    this.genitaliaLesoesCaracteristicas = "";
    this.genitaliaOutros = "";
    this.segurancaFisica;
    this.riscoParaQueda;
    this.score = "";
    this.observacoes = [];
    this.qtdeObservacoes = 0;
  }
}
