import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlimentacaoEEliminacaoIntestinalPage } from '../alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal';
import { CadastroPaciente } from '../../model/cadastroPaciente';

/*
  Generated class for the HidratacaoEEliminacaoVesical page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hidratacao-e-eliminacao-vesical',
  templateUrl: 'hidratacao-e-eliminacao-vesical.html'
})
export class HidratacaoEEliminacaoVesicalPage {

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
      this.nav.push(AlimentacaoEEliminacaoIntestinalPage, { parametro: this.paciente });
    }
  }
  toggleGroup(id) {
    let grupo = document.getElementById("dadosHidratacao" + id);
    let icone = document.getElementById("iconeHidratacao" + id);
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
    let grupo = document.getElementById("dadosHidratacao" + i);
    let icone = document.getElementById("iconeHidratacao" + i);
    while (grupo != null) {
      if (i != id) {
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }
      i++;
      icone = document.getElementById("iconeHidratacao" + i);
      grupo = document.getElementById("dadosHidratacao" + i);
    }
  }

}
