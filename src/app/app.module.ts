import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Tela1HomeComponent } from './tela1-home/tela1-home.component';
import { SliderComponent } from './slider/slider.component';
import { CommonModule } from '@angular/common';
import { ObjetiveComponent } from './objetive/objetive.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAmbulance, faChartLine, faRoad, faBroadcastTower, faEnvelope, faPhoneAlt, faMapMarkerAlt, faSign, faPallet, faLightbulb, faBezierCurve, faVideo, faDotCircle, faSnowplow, faCar, faHammer} from '@fortawesome/free-solid-svg-icons';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { TelaServicosComponent } from './tela-servicos/tela-servicos.component';
import { TelaCapacidadeTecnicaComponent } from './tela-capacidade-tecnica/tela-capacidade-tecnica.component';
import { TelaHistoricoProfissionalComponent } from './tela-historico-profissional/tela-historico-profissional.component';
import { TelaAssessoramentoComponent } from './tela-assessoramento/tela-assessoramento.component';
import { ConstrucaoComponent } from './construcao/construcao.component';
import { GridServicosComponent } from './grid-servicos/grid-servicos.component';
import { NgxArcTextModule } from 'ngx-arc-text';
import { ModalServiceComponent } from './modal-service/modal-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { TelaCasesComponent } from './tela-cases/tela-cases.component';
import { TelaRodoviaComponent } from './tela-rodovia/tela-rodovia.component';
import { TelaFaleConoscoComponent } from './tela-fale-conosco/tela-fale-conosco.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Tela1HomeComponent,
    SliderComponent,
    ObjetiveComponent,
    ServicesComponent,
    FooterComponent,
    ParceirosComponent,
    TelaServicosComponent,
    TelaCapacidadeTecnicaComponent,
    TelaHistoricoProfissionalComponent,
    TelaAssessoramentoComponent,
    ConstrucaoComponent,
    GridServicosComponent,
    ModalServiceComponent,
    TelaCasesComponent,
    TelaRodoviaComponent,
    TelaFaleConoscoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    NgxArcTextModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents:[ModalServiceComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faAmbulance, faChartLine, faRoad, faBroadcastTower, faEnvelope, faPhoneAlt, faMapMarkerAlt, faSign, faPallet, faLightbulb, faBezierCurve, faVideo, faDotCircle, faSnowplow, faCar, faHammer);
  }
 }
