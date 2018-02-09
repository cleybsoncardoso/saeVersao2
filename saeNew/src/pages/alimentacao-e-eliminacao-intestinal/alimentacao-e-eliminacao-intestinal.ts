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
    if (this.historico.viasAdministracao != null) {

      let aux = this.historico.viasAdministracao;
      this.historico.viasAdministracao.map(via => {

        switch (via.nome) {
          case "Oral":
            this.historico.viasAdministracaoOral = true;
            break;
          case "SNG":
            this.historico.viasAdministracaoSNG = true;
            break;
          case "SNE":
            this.historico.viasAdministracaoSNE = true;
            break;
          case "Parenteral":
            this.historico.viasAdministracaoParenteral = true;
            break;
          default:
            this.historico.viasAdministracaoOutros = via.nome;
            break;

        }
      })
    }

    if (this.historico.abdome != null) {
      //abdome

      this.historico.abdome.map(abdome => {
        switch (abdome.nome) {
          case "Plano":
            this.historico.abdomePlano = true;
            break;
          case "Globoso":
            this.historico.abdomeGloboso = true;
            break;
          case "Distendido":
            this.historico.abdomeDistendido = true;
            break;
          case "Doloroso à palpação":
            this.historico.abdomeDolorosoAPalpacao = true;
            break;
          default:
            this.historico.abdomeOutros = abdome.nome;
            break;
        }
      })
    }

  }

  converterDados() {
    let aux = [];
    if (this.historico.viasAdministracaoOral) {
      aux.push({ nome: "Oral" });
    }
    if (this.historico.viasAdministracaoSNG) {
      aux.push({ nome: "SNG" });
    }
    if (this.historico.viasAdministracaoSNE) {
      aux.push({ nome: "SNE" });
    }
    if (this.historico.viasAdministracaoParenteral) {
      aux.push({ nome: "Parenteral" });
    }
    aux.push({ nome: this.historico.viasAdministracaoOutros });
    this.historico.viasAdministracao = aux;
    //abdome
    aux = [];
    if (this.historico.abdomePlano) {
      aux.push({ nome: "Plano" });
    }
    if (this.historico.abdomeGloboso) {
      aux.push({ nome: "Globoso" });
    }
    if (this.historico.abdomeDistendido) {
      aux.push({ nome: "Distendido" });
    }
    if (this.historico.abdomeDolorosoAPalpacao) {
      aux.push({ nome: "Doloroso à palpação" });
    }
    aux.push({ nome: this.historico.abdomeOutros });
    this.historico.abdome = aux;

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
