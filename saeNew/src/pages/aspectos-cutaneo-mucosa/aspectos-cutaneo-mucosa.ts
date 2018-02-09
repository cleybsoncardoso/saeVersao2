import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { SegurancaFisicaPage } from '../seguranca-fisica/seguranca-fisica';
import { Historico } from '../../model/historico';

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

  private historico: Historico;
  constructor(private params: NavParams, private nav: NavController) {
    this.historico = params.get("historico");
    this.nav = nav;
    this.carregarDados();
  }

  cancel() {
    this.nav.popToRoot();
  }

  slide(passar) {
    this.converterDados();
    console.log(JSON.stringify(this.historico));
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(SegurancaFisicaPage, { historico: this.historico });
    }
  }

  carregarDados() {

    if (this.historico.pele != null) {

      this.historico.pele.map(pele => {
        switch (pele.nome) {
          case "Cianose":
            this.historico.Cianose = true;
            break;
          case "Icterícia":
            this.historico.Ictericia = true;
            break;
          case "Petéquias":
            this.historico.Petequias = true;
            break;
          case "Corado":
            this.historico.Corado = true;
            break;
          case "Hipocorado":
            this.historico.Hipocorado = true;
            break;
          case "Hipercorado":
            this.historico.Hipercorado = true;
            break;
          case "Equimoses":
            this.historico.Equimoses = true;
            break;
          case "Hematomas":
            this.historico.Hematomas = true;
            break;
          case "Escoriações":
            this.historico.Escoriacoes = true;
            break;
          default:
            this.historico.aspectosCutaneoMucosaOutros = pele.nome;
            break;
        }
      });
    }

    if (this.historico.olhos != null) {

      this.historico.olhos.map(olho => {
        switch (olho.nome) {
          case "Icterícia":
            this.historico.ictericia = true;
            break;
          case "Edema de conjuntiva":
            this.historico.edemaDeConjuntiva = true;
            break;
          default:
            this.historico.olhosOutros = olho.nome;
            break;
        }
      });
    }

    if (this.historico.genitalia != null) {
      //genitalia
      this.historico.genitalia.map(genitalia => {
        switch (genitalia.nome) {
          case "Sem anormalidades":
            this.historico.genitaliaSemAnormalidades = true;
            break;
          case "Secreção":
            this.historico.genitaliaSecrecao = true;
            break;
          default:
            this.historico.genitaliaOutros = genitalia.nome;
            break;
        }
      })
    }
  }

  converterDados() {
    let aux = [];
    if (this.historico.Cianose) {
      aux.push({ nome: "Cianose" });
    }
    if (this.historico.Ictericia) {
      aux.push({ nome: "Icterícia" });
    }
    if (this.historico.Petequias) {
      aux.push({ nome: "Petéquias" });
    }
    if (this.historico.Corado) {
      aux.push({ nome: "Corado" });
    }
    if (this.historico.Hipocorado) {
      aux.push({ nome: "Hipocorado" });
    }
    if (this.historico.Hipercorado) {
      aux.push({ nome: "Hipercorado" });
    }
    if (this.historico.Equimoses) {
      aux.push({ nome: "Equimoses" });
    }
    if (this.historico.Hematomas) {
      aux.push({ nome: "Hematomas" });
    }
    if (this.historico.Escoriacoes) {
      aux.push({ nome: "Escoriações" });
    }
    aux.push({ nome: this.historico.aspectosCutaneoMucosaOutros });
    this.historico.pele = aux;
    //olhos
    aux = [];
    if (this.historico.ictericia) {
      aux.push({ nome: "Icterícia" });
    }
    if (this.historico.edemaDeConjuntiva) {
      aux.push({ nome: "Edema de conjuntiva" });
    }
    aux.push({ nome: this.historico.olhosOutros });
    this.historico.olhos = aux;

    //genitalia
    aux = [];
    if (this.historico.genitaliaSemAnormalidades) {
      aux.push({ nome: "Sem anormalidades" });
    }
    if (this.historico.genitaliaSecrecao) {
      aux.push({ nome: "Secreção" });
    }
    aux.push({ nome: this.historico.genitaliaOutros });
    this.historico.genitalia = aux;

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
