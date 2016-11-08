import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {CadastroPaciente} from '../../model/cadastroPaciente';
import { Storage } from '@ionic/storage';


export class Enfermeira{

  public id : number;
  public nome : string;

  constructor(){
    this.id = 0;
    this.nome = "";
  }
}


@Injectable()
export class PacienteService {
  private pacientes : Array<CadastroPaciente>;
  constructor(private http: Http, public storage : Storage) {

  }

  public getEnfermeira(){
    return this.storage.get('data').then(dados=>{
      return dados;
    });
  }

  public setEnfermeira(dados: Enfermeira){
    return this.storage.set('data', dados);
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
