import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  private link: string = "http://localhost/saeApi.php";
  constructor(public http: Http) {
    console.log('Hello UserService Provider');
  }

  login(type, username, password) {
    return this.http.post(this.link, JSON.stringify({ type, username, password }));
  }



  confirmarDados(type, id, pacienteNome, senha) {
    return this.http.post(this.link, JSON.stringify({ type, id, senha, pacienteNome }));
  }

}
