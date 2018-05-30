import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


export class Enfermeira {

  public id : number;
  public nome : string;
  public coren: string;
  public email: string;
  public first_name: string;
  public is_active: number;
  public is_admin: number;
  public last_name: number;
  public username: number;

  constructor(){
    this.id = 0;
    this.nome = "";
  }
}

@Injectable()
export class EnfermeiroService {
  constructor(public storage : Storage) {

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
