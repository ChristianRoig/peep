import { NgModule } from '@angular/core';

import { ContactsContactFormDialogComponent } from 'app/main/contacts/contact-form/contact-form.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';



@NgModule({
    declarations: [
        ContactsContactFormDialogComponent
    ],
    imports: [
        CommonModule,

        MatToolbarModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,


        FuseSharedModule,
    ],
    providers: [

    ],
    exports: [
        ContactsContactFormDialogComponent
    ],
    entryComponents: [

        ContactsContactFormDialogComponent
    ]
})
export class ContacFormModule {
}
