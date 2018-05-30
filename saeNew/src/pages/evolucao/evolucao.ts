import { NavController, ActionSheetController, Platform, AlertController, ViewController, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { CuidadosService } from '../../providers/cuidados-service';


@Component({
  templateUrl: 'evolucao.html'
})
export class EvolucaoPage {

  private plano_id: string = "";
  private evolucao: string = "";
  private paciente: {};
  private desativar = false;

  constructor(
    private nav: NavController,
    private alert: AlertController,
    private service: CuidadosService,
    private view: ViewController,
    public params: NavParams,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.paciente = params.get('paciente');
    this.evolucao = params.get('evolucao');
    this.plano_id = params.get('plano_id');
  }

  cancel() {
    this.view.dismiss();
  }

  salvar() {
    this.desativar = true;
    this.service.evolucao(this.plano_id, this.paciente['id'], this.evolucao).then(res => {
      if (res.type) {
        this.presentToast("Salvo com sucesso");
        this.view.dismiss();
      } else {
        this.desativar = false;
        this.presentConfirm();
      }
    }).catch(error => {
      this.desativar = false;
      this.presentConfirm();
    })
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Erro de conexão',
      message: 'Deseja tentar novamente?',
      buttons: [
        {
          text: 'não',
          role: 'não',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sim',
          role: 'sim',
          handler: () => {
            this.salvar();
          }
        }
      ]
    });
    alert.present();
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

}
