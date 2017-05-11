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
  private listaIntervencoes: any = [];

  constructor(
    private params: NavParams,
    private http: Http,
    public nav: NavController,
    private alert: AlertController,
    private cuidadosService: CuidadosService
  ) {
    this.paciente = this.params.get("paciente");;

    let date = new Date();
    let data = "";
    if (date.getMonth() + 1 < 10) {
      data = (date.getFullYear() + '-' + 0 + (date.getMonth() + 1) + '-' + date.getDate());
    } else {
      data = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    }
    let info = this.params.get("intervencoes");
    info.map(intervencao=>{
      this.listaIntervencoes.push({ id: intervencao.id, titulo: intervencao.titulo, inicio: "", intervalo: "", dataInicio: data })
    });
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
          //this.nav.popToRoot();

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
