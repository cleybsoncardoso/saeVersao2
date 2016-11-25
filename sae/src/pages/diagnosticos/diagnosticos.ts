import { Component } from '@angular/core';
import { NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {PacienteService} from "../../providers/paciente-service/paciente-service";
import {AprazamentoPage}from '../aprazamento/aprazamento';
import {AprazamentoDados}from '../../model/aprazamento';


/*
  Generated class for the Diagnosticos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diagnosticos',
  templateUrl: 'diagnosticos.html'
})
export class DiagnosticosPage {

  private paciente : CadastroPaciente;
  private listaCaracteristicas : any;
  private caracteristicasSelecionada:number[];
  private diagnosticos:any;
  private intervencaoSelecioandas:any;
  private intervencaoAtual : AprazamentoDados;
  private intervencoesEnviar:AprazamentoDados[];

  constructor(
    private params : NavParams,
    private http : Http,
    private nav : NavController,
    private service : PacienteService,
    private alert :AlertController,
    private loading : LoadingController


  ) {
      this.paciente = params.get('paciente');
      this.caracteristicasSelecionada = params.get('caracteristicas');
      this.calcularDiagnosticos();
      this.diagnosticos = [];
      this.intervencaoSelecioandas=[];
      this.intervencoesEnviar = [];
  }

  cancel(){
    this.nav.popToRoot();
  }

  //funcao realizada quando o usuario desliza o dedo na tela
  slide(passar){
    if(passar.deltaX>0){
      this.nav.pop();
    }else{
      this.enviarDiagnosticos();
    }
  }

  calcularDiagnosticos(){
    let ids = "";
    for(let i = 0; this.caracteristicasSelecionada.length>i;i++){
      ids = ids + this.caracteristicasSelecionada[i];
      if((1+i)<this.caracteristicasSelecionada.length && this.caracteristicasSelecionada.length!=1)
        ids = ids + ";";
    }
    this.service.carregarDiagnosticos(ids)
    .subscribe(data=>{
      this.diagnosticos = data;
    },error => {
      console.log(this.listaCaracteristicas);
      console.log("Não foi possível se conectar ao servidor");
    });
  }

  ionViewDidLoad() {
    console.log('Hello DiagnosticosPage Page');
  }

  itemSelected(intervencaoSelecioanda){
    let index = this.intervencaoSelecioandas.indexOf(intervencaoSelecioanda);
    if(index==-1){
      this.intervencaoSelecioandas.push(intervencaoSelecioanda);
    }else{
      this.intervencaoSelecioandas.splice(index,1);
    }
  }

  selecionado(intervencaoSelecioanda){
    let index = this.intervencaoSelecioandas.indexOf(intervencaoSelecioanda);
    if(index==-1){
      return false;
    }else{
      return true;
    }
  }

  enviarDiagnosticos(){

    let confirm = this.alert.create({
          title: 'Cadastrar intervenção',
          message: 'Deseja cadstrar as intervenções?',
          buttons: [
            {
              text: 'Confirmar',
              handler: () => {
                this.enviarServidor();
                for(let i = 0;i<this.intervencaoSelecioandas.length;i++){
                  this.intervencaoAtual = new AprazamentoDados();
                  this.intervencaoAtual.intervencao = this.intervencaoSelecioandas[i].titulo;
                  this.intervencaoAtual.id = this.intervencaoSelecioandas[i].id;
                  this.intervencoesEnviar.push(this.intervencaoAtual);
                }

                this.nav.push(AprazamentoPage, {intervencoes: this.intervencoesEnviar, paciente: this.paciente});
              }
            },
            {
              text: 'Cancelar',
              handler: () => {

              }
            }
          ]
        });
        confirm.present();
  }

  enviarServidor(){

  }

}
