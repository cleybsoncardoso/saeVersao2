import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Historico } from '../model/historico';


@Injectable()
export class HistoricoService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

  }

  public getHistoricoID(id): Promise<any> {
    return this.http.get('http://25.8.113.71:8000/app/pacientes/historico/' + id)
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

  public addHistorico(historico): Promise<any> {
    return this.http.post('http://25.8.113.71:8000/app/historico/cadastrar', JSON.stringify({ historico: historico }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public editHistorico(historico): Promise<any> {
    return this.http.post('http://25.8.113.71:8000/app/historico/editar', JSON.stringify({ historico: historico }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }


}
