import { NavController , AlertController, LoadingController} from 'ionic-angular';
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

  constructor(private nav: NavController, private http : Http, private eService : EnfermeiroService, private alert :AlertController, private loading : LoadingController) {
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
      let alert = this.alert.create({
          title: 'Erro ao trocar senha',
          subTitle: 'Senhas estão diferentes !',
          buttons: ['OK']
      });
      alert.present();
    }else if(this.senha1==""||this.senha2==""||this.senhaAntiga==""){
      let alert = this.alert.create({
          title: 'Erro ao troca senha',
          subTitle: 'Está faltando dados !',
          buttons: ['OK']
      });
      alert.present();
    }else if(this.senha1==this.senha2){
      let link = "http://localhost/saeApi.php";
      let type = "senha";
      let senhaAntiga = this.senhaAntiga;
      let senhanova = this.senha2;
      let id = this.enfermeira.id;
      let data = JSON.stringify({type,id, senhaAntiga, senhanova});

      this.http.post(link, data)
          .subscribe(data=>{
              let loader = this.loading.create({
                  content: "Checking ! Please wait...",
                  duration: 500

              });
              loader.present();
          },error => {
              let alert = this.alert.create({
                  title: 'Erro senha',
                  subTitle: 'Senha incorreta !',
                  buttons: ['OK']
              });
              alert.present();
          });
      this.redirecionar();
    }
  }

  redirecionar(){
    this.nav.setRoot(PacientesPage);
  }
}
