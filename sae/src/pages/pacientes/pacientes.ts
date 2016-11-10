import {NavController, MenuController, NavParams,ActionSheetController,Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import {IdentificacaoPage} from '../identificacao/identificacao';
import 'rxjs/add/operator/map';
import {CadastroPaciente} from '../../model/cadastroPaciente';
import {PacienteService} from "../../providers/paciente-service/paciente-service";
import {EnfermeiroService, Enfermeira} from "../../providers/enfermeiro-service/enfermeiro-service";
import {GerarSaePage} from '../gerar-sae/gerar-sae';



@Component({
  templateUrl: 'pacientes.html'
})
export class PacientesPage {

  private searchQuery : string;
  private listaPacientes : any;
  private listaPacientesAtualizada : any;
  private paciente : CadastroPaciente;
  private enfermeira: Enfermeira = new Enfermeira();

    constructor(
      public platform: Platform,
      private nav: NavController,
      private menu: MenuController,
      private pService: PacienteService,
      public actionsheetCtrl: ActionSheetController,
      private eService: EnfermeiroService
    ) {
        this.nav = nav;
        this.menu = menu;
        this.menu.enable(true);
        this.searchQuery = '';
        this.carregarPacientes();
        this.getDadosEnfermeira();
  }

  private getDadosEnfermeira(){
      this.eService.getEnfermeira().then(user=>{
      this.enfermeira = user;
      console.log("Dados da Enfermeira em pacientes:");
      console.log(this.enfermeira.id);
      console.log(this.enfermeira.nome);
    });
  }

  ionViewWillEnter(){
    this.carregarPacientes;
  }
  carregarPacientes(){

    this.pService.carregar()
    .subscribe(data=>{
      this.listaPacientes = data;
      this.listaPacientesAtualizada = data;
      console.log(this.listaPacientes);
    },error => {
      console.log(this.listaPacientes);
      console.log("Não foi possível se conectar ao servidor");
    });
    this.searchQuery = '';

  }

  pesquisarPacientes(){
    this.listaPacientes = this.listaPacientesAtualizada;
  }

  novoPaciente(){
    this.menu.enable(false);
    this.paciente = new CadastroPaciente();
    this.nav.push(IdentificacaoPage,{paciente: this.paciente} );

  }

  getPacientes(searchbar:any){

    // Reset items back to all of the items
    this.pesquisarPacientes();

    // set q to the value of the searchbar
    let val = searchbar.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listaPacientes = this.listaPacientes.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

  openPaciente(paciente){
    let actionSheet = this.actionsheetCtrl.create({
      title: paciente.nome,
      cssClass: 'action-sheets-basic-page',
      buttons: [

        {
          text: 'Histórico',
          icon: !this.platform.is('ios') ? 'book' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Plano de cuidados',
          icon: !this.platform.is('ios') ? 'checkbox' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Gerar SAE',
          icon: !this.platform.is('ios') ? 'done-all' : null,
          handler: () => {
            this.nav.push(GerarSaePage,{paciente: paciente});
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
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

  }
