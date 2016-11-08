import {NavController, NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {Oxigenacao} from '../oxigenacao/oxigenacao';
import {HidratacaoEEliminacaoVesical} from '../hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';
import {SegurancaFisica} from '../seguranca-fisica/seguranca-fisica';
import {PacientesPage} from '../pacientes/pacientes';
import {CadastroPaciente}from '../../model/cadastroPaciente';

/*
  Generated class for the AvaliacaoCardiovascular page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-avaliacao-cardiovascular',
  templateUrl: 'avaliacao-cardiovascular.html'
})
export class AvaliacaoCardiovascular {

  private paciente:CadastroPaciente;

    constructor(private params:NavParams,private nav: NavController) {
      this.paciente = params.get("parametro");
      this.nav = nav;
    }
  cancel(){
    this.nav.popToRoot();
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.pop();
    }else if(passar.deltaX<0){
      this.nav.push(HidratacaoEEliminacaoVesical,{parametro: this.paciente});
    }
  }

}
