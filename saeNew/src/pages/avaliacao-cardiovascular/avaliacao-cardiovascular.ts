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
  private Pes = false;
  private MMSS = false;
  private Anasarca = false;
  private MMII = false;

  constructor(private params: NavParams, private nav: NavController) {
    this.historico = params.get("historico");
    if (!this.historico.edemas) {
      this.historico.edemas = [];
    }

    this.formartEdemas();
  }

  formartEdemas() {
    this.historico.edemas.map(edema => this[edema.nome] = true)
  }

  convertEdemas() {
    this.historico.edemas = [];
    if (this.Pes) {
      this.historico.edemas.push({ nome: "Pes" });
    }

    if (this.MMSS) {
      this.historico.edemas.push({ nome: "MMSS" });
    }

    if (this.Anasarca) {
      this.historico.edemas.push({ nome: "Anasarca" });
    }

    if (this.MMII) {
      this.historico.edemas.push({ nome: "MMII" });
    }
  }

  ionViewWillEnter() {
    if (this.historico.pulsoPalpabilidade != null && this.historico.pulsoPalpabilidade.includes("Impalpável")) {
      let aux = this.historico.pulsoPalpabilidade.split(",");
      this.historico.pulsoPalpabilidade = aux[0];
      this.historico.pulsoImpalpavel = aux[1];
    }
  }

  private cancel() {
    this.nav.popToRoot();
  }

  private slide(passar) {
    this.convertEdemas()
    if (this.historico.pulsoPalpabilidade != null && this.historico.pulsoPalpabilidade.includes("Impalpável")) {
      this.historico.pulsoPalpabilidade += "," + this.historico.pulsoImpalpavel;
    }
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      console.log(JSON.stringify(this.historico))
      this.nav.push(HidratacaoEEliminacaoVesicalPage, { historico: this.historico });
    }
  }

}
