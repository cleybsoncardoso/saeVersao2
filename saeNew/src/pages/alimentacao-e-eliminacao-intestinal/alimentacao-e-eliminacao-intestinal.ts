import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { AspectosCutaneoMucosaPage } from '../aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa';
import { Historico } from '../../model/historico';

/*
  Generated class for the AlimentacaoEEliminacaoIntestinal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alimentacao-e-eliminacao-intestinal',
  templateUrl: 'alimentacao-e-eliminacao-intestinal.html'
})
export class AlimentacaoEEliminacaoIntestinalPage {

  private historico: Historico;

  constructor(
    private params: NavParams,
    private nav: NavController
  ) {
    this.historico = params.get("historico");
    this.nav = nav;
    this.carregarDados();
  }

  carregarDados() {
    if (this.historico.alimentacao_ViasDeAdministracao != null) {

      let aux = this.historico.alimentacao_ViasDeAdministracao.split(",");
      let index = aux.indexOf("Oral");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.viasDeAdministracaoOral = true;
      }
      index = aux.indexOf("SNG");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.viasDeAdministracaoSNG = true;
      }
      index = aux.indexOf("SNE");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.viasDeAdministracaoSNE = true;
      }
      index = aux.indexOf("Parenteral");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.viasDeAdministracaoParenteral = true;
      }
      this.historico.viasDeAdministracaoOutros = aux.toString();
    }

    if (this.historico.abdome != null) {
      //abdome
      let aux = this.historico.abdome.split(",");
      let index = aux.indexOf("Plano");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.abdomePlano = true;
      }
      index = aux.indexOf("Globoso");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.abdomeGloboso = true;
      }
      index = aux.indexOf("Distendido");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.abdomeDistendido = true;
      }
      index = aux.indexOf("Doloroso à palpação");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.abdomeDolorosoAPalpacao = true;
      }
      this.historico.abdomeOutros = aux.toString();

    }

    if (this.historico.RHA != null) {
      //rha
      let aux = this.historico.RHA.split(",");
      let index = aux.indexOf("Ausentes");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.ausentes = true;
      }
      index = aux.indexOf("Diminuído");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.diminuido = true;
      }
      index = aux.indexOf("Aumentado");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.aumentado = true;
      }
    }
  }

  converterDados() {
    let aux = [];
    if (this.historico.viasDeAdministracaoOral) {
      aux.push("Oral");
    }
    if (this.historico.viasDeAdministracaoSNG) {
      aux.push("SNG");
    }
    if (this.historico.viasDeAdministracaoSNE) {
      aux.push("SNE");
    }
    if (this.historico.viasDeAdministracaoParenteral) {
      aux.push("Parenteral");
    }
    aux.push(this.historico.viasDeAdministracaoOutros);
    this.historico.alimentacao_ViasDeAdministracao = aux.toString();
    //abdome
    aux = [];
    if (this.historico.abdomePlano) {
      aux.push("Plano");
    }
    if (this.historico.abdomeGloboso) {
      aux.push("Globoso");
    }
    if (this.historico.abdomeDistendido) {
      aux.push("Distendido");
    }
    if (this.historico.abdomeDolorosoAPalpacao) {
      aux.push("Doloroso à palpação");
    }
    aux.push(this.historico.abdomeOutros);
    this.historico.abdome = aux.toString();
    //rha
    aux = [];
    if (this.historico.ausentes) {
      aux.push("Ausentes");
    }
    if (this.historico.diminuido) {
      aux.push("Diminuído");
    }
    if (this.historico.aumentado) {
      aux.push("Aumentado");
    }
    this.historico.RHA = aux.toString();

  }

  toggleGroup(id) {
    let grupo = document.getElementById("dadosIntestinal" + id);
    let icone = document.getElementById("iconeIntestinal" + id);

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
    let grupo = document.getElementById("dadosIntestinal" + i);
    let icone = document.getElementById("iconeIntestinal" + i);
    while (grupo != null) {
      if (i != id) {
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }
      i++;
      icone = document.getElementById("iconeIntestinal" + i);
      grupo = document.getElementById("dadosIntestinal" + i);
    }
  }

  slide(passar) {
    this.converterDados();
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(AspectosCutaneoMucosaPage, { historico: this.historico });
    }
  }

  cancel() {
    this.nav.popToRoot();
  }


}
