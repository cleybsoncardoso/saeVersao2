import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SegurancaFisicaPage } from '../seguranca-fisica/seguranca-fisica';
import { CadastroPaciente } from '../../model/cadastroPaciente';

/*
  Generated class for the AspectosCutaneoMucosa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aspectos-cutaneo-mucosa',
  templateUrl: 'aspectos-cutaneo-mucosa.html'
})
export class AspectosCutaneoMucosaPage {

  private paciente: CadastroPaciente;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.paciente = navParams.get("parametro");
    this.nav = nav;
  }

  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(SegurancaFisicaPage, { parametro: this.paciente });
    }
  }

  toggleGroup(id) {
    let grupo = document.getElementById("dadosCutaneo" + id);
    let icone = document.getElementById("iconeCutaneo" + id);
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
    let grupo = document.getElementById("dadosCutaneo" + i);
    let icone = document.getElementById("iconeCutaneo" + i);
    while (grupo != null) {
      if (i != id) {
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }
      i++;
      icone = document.getElementById("iconeCutaneo" + i);
      grupo = document.getElementById("dadosCutaneo" + i);
    }
  }

  toggleLesoes() {
    let grupo = document.getElementById("lesoes");
    if (grupo.style.display == "block") {
      grupo.style.display = "none";
    } else {
      grupo.style.display = "block";
    }
  }

  toggleGroup2(id, status) {
    let grupo = document.getElementById("listRadio" + id);
    grupo.style.display = status;

  }

}