import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsContactListComponent } from 'app/main/contacts/contact-list/contact-list.component';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
         MatInputModule, MatMenuModule, MatTableModule, MatRippleModule, MatToolbarModule } from '@angular/material';


@NgModule({
    declarations: [
        ContactsContactListComponent,
        
    ],
    imports: [
        CommonModule,

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

    ],
    providers: [

    ],
    exports: [
        ContactsContactListComponent,
        
    ],
    entryComponents: [
        
    ]
})
export class ContacListModule {
}
