import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { ListContactosComponent } from './list-contactos/list-contactos.component';

import { FuseSharedModule } from '@fuse/shared.module';

import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, 
         MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    ContactosComponent,
    ListContactosComponent
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule,

    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatTableModule,
    MatToolbarModule,

    FuseSharedModule
  ]
})
export class ContactosModule { }
