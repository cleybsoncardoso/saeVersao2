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

  ionViewWillEnter() {
    if (this.historico.oxigenacao != null && this.historico.oxigenacao.includes("Traqueostomia")) {
      let aux = this.historico.oxigenacao.split(",");
      this.historico.oxigenacao = aux[0];
      this.historico.traqueostomiaMascara = aux[1];
    }
    if (this.historico.oxigenacao != null && this.historico.oxigenacao.includes("Ventilação mecânica")) {
      let aux = this.historico.oxigenacao.split(",");      
      this.historico.oxigenacao = aux[0];
      this.historico.ventilacaoMecanicaOxigenacao = aux[1];
    }
  }

  toggleGroup(id) {
    let grupo = document.getElementById("dadosOxigenacao" + id);
    let icone = document.getElementById("iconeOxigenacao" + id);

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
    if (this.historico.oxigenacao != null && this.historico.oxigenacao.includes("Traqueostomia")) {
      this.historico.oxigenacao += "," + this.historico.traqueostomiaMascara;
    }
    if (this.historico.oxigenacao != null && this.historico.oxigenacao.includes("Ventilação mecânica")) {
      this.historico.oxigenacao += "," + this.historico.ventilacaoMecanicaOxigenacao;
    }
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(AvaliacaoCardiovascularPage, { historico: this.historico });
    }
  }
}
