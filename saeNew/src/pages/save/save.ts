import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Historico } from '../../model/historico';
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";
import { GerarSaePage } from '../gerar-sae/gerar-sae';


/*
  Generated class for the Save page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-save',
  templateUrl: 'save.html'
})
export class SavePage {

  private historico: Historico;

  constructor(private params: NavParams, private alert: AlertController, private nav: NavController, private http: Http, private loading: LoadingController) {
    this.historico = params.get("parametro");
    this.nav = nav;
  }
  cancel() {
    this.nav.popToRoot();
  }
  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    }
  }

  salvar() {
    let type = "cadastroPaciente";
    let historico = this.historico;
    let data = JSON.stringify({ type, historico });
    let link = "http://localhost/saeApi.php";
    this.http.post(link, data)
      .subscribe(data => {
        let loader = this.loading.create({
          content: "Checking ! Please wait...",
          duration: 1000
        });
        loader.present();
        let alert = this.alert.create({
          title: 'Sucesso',
          subTitle: 'Paciente cadastrado !',
          buttons: ['OK']
        });
        alert.present();
        //this.nav.popToRoot();
      }, error => {
        let alert = this.alert.create({
          title: 'Warning',
          subTitle: 'Alguns dados essenciais não foram cadastrados!',
          buttons: ['OK']
        });
        alert.present();
      });

  }

  salvar2() {
    this.salvar();
    this.nav.push(GerarSaePage, { historico: this.historico });
  }

}
