import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AprazamentoDados} from '../../model/aprazamento';


/*
  Generated class for the Aprazamento page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aprazamento',
  templateUrl: 'aprazamento.html'
})
export class AprazamentoPage {

private aprazamentos: AprazamentoDados[];

  constructor(public nav: NavController) {
    this.aprazamentos = [];




  }

  ionViewDidLoad() {
    console.log('Hello AprazamentoPage Page');
  }

  cancel(){
    this.nav.popToRoot();
  }

  itemSelected(intervencaoSelecioanda,dia){

    let index = -1;
    this.aprazamentos[0] =new AprazamentoDados();
    this.aprazamentos[0].id=2;
    console.log(this.aprazamentos[0].id);
  }


}
