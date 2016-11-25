import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPaciente} from '../../model/cadastroPaciente';
import { AprazamentoDados } from '../../model/aprazamento';
import { Http } from '@angular/http';
import {PacienteService} from "../../providers/paciente-service/paciente-service";

/*
  Generated class for the PlanoDeCuidados page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-plano-de-cuidados',
  templateUrl: 'plano-de-cuidados.html'
})
export class PlanoDeCuidadosPage {

  private paciente:CadastroPaciente;
  private planoFeito:AprazamentoDados[];
  private planoAFazer:AprazamentoDados[];

  constructor(
    public nav: NavController,
    public params:NavParams,
    private service : PacienteService,
    private http : Http
  ) {
    this.paciente = params.get('paciente');
    this.planoFeito = [];
    this.planoAFazer = [];
    this.carregarPlanos();
  }

  cancel(){
    this.nav.popToRoot();
  }

  toggleGroup(id){
    let grupo = document.getElementById("dadosPlano"+id);
    let iconeNeurologica = document.getElementById("iconePlano"+id);
    this.toggleClose(id);
    if(grupo.style.display == "block"){
      grupo.style.display = "none";
      iconeNeurologica.innerHTML = '+';
    }else{
      grupo.style.display = "block";
      iconeNeurologica.innerHTML = '-';
    }
  }

  toggleClose(id){
    var i=0;
    let grupo = document.getElementById("dadoPlano"+i);
    let iconeNeurologica = document.getElementById("iconePlano"+i);
    while(grupo!=null){
      i++;
      iconeNeurologica = document.getElementById("iconePlano"+i);
      grupo = document.getElementById("dadosPlano"+i);
    }
  }

  carregarPlanos(){
    console.log(this.paciente.id);
    this.service.getPlanos(this.paciente.id)
    .subscribe(data=>{
      this.planoAFazer = data;
      console.log(this.planoAFazer);
    },erro =>{
      console.log("Não foi possível se conectar ao servidor");
    });

  }

}
