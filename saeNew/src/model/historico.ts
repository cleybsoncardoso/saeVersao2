export class Historico {

  //entrevista
  public idPaciente: string;
  public idsaeapp_historico: string;
  public internacoes: string;
  public cardiopatia: boolean;
  public convulsao: boolean;
  public asma: boolean;
  public drogas: boolean;
  public motivo: Array<string>;
  public qtdeMotivos: number;
  public has: boolean;
  public tabagismo: boolean;
  public diabetesMellitus: boolean;
  public alcoolismo: boolean;
  public antecedentesArray: Array<string>;
  public antecedentes: string;
  public qtdeAntecedentes: number;
  public alergiasArray: Array<string>;
  public alergias: string;
  public qtdeAlergias: number;
  public vacinas: string;
  public vacinasArray: Array<string>;
  public qtdeVacinas: number;
  //avaliacao neurologica
  public consciencia: string;
  public glasgow: number;
  public glasgowMenu: boolean;
  public pupilas: string;
  public mmss_direito: string;
  public mmss_esquerdo: string;
  public mmii_direito: string;
  public mmii_esquerdo: string;
  public falaELinguagem: string;
  //Oxigenacao
  public O2: string;
  public SpO: string;
  public FR: string;
  public oxigenacao: string;
  public traqueostomiaMascara: string;
  public ventilacaoMecanica: boolean;
  public ventilacaoMecanicaTipo: string;
  public FiO2: string;
  public Peep: string;
  public SpO2: string;
  public auscultaPulmonar_MvPresente: string;
  public auscultaPulmonar_Ruidos: string;
  public presencaoDeTosse_xpectoracao: string;
  public aspiracao;
  public aspiracaoQuantidade: string;
  public aspiracaoCaracteristica: string;
  public drenagemToracica;
  public drenagemToracicaQuantidade: string;
  public drenagemToracicaCaracteristica: string;
  public drenagemToracicaDTE: boolean;
  public drenagemToracicaDTD: boolean;
  public mamas: string;
  //avaliacao Cardiovascular
  public avaliacaoCardiovascular_Fc: string;
  public avaliacaoCardiovascular_Pa: string;
  public avaliacaoCardiovascular_PVC: string;
  public avaliacaoCardiovascular_Pam: string;
  public pulso: string;
  public pulsoImpalpavel: string;
  public presencaDeEdema: string;
  public presencaDeEdemaNao: boolean;
  public presencaDeEdemaSim: boolean;
  public presencaDeEdemaPes: boolean;
  public presencaDeEdemaMMII: boolean;
  public presencaDeEdemaMMSS: boolean;
  public presencaDeEdemaAnasarca: boolean;
  //hidratacao e eliminacao vesical
  public turgidezDaPele: string;
  public eliminacaoUrinariaEspontanea: boolean;
  public eliminacaoUrinariaRetencao: boolean;
  public hidratacao_Caracteristicas: string;
  public eliminacaoUrinaria: string;
  public eliminacaoUrinariaIncontinencia: boolean;
  public eliminacaoUrinariaSVD: boolean;
  public eliminacaoUrinariaDispositivoUrinario: boolean;
  public caracteristicasDisuria: boolean;
  public caracteristicasOliguria: boolean;
  public caracteristicasAnuria: boolean;
  public caracteristicasPoliuria: boolean;
  public caracteristicasHematuria: boolean;
  public caracteristicasOutros: string;
  //alimentacao e eliminacao
  public tipoDeDieta: string;
  public glicemia: string;
  public viasDeAdministracaoOral: boolean;
  public viasDeAdministracaoSNG: boolean;
  public viasDeAdministracaoSNE: boolean;
  public viasDeAdministracaoParenteral: boolean;
  public viasDeAdministracaoOutros: string;
  public abdomePlano: boolean;
  public abdomeGloboso: boolean;
  public abdomeDistendido: boolean;
  public abdomeDolorosoAPalpacao: boolean;
  public abdomeOutros: string;
  public rha: string;
  public ostomia;
  public ostomiaLocal: string;
  public ostomiaCaracteristica: string;
  public eliminacaoIntestinal: string;
  public eliminacaoIntestinalFrequencia: string;
  public eliminacaoIntestinalOutros: string;
  //aspectos cutaneo muscosa
  public aspectosCutaneoMucosaLesoes: string;
  public aspectosCutaneoMucosaCianose: boolean;
  public aspectosCutaneoMucosaIctericia: boolean;
  public aspectosCutaneoMucosaPetequias: boolean;
  public aspectosCutaneoMucosaCorado: boolean;
  public aspectosCutaneoMucosaHipocorado: boolean;
  public aspectosCutaneoMucosaHipercorado: boolean;
  public aspectosCutaneoMucosaEquimoses: boolean;
  public aspectosCutaneoMucosaHematomas: boolean;
  public aspectosCutaneoMucosaEscoriacoes: boolean;
  public aspectosCutaneoMucosaOutros: string;
  public aspectosCutaneoMucosaTemperatura: string;
  public olhosIctericia: boolean;
  public olhosEdemaDeConjuntiva: boolean;
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
  public genitaliaOutros: string;
  //seguranca Fisica
  public segurancaFisica;
  public riscoParaQueda;
  public score: string;
  public observacoes: Array<string>;
  public qtdeObservacoes: number;

  constructor() {

    //entrevista
    this.idsaeapp_historico = "0";
    this.idPaciente = "0";
    this.internacoes = "";
    this.cardiopatia = false;
    this.convulsao = false;
    this.asma = false;
    this.drogas = false;
    this.motivo = [];
    this.qtdeMotivos = 0;
    this.has = false;
    this.tabagismo = false;
    this.diabetesMellitus = false;
    this.alcoolismo = false;
    this.antecedentesArray = [];
    this.antecedentes = "";
    this.qtdeAntecedentes = 0;
    this.alergias = "";
    this.alergiasArray = [];
    this.qtdeAlergias = 0;
    this.vacinas = "";
    this.vacinasArray = [];
    this.qtdeVacinas = 0;
    //avaliacao neurologica
    this.consciencia = "";
    this.glasgow = 0;
    this.glasgowMenu = false;
    this.pupilas = "";
    this.mmii_esquerdo = "";
    this.mmii_direito = "";
    this.mmss_esquerdo = "";
    this.mmss_direito = "";
    this.falaELinguagem = "";
    //Oxigenacao
    this.O2 = "";
    this.SpO = "";
    this.FR = "";
    this.oxigenacao = "";
    this.traqueostomiaMascara = "";
    this.ventilacaoMecanica = false;
    this.ventilacaoMecanicaTipo = "";
    this.FiO2 = "";
    this.Peep = "";
    this.SpO2 = "";
    this.auscultaPulmonar_MvPresente = "";
    this.auscultaPulmonar_Ruidos = "";
    this.presencaoDeTosse_xpectoracao = "";
    this.aspiracao;
    this.aspiracaoQuantidade = "";
    this.aspiracaoCaracteristica = "";
    this.drenagemToracica;
    this.drenagemToracicaQuantidade = "";
    this.drenagemToracicaCaracteristica = "";
    this.drenagemToracicaDTE = false;
    this.drenagemToracicaDTD = false;
    this.mamas = "";
    //avaliacao Cardiovascular
    this.avaliacaoCardiovascular_Fc = "";
    this.avaliacaoCardiovascular_Pa = "";
    this.avaliacaoCardiovascular_PVC = "";
    this.avaliacaoCardiovascular_Pam = "";
    this.pulso = "";
    this.pulsoImpalpavel = "";
    this.presencaDeEdema = "";
    this.presencaDeEdemaNao = false;
    this.presencaDeEdemaSim = false;
    this.presencaDeEdemaPes = false;
    this.presencaDeEdemaMMII = false;
    this.presencaDeEdemaMMSS = false;
    this.presencaDeEdemaAnasarca = false;
    //hidratacao e eliminacao vesical
    this.turgidezDaPele = "";
    this.eliminacaoUrinaria = "";
    this.hidratacao_Caracteristicas = "";
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
    //alimentacao e eliminacao
    this.turgidezDaPele = "";
    this.tipoDeDieta = "";
    this.glicemia = "";
    this.viasDeAdministracaoOral = false;
    this.viasDeAdministracaoSNG = false;
    this.viasDeAdministracaoSNE = false;
    this.viasDeAdministracaoParenteral = false;
    this.viasDeAdministracaoOutros = "";
    this.abdomePlano = false;
    this.abdomeGloboso = false;
    this.abdomeDistendido = false;
    this.abdomeDolorosoAPalpacao = false;
    this.abdomeOutros = "";
    this.rha = "";
    this.ostomia;
    this.ostomiaLocal = "";
    this.ostomiaCaracteristica = "";
    this.eliminacaoIntestinal = "";
    this.eliminacaoIntestinalFrequencia = "";
    this.eliminacaoIntestinalOutros = "";
    //aspectos cutaneo muscosa
    this.aspectosCutaneoMucosaLesoes = "";
    this.aspectosCutaneoMucosaCianose = false;
    this.aspectosCutaneoMucosaIctericia = false;
    this.aspectosCutaneoMucosaPetequias = false;
    this.aspectosCutaneoMucosaCorado = false;
    this.aspectosCutaneoMucosaHipocorado = false;
    this.aspectosCutaneoMucosaHipercorado = false;
    this.aspectosCutaneoMucosaEquimoses = false;
    this.aspectosCutaneoMucosaHematomas = false;
    this.aspectosCutaneoMucosaEscoriacoes = false;
    this.aspectosCutaneoMucosaOutros = "";
    this.aspectosCutaneoMucosaTemperatura = "";
    this.olhosIctericia = false;
    this.olhosEdemaDeConjuntiva = false;
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
    this.genitaliaOutros = "";
    //seguranca Fisica
    this.segurancaFisica;
    this.riscoParaQueda;
    this.score = "";
    this.observacoes = [];
    this.qtdeObservacoes = 0;
  }
}
