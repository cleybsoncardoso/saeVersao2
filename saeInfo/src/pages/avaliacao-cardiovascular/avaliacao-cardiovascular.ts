import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HidratacaoEEliminacaoVesicalPage } from '../hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';
import { CadastroPaciente } from '../../model/cadastroPaciente';

/*
  Generated class for the AvaliacaoCardiovascular page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-avaliacao-cardiovascular',
  templateUrl: 'avaliacao-cardiovascular.html'
})
export class AvaliacaoCardiovascularPage {

  private paciente: CadastroPaciente;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.paciente = navParams.get("parametro");
    this.nav = nav;
  }

  cancel() {
    this.nav.popToRoot();
  }
  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(HidratacaoEEliminacaoVesicalPage, { parametro: this.paciente });
    }
  }
}
