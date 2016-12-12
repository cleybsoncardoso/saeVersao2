import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';

import 'rxjs/add/operator/map';
import { CadastroPaciente } from '../../model/cadastroPaciente';


@Injectable()
export class PacienteService {
  private pacientes : Array<CadastroPaciente>;
  constructor(private http: Http) {

  }

  carregar(){
      let url= "http://192.168.0.5/saeApi.php?pacientes";
      return this.http.get(url).map(res => res.json());
  }

  carregarCaracteristicas(){
      let url= "http://192.168.0.5/saeApi.php?caracteristicas";
      return this.http.get(url).map(res => res.json());
  }

  carregarDiagnosticos(ids){
      let url= "http://192.168.0.5/saeApi.php?diagnosticos=" + ids;
      return this.http.get(url).map(res => res.json());
  }

  getPacientes(){
    return new Promise(resolve => {
      let url= "http://192.168.0.5/getusers.php?pacientes";
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
    let url= "http://192.168.0.5/saeApi.php?plano=" + id;
    return this.http.get(url).map(res => res.json());
  }

  deletePaciente(){

  }

  editPaciente(){

  }

}
