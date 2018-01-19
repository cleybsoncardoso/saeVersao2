import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { CadastroPaciente } from '../model/cadastroPaciente';


@Injectable()
export class PacienteService {

  private pacientes: Array<CadastroPaciente>;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

  }

  carregar(): Promise<any> {
    return this.http.get('http://192.168.15.37:8000/app/pacientes')
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

  carregarCaracteristicas() {
    let url = "http://localhost:8080/saeApi.php?caracteristicas";
    return this.http.get(url).map(res => res.json());
  }

  carregarDiagnosticos(ids) {
    let url = "http://localhost:8080/saeApi.php?diagnosticos=" + ids;
    return this.http.get(url).map(res => res.json());
  }

  getPacientes() {
    return new Promise(resolve => {
      let url = "http://localhost:8080/getusers.php?pacientes";
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.pacientes = data;
          resolve(this.pacientes);
        });
    });
  }

  addPaciente(paciente): Promise<any> {
    return this.http.post("http://192.168.15.37:8000/app/pacientes/cadastrar", JSON.stringify(paciente), { headers: this.headers })
      .toPromise().then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  getPlanos(id) {
    let url = "http://localhost:8080/saeApi.php?plano=" + id;
    return this.http.get(url).map(res => res.json());
  }

  deletePaciente() {

  }

  editPaciente(paciente): Promise<any> {
    return this.http.post("http://192.168.15.37:8000/app/pacientes/editar", JSON.stringify(paciente), { headers: this.headers })
      .toPromise().then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  getPacienteByRegistro(registro): Promise<any> {
    return this.http.get("http://192.168.15.37:8000/app/pacientes/" + registro)
      .toPromise().then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

}
