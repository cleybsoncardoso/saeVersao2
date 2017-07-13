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
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(SegurancaFisicaPage, { historico: this.historico });
    }
  }

  carregarDados() {

    if (this.historico.pele != null) {

      let aux = this.historico.pele.split(",");
      let index = aux.indexOf("Cianose");
      if (index > -1) {
        this.historico.Cianose = true;
        aux.splice(index, 1);
      }
      index = aux.indexOf("Icterícia");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.Ictericia = true;
      }
      index = aux.indexOf("Petéquias");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.Petequias = true;
      }
      index = aux.indexOf("Corado");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.Corado = true;
      }
      index = aux.indexOf("Hipocorado");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.Hipocorado = true;
      }
      index = aux.indexOf("Hipercorado");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.Hipercorado = true;
      }
      index = aux.indexOf("Equimoses");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.Equimoses = true;
      }
      index = aux.indexOf("Hematomas");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.Hematomas = true;
      }
      index = aux.indexOf("Escoriações");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.Escoriacoes = true;
      }
      this.historico.aspectosCutaneoMucosaOutros = aux.toString();
    }

    if (this.historico.olhos != null) {

      //olhos
      let aux = this.historico.olhos.split(",");
      let index = aux.indexOf("Icterícia");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.ictericia = true;
      }
      index = aux.indexOf("Edema de conjuntiva");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.edemaDeConjuntiva = true;
      }
      this.historico.olhosOutros = aux.toString();
    }

    if (this.historico.genitalia != null) {
      //genitalia
      let aux = this.historico.genitalia.split(",");
      let index = aux.indexOf("Sem anormalidades");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.genitaliaSemAnormalidades = true;
      }
      index = aux.indexOf("Secreção");
      if (index > -1) {
        aux.splice(index, 1);
        this.historico.genitaliaSecrecao = true;
      }
      this.historico.genitaliaOutros = aux.toString();
    }
  }

  converterDados() {
    let aux = [];
    if (this.historico.Cianose) {
      aux.push("Cianose");
    }
    if (this.historico.Ictericia) {
      aux.push("Icterícia");
    }
    if (this.historico.Petequias) {
      aux.push("Petéquias");
    }
    if (this.historico.Corado) {
      aux.push("Corado");
    }
    if (this.historico.Hipocorado) {
      aux.push("Hipocorado");
    }
    if (this.historico.Hipercorado) {
      aux.push("Hipercorado");
    }
    if (this.historico.Equimoses) {
      aux.push("Equimoses");
    }
    if (this.historico.Hematomas) {
      aux.push("Hematomas");
    }
    if (this.historico.Escoriacoes) {
      aux.push("Escoriações");
    }
    aux.push(this.historico.aspectosCutaneoMucosaOutros);
    this.historico.pele = aux.toString();
    //olhos
    aux = [];
    if (this.historico.ictericia) {
      aux.push("Icterícia");
    }
    if (this.historico.edemaDeConjuntiva) {
      aux.push("Edema de conjuntiva");
    }
    aux.push(this.historico.olhosOutros);
    this.historico.olhos = aux.toString();
    //cvc

    //genitalia
    aux = [];
    if (this.historico.genitaliaSemAnormalidades) {
      aux.push("Sem anormalidades");
    }
    if (this.historico.genitaliaSecrecao) {
      aux.push("Secreção");
    }
    aux.push(this.historico.genitaliaOutros);
    this.historico.genitalia = aux.toString();

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
