import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { HidratacaoEEliminacaoVesicalPage } from '../hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';
import { Historico } from '../../model/historico';


@Component({
  selector: 'page-avaliacao-cardiovascular',
  templateUrl: 'avaliacao-cardiovascular.html'
})
export class AvaliacaoCardiovascularPage {

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
      this.nav.push(HidratacaoEEliminacaoVesicalPage, { parametro: this.historico });
    }
  }

}
