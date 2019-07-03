import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';

import { ContactsService } from 'app/main/contacts/contacts.service';
import { DepartamentosService } from 'app/main/contacts/departamentos.service';
import { DepartamentosComponent } from './departamentos.component';
import { ConfigurarListModule } from '../lista/configurar-list.module';



const routes: Routes = [
    {
        path     : 'departamentos',
        component: DepartamentosComponent,
        resolve  : {            
            listDepartamentos: DepartamentosService
        }
    }
];

@NgModule({
    declarations   : [
        DepartamentosComponent
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

        ConfigurarListModule

    ],
    providers      : [
        ContactsService,
        DepartamentosService
    ]
})
export class DepartamentosModule
{
}
