import {NavController, NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {IdentificacaoPage} from '../identificacao/identificacao';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import {AvaliacaoNeurologica} from '../avaliacao-neurologica/avaliacao-neurologica';
/*
  Generated class for the Entrevista page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-entrevista',
  templateUrl: 'entrevista.html'
})
export class Entrevista {

  private paciente:CadastroPaciente;
  private myIcons:Array<string>;

  constructor(private params:NavParams,private nav: NavController) {
    this.paciente = params.get("parametro");
    this.nav = nav;
    this.myIcons = ["md-add"];
  }

  ionViewLoaded(){
    this.setAntecedentes();
    this.setAlergias();
    this.setVacinas();
  }

  addAntecedente() {
    //incrementando a quantidade de antecedentes
    this.paciente.qtdeAntecedentes++;
    //guardando o div pai
    let divPai = document.getElementById("outrosAntecetendes");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","antecedente"+this.paciente.qtdeAntecedentes);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("antecedente"+this.paciente.qtdeAntecedentes).innerHTML = "<input class='divitem2' type='text' id='campoAntecedente"+this.paciente.qtdeAntecedentes+"' placeholder=' Outro Antecedente "+ this.paciente.qtdeAntecedentes+"'></input>";
  }

  /**Função que Remove um campo na relação de antecedentes*/
  removerAntecedente() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.qtdeAntecedentes > 0){
        //Guardando o div pai
        let divPai = document.getElementById("outrosAntecetendes");
        let text = "antecedente"+this.paciente.qtdeAntecedentes;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
        this.paciente.qtdeAntecedentes--;
      }
  }

  /**Função que adiciona um campo na relação de Alergia*/
  addAlergia() {
    //incrementando a quantidade de antecedentes
    this.paciente.qtdeAlergias++;
    //guardando o div pai
    let divPai = document.getElementById("alergias");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","alergia"+this.paciente.qtdeAlergias);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("alergia"+this.paciente.qtdeAlergias).innerHTML = "<input class='divitem2' type='text' id='campoAlergia"+this.paciente.qtdeAlergias+"' placeholder='Alergia "+ this.paciente.qtdeAlergias +"'></input>";
  }

  /**Função que Remove um campo na relação de Alergia*/
  removerAlergia() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.qtdeAlergias > 0){
        //Guardando o div pai
        let divPai = document.getElementById("alergias");
        let text = "alergia"+this.paciente.qtdeAlergias;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
        this.paciente.qtdeAlergias--;
      }
  }

  addVacina() {
    //incrementando a quantidade de vacinas
    this.paciente.qtdeVacinas++;
    //guardando o div pai
    let divPai = document.getElementById("vacinas");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:

    divFilho.setAttribute("id","vacina"+this.paciente.qtdeVacinas);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:

    document.getElementById("vacina"+this.paciente.qtdeVacinas).innerHTML = "<input class='divitem2' type='text' id='campoVacina"+this.paciente.qtdeVacinas+"' placeholder='Vacina "+this.paciente.qtdeVacinas+"'></input>";
  }

  /**Função que Remove um campo na relação de vacina*/
  removerVacina() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.qtdeVacinas > 0){
        //Guardando o div pai
        let divPai = document.getElementById("vacinas");
        let text = "vacina"+this.paciente.qtdeVacinas;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //guardando valor do input
        let text2 = "campoVacina"+this.paciente.qtdeVacinas;
        let input = document.getElementById(text2);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
        this.paciente.qtdeVacinas--;
      }
  }

  getAntecedentes(){
    let x=0;
    let cont = 0;
    this.paciente.antecedentes = [];
    while(x<this.paciente.qtdeAntecedentes){
      x++;
      let antecedentes = <HTMLInputElement>document.getElementById("campoAntecedente"+x);
      if(antecedentes.value!=""){
        this.paciente.antecedentes.push(antecedentes.value);
        cont++;
      }
    }
    this.paciente.qtdeAntecedentes=cont;
  }

  getAlergias(){
    let x=0;
    let cont = 0;
    this.paciente.alergias = [];
    while(x<this.paciente.qtdeAlergias){
      x++;
      let alergias = <HTMLInputElement>document.getElementById("campoAlergia"+x);
      if(alergias.value!=""){
        this.paciente.alergias.push(alergias.value);
        cont++;
      }
    }
    this.paciente.qtdeAlergias=cont;
  }

  getVacinas(){
    let x=0;
    let cont = 0;
    this.paciente.vacinas = [];
    while(x<this.paciente.qtdeVacinas){
      x++;
      let vacinas = <HTMLInputElement>document.getElementById("campoVacina"+x);
      if(vacinas.value!=""){
        this.paciente.vacinas.push(vacinas.value);
        cont++;
      }
    }
    this.paciente.qtdeVacinas=cont;
  }

  setAntecedentes(){
    if(this.paciente.qtdeAntecedentes>0){
      let x = 0;
      while(x<this.paciente.qtdeAntecedentes){
        x++;
        //guardando o div pai
        let divPai = document.getElementById("outrosAntecetendes");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id","antecedente"+x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("antecedente"+x).innerHTML = "<input class='divitem2' type='text' id='campoAntecedente"+x+"' value='"+this.paciente.antecedentes[x-1]+"'></input>";
      }
    }
  }

  setAlergias(){
    if(this.paciente.qtdeAlergias>0){
      let x = 0;
      while(x<this.paciente.qtdeAlergias){
        x++;
        //guardando o div pai
        let divPai = document.getElementById("alergias");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id","alergia"+x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("alergia"+x).innerHTML = "<input class='divitem2' type='text' id='campoAlergia"+x+"' value='"+ this.paciente.alergias[x-1] +"'></input>";
      }
    }
  }

  setVacinas(){
    if(this.paciente.qtdeVacinas>0){
      let x = 0;
      while(x<this.paciente.qtdeVacinas){
        x++;
        //guardando o div pai
        let divPai = document.getElementById("vacinas");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id","vacina"+x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("vacina"+x).innerHTML = "<input class='divitem2' type='text' id='campoVacina"+x+"' value='"+ this.paciente.vacinas[x-1] +"'></input>";
      }
    }
  }

  toggleGroup(id){
    let grupo = document.getElementById("dados"+id);
    let icone = document.getElementById("icone"+id);
    this.toggleClose(id);
    if(grupo.style.display == "block"){
      grupo.style.display = "none";
      icone.innerHTML = '+';
    }else{
      grupo.style.display = "block";
      icone.innerHTML = '-';
    }
  }

  toggleClose(id){
    var i=0;
    let grupo = document.getElementById("dados"+i);
    let icone = document.getElementById("icone"+i);
    while(grupo!=null){
      if(i!=id){
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }
      i++;
      icone = document.getElementById("icone"+i);
      grupo = document.getElementById("dados"+i);
    }
  }

  cancel(){
    this.nav.popToRoot();
  }

  //funcao realizada quando o usuario desliza o dedo na tela
  slide(passar){
    if(passar.deltaX>0){
      this.getAntecedentes();
      this.getAlergias();
      this.getVacinas();
      this.nav.pop();
    }else if(passar.deltaX<0){
      this.getAntecedentes();
      this.getAlergias();
      this.getVacinas();
      this.nav.push(AvaliacaoNeurologica,{parametro: this.paciente});
    }
  }


}
