import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { ObservacoesPage } from '../observacoes/observacoes';
import { CadastroPaciente } from '../../model/cadastroPaciente';

/*
  Generated class for the SegurancaFisica page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-seguranca-fisica',
  templateUrl: 'seguranca-fisica.html'
})
export class SegurancaFisicaPage {

  private paciente: CadastroPaciente;

  constructor(private params: NavParams, private nav: NavController) {
    this.paciente = params.get("parametro");
    this.nav = nav;
  }

  cancel() {
    this.nav.popToRoot();
  }

  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(ObservacoesPage, { parametro: this.paciente });
    }
  }

}
