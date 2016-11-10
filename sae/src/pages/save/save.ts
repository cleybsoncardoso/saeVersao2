import {NavController, NavParams,LoadingController,AlertController} from 'ionic-angular';
import { Component } from '@angular/core';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import {Observacoes} from '../observacoes/observacoes';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {PacienteService} from "../../providers/paciente-service/paciente-service";




/*
  Generated class for the Save page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-save',
  templateUrl: 'save.html'
})
export class Save {

  private paciente: CadastroPaciente;

  constructor(private params: NavParams,private alert :AlertController, private nav: NavController,private service : PacienteService, private http : Http,private loading : LoadingController) {
    this.paciente = params.get("parametro");
    this.nav = nav;
  }
  cancel(){
    this.nav.popToRoot();
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.pop();
    }
  }

  salvar(){
    let type = "cadastroPaciente";
    let nome = this.paciente.nome;
    let leito = this.paciente.leito;
    let data = JSON.stringify({type, nome, leito});
    let link = "http://localhost/saeApi.php";
    this.http.post(link, data)
        .subscribe(data=>{
            let loader = this.loading.create({
                content: "Checking ! Please wait...",
                duration: 1000

            });
            loader.present();
        },error => {
            let alert = this.alert.create({
                title: 'Warning',
                subTitle: 'Wrong Username or Password! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    this.nav.popToRoot();
  }

  salvar2(){
    let type = "cadastroPaciente";
    let nome = this.paciente.nome;
    let leito = this.paciente.leito;
    let data = JSON.stringify({type, nome, leito});
    let link = "http://localhost/saeApi.php";
    this.http.post(link, data)
        .subscribe(data=>{
            let loader = this.loading.create({
                content: "Checking ! Please wait...",
                duration: 1000

            });
            loader.present();
        },error => {
            let alert = this.alert.create({
                title: 'Warning',
                subTitle: 'Wrong Username or Password! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
  this.nav.popToRoot();
  }

}
