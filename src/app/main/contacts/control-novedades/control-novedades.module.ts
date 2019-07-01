import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatTableModule, MatToolbarModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';

import { ContactsService } from 'app/main/contacts/contacts.service';
import { ContacListModule } from '../contact-list/contact-list.module';
import { SidebarsMainModule } from '../sidebars/main/sidebars-main.module';
import { SelectedBarModule } from '../selected-bar/selected-bar.module';
import { ControlNovedadesComponent } from './control-novedades.component';

const routes: Routes = [
    {
        path     : 'control_novedades',
        component: ControlNovedadesComponent,
        resolve  : {
            contacts: ContactsService
        }
    }
];

@NgModule({
    declarations   : [
        ControlNovedadesComponent,       
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

        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule
        
        
        , ContacListModule
        , SidebarsMainModule
        , SelectedBarModule
 
   
    ],
    providers      : [
        ContactsService
    ]
})
export class ControlNovedadesModule
{
}
