import { Component } from '@angular/core';

@Component({
  selector: 'page-cadastrar-braden',
  templateUrl: 'cadastrar-braden.html'
})
export class CadastrarBradenPage {

  private braden = { escore: 0 };
  constructor(
  ) {
  }

  selectBraden(bradenSelected) {
    bradenSelected.icon = bradenSelected.icon == "md-arrow-dropdown" ? "md-arrow-dropright" : "md-arrow-dropdown";
  }

  calcula() {
    console.log(this.braden)
    this.braden.escore = 0;
    for (let atri in this.braden) {
      if (atri != 'escore') {
        this.braden.escore += (+this.braden[atri])
      }
    }
  }

}
