import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http } from "@angular/http";

import { PacientesPage } from '../pacientes/pacientes';
import {EnfermeiroService, Enfermeira} from "../../providers/enfermeiro-service/enfermeiro-service";
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'alterar-senha.html',
})
export class AlterarSenhaPage {

  private senha1: string;
  private senha2: string;
  private senhaAntiga:string;
  private enfermeira: Enfermeira = new Enfermeira();

  constructor(private nav: NavController, private http : Http, private eService : EnfermeiroService) {
    this.nav = nav;
    this.senha1 = "";
    this.senha2 = "";
    this.senhaAntiga = "";
    this.getDadosEnfermeira();
  }

  private getDadosEnfermeira(){
    this.eService.getEnfermeira().then(user=>{
      this.enfermeira = user;
      console.log("Dados da Enfermeira em alterar senha:");
      console.log(this.enfermeira.id);
      console.log(this.enfermeira.nome);
    });
  }

  conferir(){

    if(this.senha1!=this.senha2){

    }else if(this.senha1==""||this.senha2==""||this.senhaAntiga==""){

    }else if(this.senha1==this.senha2){
      let link = "http://localhost/saeApi.php";
      let type = "senha";
      let senhaAntiga = this.senhaAntiga;
      let senhanova = this.senha2;
      let id = 5;
      let data = JSON.stringify({type,id, senhaAntiga, senhanova});

      this.http.post(link, data)
          .subscribe(data=>{
          },error => {});
      this.redirecionar();
    }
  }

  redirecionar(){
    this.nav.setRoot(PacientesPage);
  }
}
