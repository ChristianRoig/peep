import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
         MatInputModule, MatMenuModule, MatTableModule, MatRippleModule, MatToolbarModule } from '@angular/material';
import { ConfigurarListComponent } from './configurar-list.component';


@NgModule({
    declarations: [
        ConfigurarListComponent       
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
        ConfigurarListComponent       
    ],
    entryComponents: [
        
    ]
})
export class ConfigurarListModule {
}
