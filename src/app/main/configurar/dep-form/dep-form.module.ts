import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
         MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule, MatSlideToggleModule,  } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { DepartamentosFormDialogComponent } from './dep-form.component';



@NgModule({
    declarations: [
        DepartamentosFormDialogComponent        
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
        DepartamentosFormDialogComponent        
    ],
    entryComponents: [
        DepartamentosFormDialogComponent
    ]
})
export class DepartamentosFormModule {
}
