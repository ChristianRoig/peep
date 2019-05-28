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

@Component({
    selector     : 'nomina',
    templateUrl  : './nomina.component.html',
    styleUrls    : ['../contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class NominaComponent extends ContactsComponent implements OnInit, OnDestroy 
{

    columnas = ['avatar', 'name', 'workplace', 'departament', 'status', 'docket', 'buttons'];

    hasCheckNomina: boolean = true;

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
        protected _matDialog: MatDialog
    )
    {
        super(_contactsService, _fuseSidebarService, _matDialog);            
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
        console.log("cambio" + this.hasCheckNomina);
    }

}
