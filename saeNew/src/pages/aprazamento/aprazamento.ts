import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Paciente } from '../../model/paciente';
import { Http } from "@angular/http";
import { AprazamentoDados } from '../../model/aprazamento';
import { CuidadosService } from '../../providers/cuidados-service';
import { EnfermeiroService } from '../../providers/enfermeiro-service';

@Component({
  selector: 'page-aprazamento',
  templateUrl: 'aprazamento.html'
})
export class AprazamentoPage {

  private paciente: Paciente;
  private idEnfermeira: string;
  private listaIntervencoes: any = [];

  constructor(
    private params: NavParams,
    private http: Http,
    private enfermeiraService: EnfermeiroService,
    public nav: NavController,
    private alert: AlertController,
    private cuidadosService: CuidadosService
  ) {
    this.paciente = this.params.get("paciente");
    this.enfermeiraService.getEnfermeira().then(res => this.idEnfermeira = res.id);
    let date = new Date();
    let data = "";
    if (date.getMonth() + 1 < 10) {
      data = (date.getFullYear() + '-' + 0 + (date.getMonth() + 1) + '-' + date.getDate());
    } else {
      data = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    }
    let info = this.params.get("intervencoes");
    info.map(intervencao => {
      this.listaIntervencoes.push({ id: intervencao.id, titulo: intervencao.titulo, inicio: "", intervalo: "", dataInicio: data })
    });
  }
  private enviar() {
    let erro = false;
    this.listaIntervencoes.map(intervencaoAtual => {
      if (!intervencaoAtual.dataInicio || !intervencaoAtual.inicio || !intervencaoAtual.intervalo) {
        erro = true;
      }
    });

    if (!erro) {
      this.cuidadosService.addCuidados(this.listaIntervencoes, this.paciente.id, this.idEnfermeira).then(res => {
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
