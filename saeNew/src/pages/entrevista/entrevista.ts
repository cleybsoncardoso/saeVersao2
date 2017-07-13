import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Historico } from '../../model/historico';
import { AvaliacaoNeurologicaPage } from '../avaliacao-neurologica/avaliacao-neurologica';

/*
  Generated class for the Entrevista page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-entrevista',
  templateUrl: 'entrevista.html'
})
export class EntrevistaPage {
  private historico: Historico;
  private myIcons: Array<string>;

  constructor(
    private params: NavParams,
    private nav: NavController
  ) {
    this.historico = params.get("historico");
    this.nav = nav;
    this.myIcons = ["md-add"];

  }

  ionViewDidLoad() {
    if (this.historico.idsaeapp_historico != "0") {
      if (this.historico.antecedentes != null) {
        this.carregarDados();
      }
    }
  }

  carregarDados() {
    //antecedentes
    this.historico.antecedentesArray = this.historico.antecedentes.split(",");
    let index = this.historico.antecedentesArray.indexOf("HAS");
    if (index > -1) {
      this.historico.has = true;
      this.historico.antecedentesArray.splice(index, 1);
    }
    index = this.historico.antecedentesArray.indexOf("Tabagismo");
    if (index > -1) {
      this.historico.tabagismo = true;
      this.historico.antecedentesArray.splice(index, 1);
    }
    index = this.historico.antecedentesArray.indexOf("Alcoolismo");
    if (index > -1) {
      this.historico.alcoolismo = true;
      this.historico.antecedentesArray.splice(index, 1);
    }
    index = this.historico.antecedentesArray.indexOf("Diabete Méllitus");
    if (index > -1) {
      this.historico.diabetesMellitus = true;
      this.historico.antecedentesArray.splice(index, 1);
    }
    this.historico.outrosAntecedentes = this.historico.antecedentesArray.toString();

  }


  toggleGroup(id) {
    let grupo = document.getElementById("dados" + id);
    let icone = document.getElementById("icone" + id);
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
    let grupo = document.getElementById("dados" + i);
    let icone = document.getElementById("icone" + i);
    while (grupo != null) {
      if (i != id) {
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }
      i++;
      icone = document.getElementById("icone" + i);
      grupo = document.getElementById("dados" + i);
    }
  }

  cancel() {
    this.nav.popToRoot();
  }

  //funcao realizada quando o usuario desliza o dedo na tela
  slide(passar) {
    if (this.historico.antecedentes != null) {
      this.converteDados();
    }
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(AvaliacaoNeurologicaPage, { historico: this.historico });
    }
  }

  converteDados() {
    //antecedentes
    this.historico.antecedentesArray = [];
    if (this.historico.has) {
      this.historico.antecedentesArray.push("HAS")
    }

    if (this.historico.tabagismo) {
      this.historico.antecedentesArray.push("Tabagismo")
    }

    if (this.historico.alcoolismo) {
      this.historico.antecedentesArray.push("Alcoolismo")
    }

    if (this.historico.diabetesMellitus) {
      this.historico.antecedentesArray.push("Diabete Méllitus")
    }

    if (this.historico.outrosAntecedentes) {
      this.historico.antecedentesArray.push(this.historico.outrosAntecedentes);
    }

    this.historico.antecedentes = this.historico.antecedentesArray.toString();

  }


}

