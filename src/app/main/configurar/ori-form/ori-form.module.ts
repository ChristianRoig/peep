import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
         MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule, MatSlideToggleModule,  } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { OrigenesFormDialogComponent } from './ori-form.component';



@NgModule({
    declarations: [
        OrigenesFormDialogComponent        
    ],
    imports: [
        CommonModule,

        MatToolbarModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatSlideToggleModule,

        FuseSharedModule,
    ],
    providers: [

    ],
    exports: [
        OrigenesFormDialogComponent        
    ],
    entryComponents: [
        OrigenesFormDialogComponent
    ]
})
export class OrigenesFormModule {
}
