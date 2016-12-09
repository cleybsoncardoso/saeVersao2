import {NavController, NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {AvaliacaoCardiovascular} from '../avaliacao-cardiovascular/avaliacao-cardiovascular';
import {CadastroPaciente}from '../../model/cadastroPaciente';

/*
  Generated class for the Oxigenacao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oxigenacao',
  templateUrl: 'oxigenacao.html'
})
export class Oxigenacao {

  private paciente: CadastroPaciente;

  constructor(private params: NavParams, private nav: NavController) {
    this.paciente = params.get("parametro");
    this.nav = nav;
  }

  ionViewDidLoad() {
    this.setRespiracoes();
  }

  toggleGroup(id) {
    let grupo = document.getElementById("dadosOxigenacao" + id);
    let icone = document.getElementById("iconeOxigenacao" + id);
    if (id == 2) {
      this.verificaExpetoracao();
    }
    if (id == 3 && this.paciente.aspiracao == "sim") {
      let grupo = document.getElementById("listRadio0");
      grupo.style.display = "block";
    }
    if (id == 4 && this.paciente.drenagemToracica == "sim") {
      let grupo = document.getElementById("listRadio1");
      grupo.style.display = "block";
    }
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
    let grupo = document.getElementById("dadosOxigenacao" + i);
    let icone = document.getElementById("iconeOxigenacao" + i);
    while (grupo != null) {
      if (i != id) {
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }
      i++;
      icone = document.getElementById("iconeOxigenacao" + i);
      grupo = document.getElementById("dadosOxigenacao" + i);
    }
  }
  verificaExpetoracao() {
    let grupo = document.getElementById("expetoracao");
    if (this.paciente.presencaoDeTosseExpectoracao == true) {
      grupo.style.display = "block";
    }
  }

  toggleExpetoracao() {
    let grupo = document.getElementById("expetoracao");
    if (this.paciente.presencaoDeTosseExpectoracao == true) {
      grupo.style.display = "none";
    } else {
      grupo.style.display = "block";
    }
  }

  /**Função que adiciona um campo na relação de Respiracao*/
  addRespiracao() {
    this.paciente.obsRespiracao++;
    //guardando o div pai
    let divPai = document.getElementById("respiracao");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id", "resp" + this.paciente.obsRespiracao);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("resp" + this.paciente.obsRespiracao).innerHTML = "<input class='divitem2' type='text' id='campoResp" + this.paciente.obsRespiracao + "' placeholder='Outros " + this.paciente.obsRespiracao + "'></input>";
  }

  /**Função que Remove um campo na relação de Respiracao*/
  removerRespiracao() {
    //só remove se já ouver um campo adicionado
    if (this.paciente.obsRespiracao > 0) {
      //Guardando o div pai
      let divPai = document.getElementById("respiracao");
      let text = "resp" + this.paciente.obsRespiracao;
      //Guardando o ultimo div filho criado
      let divFilho = document.getElementById(text);
      //Removendo o ultimo DIV do nó-pai:
      divPai.removeChild(divFilho);
      this.paciente.obsRespiracao--;
    }
  }

  cancel() {
    this.nav.popToRoot();
  }

  slide(passar) {
    if (passar.deltaX > 0) {
      this.getRespiracoes();
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.getRespiracoes();
      this.nav.push(AvaliacaoCardiovascular, { parametro: this.paciente });
    }
  }

  getRespiracoes() {
    let x = 0;
    let cont = 0;
    this.paciente.respiracoes = [];
    while (x < this.paciente.obsRespiracao) {
      x++;
      let respiracoes = <HTMLInputElement>document.getElementById("campoResp" + x);
      if (respiracoes.value != "") {
        this.paciente.respiracoes.push(respiracoes.value);
        cont++;
      }
    }
    this.paciente.obsRespiracao = cont;
  }

  setRespiracoes() {
    if (this.paciente.obsRespiracao > 0) {
      let x = 0;
      while (x < this.paciente.obsRespiracao) {
        x++;
        //guardando o div pai
        let divPai = document.getElementById("respiracao");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id", "resp" + x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("resp" + x).innerHTML = "<input class='divitem2' type='text' id='campoAlergia" + x + "' value='" + this.paciente.respiracoes[x - 1] + "'></input>";
      }
    }
  }

  toggleGroup2(id, status) {
    let grupo = document.getElementById("listRadio" + id);
    grupo.style.display = status;

  }

}
