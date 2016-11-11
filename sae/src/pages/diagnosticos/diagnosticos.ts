import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import {Caracteristica}from '../../model/caracteristica';
import 'rxjs/add/operator/map';
import {PacienteService} from "../../providers/paciente-service/paciente-service";

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
  private caracteristica : Caracteristica;
  private listaCaracteristicas : any;
  private caracteristicasSelecionada:number[];
  private diagnosticos:any;
  private diagnosticosSelecionados:any;

  constructor(private params : NavParams, private nav : NavController, private service : PacienteService) {
      this.paciente = params.get('paciente');
      this.caracteristicasSelecionada = params.get('caracteristicas');
      console.log(this.paciente.nome);
      console.log(this.caracteristicasSelecionada);
      this.calcularDiagnosticos();
      this.diagnosticos = [];
      this.diagnosticosSelecionados=[];
  }

  cancel(){
    this.nav.popToRoot();
  }

  //funcao realizada quando o usuario desliza o dedo na tela
  slide(passar){
    if(passar.deltaX>0){
      this.nav.pop();
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

  itemSelected(diagnosticoaClicado){
    let index = this.diagnosticosSelecionados.indexOf(diagnosticoaClicado.id);
    if(index==-1){
      document.getElementById(diagnosticoaClicado.titulo).style.backgroundColor = '#98FB98';
      this.diagnosticosSelecionados.push(diagnosticoaClicado.id);
    }else{
      document.getElementById(diagnosticoaClicado.titulo).style.backgroundColor = '#ffffff';
      this.diagnosticosSelecionados.splice(index,1);
    }
    console.log(this.diagnosticosSelecionados);
  }

}
