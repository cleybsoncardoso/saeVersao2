import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

  }


  logar(login: string, senha: string): Promise<any>{
    return this.http
      .post('http://localhost:8080/sae/login.php', JSON.stringify({login: login, senha: senha}), { headers: this.headers })
      .toPromise()
      .then(res => this.extractLoginData(res))
      .catch(this.handleErrorMessage);
  }

  private extractLoginData(res: Response) {
    let retorno = { type: false, message: '', data: {} };
    let data = res.json();
    if (data === 'login') {
      retorno.message = 'Usuário não cadastrado!';
    }else if(data === 'senha'){
      retorno.message = 'Senha incorreta!';
    } else if(data === false){
      retorno.message = 'Ops, Ocorreu um erro!';
    }else{
      retorno.type = true;
      retorno.message = 'Conectado com sucesso!';
      retorno.data = data;
    }
    return retorno;
  }

  private handleErrorMessage(error: any) {
    let retorno = { type: false, message: 'Ocorreu um erro!' };
    return retorno;
  }

}
