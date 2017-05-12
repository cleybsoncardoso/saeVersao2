import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPaciente } from '../../model/cadastroPaciente';
import { AprazamentoDados } from '../../model/aprazamento';
import { Http } from '@angular/http';
import { CuidadosService } from "../../providers/cuidados-service";
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

  private paciente: CadastroPaciente;
  private planoAFazer: any[];
  private desativar:boolean = false;

  constructor(
    public nav: NavController,
    public params: NavParams,
    private service: CuidadosService,
    private http: Http
  ) {
    this.paciente = params.get('paciente');
    //this.planoAFazer = [{id:"1",titulo:"Redução da ansiedade",horarioInicio: "12:00",ultimoHorario:"12:00",proximaHora:"13:00"},{id:"1",titulo:"Redução da ansiedade",horarioInicio:"12:00", ultimoHorario:"12:00", proximaHora:"13:00"}];
    this.carregarPlanos();
  }

  cancel() {
    this.nav.popToRoot();
  }

  toggleGroup(id) {
    let grupo = document.getElementById("dadosPlano" + id);
    let iconeNeurologica = document.getElementById("iconePlano" + id);
    this.toggleClose(id);
    if (grupo.style.display == "block") {
      grupo.style.display = "none";
      iconeNeurologica.innerHTML = '+';
    } else {
      grupo.style.display = "block";
      iconeNeurologica.innerHTML = '-';
    }
  }

  toggleClose(id) {
    var i = 0;
    let grupo = document.getElementById("dadoPlano" + i);
    let iconeNeurologica = document.getElementById("iconePlano" + i);
    while (grupo != null) {
      i++;
      iconeNeurologica = document.getElementById("iconePlano" + i);
      grupo = document.getElementById("dadosPlano" + i);
    }
  }

  carregarPlanos() {
    this.service.getPlanos(this.paciente.id).then(resposta => {
      if (resposta.type) {
        this.planoAFazer = resposta.value;
      }
    });

  }

  aprazar(id){
    this.desativar = true;
    this.service.aprazar(this.paciente.id, id).then(resposta => {
      this.desativar = false;
    console.log(resposta);
      if (resposta.type) {
        this.planoAFazer = resposta.value;
      }
    });
  }

}
