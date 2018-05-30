import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, ModalController } from 'ionic-angular';
import { CadastroPaciente } from '../../model/cadastroPaciente';
import { AprazamentoDados } from '../../model/aprazamento';
import { UsuarioDados } from '../../model/usuario';
import { CuidadosService } from "../../providers/cuidados-service";
import { EnfermeiroService } from "../../providers/enfermeiro-service";
import { GerarSaePage } from "../gerar-sae/gerar-sae";
import { EvolucaoPage } from '../evolucao/evolucao';

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
  private plano_id = "";
  private evolucaoPaciente = "";

  constructor(
    public nav: NavController,
    public params: NavParams,
    private service: CuidadosService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private enfermeiroSer: EnfermeiroService,
    private modalCtrl: ModalController
  ) {
    this.paciente = params.get('paciente');

    this.enfermeiroSer.getEnfermeira().then(res => {
      this.enfermeiro = res;
      this.carregarPlanos(res.id);
    });
    //this.planoAFazer = [{id:"1",titulo:"Redução da ansiedade",horarioInicio: "12:00",ultimoHorario:"12:00",proximaHora:"13:00"},{id:"1",titulo:"Redução da ansiedade",horarioInicio:"12:00", ultimoHorario:"12:00", proximaHora:"13:00"}];
  }

  cancel() {
    this.nav.popToRoot();
  }

  carregarPlanos(id) {
    this.service.getPlanos(this.paciente.id, id).then(resposta => {
      if (resposta.type) {
        if (resposta.value.cuidados.length) {
          this.planoAFazer = resposta.value.cuidados;
          this.plano_id = resposta.value.cuidados[0].plano_de_cuidados_id;
          this.evolucaoPaciente = resposta.value.evolucao;
          if (this.enfermeiro.id != resposta.value.enfermeira_id && this.enfermeiro.is_admin != 1) {
            this.desativar = true;
            const alert = this.alertCtrl.create({
              title: 'Esse plano foi gerado por outra enfermeira',
              subTitle: 'Você só tem permissão de visualizar',
              buttons: [
                {
                  text: 'OK',
                  role: 'OK',
                  handler: data => {
                  }
                }
              ]
            });
            alert.present();
          }
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

  evolucao() {
    let evolucaoModal = this.modalCtrl.create(EvolucaoPage, { paciente: this.paciente, evolucao: this.evolucao, plano_id: this.plano_id });
    evolucaoModal.onDidDismiss(data => {
      this.carregarPlanos(this.enfermeiro.id);
    });
    evolucaoModal.present();
  }

  aprazar(procedimento) {
    this.desativar = true;
    this.service.isAtrasado(procedimento.id).then(resposta => {
      this.desativar = false;
      if (resposta.type) {
        if (resposta.value[0] == "atrasado") {
          let aux = [];
          resposta.value[1].map(justificativa => {
            aux.push({
              type: 'radio',
              label: justificativa.texto,
              value: justificativa.texto
            })
          });
          this.presentPrompt(procedimento, aux);
        } else {
          this.presentToast("Procedimento realizado")
          procedimento.ultimoHorario = resposta.value.ultimoHorario;
          procedimento.proximaHora = resposta.value.proximoHorario;
        }
      }
    });
  }

  presentPrompt(procedimento, options) {
    const alert = this.alertCtrl.create({
      title: 'Motivo do atraso',
      inputs: options,
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
            this.justificar(data, procedimento, options);
          }
        }
      ]
    });
    alert.present();
  }

  private justificar(justificativa, procedimento, options) {
    this.service.justificar(procedimento.id, justificativa, this.paciente.id, this.enfermeiro.id).then(resposta => {
      this.desativar = false;
      if (resposta.type) {
        if (resposta.value == "atrasado") {
          this.presentPrompt(procedimento, options);
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
