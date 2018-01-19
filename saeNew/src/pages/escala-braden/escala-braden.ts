import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarBradenPage } from '../cadastrar-braden/cadastrar-braden';


@Component({
  selector: 'page-escala-braden',
  templateUrl: 'escala-braden.html'
})

export class EscalaBradenPage {

  private braden = [
    {
      data: "20/11/2017",
      icon: "md-arrow-dropright",
      valores: {
        percepcao: 10,
        umidade: 10,
        atividade: 10,
        mobilidade: 10,
        nutricao: 10,
        ficcao: 10,
        escore: 10,
      }
    }, {
      data: "20/11/2017",
      icon: "md-arrow-dropright",
      valores: {
        percepção: 10,
        umidade: 10,
        atividade: 10,
        mobilidade: 10,
        nutrição: 10,
        ficcao: 10,
        escore: 10,
      }
    }, {
      data: "20/11/2017",
      icon: "md-arrow-dropright",
      valores: {
        percepção: 10,
        umidade: 10,
        atividade: 10,
        mobilidade: 10,
        nutrição: 10,
        ficcao: 10,
        escore: 10,
      }
    }
  ]
  constructor(
    private nav: NavController
  ) {
  }

  selectBraden(bradenSelected) {
    bradenSelected.icon = bradenSelected.icon == "md-arrow-dropdown" ? "md-arrow-dropright" : "md-arrow-dropdown";
  }

  cadastroBraden() {
    this.nav.push(CadastrarBradenPage);
  }

}
