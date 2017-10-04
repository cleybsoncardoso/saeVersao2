import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../model/paciente';
import 'rxjs/add/operator/map';
import { DiagnosticosPage } from '../diagnosticos/diagnosticos';
import { GerarDiagnosticoService } from '../../providers/gerar-diagnostico-service';
/*
  Generated class for the GerarSae page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gerar-sae',
  templateUrl: 'gerar-sae.html'
})
export class GerarSaePage {

  private paciente: Paciente;
  private listaCaracteristicas: any;
  private caracteristicasSelecionada: number[];

  constructor(
    private params: NavParams,
    private nav: NavController,
    private gerarService: GerarDiagnosticoService
  ) {
    this.paciente = params.get('paciente');
    console.log(this.paciente);
    this.caracteristicasSelecionada = [];
    this.carregarCaracteristicas();
  }

  cancel() {
    this.nav.popToRoot();
  }

  //funcao realizada quando o usuario desliza o dedo na tela
  slide(passar) {
    if (passar.deltaX < 0) {
      this.gerarService.getDiagnisticos(this.caracteristicasSelecionada, this.paciente.id).then(res => {
        this.nav.push(DiagnosticosPage, { diagnostico: res.value, paciente: this.paciente });
      });
    }
  }

  carregarCaracteristicas() {
    this.gerarService.getCaracteristicas().then(res => {
      if (res.type) {
        this.listaCaracteristicas = res.value;
      }
    });
  }


  itemSelected(caracteristicaClicada) {
    let index = this.caracteristicasSelecionada.indexOf(caracteristicaClicada.id);
    if (index == -1) {
      document.getElementById(caracteristicaClicada.titulo).style.backgroundColor = '#98FB98';
      this.caracteristicasSelecionada.push(caracteristicaClicada.id);
    } else {
      document.getElementById(caracteristicaClicada.titulo).style.backgroundColor = '#ffffff';
      this.caracteristicasSelecionada.splice(index, 1);
    }
  }





}
