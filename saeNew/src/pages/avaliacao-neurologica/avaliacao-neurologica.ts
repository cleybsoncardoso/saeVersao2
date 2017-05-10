import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { OxigenacaoPage } from '../oxigenacao/oxigenacao';
import { Historico } from '../../model/historico';

/*
  Generated class for the AvaliacaoNeurologica page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-avaliacao-neurologica',
  templateUrl: 'avaliacao-neurologica.html'
})
export class AvaliacaoNeurologicaPage {

  private historico: Historico;
  constructor(private params: NavParams, private nav: NavController) {
    this.historico = params.get("historico");
    // this.historico = new Historico();
    // this.historico.consciencia = "alerta";
    // this.historico.glasgow = 20;
    // this.historico.pupilas = "rfm";
    // this.historico.mmii_esquerdo = "plegia";
    // this.historico.mmii_direito = "preservada";
    // this.historico.mmss_esquerdo = "parestesia";
    // this.historico.mmss_direito = "paresia";
    // this.historico.falaELinguagem = "dislalia";

    // this.nav = nav;
  }

  cancel() {
    this.nav.popToRoot();
  }
  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(OxigenacaoPage, { historico: this.historico });
    }
  }
  toggleGroup(id) {
    let grupo = document.getElementById("dadosNeurologica" + id);
    let iconeNeurologica = document.getElementById("iconeNeurologica" + id);
    this.toggleClose(id);
    if (grupo.style.display == "block") {
      grupo.style.display = "none";
      iconeNeurologica.innerHTML = '+';
    } else {
      grupo.style.display = "block";
      iconeNeurologica.innerHTML = '-';
    }
  }

  toggleClose(id) {
    var i = 0;
    let grupo = document.getElementById("dadosNeurologica" + i);
    let iconeNeurologica = document.getElementById("iconeNeurologica" + i);
    while (grupo != null) {
      if (i != id) {
        grupo.style.display = "none";
        iconeNeurologica.innerHTML = '+';
      }
      i++;
      iconeNeurologica = document.getElementById("iconeNeurologica" + i);
      grupo = document.getElementById("dadosNeurologica" + i);
    }
  }

  toggleGlasgow() {
    let grupo = document.getElementById("glasgow");
    if (this.historico.glasgowMenu == true) {
      grupo.style.display = "none";
    } else {
      grupo.style.display = "block";
    }
  }

}
