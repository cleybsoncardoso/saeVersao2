import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { AlimentacaoEEliminacaoIntestinalPage } from '../alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal';
import { Historico } from '../../model/historico';

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
    let aux = this.historico.eliminacaoUrinaria.split(",");
    let index = aux.indexOf("Espontanea");
    if (index > -1) {
      this.historico.eliminacaoUrinariaEspontanea = true;
      aux.splice(index, 1);
    }

    index = aux.indexOf("Retencao");
    if (index > -1) {
      this.historico.eliminacaoUrinariaRetencao = true;
      aux.splice(index, 1);
      
    }

    index = aux.indexOf("Incontinencia");
    if (index > -1) {
      this.historico.eliminacaoUrinariaIncontinencia = true;
      aux.splice(index, 1);
      
    }

    index = aux.indexOf("SVD");
    if (index > -1) {
      this.historico.eliminacaoUrinariaSVD = true;
      aux.splice(index, 1);
      
    }

    index = aux.indexOf("Dispositivo Urinario");
    if (index > -1) {
      this.historico.eliminacaoUrinariaDispositivoUrinario = true;
      aux.splice(index, 1);      
    }

    aux = this.historico.hidratacao_Caracteristicas.split(",");
    index = aux.indexOf("Disuria");
    if (index > -1) {
      this.historico.caracteristicasDisuria = true;
      aux.splice(index, 1);
    }

    index = aux.indexOf("Oliguria");
    if (index > -1) {
      this.historico.caracteristicasOliguria = true;
      aux.splice(index, 1);
      
    }

    index = aux.indexOf("Anuria");
    if (index > -1) {
      this.historico.caracteristicasAnuria = true;
      aux.splice(index, 1);
      
    }

    index = aux.indexOf("Poliuria");
    if (index > -1) {
      this.historico.caracteristicasPoliuria = true;
      aux.splice(index, 1);
      
    }

    index = aux.indexOf("Hematuria");
    if (index > -1) {
      this.historico.caracteristicasHematuria = true;
      aux.splice(index, 1);      
    }

    this.historico.caracteristicasOutros = aux.toString();
  }

  passarDados() {
    let aux = [];

    if (this.historico.eliminacaoUrinariaEspontanea) {
      aux.push("Espontanea");
    }
    if (this.historico.eliminacaoUrinariaRetencao) {
      aux.push("Retencao");
    }
    if (this.historico.eliminacaoUrinariaIncontinencia) {
      aux.push("Incontinencia");
    }
    if (this.historico.eliminacaoUrinariaSVD) {
      aux.push("SVD");
    }
    if (this.historico.eliminacaoUrinariaDispositivoUrinario) {
      aux.push("Dispositivo Urinario");
    }

    this.historico.eliminacaoUrinaria = aux.toString();

    let aux2 = [];

    if (this.historico.caracteristicasDisuria) {
      aux2.push("Disuria");
    }
    if (this.historico.caracteristicasOliguria) {
      aux2.push("Oliguria");
    }
    
    if (this.historico.caracteristicasAnuria) {
      aux2.push("Anuria");
    }
    
    if (this.historico.caracteristicasPoliuria) {
      aux2.push("Poliuria");
    }
    
    if (this.historico.caracteristicasHematuria) {
      aux2.push("Hematuria");
    }
    aux2.push(this.historico.caracteristicasOutros);
    this.historico.hidratacao_Caracteristicas = aux2.toString();
  }

  cancel() {
    this.nav.popToRoot();
  }
  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.passarDados();
      this.nav.push(AlimentacaoEEliminacaoIntestinalPage, { historico: this.historico });
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
