import {NavController, NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {Entrevista} from '../entrevista/entrevista';
import {Oxigenacao} from '../oxigenacao/oxigenacao';
import {PacientesPage} from '../pacientes/pacientes';
import {CadastroPaciente}from '../../model/cadastroPaciente';
/*
  Generated class for the AvaliacaoNeurologicaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-avaliacao-neurologica',
  templateUrl: 'avaliacao-neurologica.html'
})
export class AvaliacaoNeurologica {

  private paciente:CadastroPaciente;
  constructor(private params:NavParams,private nav: NavController) {
    this.paciente = params.get("parametro");
      this.nav = nav;
    }

    somarGlasgow(){
      this.paciente.glasgow = parseInt(this.paciente.glasgowOcular) + parseInt(this.paciente.glasgowVerbal) + parseInt(this.paciente.glasgowMotor);
    }

      cancel(){
        this.nav.popToRoot();
      }
      slide(passar){
        if(passar.deltaX>0){
          this.nav.pop();
        }else if(passar.deltaX<0){
          this.nav.push(Oxigenacao,{parametro: this.paciente});
        }
    }
    toggleGroup(id){
      let grupo = document.getElementById("dados"+id);
      let icone = document.getElementById("icone"+id);
      this.toggleClose(id);
      if(id==0){
        this.verificaGlasgow();
      }
      if(grupo.style.display == "block"){
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }else{
        grupo.style.display = "block";
        icone.innerHTML = '-';
      }
    }

    verificaGlasgow(){
      let grupo = document.getElementById("glasgow");
      if(this.paciente.glasgowMenu == true){
        grupo.style.display = "block";
      }else{
        grupo.style.display = "none";
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

    toggleGlasgow(){
      let grupo = document.getElementById("glasgow");
      if(this.paciente.glasgowMenu == true){
        grupo.style.display = "none";
      }else{
        grupo.style.display = "block";
      }
    }

}
