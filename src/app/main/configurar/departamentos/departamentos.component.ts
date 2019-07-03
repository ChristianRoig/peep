import { Component, OnDestroy, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { ContactsService } from 'app/main/contacts/contacts.service';
// import { ContactsContactFormDialogComponent } from 'app/main/contacts/contact-form/contact-form.component';
import { DepartamentosService } from 'app/main/contacts/departamentos.service';
// import { DepartamentosService } from '../departamentos.service';



@Component({
    selector     : 'departamentos',
    templateUrl: './departamentos.component.html',
    styleUrls: ['../../contacts/contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class DepartamentosComponent implements OnInit, OnDestroy
{
    dialogRef: any;

    searchInput: FormControl;

    columnas = ['departamento', 'responsable', 'tipo', 'buttons'];

    listDepartamentos = [];

    componente = 'departamentos';

    titulo = 'Departamentos';

    // Protected
    protected _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {MatDialog} _matDialog
     * @param {DepartamentosService} _departamentosService
     */
    constructor(
        protected _fuseSidebarService: FuseSidebarService,
        protected _matDialog: MatDialog,
        protected _departamentosService: DepartamentosService
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
        this._departamentosService.onDepartamentosTablaChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(data => {           
                this.listDepartamentos = data;
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
