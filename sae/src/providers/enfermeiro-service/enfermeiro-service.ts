import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
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
export class EnfermeiroService {
  constructor(private http: Http, public storage : Storage) {

  }

  getDadosEnfermeira(inputLogin){
      let url= "http://localhost/saeApi.php?login="+ inputLogin;
      return this.http.get(url).map(res => res.json());
  }

  public getEnfermeira() {
    return this.storage.get('data').then(dados=>{
      return dados;
    });
  }

  public setEnfermeira(user: Enfermeira){
      return this.storage.set('data', user);
  }

}
