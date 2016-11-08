import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {CadastroPaciente} from '../../model/cadastroPaciente';

/*
  Generated class for the MyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PacienteService {
  private pacientes : Array<CadastroPaciente>;
  constructor(private http: Http) {

  }

  getUser(idUser){
    let url= "http://localhost/saeApi.php?id="+ idUser;
    console.log(url);
    return this.http.get(url).map(res => res.json());
  }

  getIdEnfermeiro(inputLogin){
      let url= "http://localhost/saeApi.php?login="+ inputLogin;
      return this.http.get(url).map(res => res.json());
  }

  carregar(){
      let url= "http://localhost/saeApi.php?pacientes";
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

  deletePaciente(){

  }

  editPaciente(){

  }

}
