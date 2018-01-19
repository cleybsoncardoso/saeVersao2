import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { PacientesPage } from '../pages/pacientes/pacientes';
import { AlterarSenhaPage } from '../pages/alterar-senha/alterar-senha';
import { AprazamentoPage } from '../pages/aprazamento/aprazamento';
import { EscalaBradenPage } from '../pages/escala-braden/escala-braden';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  private alterarsenha: any = AlterarSenhaPage;
  private home: any = HomePage;
  private pacientes: any = PacientesPage;
  rootPage: any = PacientesPage;

  constructor(public platform: Platform, public menu: MenuController) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page);
  }
}
