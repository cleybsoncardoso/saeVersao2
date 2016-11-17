import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

private aprazamentos: string[];
private dias:any[];
private momento:any[]

  constructor(public nav: NavController) {
    this.aprazamentos = [];
    this.aprazamentos.push('teste');
    this.dias = [];
    this.dias.push([]);
    this.momento = [];


  }


  cancel(){
    this.nav.popToRoot();
  }

  eventItemSelected(intervencaoSelecioanda,dia){

    let index = this.aprazamentos.indexOf(intervencaoSelecioanda);
    let index2 = this.dias[index].indexOf(dia);
    if(index2 == -1){
      this.dias[index].push(dia);
      this.itemSelected(intervencaoSelecioanda,dia,"add");
    }else{
      this.dias[index].splice(index2,1);
      this.itemSelected(intervencaoSelecioanda,dia,"rem");
    }

  }

  itemSelected(intervencaoSelecioanda,dia,operacao){

    console.log(dia+intervencaoSelecioanda);
    if(operacao=="add"){
      document.getElementById(dia+intervencaoSelecioanda).style.backgroundColor = '#98FB98';
      document.getElementById(dia+intervencaoSelecioanda).style.color = '#ffffff';
    }else{
      document.getElementById(dia+intervencaoSelecioanda).style.backgroundColor = '#ffffff';
      document.getElementById(dia+intervencaoSelecioanda).style.color = '#98FB98';
    }
  }

  tempo(intervencaoSelecioanda,periodo){
    let index = this.aprazamentos.indexOf(intervencaoSelecioanda);
    this.momento[index]=periodo;
    console.log(this.momento);

  }


}
