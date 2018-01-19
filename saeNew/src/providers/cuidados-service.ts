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

  public addCuidados(cuidados, idpaciente, idEnfermeira): Promise<any> {
    return this.http.post('http://192.168.15.37:8000/app/planodecuidados/aprazar', JSON.stringify({ cuidados: cuidados, idpaciente: idpaciente, idEnfermeira }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public getPlanos(idpaciente): Promise<any> {
    return this.http.get('http://192.168.15.37:8000/app/planodecuidados/' + idpaciente)
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public isAtrasado(id): Promise<any> {
    return this.http.post('http://192.168.15.37:8000/app/planodecuidados/procedimento', JSON.stringify({ idCuidado: id }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public justificar(idCuidado, justificativa, idPaciente, idEnfermeira): Promise<any> {
    return this.http.post('http://192.168.15.37:8000/app/planodecuidados/procedimento', JSON.stringify({ idCuidado: idCuidado, justificativa: justificativa, paciente: idPaciente, enfermeira: idEnfermeira }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }
}
