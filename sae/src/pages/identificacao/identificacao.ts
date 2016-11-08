import {NavController,  NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {PacientesPage} from '../pacientes/pacientes';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import {Entrevista} from '../entrevista/entrevista';

/*
  Generated class for the IdentificacaoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'identificacao.html',
})
export class IdentificacaoPage {

private paciente : CadastroPaciente;

  constructor(private params : NavParams, private nav : NavController) {
    this.paciente = params.get('paciente');
  }
  cancel(){
    this.nav.popToRoot();
  }

  slide(passar){
    if(passar.deltaX<0){
      this.nav.push(Entrevista,{parametro: this.paciente});
    }
  }
}
