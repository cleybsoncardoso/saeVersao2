import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { AvaliacaoCardiovascularPage } from '../avaliacao-cardiovascular/avaliacao-cardiovascular';
import { Historico } from '../../model/historico';

/*
  Generated class for the Oxigenacao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oxigenacao',
  templateUrl: 'oxigenacao.html'
})
export class OxigenacaoPage {

  private historico: Historico;

  constructor(private params: NavParams, private nav: NavController) {
    this.historico = params.get("historico");
    this.nav = nav;
  }

  toggleGroup(id) {
    let grupo = document.getElementById("dadosOxigenacao" + id);
    let icone = document.getElementById("iconeOxigenacao" + id);
 
    if (id == 3 && this.historico.aspiracao == "sim") {
      let grupo = document.getElementById("listRadio0");
      grupo.style.display = "block";
    }
    if (id == 4 && this.historico.drenagemToracica == "sim") {
      let grupo = document.getElementById("listRadio1");
      grupo.style.display = "block";
    }
    this.toggleClose(id);
    if (grupo.style.display == "block") {
      grupo.style.display = "none";
      icone.innerHTML = '+';
    } else {
      grupo.style.display = "block";
      icone.innerHTML = '-';
    }
  }

  toggleClose(id) {
    var i = 0;
    let grupo = document.getElementById("dadosOxigenacao" + i);
    let icone = document.getElementById("iconeOxigenacao" + i);
    while (grupo != null) {
      if (i != id) {
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }
      i++;
      icone = document.getElementById("iconeOxigenacao" + i);
      grupo = document.getElementById("dadosOxigenacao" + i);
    }
  }


  cancel() {
    this.nav.popToRoot();
  }

  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(AvaliacaoCardiovascularPage, { historico: this.historico });
    }
  }


  toggleGroup2(id, status) {
    let grupo = document.getElementById("listRadio" + id);
    grupo.style.display = status;

  }

}
