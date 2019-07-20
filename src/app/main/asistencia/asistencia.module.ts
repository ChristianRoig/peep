import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { AsistenciaComponent } from './asistencia.component';

@NgModule({
  declarations: [AsistenciaComponent],
  imports: [
    CommonModule,
    AsistenciaRoutingModule
  ]
})
export class AsistenciaModule { }
