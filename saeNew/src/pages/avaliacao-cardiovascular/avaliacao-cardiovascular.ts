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
    this.presencaDeEdemaEpulso();
  }

  ionViewWillEnter() {
    if (this.historico.pulsoPalpabilidade != null && this.historico.pulsoPalpabilidade.includes("Impalpável")) {
      let aux = this.historico.pulsoPalpabilidade.split(",");
      this.historico.pulsoPalpabilidade = aux[0];
      this.historico.pulsoImpalpavel = aux[1];
    }
  }

  private presencaDeEdemaEpulso() {
    if (this.historico.presencaDeEdema != null) {
      let res = this.historico.presencaDeEdema.split(",");
      if (res.indexOf("Pés") >= 0) {
        this.historico.presencaDeEdemaPes = true;
      }
      if (res.indexOf("MMII") >= 0) {
        this.historico.presencaDeEdemaMMII = true;
      }
      if (res.indexOf("MMSS") >= 0) {
        this.historico.presencaDeEdemaMMSS = true;
      }
      if (res.indexOf("Anasarca") >= 0) {
        this.historico.presencaDeEdemaAnasarca = true;
      }
    }
  }

  private presencaDeEdemaSalvar() {
    let aux = [];
    if (this.historico.presencaDeEdemaPes == true) {
      aux.push("Pés");
    }
    if (this.historico.presencaDeEdemaMMII == true) {
      aux.push("MMII");
    }
    if (this.historico.presencaDeEdemaMMSS == true) {
      aux.push("MMSS");
    }
    if (this.historico.presencaDeEdemaAnasarca == true) {
      aux.push("Anasarca");
    }
    this.historico.presencaDeEdema = aux.toString();
  }

  private cancel() {
    this.nav.popToRoot();
  }

  private slide(passar) {
    if (this.historico.pulsoPalpabilidade != null && this.historico.pulsoPalpabilidade.includes("Impalpável")) {
      this.historico.pulsoPalpabilidade += "," + this.historico.pulsoImpalpavel;
    }
    this.presencaDeEdemaSalvar();
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(HidratacaoEEliminacaoVesicalPage, { historico: this.historico });
    }
  }

}
