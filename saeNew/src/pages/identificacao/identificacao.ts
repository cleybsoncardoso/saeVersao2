import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Paciente } from '../../model/paciente';
import { Historico } from '../../model/historico';
import { EntrevistaPage } from '../entrevista/entrevista';
import { PacienteService } from "../../providers/paciente-service";

/*
  Generated class for the IdentificacaoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'identificacao.html',
})
export class IdentificacaoPage {

  private paciente: Paciente;

  constructor(
    private params: NavParams,
    private nav: NavController,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private pService: PacienteService
  ) {
    this.paciente = params.get('paciente');
  }
  cancel() {
    this.nav.popToRoot();
  }

  salvar() {
    console.log(JSON.stringify(this.paciente));
    let loading = this.loadingCtrl.create({
      content: 'Salvando paciente'
    });

    loading.present();
    if (this.paciente.id == "0") {
      this.pService.addPaciente(this.paciente).then(resposta => {
        if (resposta.type) {
          this.paciente = resposta.value;
          loading.dismiss();
          this.presentConfirm();
        } else {
          loading.dismiss();
          this.reconectar();
        }
      });
    } else {
      this.pService.editPaciente(this.paciente).then(resposta => {
        if (resposta.type) {
          this.paciente = resposta.value;
          loading.dismiss();
          this.presentConfirm();
        } else {
          loading.dismiss();
          this.reconectar();
        }
      });
    }

  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Dados do paciente salvo com sucesso',
      message: 'Deseja continuar cadastrar o historico do paciente agora?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            this.nav.pop();
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.nav.pop();
            let historico = new Historico();
            historico.paciente_id = this.paciente.id;
            this.nav.push(EntrevistaPage, { historico: historico });
          }
        }
      ]
    });
    alert.present();
  }

  reconectar() {
    let alert = this.alertCtrl.create({
      title: 'Conexão falhou',
      message: 'Deseja tentar novamente?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.salvar();
          }
        }
      ]
    });
    alert.present();
  }

  procurarRegistro() {
    this.pService.getPacienteByRegistro(this.paciente.registro).then(resp => {
      console.log(resp);
      if (resp.type) {
        this.paciente = resp.value;
      }
    });
  }
}
