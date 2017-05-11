import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Paciente } from '../../model/paciente';
import { Http } from "@angular/http";
import { AprazamentoDados } from '../../model/aprazamento';
import { CuidadosService } from '../../providers/cuidados-service';


@Component({
  selector: 'page-aprazamento',
  templateUrl: 'aprazamento.html'
})
export class AprazamentoPage {

  private paciente: Paciente;
  private listaIntervencoes: any;

  constructor(
    private params: NavParams,
    private http: Http,
    public nav: NavController,
    private alert: AlertController,
    private cuidadosService: CuidadosService
  ) {
    // this.listaIntervencoes = params.get('intervencoes');
    // this.paciente = params.get('paciente');
    this.paciente = new Paciente();

    let date = new Date();
    let data = "";
    if (date.getMonth() + 1 < 10) {
      data = (date.getFullYear() + '-' + 0 + (date.getMonth() + 1) + '-' + date.getDate());
    } else {
      data = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    }
    this.listaIntervencoes = [{ id: 23, titulo: 'teste', inicio: '15:30', intervalo: 3, dataInicio: data },{ id: 26, titulo: 'meu teste', inicio: '15:30', intervalo: 3, dataInicio: data }, { id: 22, titulo: 'testando', inicio: '12:30', intervalo: 1, dataInicio: data }];
  }

  private calcularHora() {
    for (let intervencao of this.listaIntervencoes) {
      let final = parseInt(intervencao.inicio.split(":")[0]);
      // console.log(final);
      while (final + intervencao.intervalo < 24) {
        final = final + intervencao.intervalo;
      }
      intervencao.ultimoHorario = (final + ':' + intervencao.inicio.split(":")[1]);
    }
  }

  private enviar() {
    let erro = false;
    for (let i = 0; i < this.listaIntervencoes.length; i++) {
      if (this.listaIntervencoes[i].inicio == "" || this.listaIntervencoes[i].intervalo == 0 || this.listaIntervencoes[i].dataInicio == "" || this.listaIntervencoes[i].dataFim == "") {
        erro = true;
        let alert = this.alert.create({
          subTitle: 'Complete os campos que faltam para aplicar o aprazamento',
          buttons: ['OK']
        });
        alert.present();

      }
    }
    if (!erro) {
      this.calcularHora();
      this.cuidadosService.addCuidados(this.listaIntervencoes, 1).then(res => {
        if (res.type) {
          let alert = this.alert.create({
            subTitle: 'Aprazamento Concluído',
            buttons: ['OK']
          });
          alert.present();
          this.nav.popToRoot();

        } else {
          let alert = this.alert.create({
            subTitle: 'Erro de Comunicação',
            buttons: ['OK']
          });
          alert.present();
        }
      });
    }
  }

  private cancel() {
    this.nav.popToRoot();
  }


}
