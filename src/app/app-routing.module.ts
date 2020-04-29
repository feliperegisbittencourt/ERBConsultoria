import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tela1HomeComponent } from './tela1-home/tela1-home.component';
import { TelaServicosComponent } from './tela-servicos/tela-servicos.component';
import { TelaHistoricoProfissionalComponent } from './tela-historico-profissional/tela-historico-profissional.component';
import { TelaCapacidadeTecnicaComponent } from './tela-capacidade-tecnica/tela-capacidade-tecnica.component';
import { TelaAssessoramentoComponent } from './tela-assessoramento/tela-assessoramento.component';


const routes: Routes = [
  {path: "", component: Tela1HomeComponent},
  {path: "tecnicalCapacity", component: TelaCapacidadeTecnicaComponent},
  {path: "professional", component: TelaHistoricoProfissionalComponent},
  {path: "service", component: TelaServicosComponent},
  {path: "advisory", component: TelaAssessoramentoComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
