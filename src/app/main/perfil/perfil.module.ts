import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';

import { MatButtonModule, MatDividerModule, MatIconModule, MatTabsModule, MatHeaderCellDef, MatHeaderRowDef, MatTableModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { PerfilInfoComponent } from './tabs/perfil-info/perfil-info.component';
import { PerfilInfoLegComponent } from './tabs/perfil-info-leg/perfil-info.component';
import { PerfilInfoSegComponent } from './tabs/perfil-info-seg/perfil-info.component';


import { TranslateModule } from '@ngx-translate/core';
import { PerfilInfoNovComponent } from './tabs/perfil-info-nov/perfil-info.component';

@NgModule({
  declarations: [
    PerfilComponent,
    PerfilInfoComponent,
    PerfilInfoLegComponent,
    PerfilInfoSegComponent,
    PerfilInfoNovComponent,   
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule, 
    
    FuseSharedModule,
    TranslateModule    
  ]
})
export class PerfilModule { }
