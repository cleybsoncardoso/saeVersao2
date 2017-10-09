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
    this.gerarService.getCaracteristicas(this.paciente.id).then(res => {
      if (res.type) {
        console.log(res.value);
        this.listaCaracteristicas = res.value.caracteristicas;
        
        this.caracteristicasSelecionada = res.value.selecionadas;
      }
    });
  }


  itemSelected(caracteristicaClicada) {
    let index = this.caracteristicasSelecionada.indexOf(caracteristicaClicada.id);
    if (index == -1) {
      this.caracteristicasSelecionada.push(caracteristicaClicada.id);
    } else {
      this.caracteristicasSelecionada.splice(index, 1);
    }
  }

  selecionado(idCaracteristica) {
    return this.caracteristicasSelecionada.indexOf(idCaracteristica) > -1;

  }
}
