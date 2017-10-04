import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CadastroPaciente } from '../../model/cadastroPaciente';
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";
import { AprazamentoPage } from '../aprazamento/aprazamento';
import { AprazamentoDados } from '../../model/aprazamento';
import { GerarDiagnosticoService } from '../../providers/gerar-diagnostico-service';


/*
  Generated class for the Diagnosticos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diagnosticos',
  templateUrl: 'diagnosticos.html'
})
export class DiagnosticosPage {

  private paciente: CadastroPaciente;
  private caracteristicasSelecionada: number[];
  private diagnosticos: any;
  private intervencaoSelecionadas: any;
  private idsInter: string[];

  constructor(
    private params: NavParams,
    private http: Http,
    private nav: NavController,
    private alert: AlertController,
    private loading: LoadingController,
    private gerarService: GerarDiagnosticoService
  ) {
    this.paciente = params.get('paciente');
    this.diagnosticos = params.get('diagnostico');
    this.idsInter = [];
    this.intervencaoSelecionadas = [];
  }

  cancel() {
    this.nav.popToRoot();
  }

  //funcao realizada quando o usuario desliza o dedo na tela
  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else {
      this.enviarDiagnosticos();
    }
  }

  itemSelected(intervencaoSelecioanda) {
    let index = this.intervencaoSelecionadas.indexOf(intervencaoSelecioanda);
    let index2 = this.idsInter.indexOf(intervencaoSelecioanda.id);
    if (index2 == -1) {
      this.idsInter.push(intervencaoSelecioanda.id);
      this.intervencaoSelecionadas.push(intervencaoSelecioanda);
    } else {
      this.idsInter.splice(index, 1);
      this.intervencaoSelecionadas.splice(index2, 1);
    }
  }

  selecionado(intervencaoSelecioanda) {
    let index = this.idsInter.indexOf(intervencaoSelecioanda.id);
    if (index == -1) {
      return false;
    } else {
      return true;
    }
  }

  enviarDiagnosticos() {

    let confirm = this.alert.create({
      title: 'Cadastrar intervenção',
      message: 'Deseja cadstrar as intervenções?',
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log(this.intervencaoSelecionadas);
            this.nav.push(AprazamentoPage, { intervencoes: this.intervencaoSelecionadas, paciente: this.paciente });
          }
        },
        {
          text: 'Cancelar',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }

}