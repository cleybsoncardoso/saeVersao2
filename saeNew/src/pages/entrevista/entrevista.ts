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
    this.setAlergias();
    this.setVacinas();
    this.setMotivos();
    if (this.historico.idsaeapp_historico != "0") {
      this.carregarDados();
    }
  }

  carregarDados() {
    //motivo de internacao
    this.historico.motivo = this.historico.motivoInternacao.split(",");
    let index = this.historico.motivo.indexOf("cardiopatia");
    if (index > -1) {
      this.historico.cardiopatia = true;
      this.historico.motivo.splice(index, 1);
    }
    index = this.historico.motivo.indexOf("convulsao");
    if (index > -1) {
      this.historico.convulsao = true;
      this.historico.motivo.splice(index, 1);
    }
    index = this.historico.motivo.indexOf("asma");
    if (index > -1) {
      this.historico.asma = true;
      this.historico.motivo.splice(index, 1);
    }
    index = this.historico.motivo.indexOf("drogas");
    if (index > -1) {
      this.historico.drogas = true;
      this.historico.motivo.splice(index, 1);
    }
    this.historico.qtdeMotivos = this.historico.motivo.length;

    //antecedentes
    this.historico.antecedentesArray = this.historico.antecedentes.split(",");
    index = this.historico.antecedentesArray.indexOf("has");
    if (index > -1) {
      this.historico.has = true;
      this.historico.antecedentesArray.splice(index, 1);
    }
    index = this.historico.antecedentesArray.indexOf("tabagismo");
    if (index > -1) {
      this.historico.tabagismo = true;
      this.historico.antecedentesArray.splice(index, 1);
    }
    index = this.historico.antecedentesArray.indexOf("alcoolismo");
    if (index > -1) {
      this.historico.alcoolismo = true;
      this.historico.antecedentesArray.splice(index, 1);
    }
    index = this.historico.antecedentesArray.indexOf("diabetesMellitus");
    if (index > -1) {
      this.historico.diabetesMellitus = true;
      this.historico.antecedentesArray.splice(index, 1);
    }
    this.historico.qtdeAntecedentes = this.historico.antecedentesArray.length;

    //alergia e vacina
    this.historico.alergiasArray = this.historico.alergias.split(",");
    this.historico.qtdeAlergias = this.historico.alergiasArray.length;
    this.historico.vacinasArray = this.historico.vacinas.split(",");
    this.historico.qtdeVacinas = this.historico.vacinasArray.length;
    this.setAntecedentes();
    this.setAlergias();
    this.setVacinas();
    this.setMotivos();
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

  addMotivos() {
    //incrementando a quantidade de antecedentes
    this.historico.qtdeMotivos++;
    //guardando o div pai
    let divPai = document.getElementById("outrosMotivos");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id", "motivo" + this.historico.qtdeMotivos);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("motivo" + this.historico.qtdeMotivos).innerHTML = "<input class='divitem2' type='text' id='campoMotivo" + this.historico.qtdeMotivos + "' placeholder=' Outro Motivos " + this.historico.qtdeMotivos + "'></input>";
  }

  /**Função que Remove um campo na relação de antecedentes*/
  removerMotivos() {
    //só remove se já ouver um campo adicionado
    if (this.historico.qtdeMotivos > 0) {
      //Guardando o div pai
      let divPai = document.getElementById("outrosMotivos");
      let text = "motivo" + this.historico.qtdeMotivos;
      //Guardando o ultimo div filho criado
      let divFilho = document.getElementById(text);
      //Removendo o ultimo DIV do nó-pai:
      divPai.removeChild(divFilho);
      this.historico.qtdeMotivos--;
    }
  }

  /**Função que adiciona um campo na relação de Alergia*/
  addAlergia() {
    //incrementando a quantidade de antecedentes
    this.historico.qtdeAlergias++;
    //guardando o div pai
    let divPai = document.getElementById("alergias");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id", "alergia" + this.historico.qtdeAlergias);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("alergia" + this.historico.qtdeAlergias).innerHTML = "<input class='divitem2' type='text' id='campoAlergia" + this.historico.qtdeAlergias + "' placeholder='Alergia " + this.historico.qtdeAlergias + "'></input>";
  }

  /**Função que Remove um campo na relação de Alergia*/
  removerAlergia() {
    //só remove se já ouver um campo adicionado
    if (this.historico.qtdeAlergias > 0) {
      //Guardando o div pai
      let divPai = document.getElementById("alergias");
      let text = "alergia" + this.historico.qtdeAlergias;
      //Guardando o ultimo div filho criado
      let divFilho = document.getElementById(text);
      //Removendo o ultimo DIV do nó-pai:
      divPai.removeChild(divFilho);
      this.historico.qtdeAlergias--;
    }
  }

  addVacina() {
    //incrementando a quantidade de vacinas
    this.historico.qtdeVacinas++;
    //guardando o div pai
    let divPai = document.getElementById("vacinas");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:

    divFilho.setAttribute("id", "vacina" + this.historico.qtdeVacinas);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:

    document.getElementById("vacina" + this.historico.qtdeVacinas).innerHTML = "<input class='divitem2' type='text' id='campoVacina" + this.historico.qtdeVacinas + "' placeholder='Vacina " + this.historico.qtdeVacinas + "'></input>";
  }

  /**Função que Remove um campo na relação de vacina*/
  removerVacina() {
    //só remove se já ouver um campo adicionado
    if (this.historico.qtdeVacinas > 0) {
      //Guardando o div pai
      let divPai = document.getElementById("vacinas");
      let text = "vacina" + this.historico.qtdeVacinas;
      //Guardando o ultimo div filho criado
      let divFilho = document.getElementById(text);
      //guardando valor do input
      //Removendo o ultimo DIV do nó-pai:
      divPai.removeChild(divFilho);
      this.historico.qtdeVacinas--;
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
        console.log(antecedentes.value);
        this.historico.antecedentesArray.push(antecedentes.value);
        cont++;
      }
    }
    this.historico.qtdeAntecedentes = cont;
  }

  getMotivos() {
    let x = 0;
    let cont = 0;
    this.historico.motivo = [];
    while (x < this.historico.qtdeMotivos) {
      x++;
      let motivo = <HTMLInputElement>document.getElementById("campoMotivo" + x);
      if (motivo.value != "") {
        this.historico.motivo.push(motivo.value);
        cont++;
      }
    }
    this.historico.qtdeMotivos = cont;
  }

  getAlergias() {
    let x = 0;
    let cont = 0;
    this.historico.alergiasArray = [];
    while (x < this.historico.qtdeAlergias) {
      x++;
      let alergias = <HTMLInputElement>document.getElementById("campoAlergia" + x);
      if (alergias.value != "") {
        this.historico.alergiasArray.push(alergias.value);
        cont++;
      }
    }
    this.historico.qtdeAlergias = cont;
  }

  getVacinas() {
    let x = 0;
    let cont = 0;
    this.historico.vacinasArray = [];
    while (x < this.historico.qtdeVacinas) {
      x++;
      let vacinas = <HTMLInputElement>document.getElementById("campoVacina" + x);
      if (vacinas.value != "") {
        this.historico.vacinasArray.push(vacinas.value);
        cont++;
      }
    }
    this.historico.qtdeVacinas = cont;
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

  setMotivos() {
    if (this.historico.qtdeMotivos > 0) {
      let x = 0;
      while (x < this.historico.qtdeMotivos) {
        x++;
        //guardando o div pai
        let divPai = document.getElementById("outrosMotivos");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id", "motivo" + x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("motivo" + x).innerHTML = "<input class='divitem2' type='text' id='campoMotivo" + x + "' value='" + this.historico.motivo[x - 1] + "'></input>";
      }
    }
  }

  setAlergias() {
    if (this.historico.qtdeAlergias > 0) {
      let x = 0;
      while (x < this.historico.qtdeAlergias) {
        x++;
        //guardando o div pai
        let divPai = document.getElementById("alergias");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id", "alergia" + x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("alergia" + x).innerHTML = "<input class='divitem2' type='text' id='campoAlergia" + x + "' value='" + this.historico.alergiasArray[x - 1] + "'></input>";
      }
    }
  }

  setVacinas() {
    if (this.historico.qtdeVacinas > 0) {
      let x = 0;
      while (x < this.historico.qtdeVacinas) {
        x++;
        //guardando o div pai
        let divPai = document.getElementById("vacinas");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id", "vacina" + x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("vacina" + x).innerHTML = "<input class='divitem2' type='text' id='campoVacina" + x + "' value='" + this.historico.vacinasArray[x - 1] + "'></input>";
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

  converteDados(){
    //motivo de internacao
    let index = this.historico.motivo.indexOf("cardiopatia");
    if (index < 0 && this.historico.cardiopatia) {
      this.historico.motivo.push("cardiopatia")
    }
    index = this.historico.motivo.indexOf("convulsao");
    if (index < 0 && this.historico.convulsao) {
      this.historico.motivo.push("convulsao")
    }
    index = this.historico.motivo.indexOf("asma");
    if (index < 0 && this.historico.asma) {
      this.historico.motivo.push("asma")
    }
    index = this.historico.motivo.indexOf("drogas");
    if (index < 0 && this.historico.drogas) {
      this.historico.motivo.push("drogas")
    }
    this.historico.motivoInternacao = this.historico.motivo.toString();

    //antecedentes
    index = this.historico.antecedentesArray.indexOf("has");
    if (index < 0 && this.historico.has) {
      this.historico.antecedentesArray.push("has")
    }
    index = this.historico.antecedentesArray.indexOf("tabagismo");
    if (index < 0 && this.historico.tabagismo) {
      this.historico.antecedentesArray.push("tabagismo")
    }
    index = this.historico.antecedentesArray.indexOf("alcoolismo");
    if (index < 0 && this.historico.alcoolismo) {
      this.historico.antecedentesArray.push("alcoolismo")
    }
    index = this.historico.antecedentesArray.indexOf("diabetesMellitus");
    if (index < 0 && this.historico.diabetesMellitus) {
      this.historico.antecedentesArray.push("diabetesMellitus")
    }

    this.historico.antecedentes = this.historico.antecedentesArray.toString();
    //alergia e vacina
    this.historico.alergias = this.historico.alergiasArray.toString();
    this.historico.vacinas = this.historico.vacinasArray.toString();
      this.getAntecedentes();
      this.getAlergias();
      this.getVacinas();
      this.getMotivos();
  }


}

