import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { CentralComponent } from './components/central/central.component';
import { DAM2Component } from './components/dam2/dam2.component';
import { DAM1Component } from './components/basal/dam1.component';
import { TecnologiahijoComponent } from './components/tecnologiahijo/tecnologiahijo.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { HomeComponent } from './components/home/home.component';
import { VeganoComponent } from './components/vegano/vegano.component';
import { EntrenamientosComponent } from './components/entrenamientos/entrenamientos.component';
import { FormsModule } from '@angular/forms';
import { ElementoPersoComponent } from './components/elemento-perso/elemento-perso.component';
import { ComidapersoComponent } from './components/comidaperso/comidaperso.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    CentralComponent,
    DAM2Component,
    DAM1Component,
    TecnologiahijoComponent,
    CarruselComponent,
    HomeComponent,
    VeganoComponent,
    EntrenamientosComponent,
    ElementoPersoComponent,
    ComidapersoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
