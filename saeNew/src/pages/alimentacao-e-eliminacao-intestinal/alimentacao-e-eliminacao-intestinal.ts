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
    let aux = this.historico.alimentacao_ViasDeAdministracao.split(",");
    let index = aux.indexOf("viasDeAdministracaoOral");
    if (index > -1) {
      this.historico.viasDeAdministracaoOral = true;
    }
    index = aux.indexOf("viasDeAdministracaoSNG");
    if (index > -1) {
      this.historico.viasDeAdministracaoSNG = true;
    }
    index = aux.indexOf("viasDeAdministracaoSNE");
    if (index > -1) {
      this.historico.viasDeAdministracaoSNE = true;
    }
    index = aux.indexOf("viasDeAdministracaoParenteral");
    if (index > -1) {
      this.historico.viasDeAdministracaoParenteral = true;
    }
    this.historico.viasDeAdministracaoOutros = aux.toString();
    //abdome
    aux = this.historico.abdome.split(",");
    index = aux.indexOf("abdomePlano");
    if (index > -1) {
      this.historico.abdomePlano = true;
    }
    index = aux.indexOf("abdomeGloboso");
    if (index > -1) {
      this.historico.abdomeGloboso = true;
    }
    index = aux.indexOf("abdomeDistendido");
    if (index > -1) {
      this.historico.abdomeDistendido = true;
    }
    index = aux.indexOf("abdomeDolorosoAPalpacao");
    if (index > -1) {
      this.historico.abdomeDolorosoAPalpacao = true;
    }
    this.historico.abdomeOutros = aux.toString();

    //rha
    aux = this.historico.RHA.split(",");
    index = aux.indexOf("ausentes");
    if (index > -1) {
      this.historico.ausentes = true;
    }
    index = aux.indexOf("diminuido");
    if (index > -1) {
      this.historico.diminuido = true;
    }
    index = aux.indexOf("aumentado");
    if (index > -1) {
      this.historico.aumentado = true;
    }
    this.historico.abdomeOutros = aux.toString();

  }

  converterDados() {
    let aux = [];
    if (this.historico.viasDeAdministracaoOral) {
      aux.push("viasDeAdministracaoOral");
    }
    if (this.historico.viasDeAdministracaoSNG) {
      aux.push("viasDeAdministracaoSNG");
    }
    if (this.historico.viasDeAdministracaoSNE) {
    aux.push("viasDeAdministracaoSNE");
    }
    if (this.historico.viasDeAdministracaoParenteral) {
    aux.push("viasDeAdministracaoParenteral");
    }
    aux.push(this.historico.viasDeAdministracaoOutros);
    this.historico.alimentacao_ViasDeAdministracao = aux.toString();
    //abdome
    aux = [];
    if (this.historico.abdomePlano) {
    aux.push("abdomePlano");
    }
    if (this.historico.abdomeGloboso) {
    aux.push("abdomeGloboso");
    }
    if (this.historico.abdomeDistendido) {
    aux.push("abdomeDistendido");
    }
    if (this.historico.abdomeDolorosoAPalpacao) {
    aux.push("abdomeDolorosoAPalpacao");
    }
    aux.push(this.historico.abdomeOutros);

    //rha
    aux = [];    
    aux = this.historico.RHA.split(",");
    if (this.historico.ausentes) {
    aux.push("ausentes");
    }
    if (this.historico.diminuido) {
    aux.push("diminuido");
    }
    if (this.historico.aumentado) {
    aux.push("aumentado");
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

  /*
  verificaVomito(){
    let grupo = document.getElementById("vomito");
    if(this.historico.presencaoDeVomito == true){
      grupo.style.display = "block";
    }
  }
  */

  toggleGroup2(id, status) {

    //  let grupo = document.getElementById("listRadio"+id);
    //grupo.style.display = status;

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

  /*
      toggleVomito(){
        let grupo = document.getElementById("vomito");
        if(grupo.style.display == "block"){
          grupo.style.display = "none";
        }else{
          grupo.style.display = "block";
        }
      }
      */

  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.converterDados();
      this.nav.push(AspectosCutaneoMucosaPage, { historico: this.historico });
    }
  }

  cancel() {
    this.nav.popToRoot();
  }


}
