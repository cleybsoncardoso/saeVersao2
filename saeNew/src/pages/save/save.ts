import { NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Historico } from '../../model/historico';
import 'rxjs/add/operator/map';
import { GerarSaePage } from '../gerar-sae/gerar-sae';
import { HistoricoService } from '../../providers/historico-service';
/*
  Generated class for the Save page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-save',
  templateUrl: 'save.html'
})
export class SavePage {

  private historico: Historico;

  constructor(
    private params: NavParams,
    private alert: AlertController,
    private nav: NavController,
    private loading: LoadingController,
    private hisService: HistoricoService,
    private toastCtrl: ToastController
  ) {
    this.historico = params.get("historico");
    this.nav = nav;
  }
  cancel() {
    this.nav.popToRoot();
  }
  slide(passar) {
    if (passar.deltaX > 0) {
      this.nav.pop();
    }
  }

  salvar() {
    let loader = this.loading.create({
      content: "Salvando informações ..."
    });
    loader.present();
    if (this.historico.idsaeapp_historico && this.historico.idsaeapp_historico == "0") {
      this.hisService.addHistorico(this.historico).then(resposta => {
        loader.dismiss();
        if (resposta.type) {
          this.presentToast("historico cadastrado com sucesso");
          this.nav.popToRoot();
        } else {
          this.tentarNovamente(false);
        }
      });
    } else {
      this.hisService.editHistorico(this.historico).then(resposta => {
        loader.dismiss();
        if (resposta.type) {
          this.presentToast("historico editado com sucesso");
          this.nav.popToRoot();
        } else {
          this.tentarNovamente(false);
        }
      });
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  tentarNovamente(gerarSae) {
    let alert = this.alert.create({
      title: 'Erro ao conectar com o servidor',
      message: 'deseja tentar novamente?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          handler: () => {
            if (!gerarSae) {
              this.salvar();
            } else {
              this.salvar2();
            }
          }
        }
      ]
    });
    alert.present();
  }

  salvar2() {
    let loader = this.loading.create({
      content: "Salvando informações ..."
    });
    loader.present();

    if (this.historico.idsaeapp_historico && this.historico.idsaeapp_historico == "0") {
      this.hisService.addHistorico(this.historico).then(resposta => {
        loader.dismiss();
        if (resposta.type) {
          this.nav.popToRoot();
          this.nav.push(GerarSaePage, { paciente: resposta.value });
        } else {
          this.tentarNovamente(false);
        }
      });
    } else {
      this.hisService.editHistorico(this.historico).then(resposta => {
        loader.dismiss();
        if (resposta.type) {
          this.nav.popToRoot();
          this.nav.push(GerarSaePage, { paciente: resposta.value });
        } else {
          this.tentarNovamente(false);
        }
      });
    }
  }

}
