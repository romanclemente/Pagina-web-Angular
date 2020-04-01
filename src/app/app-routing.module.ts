import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralComponent } from './components/central/central.component';
import { DAM1Component } from './components/basal/dam1.component';
import { DAM2Component } from './components/dam2/dam2.component';
import { HomeComponent } from './components/home/home.component';
import { TecnologiahijoComponent } from './components/tecnologiahijo/tecnologiahijo.component';
import { VeganoComponent } from './components/vegano/vegano.component';
import { ElementoPersoComponent } from './components/elemento-perso/elemento-perso.component';
import { ComidapersoComponent } from './components/comidaperso/comidaperso.component';


const routes: Routes = [
  {path:'tecnologia/:parametro',component:CentralComponent},
  {path:'listafiltrada/:parametro',component:TecnologiahijoComponent},
  {path:'dam1/:parametro',component:DAM1Component},
  {path:'dam2/:parametro',component:DAM2Component},
  {path:'vegan/:parametro',component:VeganoComponent},
  {path:'home',component:HomeComponent},
  {path:'elemento/:parametro',component:ElementoPersoComponent},
  {path:'comida/:parametro',component:ComidapersoComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
