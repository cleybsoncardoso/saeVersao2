import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPaciente } from '../../model/cadastroPaciente';
import { EntrevistaPage } from '../entrevista/entrevista';

/*
  Generated class for the Identificacao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-identificacao',
  templateUrl: 'identificacao.html'
})
export class IdentificacaoPage {

  private paciente: CadastroPaciente;


  constructor(public nav: NavController, public navParams: NavParams) {
    this.paciente = navParams.get('paciente');

  }
  cancel() {
    this.nav.popToRoot();
  }

  slide(passar) {
    if (passar.deltaX < 0) {
      this.nav.push(EntrevistaPage, { parametro: this.paciente });
    }
  }
}
