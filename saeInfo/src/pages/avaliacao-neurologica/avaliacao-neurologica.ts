import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OxigenacaoPage } from '../oxigenacao/oxigenacao';
import { CadastroPaciente } from '../../model/cadastroPaciente';

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

  private paciente: CadastroPaciente;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.paciente = navParams.get("parametro");
    this.nav = nav;
  }

  cancel() {
    this.nav.popToRoot();
  }
  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(OxigenacaoPage, { parametro: this.paciente });
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

}
