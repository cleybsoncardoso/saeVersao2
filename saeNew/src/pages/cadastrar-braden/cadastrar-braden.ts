import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { BradenService } from '../../providers/braden-service';

@Component({
  selector: 'page-cadastrar-braden',
  templateUrl: 'cadastrar-braden.html'
})
export class CadastrarBradenPage {

  private braden = { score: 0, paciente_id: "" };
  private paciente;
  constructor(
    private nav: NavController,
    private params: NavParams,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private bradenService: BradenService
  ) {
    this.paciente = this.params.get("paciente");
  }

  selectBraden(bradenSelected) {
    bradenSelected.icon = bradenSelected.icon == "md-arrow-dropdown" ? "md-arrow-dropright" : "md-arrow-dropdown";
  }

  calcula() {
    this.braden.score = 0;
    for (let atri in this.braden) {
      if (atri != 'score') {
        this.braden.score += (+this.braden[atri])
      }
    }
  }

  salvar() {
    this.braden.paciente_id = this.paciente.id;
    this.bradenService.addScala(this.braden).then(res => {
      this.presentToast("Escala de braden cadastrada");
      this.nav.pop();
    }).catch(() => this.presentConfirm());
  }

  cancel() {
    this.nav.pop();
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
            console.log('Buy clicked');
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
