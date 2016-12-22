import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PlanoDeCuidados page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-plano-de-cuidados',
  templateUrl: 'plano-de-cuidados.html'
})
export class PlanoDeCuidadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanoDeCuidadosPage');
  }

}
