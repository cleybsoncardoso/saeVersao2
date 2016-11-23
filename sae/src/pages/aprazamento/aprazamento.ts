import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import {AprazamentoDados}from '../../model/aprazamento';

/*
  Generated class for the Aprazamento page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aprazamento',
  templateUrl: 'aprazamento.html'
})
export class AprazamentoPage {

private aprazamentos: string[];
private paciente : CadastroPaciente;
private listaIntervencoes : any;

  constructor(private params : NavParams, public nav: NavController) {
    this.listaIntervencoes = params.get('intervencoes');
    this.paciente = params.get('paciente');

  }

  


  cancel(){
    this.nav.popToRoot();
  }


}
