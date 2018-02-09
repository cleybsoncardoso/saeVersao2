import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { AlimentacaoEEliminacaoIntestinalPage } from '../alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal';
import { Historico } from '../../model/historico';

/*
  Generated class for the HidratacaoEEliminacaoVesical page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hidratacao-e-eliminacao-vesical',
  templateUrl: 'hidratacao-e-eliminacao-vesical.html'
})
export class HidratacaoEEliminacaoVesicalPage {

  private historico: Historico;

  constructor(
    private params: NavParams,
    private nav: NavController
  ) {
    this.historico = params.get("historico");
    this.nav = nav;
    this.carregarDados();
  }

  carregarDados() {
    if (this.historico.eliminacaoUrinaria != null) {
      this.historico.eliminacaoUrinaria.map(eliminacao => this.historico['eliminacaoUrinaria' + eliminacao.nome] = true)
    }

    if (this.historico.caracteristicas != null) {
      this.historico.caracteristicas.map(caracteristica => {

        switch (caracteristica.nome) {
          case "Disúria":
            this.historico.caracteristicasDisuria = true;
            break;
          case "Oligúria":
            this.historico.caracteristicasOliguria = true;
            break;
          case "Anúria":
            this.historico.caracteristicasAnuria = true;
            break;
          case "Poliúria":
            this.historico.caracteristicasPoliuria = true;
            break;
          case "Hematúria":
            this.historico.caracteristicasHematuria = true;
            break;
          default:
            this.historico.caracteristicasOutros = caracteristica.nome;
            break;
        }
      })
    }


    // if (this.historico.hidratacao_Caracteristicas != null) {

    //   let aux = this.historico.hidratacao_Caracteristicas.split(",");
    //   let index = aux.indexOf("Disúria");
    //   if (index > -1) {
    //     this.historico.caracteristicasDisuria = true;
    //     aux.splice(index, 1);
    //   }

    //   index = aux.indexOf("Oligúria");
    //   if (index > -1) {
    //     this.historico.caracteristicasOliguria = true;
    //     aux.splice(index, 1);

    //   }

    //   index = aux.indexOf("Anúria");
    //   if (index > -1) {
    //     this.historico.caracteristicasAnuria = true;
    //     aux.splice(index, 1);

    //   }

    //   index = aux.indexOf("Poliúria");
    //   if (index > -1) {
    //     this.historico.caracteristicasPoliuria = true;
    //     aux.splice(index, 1);

    //   }

    //   index = aux.indexOf("Hematúria");
    //   if (index > -1) {
    //     this.historico.caracteristicasHematuria = true;
    //     aux.splice(index, 1);
    //   }

    //   this.historico.caracteristicasOutros = aux.toString();
    // }
  }

  passarDados() {
    let aux = [];

    if (this.historico.eliminacaoUrinariaEspontanea) {
      aux.push({ nome: "Espontanea" });
    }
    if (this.historico.eliminacaoUrinariaRetencao) {
      aux.push({ nome: "Retencao" });
    }
    if (this.historico.eliminacaoUrinariaIncontinencia) {
      aux.push({ nome: "Incontinencia" });
    }
    if (this.historico.eliminacaoUrinariaSVD) {
      aux.push({ nome: "SVD" });
    }
    if (this.historico.eliminacaoUrinariaDispositivoUrinario) {
      aux.push({ nome: "DispositivoUrinario" });
    }

    this.historico.eliminacaoUrinaria = aux;

    let aux2 = [];

    if (this.historico.caracteristicasDisuria) {
      aux2.push({ nome: "Disúria" });
    }
    if (this.historico.caracteristicasOliguria) {
      aux2.push({ nome: "Oligúria" });
    }

    if (this.historico.caracteristicasAnuria) {
      aux2.push({ nome: "Anúria" });
    }

    if (this.historico.caracteristicasPoliuria) {
      aux2.push({ nome: "Poliúria" });
    }

    if (this.historico.caracteristicasHematuria) {
      aux2.push({ nome: "Hematúria" });
    }
    aux2.push({ nome: this.historico.caracteristicasOutros });
    this.historico.caracteristicas = aux2;
  }

  cancel() {
    this.nav.popToRoot();
  }
  slide(passar) {
    this.passarDados();
    if (passar.deltaX > 0) {
      this.nav.pop();
    } else if (passar.deltaX < 0) {
      this.nav.push(AlimentacaoEEliminacaoIntestinalPage, { historico: this.historico });
    }
  }
  toggleGroup(id) {
    let grupo = document.getElementById("dadosHidratacao" + id);
    let icone = document.getElementById("iconeHidratacao" + id);
    this.toggleClose(id);
    if (grupo.style.display == "block") {
      grupo.style.display = "none";
      icone.innerHTML = '+';
    } else {
      grupo.style.display = "block";
      icone.innerHTML = '-';
    }
  }

  toggleClose(id) {
    var i = 0;
    let grupo = document.getElementById("dadosHidratacao" + i);
    let icone = document.getElementById("iconeHidratacao" + i);
    while (grupo != null) {
      if (i != id) {
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }
      i++;
      icone = document.getElementById("iconeHidratacao" + i);
      grupo = document.getElementById("dadosHidratacao" + i);
    }
  }

}
