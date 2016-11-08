import {NavController, AlertController, LoadingController } from 'ionic-angular';
import {PacientesPage} from '../pacientes/pacientes';
import {Http} from "@angular/http";
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';
import { Component } from '@angular/core';
import {PacienteService, Enfermeira} from "../../providers/paciente-service/paciente-service";
//import {UsuarioDados} from '../../model/usuario';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  private coren : string;
  private senha : string;
  //private usuario:UsuarioDados=new UsuarioDados();

  constructor(private nav: NavController, private http : Http, private alert :AlertController, private loading : LoadingController, private service : PacienteService) {
  }

  entrar(){
    let username = this.coren;
    let password = this.senha;
    let type = "login";
    let data = JSON.stringify({type, username, password});
    let link = "http://localhost/saeApi.php";

    this.http.post(link, data)
        .subscribe(data=>{
            let loader = this.loading.create({
                content: "Checking ! Please wait...",
                duration: 1000

            });
            loader.present();
            this.service.getIdEnfermeiro(username)
            .subscribe(respostaID=>{
              let enfermeira = new Enfermeira();
              enfermeira.id = respostaID[0].id;
              enfermeira.nome = respostaID[0].nome;
              this.service.setEnfermeira(enfermeira);
              this.nav.setRoot(PacientesPage);
            },error => {
              console.log("Não foi possível se conectar ao servidor");
            });
        },error => {
            let alert = this.alert.create({
                title: 'Warning',
                subTitle: 'Wrong Username or Password! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
  }


  esqueci(){
    this.nav.setRoot(EsqueciSenhaPage);
  }

  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
  }
