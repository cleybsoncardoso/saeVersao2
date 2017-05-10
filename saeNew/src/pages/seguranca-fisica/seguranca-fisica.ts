import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { ObservacoesPage } from '../observacoes/observacoes';
import { Historico } from '../../model/historico';

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

  private historico: Historico;

  constructor(private params: NavParams, private nav: NavController) {
    this.historico = params.get("historico");
    this.nav = nav;
  }

  cancel() {
    this.nav.popToRoot();
  }

  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(ObservacoesPage, { historico: this.historico });
    }
  }

}
