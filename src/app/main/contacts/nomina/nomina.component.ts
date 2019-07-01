import { Component, OnDestroy, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { ContactsService } from 'app/main/contacts/contacts.service';
import { ContactsContactFormDialogComponent } from 'app/main/contacts/contact-form/contact-form.component';
import { ContactsComponent } from '../equipo/contacts.component';
import { DepartamentosService } from '../departamentos.service';

@Component({
    selector     : 'nomina',
    templateUrl  : './nomina.component.html',
    styleUrls    : ['../contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class NominaComponent extends ContactsComponent implements OnInit, OnDestroy 
{

    // columnas = ['avatar', 'docket', 'name', 'concepto', 'buttons'];
    columnas = ['avatar', 'docket', 'name', 'departament', 'buttons'];

    hasCheckNomina: boolean = false;

    componente: string = "nomina";

    titulo = "Nomina";

    /**
     * Constructor
     *
     * @param { ContactsService } _contactsService
     * @param { FuseSidebarService } _fuseSidebarService
     * @param { MatDialog } _matDialog
     */
    constructor(
        protected _contactsService: ContactsService,
        protected _fuseSidebarService: FuseSidebarService,
        protected _matDialog: MatDialog,
        protected _departamentosService: DepartamentosService
    )
    {
        super(_contactsService, _fuseSidebarService, _matDialog, _departamentosService);            
    }

   
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }

    updateCheck(c: boolean): void {
        this.hasCheckNomina = c;
        // console.log("cambio " + this.hasCheckNomina);

        const col = 'status';

        const pos = this.columnas.indexOf(col);
        if ( pos >= 0){
            this.columnas.splice(pos, 1);
        }else{
            const anteultimo = this.columnas.length - 1; 
            this.columnas.splice(anteultimo, 0, col);
        }
    }

    changeColumns(b: boolean): void {
        let pos = -1;
        
        if (b){            
            pos = this.columnas.indexOf('departament');

            if (pos !== -1){
                this.columnas[pos] = 'concepto';
            }

        }else{
            pos = this.columnas.indexOf('concepto');

            if (pos !== -1) {
                this.columnas[pos] = 'departament';
            }
        }
    }

    

}
