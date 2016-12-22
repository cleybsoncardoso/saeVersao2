import { Component } from '@angular/core';
import { UserService } from "../../providers/user-service";
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { EnfermeiroService, Enfermeira } from "../../providers/enfermeiro-service";
import { PacientesPage } from '../pacientes/pacientes';
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private coren: string;
  private senha: string;

  constructor(
    private nav: NavController,
    private alert: AlertController,
    private loading: LoadingController,
    private userService: UserService,
    private eService: EnfermeiroService
  ) { }

  entrar() {

    let username = this.coren;
    let password = this.senha;
    let type = "login";

    this.userService.login(type, username, password)
      .subscribe(data => {
        let loader = this.loading.create({
          content: "Checking ! Please wait...",
          duration: 1000

        });
        loader.present();
        this.eService.getDadosEnfermeira(username)
          .subscribe(respostaID => {
            let enfermeira = new Enfermeira();
            enfermeira.id = respostaID[0].id;
            enfermeira.nome = respostaID[0].first_name;
            this.eService.setEnfermeira(enfermeira).then();
            this.nav.setRoot(PacientesPage);
          }, error => {
            console.log("Não foi possível se conectar ao servidor");
          });
      }, error => {
        let alert = this.alert.create({
          title: 'Warning',
          subTitle: 'Wrong Username or Password! Please Try Again !',
          buttons: ['OK']
        });
        alert.present();
      });
  }

  esqueci() {
    this.nav.setRoot(EsqueciSenhaPage);
  }

}
