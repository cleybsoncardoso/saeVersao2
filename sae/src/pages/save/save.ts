import {NavController, NavParams,LoadingController,AlertController} from 'ionic-angular';
import { Component } from '@angular/core';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {GerarSaePage} from '../gerar-sae/gerar-sae';





/*
  Generated class for the Save page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-save',
  templateUrl: 'save.html'
})
export class Save {

  private paciente: CadastroPaciente;

  constructor(private params: NavParams,private alert :AlertController, private nav: NavController, private http : Http,private loading : LoadingController) {
    this.paciente = params.get("parametro");
    this.nav = nav;
  }
  cancel(){
    this.nav.popToRoot();
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.pop();
    }
  }

  salvar(){
    let type = "cadastroPaciente";
    let nome = this.paciente.nome;
    let idade = this.paciente.idade;
    let sexo = this.paciente.sexo;
    let estado_Civil = this.paciente.estadoCivil;
    let religiao = this.paciente.religiao;
    let profissao = this.paciente.profissao;
    let naturalidade = this.paciente.naturalidade;
    let procedencia = this.paciente.procedencia;
    let dataInternacao = this.paciente.dataInternacao;
    let registro = this.paciente.registro;
    let setorDeProcedencia = this.paciente.setorDeProcedencia;
    let leito = this.paciente.leito;
    let diagnosticoMedico = this.paciente.diagnosticoMedico;
    let internacaoAnterior = this.paciente.internacaoAnterior;
    let alergias = this.paciente.alergias.toString();
    let vacinas = this.paciente.vacinas.toString();
    let data = JSON.stringify({type, nome, idade, sexo, estado_Civil, religiao,
      profissao, naturalidade, procedencia, dataInternacao, registro, setorDeProcedencia,
      leito, diagnosticoMedico, internacaoAnterior, alergias, vacinas});
    let link = "http://localhost/saeApi.php";
    this.http.post(link, data)
        .subscribe(data=>{
            let loader = this.loading.create({
                content: "Checking ! Please wait...",
                duration: 1000
            });
            loader.present();
            let alert = this.alert.create({
                title: 'Sucesso',
                subTitle: 'Paciente cadastrado !',
                buttons: ['OK']
            });
            alert.present();
            this.nav.popToRoot();
        },error => {
            let alert = this.alert.create({
                title: 'Warning',
                subTitle: 'Wrong Username or Password! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });

  }

  salvar2(){
    this.salvar();
    this.nav.push(GerarSaePage,{paciente: this.paciente});
  }

}
