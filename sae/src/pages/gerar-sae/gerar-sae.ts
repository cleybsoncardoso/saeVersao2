import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import 'rxjs/add/operator/map';
import {PacienteService} from "../../providers/paciente-service/paciente-service";
import { DiagnosticosPage } from '../diagnosticos/diagnosticos';

/*
  Generated class for the GerarSae page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gerar-sae',
  templateUrl: 'gerar-sae.html'
})
export class GerarSaePage {

  private paciente : CadastroPaciente;
  private listaCaracteristicas : any;
  private caracteristicasSelecionada:number[];

  constructor(private params : NavParams, private nav : NavController, private service : PacienteService) {
    this.paciente = params.get('paciente');
    this.caracteristicasSelecionada = [];
    this.carregarCaracteristicas();
  }

  cancel(){
    this.nav.popToRoot();
  }

  //funcao realizada quando o usuario desliza o dedo na tela
  slide(passar){
    if(passar.deltaX<0){
      this.nav.push(DiagnosticosPage,{caracteristicas: this.caracteristicasSelecionada, paciente: this.paciente});
    }
  }

  carregarCaracteristicas(){

    this.service.carregarCaracteristicas()
    .subscribe(data=>{
      this.listaCaracteristicas = data;

    },error => {
      console.log(this.listaCaracteristicas);
      console.log("Não foi possível se conectar ao servidor");
    });
  }


    itemSelected(caracteristicaClicada){
      let index = this.caracteristicasSelecionada.indexOf(caracteristicaClicada.id);
      if(index==-1){
        document.getElementById(caracteristicaClicada.titulo).style.backgroundColor = '#98FB98';
        this.caracteristicasSelecionada.push(caracteristicaClicada.id);
      }else{
        document.getElementById(caracteristicaClicada.titulo).style.backgroundColor = '#ffffff';
        this.caracteristicasSelecionada.splice(index,1);
      }
      console.log(this.caracteristicasSelecionada);
    }





}
