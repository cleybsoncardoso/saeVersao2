export class AprazamentoDados{

  public id:any;
  public intervencao:string;
  public data:Date;
  public inicio:string;
  public intervalo: number;
  public fim:any;
  public dataInicio:Date;
  public dataFim:Date;


  constructor(){
    this.data = new Date();
    this.inicio = this.data.toLocaleTimeString();
    this.fim = "";
    this.intervencao  = "";
    this.id = "";
    this.dataInicio = new Date();
    this.dataFim = new Date();
    

  }
}
