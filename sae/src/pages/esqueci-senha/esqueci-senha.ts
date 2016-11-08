import {NavController} from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import { Component } from '@angular/core';

/*
  Generated class for the EsqueciSenhaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'esqueci-senha.html',
})
export class EsqueciSenhaPage {

  constructor(private nav: NavController) {
  }

  enviar(){
    this.nav.setRoot(HomePage);
  }

  cancelar(){
    this.nav.setRoot(HomePage);
  }
}
