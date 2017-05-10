import { NgModule, ErrorHandler} from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import { IdentificacaoPage } from '../pages/identificacao/identificacao';
import { PacientesPage } from '../pages/pacientes/pacientes';
import { AlterarSenhaPage } from '../pages/alterar-senha/alterar-senha';
import { EntrevistaPage } from '../pages/entrevista/entrevista';
import { AvaliacaoNeurologicaPage } from '../pages/avaliacao-neurologica/avaliacao-neurologica';
import { PacienteService } from '../providers/paciente-service';
import { EnfermeiroService } from '../providers/enfermeiro-service';
import { HistoricoService } from '../providers/historico-service';
import { SenhaService } from '../providers/senha-service';
import { LoginService } from '../providers/login-service';
import { OxigenacaoPage } from '../pages/oxigenacao/oxigenacao';
import { AvaliacaoCardiovascularPage } from '../pages/avaliacao-cardiovascular/avaliacao-cardiovascular';
import { HidratacaoEEliminacaoVesicalPage } from '../pages/hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';
import { AlimentacaoEEliminacaoIntestinalPage } from '../pages/alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal';
import { AspectosCutaneoMucosaPage } from '../pages/aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa';
import { SegurancaFisicaPage } from '../pages/seguranca-fisica/seguranca-fisica';
import { ObservacoesPage } from '../pages/observacoes/observacoes';
import { SavePage } from '../pages/save/save';
import { GerarSaePage } from '../pages/gerar-sae/gerar-sae';
import { DiagnosticosPage } from '../pages/diagnosticos/diagnosticos';
import { AprazamentoPage } from '../pages/aprazamento/aprazamento';
import { PlanoDeCuidadosPage } from "../pages/plano-de-cuidados/plano-de-cuidados"

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    IdentificacaoPage,
    EntrevistaPage,
    AvaliacaoNeurologicaPage,
    OxigenacaoPage,
    AvaliacaoCardiovascularPage,
    HidratacaoEEliminacaoVesicalPage,
    AlimentacaoEEliminacaoIntestinalPage,
    AspectosCutaneoMucosaPage,
    SegurancaFisicaPage,
    ObservacoesPage,
    SavePage,
    GerarSaePage,
    DiagnosticosPage,
    AprazamentoPage,
    PlanoDeCuidadosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    IdentificacaoPage,
    EntrevistaPage,
    AvaliacaoNeurologicaPage,
    OxigenacaoPage,
    AvaliacaoCardiovascularPage,
    HidratacaoEEliminacaoVesicalPage,
    AlimentacaoEEliminacaoIntestinalPage,
    AspectosCutaneoMucosaPage,
    SegurancaFisicaPage,
    ObservacoesPage,
    SavePage,
    GerarSaePage,
    DiagnosticosPage,
    AprazamentoPage,
    PlanoDeCuidadosPage
  ],
  providers: [EnfermeiroService, HistoricoService, SenhaService, PacienteService, LoginService, Storage, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
