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
    // this.historico.avaliacaoCardiovascular_Fc = "10";
    // this.historico.avaliacaoCardiovascular_Pa = "20";
    // this.historico.avaliacaoCardiovascular_Pam = "30";
    // this.historico.avaliacaoCardiovascular_PVC = "40";
    // this.historico.presencaDeEdema = "pes,mmii,mmss,anasarca";
    this.presencaDeEdema();
  }

  private presencaDeEdema() {
    let res = this.historico.presencaDeEdema.split(",");
    if (res.indexOf("pes") >= 0) {
      this.historico.presencaDeEdemaPes = true;
    }
    if (res.indexOf("mmii") >= 0) {
      this.historico.presencaDeEdemaMMII = true;
    }
    if (res.indexOf("mmss") >= 0) {
      this.historico.presencaDeEdemaMMSS = true;
    }
    if (res.indexOf("anasarca") >= 0) {
      this.historico.presencaDeEdemaAnasarca = true;
    }
  }

  private presencaDeEdemaSalvar(){
    this.historico.presencaDeEdema = "";
    if(this.historico.presencaDeEdemaPes == true){
      this.historico.presencaDeEdema = this.historico.presencaDeEdema + "pes,";
    }
    if(this.historico.presencaDeEdemaMMII == true){
      this.historico.presencaDeEdema = this.historico.presencaDeEdema + "mmii,";
    }
    if(this.historico.presencaDeEdemaMMSS == true){
      this.historico.presencaDeEdema = this.historico.presencaDeEdema + "mmss,";
    }
    if(this.historico.presencaDeEdemaAnasarca == true){
      this.historico.presencaDeEdema = this.historico.presencaDeEdema + "anasarca,";
    }
  }

  private cancel() {
    this.nav.popToRoot();
  }

  private slide(passar) {
    this.presencaDeEdemaSalvar();
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(HidratacaoEEliminacaoVesicalPage, { parametro: this.historico });
    }
  }

}
