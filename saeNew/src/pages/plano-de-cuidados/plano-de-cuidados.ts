import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { CadastroPaciente } from '../../model/cadastroPaciente';
import { AprazamentoDados } from '../../model/aprazamento';
import { UsuarioDados } from '../../model/usuario';
import { CuidadosService } from "../../providers/cuidados-service";
import { EnfermeiroService } from "../../providers/enfermeiro-service";
import { GerarSaePage } from "../gerar-sae/gerar-sae";

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

  private paciente: CadastroPaciente;
  private planoAFazer: any[];
  private desativar: boolean = false;
  private enfermeiro: UsuarioDados;

  constructor(
    public nav: NavController,
    public params: NavParams,
    private service: CuidadosService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private enfermeiroSer: EnfermeiroService
  ) {
    this.paciente = params.get('paciente');
    this.enfermeiroSer.getEnfermeira().then(res => {
      this.enfermeiro = res;
    });
    //this.planoAFazer = [{id:"1",titulo:"Redução da ansiedade",horarioInicio: "12:00",ultimoHorario:"12:00",proximaHora:"13:00"},{id:"1",titulo:"Redução da ansiedade",horarioInicio:"12:00", ultimoHorario:"12:00", proximaHora:"13:00"}];
    this.carregarPlanos();
  }

  cancel() {
    this.nav.popToRoot();
  }

  carregarPlanos() {
    this.service.getPlanos(this.paciente.id).then(resposta => {
      if (resposta.type) {
        if (resposta.value.length) {
          this.planoAFazer = resposta.value;
        } else {
          const alert = this.alertCtrl.create({
            title: 'Nenhum plano de cuidados cadastrado',
            subTitle: 'Cadastrar um novo plano de cuidados?',
            buttons: [
              {
                text: 'Não',
                role: 'Não',
                handler: data => {
                  this.nav.popToRoot();
                }
              },
              {
                text: 'Sim',
                handler: data => {
                  this.nav.pop();
                  this.nav.push(GerarSaePage, { paciente: this.paciente });                  
                }
              }
            ]
          });
          alert.present();
        }
      }
    });

  }

  aprazar(procedimento) {
    this.desativar = true;
    this.service.isAtrasado(procedimento.id).then(resposta => {
      this.desativar = false;
      if (resposta.type) {
        if (resposta.value == "atrasado") {
          this.presentPrompt(procedimento);
        } else {
          this.presentToast("Procedimento realizado")
          procedimento.ultimoHorario = resposta.value.ultimoHorario;
          procedimento.proximaHora = resposta.value.proximoHorario;
        }
      }
    });
  }

  presentPrompt(procedimento) {
    const alert = this.alertCtrl.create({
      title: 'Motivo do atraso',
      inputs: [
        {
          name: 'justificativa',
          placeholder: 'Justifique o atraso'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Justificar',
          handler: data => {
            this.justificar(data.justificativa, procedimento);
          }
        }
      ]
    });
    alert.present();
  }

  private justificar(justificativa, procedimento) {
    this.service.justificar(procedimento.id, justificativa, this.paciente.id, this.enfermeiro.id).then(resposta => {
      this.desativar = false;
      if (resposta.type) {
        if (resposta.value == "atrasado") {
          this.presentPrompt(procedimento);
        } else {
          this.presentToast("Procedimento realizado")
          procedimento.ultimo_horario = resposta.value.ultimo_horario;
          procedimento.proximo_horario = resposta.value.proximoHorario;
        }
      }
    });
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

}
