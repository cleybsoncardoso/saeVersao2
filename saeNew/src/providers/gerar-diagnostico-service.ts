import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GerarDiagnosticoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GerarDiagnosticoService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

  constructor(public http: Http) {
    console.log('Hello GerarDiagnosticoService Provider');
  }

  public getCaracteristicas(id): Promise<any> {
    return this.http.get('http://192.168.15.37:8000/app/caracteristicas/'+id)
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public getDiagnisticos(ids, idPaciente): Promise<any> {
    return this.http
      .post('http://192.168.15.37:8000/app/planodecuidados/diagnosticos', JSON.stringify({ caracteristicas: ids, idPaciente: idPaciente }), { headers: this.headers })
      .toPromise()
      .then(res => this.extractGetData(res))
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
