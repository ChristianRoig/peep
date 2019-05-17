import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { PerfilService } from './perfil.service';

const routes: Routes = [
  {
      path     : 'perfil',
      component: PerfilComponent,
      resolve  : {
          profile: PerfilService
      }
  }
];

@NgModule({
  imports:   [RouterModule.forChild(routes)],
  exports:   [RouterModule],
  providers: [PerfilService]
})
export class PerfilRoutingModule { }
