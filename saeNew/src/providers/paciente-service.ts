import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { CadastroPaciente } from '../model/cadastroPaciente';


@Injectable()
export class PacienteService {

  private pacientes : Array<CadastroPaciente>;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

  }

  carregar(): Promise<any>{
    return this.http.get('http://localhost/sae/listaPacientes.php?id')
    .toPromise()
    .then(response => this.extractGetData(response))
    .catch(this.handleErrorMessage);
  }

  private extractGetData(res: Response) {
    return res.json();
  }

  private handleErrorMessage(error: any) {
    let retorno = { type: false, message: 'Erro de conexão!' };
    return retorno;
  }

  carregarCaracteristicas(){
      let url= "http://localhost/saeApi.php?caracteristicas";
      return this.http.get(url).map(res => res.json());
  }

  carregarDiagnosticos(ids){
      let url= "http://localhost/saeApi.php?diagnosticos=" + ids;
      return this.http.get(url).map(res => res.json());
  }

  getPacientes(){
    return new Promise(resolve => {
      let url= "http://localhost/getusers.php?pacientes";
      this.http.get(url)
      .map(res=>res.json())
      .subscribe(data=>{
        this.pacientes = data;
        resolve(this.pacientes);
      });
    });
  }

  addPaciente(){

  }

  getPlanos(id){
    let url= "http://localhost/saeApi.php?plano=" + id;
    return this.http.get(url).map(res => res.json());
  }

  deletePaciente(){

  }

  editPaciente(){

  }

}
