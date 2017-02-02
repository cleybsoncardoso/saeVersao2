import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { PacientesPage } from '../pacientes/pacientes';
import { Http } from "@angular/http";
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';
import { Component } from '@angular/core';
import { EnfermeiroService, Enfermeira } from "../../providers/enfermeiro-service";
import { LoginService } from "../../providers/login-service";
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  private coren: string;
  private senha: string;

  constructor(
    private nav: NavController,
    private http: Http,
    private alert: AlertController,
    private loading: LoadingController,
    private eService: EnfermeiroService,
    private lService: LoginService
  ) {

  }

  private entrar() {
    if (this.coren !== null && this.senha !== null && this.coren !== '' && this.senha !== '') {

      let loader = this.loading.create({
        content: "Checando dados...",
        duration: 1000
      });
      loader.present();

      this.lService.logar(this.coren, this.senha).then(res => {
        if (res.type == true) {
          let enfermeira = new Enfermeira();
          enfermeira.id = res.data.id;
          enfermeira.nome = res.data.first_name;
          this.eService.setEnfermeira(enfermeira).then();
          this.nav.setRoot(PacientesPage);
        } else {
          let alert = this.alert.create({
            title: 'Atenção',
            subTitle: res.message,
            buttons: ['OK']
          });
          alert.present();
        }
      });
    }
  }

  private esqueci() {
    this.nav.setRoot(EsqueciSenhaPage);
  }

}
