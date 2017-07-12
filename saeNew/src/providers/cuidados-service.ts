import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class CuidadosService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

  }

  private extractGetData(res: Response) {
    return { type: true, value: res.json() };
  }

  private handleErrorMessage(error: any) {
    console.log(error);
    let retorno = { type: false, message: 'Erro de conexão!' };
    return retorno;
  }

  public addCuidados(cuidados, idpaciente): Promise<any> {
    return this.http.post('http://localhost:8080/sae/addCuidados.php', JSON.stringify({ cuidados: cuidados, idpaciente: idpaciente }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public getPlanos(idpaciente): Promise<any> {
    return this.http.get('http://localhost:8080/sae/planosCuidados.php?id=' + idpaciente)
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public aprazar(idpaciente, id): Promise<any> {
    return this.http.post('http://localhost:8080/sae/aprazarPlano.php', JSON.stringify({ idPaciente: idpaciente, idCuidado: id }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }
}
