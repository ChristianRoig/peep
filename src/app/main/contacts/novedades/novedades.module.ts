import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';

import { NovedadesComponent } from 'app/main/contacts/novedades/novedades.component';
import { ContactsService } from 'app/main/contacts/contacts.service';
import { ContacListModule } from '../contact-list/contact-list.module';
import { ConceptosService } from '../conceptos.service';


const routes: Routes = [
    {
        path: 'novedades/sectores',
        component: NovedadesComponent,
        resolve  : {
            contacts: ContactsService,
            conceptos: ConceptosService
        }
    }
];

@NgModule({
    declarations   : [
        NovedadesComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

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
        MatSelectModule,
        MatOptionModule,


        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,

        ContacListModule

    ],
    providers      : [
        ContactsService,
        ConceptosService
    ]
})
export class NovedadesModule
{
}
