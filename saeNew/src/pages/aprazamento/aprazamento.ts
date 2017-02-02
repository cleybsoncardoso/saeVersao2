import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPaciente } from '../../model/cadastroPaciente';
import { Http } from "@angular/http";
import { AprazamentoDados } from '../../model/aprazamento';

/*
  Generated class for the Aprazamento page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aprazamento',
  templateUrl: 'aprazamento.html'
})
export class AprazamentoPage {

  private paciente: CadastroPaciente;
  private listaIntervencoes: any;

  constructor(
    private params: NavParams,
    private http: Http,
    public nav: NavController,
    private alert: AlertController
  ) {
    this.listaIntervencoes = params.get('intervencoes');
    this.paciente = params.get('paciente');

  }

  enviar() {

    let erro = false;
    for (let i = 0; i < this.listaIntervencoes.length; i++) {
      if (this.listaIntervencoes[i].inicio == "" || this.listaIntervencoes[i].intervalo == 0 || this.listaIntervencoes[i].dataInicio == "" || this.listaIntervencoes[i].dataFim == "") {
        erro = true;
        let alert = this.alert.create({
          title: 'Warning',
          subTitle: 'Complente os campos que faltam para o apazamento',
          buttons: ['OK']
        });
        alert.present();

      }
    }
    if (!erro) {


      let type = "aprazar";
      let intervencoes = this.listaIntervencoes;
      let idPaciente = this.paciente.id;
      let data = JSON.stringify({ type, idPaciente, intervencoes });
      let link = "http://localhost/saeApi.php";

      this.http.post(link, data)
        .subscribe(data => {
          let alert = this.alert.create({
            title: 'sucesso',
            subTitle: 'Aprazamento concluido',
            buttons: ['OK']
          });
          alert.present();
          this.nav.popToRoot();
        }, error => {
          let alert = this.alert.create({
            title: 'Warning',
            subTitle: 'erro de comunicacao',
            buttons: ['OK']
          });
          alert.present();
        });

    }
  }

  cancel() {
    this.nav.popToRoot();
  }


}
