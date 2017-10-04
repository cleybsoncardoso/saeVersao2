import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

  constructor(private http: Http) {

  }


  logar(login: string, senha: string): Promise<any> {
    return this.http
      .post('http://192.168.15.12:8000/app/login', JSON.stringify({ username: login, password: senha }), { headers: this.headers })
      .toPromise()
      .then(res => this.extractLoginData(res))
      .catch(this.handleErrorMessage);
  }

  private extractLoginData(res) {
    let retorno = { type: false, message: '', data: {} };
    let data = res.json();
    if (!data) {
      retorno.message = 'Usuário não cadastrado!';
    } else {
      retorno.message = 'Logando ...';
      retorno.data = data;
      retorno.type = true;
    }
    return retorno;
  }

  private handleErrorMessage(error: any) {
    let retorno = { type: false, message: 'Ocorreu um erro!' };
    return retorno;
  }

}
