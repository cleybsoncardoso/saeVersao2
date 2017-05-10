export class Paciente {

  public id: string;
  //identificacao
  public Nome: string;
  public Idade: string;
  public Sexo: string;
  public Estado_Civil: string;
  public Religiao: string;
  public Profissao: string;
  public Naturalidade: string;
  public Procedencia: string;
  public Leito: string;
  public Data_de_internacao: string;
  public Registro: string;
  public Setor_de_Procedencia: string;
  public Clinica: string;
  public Diagnostico_Medico: string;
  
  constructor() {
    //identificacao
    this.id = "0";
    this.Nome = "";
    this.Idade = "";
    this.Sexo = "";
    this.Estado_Civil = "";
    this.Religiao = "";
    this.Profissao = "";
    this.Naturalidade = "";
    this.Procedencia = "";
    this.Leito = "";
    this.Data_de_internacao = "";
    this.Registro = "";
    this.Setor_de_Procedencia = "";
    this.Clinica = "";
    this.Diagnostico_Medico = "";
   
  }
}
