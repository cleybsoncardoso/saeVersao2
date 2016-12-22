import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the EnfermeiroService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Enfermeira {

  public id: number;
  public nome: string;

  constructor() {
    this.id = 0;
    this.nome = "";
  }
}

@Injectable()
export class EnfermeiroService {

  private link: string = "http://localhost/saeApi.php";

  constructor(private http: Http, public storage: Storage) {

  }

  getDadosEnfermeira(inputLogin) {
    let url = this.link + "?login=" + inputLogin;
    return this.http.get(url).map(res => res.json());
  }

  public getEnfermeira() {
    return this.storage.get('data').then(dados => {
      return dados;
    });
  }

  public setEnfermeira(user: Enfermeira) {
    return this.storage.set('data', user);
  }

  cadastrarPaciente(type, paciente) {
    return this.http.post(this.link, JSON.stringify({ type, paciente }));
  }

}
