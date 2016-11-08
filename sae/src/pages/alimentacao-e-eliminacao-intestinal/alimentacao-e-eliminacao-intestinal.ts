import {NavController, NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {HidratacaoEEliminacaoVesical} from '../hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';
import {AspectosCutaneoMucosa} from '../aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa';
import {PacientesPage} from '../pacientes/pacientes';
import {CadastroPaciente}from '../../model/cadastroPaciente';
/*
  Generated class for the AlimentacaoEEliminacaoIntestinal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alimentacao-e-eliminacao-intestinal',
  templateUrl: 'alimentacao-e-eliminacao-intestinal.html'
})
export class AlimentacaoEEliminacaoIntestinal {
  private paciente:CadastroPaciente;

    constructor(private params:NavParams,private nav: NavController) {
      this.paciente = params.get("parametro");
      this.nav = nav;
    }

    toggleGroup(id){
      let grupo = document.getElementById("dados"+id);
      let icone = document.getElementById("icone"+id);
      if(id==2){
        this.verificaVomito();
      }
      if(id==5 && this.paciente.ostomia=="sim"){
        let grupo = document.getElementById("listRadio0");
        grupo.style.display = "block";
      }
      this.toggleClose(id);
      if(grupo.style.display == "block"){
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }else{
        grupo.style.display = "block";
        icone.innerHTML = '-';
      }
    }

    verificaVomito(){
      let grupo = document.getElementById("vomito");
      if(this.paciente.presencaoDeVomito == true){
        grupo.style.display = "block";
      }
    }

    toggleGroup2(id,status){

      let grupo = document.getElementById("listRadio"+id);
      grupo.style.display = status;

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

    toggleVomito(){
      let grupo = document.getElementById("vomito");
      if(grupo.style.display == "block"){
        grupo.style.display = "none";
      }else{
        grupo.style.display = "block";
      }
    }

    slide(passar){
      if(passar.deltaX>0){
        this.nav.pop();
      }else if(passar.deltaX<0){
        this.nav.push(AspectosCutaneoMucosa,{parametro: this.paciente});
      }
    }

    cancel(){
      this.nav.popToRoot();
    }


}
