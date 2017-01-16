import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  private link: string = "http://localhost/saeApi/user.php";
  constructor(public http: Http) {
    console.log('Hello UserService Provider');
  }

  login(type, username, password) {
    return this.http.post(this.link, JSON.stringify({ type, username, password }), { headers: this.headers });
  }

  confirmarDados(type, id, pacienteid, senha) {
    return this.http.post(this.link, JSON.stringify({ type, id, senha, pacienteid }), { headers: this.headers });
  }

  alterarSenha(type:string, id:number, senhaAntiga:string, senhanova:string){
    return this.http.post(this.link, JSON.stringify({ type,id, senhaAntiga, senhanova }), { headers: this.headers });
  }

}
