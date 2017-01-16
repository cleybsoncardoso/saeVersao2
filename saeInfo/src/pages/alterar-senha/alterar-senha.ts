import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { PacientesPage } from '../pacientes/pacientes';
import { EnfermeiroService, Enfermeira } from "../../providers/enfermeiro-service";
import { UserService } from '../../providers/user-service';

@Component({
  templateUrl: 'alterar-senha.html',
})
export class AlterarSenhaPage {

  private senha1: string;
  private senha2: string;
  private senhaAntiga: string;
  private enfermeira: Enfermeira = new Enfermeira();

  constructor(
    private nav: NavController,
    private eService: EnfermeiroService,
    private alert: AlertController,
    private loading: LoadingController,
    private userService: UserService
  ) {

    this.nav = nav;
    this.senha1 = "";
    this.senha2 = "";
    this.senhaAntiga = "";
    this.getDadosEnfermeira();
  }

  private getDadosEnfermeira() {
    this.eService.getEnfermeira().then(user => {
      this.enfermeira = user;
      console.log("Dados da Enfermeira em alterar senha:");
      console.log(this.enfermeira.id);
      console.log(this.enfermeira.nome);
    });
  }

  conferir() {

    if (this.senha1 != this.senha2) {
      let alert = this.alert.create({
        title: 'Erro ao trocar senha',
        subTitle: 'Senhas estão diferentes !',
        buttons: ['OK']
      });
      alert.present();
    } else if (this.senha1 == "" || this.senha2 == "" || this.senhaAntiga == "") {
      let alert = this.alert.create({
        title: 'Erro ao troca senha',
        subTitle: 'Está faltando dados !',
        buttons: ['OK']
      });
      alert.present();
    } else if (this.senha1 == this.senha2) {
      
      this.userService.alterarSenha("senha",this.enfermeira.id, this.senhaAntiga, this.senha2)
        .subscribe(data => {
          let loader = this.loading.create({
            content: "Checking ! Please wait...",
            duration: 500

          });
          loader.present();
        }, error => {
          let alert = this.alert.create({
            title: 'Erro senha',
            subTitle: 'Senha incorreta !',
            buttons: ['OK']
          });
          alert.present();
        });
      this.redirecionar();
    }
  }

  redirecionar() {
    this.nav.setRoot(PacientesPage);
  }
}