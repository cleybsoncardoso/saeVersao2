export class Paciente {

  public id: string;
  //identificacao

  public registro: string = "";
  public nome: string = "";
  public sexo: string = "";
  public estado_civil: string = "";
  public religiao: string = "";
  public profissao: string = "";
  public naturalidade: string = "";
  public procedencia: string = "";
  public leito: string = "";
  public setor_procedencia: string = "";
  public diagnostico_medico: string = "";
  public data_internacao: string = "";
  public nascimento: string = "";
  
  constructor() {
    //identificacao
    this.id = "0";
  }
}
