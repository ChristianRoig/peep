import { Component, OnDestroy, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { ContactsService } from 'app/main/contacts/contacts.service';
// import { ContactsContactFormDialogComponent } from 'app/main/contacts/contact-form/contact-form.component';
import { OrigenesService } from 'app/main/contacts/origenes.service';
// import { OrigenesService } from '../origenes.service';



@Component({
    selector     : 'origenes',
    templateUrl: './origenes.component.html',
    styleUrls: ['../../contacts/contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class OrigenesComponent implements OnInit, OnDestroy
{
    dialogRef: any;

    searchInput: FormControl;

    columnas = ['cod', 'nombre', 'tipo', 'responsableR', 'responsableS', 'buttons'];
    
    listOrigenes = [];

    componente = 'origenes';

    titulo = 'Origenes';

    // Protected
    protected _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {MatDialog} _matDialog
     * @param {OrigenesService} _origenesService
     */
    constructor(
        protected _fuseSidebarService: FuseSidebarService,
        protected _matDialog: MatDialog,
        protected _origenesService: OrigenesService
    )
    {
        // Set the defaults
        this.searchInput = new FormControl('');

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._origenesService.onOrigenesTablaChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(data => {           
                this.listOrigenes = data;
            });



        // this.searchInput.valueChanges
        //     .pipe(
        //         takeUntil(this._unsubscribeAll),
        //         debounceTime(300),
        //         distinctUntilChanged()
        //     )
        //     .subscribe(searchText => {
        //         this._contactsService.onSearchTextChanged.next(searchText);
        //     });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


}
