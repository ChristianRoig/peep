import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsistenciaComponent } from './asistencia.component';

const routes: Routes = [
  {
      path     : 'asistencia',
      component: AsistenciaComponent,
      // resolve  : {
      //     profile: ContactosService
      // }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciaRoutingModule { }
