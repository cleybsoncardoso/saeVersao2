import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {CadastroPaciente} from '../../model/cadastroPaciente';

export class Enfermeira{

  public id : number;
  public nome : string;

  constructor(identificador:number, name:string){
    this.id = identificador;
    this.nome = name;
  }
}


@Injectable()
export class PacienteService {
  private pacientes : Array<CadastroPaciente>;
  constructor(private http: Http) {

  }

  logar(login:string, senha:string){
    let type = "login";
    let data = JSON.stringify({type, login, senha});
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method: "post" });

    let link = "http://localhost/saeApi.php";

    return this.http.post(link, data, options)
          .map(res => res.json());
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
