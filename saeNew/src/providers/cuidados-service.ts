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
    return this.http.post('http://995147b5.ngrok.io/app/planodecuidados/aprazar', JSON.stringify({ cuidados: cuidados, idpaciente: idpaciente, idEnfermeira }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public getPlanos(idpaciente, idEnfermeira): Promise<any> {
    return this.http.get('http://995147b5.ngrok.io/app/planodecuidados/' + idpaciente + "/" + idEnfermeira)
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public evolucao(plano_id, paciente_id, evolucao){
    return this.http.post(`http://995147b5.ngrok.io/app/planodecuidados/${plano_id}/${paciente_id}/evolucao`, JSON.stringify({ evolucao }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public isAtrasado(id): Promise<any> {
    return this.http.post('http://995147b5.ngrok.io/app/planodecuidados/procedimento', JSON.stringify({ idCuidado: id }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  public justificar(idCuidado, justificativa, idPaciente, idEnfermeira): Promise<any> {
    return this.http.post('http://995147b5.ngrok.io/app/planodecuidados/procedimento', JSON.stringify({ idCuidado: idCuidado, justificativa: justificativa, paciente: idPaciente, enfermeira: idEnfermeira }), { headers: this.headers })
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }
}
