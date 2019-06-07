import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { PerfilService } from './perfil.service';
import { NovedadesService } from './novedades.service';

const routes: Routes = [
  {      
      path: 'perfil', redirectTo: 'perfil/',
      resolve  : {
        profile: PerfilService,
        nov: NovedadesService
      }
  },
  {
      path     : 'perfil/:id', component: PerfilComponent,
      resolve  : {
        profile: PerfilService,
        nov: NovedadesService
      }
  }
];

@NgModule({
  imports:   [RouterModule.forChild(routes)],
  exports:   [RouterModule],
  providers: [PerfilService, NovedadesService]
})
export class PerfilRoutingModule { }
