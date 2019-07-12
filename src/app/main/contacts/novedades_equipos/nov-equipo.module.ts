import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';

import { ContactsService } from 'app/main/contacts/contacts.service';
import { ContacListModule } from '../contact-list/contact-list.module';
import { OrigenesService } from '../origenes.service';
import { NovEquiposComponent } from './nov-equipo.component';


const routes: Routes = [
    {
        path: 'novedades/equipos', redirectTo: 'novedades/equipos/',
    },
    {
        path     : 'novedades/equipos/:equipo',
        component: NovEquiposComponent,
        resolve  : {            
            contacts: ContactsService,
            listOrigenes: OrigenesService
        }
    }
];

@NgModule({
    declarations   : [
        NovEquiposComponent
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
        OrigenesService
    ]
})
export class NovEquiposModule
{
}
