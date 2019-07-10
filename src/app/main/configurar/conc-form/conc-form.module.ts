import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
         MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule, MatSlideToggleModule,  } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { ConceptosFormDialogComponent } from './conc-form.component';




@NgModule({
    declarations: [
        ConceptosFormDialogComponent        
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
        ConceptosFormDialogComponent        
    ],
    entryComponents: [
        ConceptosFormDialogComponent
    ]
})
export class ConceptosFormModule {
}
