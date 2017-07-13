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
    this.setAntecedentes();
    if (this.historico.idsaeapp_historico != "0") {
      this.carregarDados();
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
    this.historico.qtdeAntecedentes = this.historico.antecedentesArray.length;

    this.setAntecedentes();
  }

  addAntecedente() {
    //incrementando a quantidade de antecedentes
    this.historico.qtdeAntecedentes++;
    //guardando o div pai
    let divPai = document.getElementById("outrosAntecetendes");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id", "antecedente" + this.historico.qtdeAntecedentes);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("antecedente" + this.historico.qtdeAntecedentes).innerHTML = "<input class='divitem2' type='text' id='campoAntecedente" + this.historico.qtdeAntecedentes + "' placeholder=' Outro Antecedente " + this.historico.qtdeAntecedentes + "'></input>";
  }

  /**Função que Remove um campo na relação de antecedentes*/
  removerAntecedente() {
    //só remove se já ouver um campo adicionado
    if (this.historico.qtdeAntecedentes > 0) {
      //Guardando o div pai
      let divPai = document.getElementById("outrosAntecetendes");
      let text = "antecedente" + this.historico.qtdeAntecedentes;
      //Guardando o ultimo div filho criado
      let divFilho = document.getElementById(text);
      //Removendo o ultimo DIV do nó-pai:
      divPai.removeChild(divFilho);
      this.historico.qtdeAntecedentes--;
    }
  }

  getAntecedentes() {
    let x = 0;
    let cont = 0;
    this.historico.antecedentesArray = [];
    while (x < this.historico.qtdeAntecedentes) {
      x++;
      let antecedentes = <HTMLInputElement>document.getElementById("campoAntecedente" + x);
      if (antecedentes.value != "") {
        this.historico.antecedentesArray.push(antecedentes.value);
        cont++;
      }
    }
    this.historico.qtdeAntecedentes = cont;
  }

  setAntecedentes() {
    if (this.historico.qtdeAntecedentes > 0) {
      let x = 0;
      while (x < this.historico.qtdeAntecedentes) {
        x++;
        //guardando o div pai
        let divPai = document.getElementById("outrosAntecetendes");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id", "antecedente" + x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("antecedente" + x).innerHTML = "<input class='divitem2' type='text' id='campoAntecedente" + x + "' value='" + this.historico.antecedentesArray[x - 1] + "'></input>";
      }
    }
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
    this.converteDados();
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(AvaliacaoNeurologicaPage, { historico: this.historico });
    }
  }

  converteDados() {
    //antecedentes
    let index = this.historico.antecedentesArray.indexOf("HAS");
    if (index < 0 && this.historico.has) {
      this.historico.antecedentesArray.push("HAS")
    }
    index = this.historico.antecedentesArray.indexOf("Tabagismo");
    if (index < 0 && this.historico.tabagismo) {
      this.historico.antecedentesArray.push("Tabagismo")
    }
    index = this.historico.antecedentesArray.indexOf("Alcoolismo");
    if (index < 0 && this.historico.alcoolismo) {
      this.historico.antecedentesArray.push("Alcoolismo")
    }
    index = this.historico.antecedentesArray.indexOf("Diabete Méllitus");
    if (index < 0 && this.historico.diabetesMellitus) {
      this.historico.antecedentesArray.push("Diabete Méllitus")
    }

    this.historico.antecedentes = this.historico.antecedentesArray.toString();
    this.getAntecedentes();

  }


}

