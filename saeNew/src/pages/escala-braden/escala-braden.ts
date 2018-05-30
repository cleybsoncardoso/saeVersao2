import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastrarBradenPage } from '../cadastrar-braden/cadastrar-braden';
import { BradenService } from '../../providers/braden-service';


@Component({
  selector: 'page-escala-braden',
  templateUrl: 'escala-braden.html'
})

export class EscalaBradenPage {

  private paciente;
  private braden;

  constructor(
    private nav: NavController,
    private params: NavParams,
    private bradenService: BradenService,
    private alertCtrl: AlertController
  ) {
    this.paciente = this.params.get("paciente");
  }

  ionViewWillEnter(){
    this.getBraden();
  }

  getBraden() {
    this.bradenService.getBraden(this.paciente.id).then(res => {
      if (res.type) {
        this.braden = res.value;
      } else {
        this.presentConfirm();
      }
    });
  }

  cancel() {
    this.nav.popToRoot();
  }

  selectBraden(bradenSelected) {
    bradenSelected.icon = bradenSelected.icon == "md-arrow-dropdown" ? "md-arrow-dropright" : "md-arrow-dropdown";
  }

  cadastroBraden() {
    this.nav.push(CadastrarBradenPage, { paciente: this.paciente });
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
            this.getBraden();
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
