import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatSelectModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatTableModule, MatToolbarModule
} from '@angular/material';


import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';

import { ContactsSelectedBarComponent } from 'app/main/contacts/selected-bar/selected-bar.component';
import { ContactsMainSidebarComponent } from 'app/main/contacts/sidebars/main/main.component';
import { GastoFormDialogComponent } from "./gastos-form/gastos-form.component";
import { GastosComponent } from './gastos.component';
import { GastosService } from './gastos.service';
import { GastoListComponent } from './gasto-list/gasto-list.component';
import { GroupByPipe } from '@fuse/pipes/groupBy.pipe';

const routes: Routes = [
    {
        path     : 'gastos',
        component: GastosComponent,
        resolve  : {
            contacts: GastosService
        }
    }
];

@NgModule({
    declarations   : [
        GastosComponent,
        GastoListComponent,
    //    ContactsSelectedBarComponent,
    //    ContactsMainSidebarComponent,
        GastoFormDialogComponent
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

        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule
    ],
    providers      : [
        GastosService,
        GroupByPipe

    ],
    entryComponents: [
        GastoFormDialogComponent
    ]
})
export class GastosModule
{
}
