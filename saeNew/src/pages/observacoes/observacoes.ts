import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Historico } from '../../model/historico';
import { SavePage } from '../save/save';
/*
  Generated class for the Observacoes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-observacoes',
  templateUrl: 'observacoes.html'
})
export class ObservacoesPage {

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
    } else {
      this.nav.push(SavePage, { historico: this.historico });
    }
  }


}
