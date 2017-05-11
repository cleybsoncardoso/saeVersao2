import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPaciente } from '../../model/cadastroPaciente';
import { Http } from "@angular/http";
import { AprazamentoDados } from '../../model/aprazamento';


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
    // this.listaIntervencoes = params.get('intervencoes');
    let date = new Date();
    let data = "";
    if (date.getMonth() + 1 < 10) {
      data = (date.getFullYear() + '-' + 0 + (date.getMonth() + 1) + '-' + date.getDate());
    } else {
      data = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    }
    console.log(data);
    this.listaIntervencoes = [{ id: 23, titulo: 'teste', inicio: '15:30', intervalo: 3, dataInicio: data }];
    // this.paciente = params.get('paciente');
    this.paciente = new CadastroPaciente();
    this.calcularHora();

  }

  calcularHora() {
    let teste = this.listaIntervencoes[0];
    let final = parseInt(teste.inicio.split(":")[0]);
    // console.log(final);
    while (final + teste.intervalo < 24) {
      final = final + teste.intervalo;
      console.log(final + ':' + teste.inicio.split(":")[1]);
    }

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
