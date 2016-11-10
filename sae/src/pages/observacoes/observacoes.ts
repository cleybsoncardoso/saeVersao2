import {NavController, NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {SegurancaFisica} from '../seguranca-fisica/seguranca-fisica';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import {Save} from '../save/save';

/*
  Generated class for the Observacoes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-observacoes',
  templateUrl: 'observacoes.html'
})
export class Observacoes {
  private paciente: CadastroPaciente;

    constructor(private params: NavParams, private nav: NavController) {
      this.paciente = params.get("parametro");
      this.nav = nav;
    }

    //funcação executada após o carregamento do html
    ionViewLoaded(){
      this.setObservacao();
    }

    addObservacao() {
      //incrementa a quantidade de observacoes
      this.paciente.qtdeObservacoes++;
      //guardando o div pai
      let divPai = document.getElementById("observacoes");
      //Criando o elemento DIV filho;
      let divFilho = document.createElement("div");
      //Definindo atributos ao campoFilho:
      divFilho.setAttribute("id","observacao"+this.paciente.qtdeObservacoes);
      divFilho.setAttribute("class", "divitem4");
      //Inserindo o elemento filho no pai:
      divPai.appendChild(divFilho);
      //Escrevendo algo no filho recém-criado:
      document.getElementById("observacao"+this.paciente.qtdeObservacoes).innerHTML = "<input class='divitem2' type='text' id='campoObservacao"+this.paciente.qtdeObservacoes+"' placeholder='Observação "+this.paciente.qtdeObservacoes+"'></input>";

    }

    /**Função que Remove um campo na relação de observacoes*/
    removerObservacao() {
        //só remove se já ouver um campo adicionado
        if(this.paciente.qtdeObservacoes > 0){
          //Guardando o div pai
          let divPai = document.getElementById("observacoes");
          let text = "observacao"+this.paciente.qtdeObservacoes;
          //Guardando o ultimo div filho criado
          let divFilho = document.getElementById(text);
          //Removendo o ultimo DIV do nó-pai:
          let text2 = "campoObservacao"+this.paciente.qtdeObservacoes;
          let input = document.getElementById(text2);
          //removendo o ultimo div do no-pai
          divPai.removeChild(divFilho);
          this.paciente.qtdeObservacoes--;
        }
    }

    getObservacao(){
      let x=0;
      let cont = 0;
      this.paciente.observacoes = [];
      while(x<this.paciente.qtdeObservacoes){
        x++;
        let observacao = <HTMLInputElement>document.getElementById("campoObservacao"+x);
        if(observacao.value!=""){
          this.paciente.observacoes.push(observacao.value);
          cont++;
        }
      }
      this.paciente.qtdeObservacoes=cont;
    }

    setObservacao(){
      if(this.paciente.qtdeObservacoes>0){
        let x = 0;
        while(x<this.paciente.qtdeObservacoes){
          x++;
          //guardando o div pai
          let divPai = document.getElementById("observacoes");
          //Criando o elemento DIV filho;
          let divFilho = document.createElement("div");
          //Definindo atributos ao campoFilho:
          divFilho.setAttribute("id","observacao"+x);
          divFilho.setAttribute("class", "divitem4");
          //Inserindo o elemento filho no pai:
          divPai.appendChild(divFilho);
          //Escrevendo algo no filho recém-criado:
          document.getElementById("observacao"+x).innerHTML = "<input class='divitem2' type='text' id='campoObservacao"+x+"' value='"+this.paciente.observacoes[x-1]+"'></input>";
        }
      }
    }

    cancel(){
      this.nav.popToRoot();
    }

    slide(passar){
      if(passar.deltaX>0){
        this.getObservacao();
        this.nav.pop();
      }else{
        this.nav.push(Save,{parametro: this.paciente});
      }
    }


}
