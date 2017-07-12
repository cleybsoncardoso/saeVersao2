import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the SenhaService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SenhaService {
  
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private link:string = "http://localhost:8080/sae/alterarSenha.php";

  constructor(public http: Http) {
    console.log('Hello SenhaService Provider');
  }

  public alterarSenha(id:number, senha:string, novaSenha:string):Promise<boolean>{
    return this.http.post(this.link, JSON.stringify({id,senha,novaSenha}), { headers: this.headers })
    .toPromise()
    .then(response=>response.json())
    .catch(this.handleErrorMessage);
  }

   private handleErrorMessage(error: any) {
    let retorno = { type: false, message: 'Ocorreu um erro ao alterar a senha!' };
    return retorno;
  }

}
