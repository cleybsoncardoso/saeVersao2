import { NavController, ActionSheetController, Platform, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { IdentificacaoPage } from '../identificacao/identificacao';
import 'rxjs/add/operator/map';
import { Paciente } from '../../model/paciente';
import { Historico } from '../../model/historico';
import { PacienteService } from "../../providers/paciente-service";
import { EnfermeiroService, Enfermeira } from "../../providers/enfermeiro-service";
import { HistoricoService } from "../../providers/historico-service";
import { GerarSaePage } from '../gerar-sae/gerar-sae';
import { PlanoDeCuidadosPage } from '../plano-de-cuidados/plano-de-cuidados';
import { EntrevistaPage } from '../entrevista/entrevista';



@Component({
  templateUrl: 'pacientes.html'
})
export class PacientesPage {

  private searchQuery: string;
  private listaPacientes: any[] = [];
  private listaPacientesAtualizada: any[] = [];
  private paciente: Paciente;
  private enfermeira: Enfermeira = new Enfermeira();

  constructor(
    public platform: Platform,
    private nav: NavController,
    private pService: PacienteService,
    private hService: HistoricoService,
    private http: Http,
    private alert: AlertController,
    public actionsheetCtrl: ActionSheetController,
    private eService: EnfermeiroService
  ) {
    this.nav = nav;
    this.searchQuery = '';
    this.carregarPacientes();
    this.getDadosEnfermeira();
  }

  private getDadosEnfermeira() {
    this.eService.getEnfermeira().then(user => {
      this.enfermeira = user;
    });
  }

  ionViewWillEnter() {
    this.carregarPacientes();
  }

  private carregarPacientes() {

    this.pService.carregar().then(res => {
      if (res.type) {
        this.listaPacientes = res.value;
        this.listaPacientesAtualizada = res.value;
      } else {

      }
    });

    this.searchQuery = '';

  }

  pesquisarPacientes() {
    this.listaPacientes = this.listaPacientesAtualizada;
  }

  novoPaciente() {
    this.paciente = new Paciente();
    this.nav.push(IdentificacaoPage, { paciente: this.paciente });

  }

  getPacientes(searchbar: any) {

    // Reset items back to all of the items
    this.pesquisarPacientes();

    // set q to the value of the searchbar
    let val = searchbar.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listaPacientes = this.listaPacientes.filter((item) => {
        return (item.Nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

  openPaciente(paciente: Paciente) {
    let actionSheet = this.actionsheetCtrl.create({
      title: paciente.Nome,
      cssClass: 'action-sheets-basic-page',
      buttons: [

        {
          text: 'Histórico',
          icon: !this.platform.is('ios') ? 'book' : null,
          handler: () => {
            this.hService.getHistoricoID(paciente.id).then(res => {

              let historico = res.value == false ? new Historico() : res.value;

              this.nav.push(EntrevistaPage, { historico: historico });
            });
          }
        },
        {
          text: 'Plano de cuidados',
          icon: !this.platform.is('ios') ? 'checkbox' : null,
          handler: () => {
            this.nav.push(PlanoDeCuidadosPage, { paciente: paciente });
          }
        },
        {
          text: 'Gerar SAE',
          icon: !this.platform.is('ios') ? 'done-all' : null,
          handler: () => {
            this.nav.push(GerarSaePage, { paciente: paciente });
          }
        },
        {
          text: 'Dar alta a paciente',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.alta(paciente.Nome);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  alta(paciente) {
    let alert = this.alert.create({
      title: 'Confirmar alta de paciente',
      inputs: [
        {
          name: 'password',
          placeholder: 'Sua senha',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Confirmar Alta',
          handler: data => {
            this.confirmarDados(paciente, data.password);
          }

        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        }
      ]
    });
    alert.present();

  }

  confirmarDados(pacienteNome, senha) {
    console.log(senha);
    console.log(pacienteNome);
    let id = this.enfermeira.id;
    let type = "alta";
    let data = JSON.stringify({ type, id, senha, pacienteNome });
    let link = "http://localhost/saeApi.php";

    this.http.post(link, data)
      .subscribe(data => {
        let alert = this.alert.create({
          title: 'sucesso',
          subTitle: 'Paciente foi liberado do sistema com sucesso !',
          buttons: ['OK']
        });
        alert.present();

      }, error => {
        let alert = this.alert.create({
          title: 'Erro',
          subTitle: 'Erro em operaçao !',
          buttons: ['OK']
        });
        alert.present();
      });
  }

}
