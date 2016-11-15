import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import { IdentificacaoPage } from '../pages/identificacao/identificacao';
import { PacientesPage } from '../pages/pacientes/pacientes';
import { AlterarSenhaPage } from '../pages/alterar-senha/alterar-senha';
import { Entrevista } from '../pages/entrevista/entrevista';
import { AvaliacaoNeurologica } from '../pages/avaliacao-neurologica/avaliacao-neurologica';
import { PacienteService } from '../providers/paciente-service/paciente-service';
import { EnfermeiroService } from '../providers/enfermeiro-service/enfermeiro-service';
import { Oxigenacao } from '../pages/oxigenacao/oxigenacao';
import { AvaliacaoCardiovascular } from '../pages/avaliacao-cardiovascular/avaliacao-cardiovascular';
import { HidratacaoEEliminacaoVesical } from '../pages/hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';
import { AlimentacaoEEliminacaoIntestinal } from '../pages/alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal';
import { AspectosCutaneoMucosa } from '../pages/aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa';
import { SegurancaFisica } from '../pages/seguranca-fisica/seguranca-fisica';
import { Observacoes } from '../pages/observacoes/observacoes';
import { Save } from '../pages/save/save';
import { GerarSaePage } from '../pages/gerar-sae/gerar-sae';
import { DiagnosticosPage } from '../pages/diagnosticos/diagnosticos';
import { AprazamentoPage } from '../pages/aprazamento/aprazamento';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    IdentificacaoPage,
    Entrevista,
    AvaliacaoNeurologica,
    Oxigenacao,
    AvaliacaoCardiovascular,
    HidratacaoEEliminacaoVesical,
    AlimentacaoEEliminacaoIntestinal,
    AspectosCutaneoMucosa,
    SegurancaFisica,
    Observacoes,
    Save,
    GerarSaePage,
    DiagnosticosPage,
    AprazamentoPage

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
    Entrevista,
    AvaliacaoNeurologica,
    Oxigenacao,
    AvaliacaoCardiovascular,
    HidratacaoEEliminacaoVesical,
    AlimentacaoEEliminacaoIntestinal,
    AspectosCutaneoMucosa,
    SegurancaFisica,
    Observacoes,
    Save,
    GerarSaePage,
    DiagnosticosPage,
    AprazamentoPage

  ],
  providers: [
    PacienteService,
    EnfermeiroService,
    Storage
  ]
})
export class AppModule {}
