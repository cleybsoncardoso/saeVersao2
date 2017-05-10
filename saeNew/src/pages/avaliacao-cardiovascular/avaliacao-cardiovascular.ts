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
    this.presencaDeEdema();
  }

  private presencaDeEdema() {
    console.log(this.historico.presencaDeEdema);
    let res = this.historico.presencaDeEdema.split(",");
    if (res.indexOf("pes") > -1) {
      this.historico.presencaDeEdemaPes = true;
    }
    if (res.indexOf("mmii") > -1) {
      this.historico.presencaDeEdemaMMII = true;
    }
    if (res.indexOf("mmss") > -1) {
      this.historico.presencaDeEdemaMMSS = true;
    }
    if (res.indexOf("anasarca") > -1) {
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
      this.nav.push(HidratacaoEEliminacaoVesicalPage, { historico: this.historico });
    }
  }

}
