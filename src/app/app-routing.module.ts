import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tela1HomeComponent } from './tela1-home/tela1-home.component';
import { TelaServicosComponent } from './tela-servicos/tela-servicos.component';
import { TelaHistoricoProfissionalComponent } from './tela-historico-profissional/tela-historico-profissional.component';
import { TelaCapacidadeTecnicaComponent } from './tela-capacidade-tecnica/tela-capacidade-tecnica.component';
import { TelaAssessoramentoComponent } from './tela-assessoramento/tela-assessoramento.component';
import { TelaCasesComponent } from './tela-cases/tela-cases.component';
import { TelaRodoviaComponent } from './tela-rodovia/tela-rodovia.component';
import { TelaFaleConoscoComponent } from './tela-fale-conosco/tela-fale-conosco.component';


const routes: Routes = [
  {path: "", component: Tela1HomeComponent},
  {path: "about", component: TelaCapacidadeTecnicaComponent},
  {path: "professional", component: TelaHistoricoProfissionalComponent},
  {path: "service", component: TelaServicosComponent},
  {path: "advisory", component: TelaAssessoramentoComponent},
  {path: "cases", component: TelaCasesComponent},
  {path: "rodovia", component: TelaRodoviaComponent},
  {path: "contact", component: TelaFaleConoscoComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
