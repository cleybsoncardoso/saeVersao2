import {NavController, NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {AvaliacaoCardiovascular} from '../avaliacao-cardiovascular/avaliacao-cardiovascular';
import {AlimentacaoEEliminacaoIntestinal} from '../alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal';
import {PacientesPage} from '../pacientes/pacientes';
import {CadastroPaciente}from '../../model/cadastroPaciente';


/*
  Generated class for the HidratacaoEEliminacaoVesical page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hidratacao-e-eliminacao-vesical',
  templateUrl: 'hidratacao-e-eliminacao-vesical.html'
})
export class HidratacaoEEliminacaoVesical {

  private paciente: CadastroPaciente;

    constructor(private params: NavParams, private nav: NavController) {
      this.paciente = params.get("parametro");
      this.nav = nav;
    }

    cancel(){
      this.nav.popToRoot();
    }
    slide(passar){
      if(passar.deltaX>0){
        this.nav.pop();
      }else if(passar.deltaX<0){
        this.nav.push(AlimentacaoEEliminacaoIntestinal,{parametro: this.paciente});
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

}
