import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AvaliacaoCardiovascular page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-avaliacao-cardiovascular',
  templateUrl: 'avaliacao-cardiovascular.html'
})
export class AvaliacaoCardiovascularPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoCardiovascularPage');
  }

}
