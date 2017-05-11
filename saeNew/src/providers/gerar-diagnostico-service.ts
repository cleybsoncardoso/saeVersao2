import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GerarDiagnosticoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GerarDiagnosticoService {

  constructor(public http: Http) {
    console.log('Hello GerarDiagnosticoService Provider');
  }

   public getCaracteristicas(): Promise<any> {
    return this.http.get('http://localhost/sae/getCaracteristicas.php?id=')
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public getDiagnisticos(ids): Promise<any> {
    return this.http.get('http://localhost/sae/getCaracteristicas.php?id='+ ids)
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  private extractGetData(res: Response) {
    return { type: true, value: res.json() };
  }

  private handleErrorMessage(error: any) {
    let retorno = { type: false, message: 'Erro de conexão!' };
    return retorno;
  }

}
