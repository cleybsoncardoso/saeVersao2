export class AprazamentoDados{

  public id:any;
  public intervencao:number;
  public data:Date;
  public inicio:string;
  public intervalo: number;
  public fim:any;
  public dataInicio:string;
  public dataFim:string;


  constructor(){
    this.data = new Date();
    this.inicio = this.data.toLocaleTimeString();
    this.fim = "";
    this.intervencao  = 0;
    this.id = "";
    let dataAtual = this.data.toISOString().split('T');
    this.dataInicio = dataAtual[0];
    this.dataFim = "";


  }
}
