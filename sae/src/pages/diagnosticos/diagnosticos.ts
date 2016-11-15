import { Component } from '@angular/core';
import { NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {PacienteService} from "../../providers/paciente-service/paciente-service";
import {AprazamentoPage}from '../aprazamento/aprazamento';


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
  private intervencaoSelecioanda:any;

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
      this.intervencaoSelecioanda=[];
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
    console.log(intervencaoSelecioanda);
    console.log(intervencaoSelecioanda.intervencao);
    let index = this.intervencaoSelecioanda.indexOf(intervencaoSelecioanda.id);
    if(index==-1){
    //  document.getElementById(intervencaoSelecioanda.intervencao).style.backgroundColor = '#98FB98';
      this.intervencaoSelecioanda.push(intervencaoSelecioanda.id);
    }else{
    //  document.getElementById(intervencaoSelecioanda.intervencao).style.backgroundColor = '#ffffff';
      this.intervencaoSelecioanda.splice(index,1);
    }
    console.log(this.intervencaoSelecioanda);
  }

  selecionado(intervencaoSelecioanda){
    let index = this.intervencaoSelecioanda.indexOf(intervencaoSelecioanda);
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
                this.nav.push(AprazamentoPage);
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
