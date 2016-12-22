import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/*
  Generated class for the EsqueciSenha page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-esqueci-senha',
  templateUrl: 'esqueci-senha.html'
})
export class EsqueciSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  enviar() {
    this.navCtrl.setRoot(HomePage);
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

}
