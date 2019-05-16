import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { ListContactosComponent } from './list-contactos/list-contactos.component';

import { FuseSharedModule } from '@fuse/shared.module';

@NgModule({
  declarations: [
    ContactosComponent,
    ListContactosComponent
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    
    FuseSharedModule
  ]
})
export class ContactosModule { }
