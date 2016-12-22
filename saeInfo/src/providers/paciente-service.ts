import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PacienteService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PacienteService {

  constructor(public http: Http) {
    console.log('Hello PacienteService Provider');
  }

//pega lista de pacientes
  carregar() {
    let url = "http://localhost/saeApi.php?pacientes";
    return this.http.get(url).map(res => res.json());
  }

}
