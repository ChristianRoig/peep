import { Component, OnDestroy, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { ContactsService } from 'app/main/contacts/contacts.service';
import { ContactsContactFormDialogComponent } from 'app/main/contacts/contact-form/contact-form.component';
import { OrigenesService } from '../origenes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector     : 'novequipos',
    templateUrl  : './nov-equipo.component.html',
    styleUrls    : ['../contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
}) 
export class NovEquiposComponent implements OnInit, OnDestroy
{
    dialogRef: any;
    hasSelectedContacts: boolean;
    searchInput: FormControl;

    @Input() hasCheck = true;

    columnas = ['avatar', 'name', 'docket', 'departament', 'concepto', 'monto',  'buttons'];

    listOrigenes = [];

    seleccionado = 'Tesoreria Cajas';

    componente: string = "nov-equipos";

    titulo = "Novedades de Equipos";

    param: any;

    // Protected
    protected _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {MatDialog} _matDialog
     * @param {OrigenesService} _origenesService
     */
    constructor(
        protected _contactsService: ContactsService,
        protected _fuseSidebarService: FuseSidebarService,
        protected _matDialog: MatDialog,
        protected _origenesService: OrigenesService,
        private _activeRouter: ActivatedRoute,
        private _router: Router
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
        this._activeRouter.params.subscribe(params => {

            this.param = params.id;

            if (this.param == "" || this.param == null || this.param == " ") {
                this._router.navigate(['novedades/equipos/' + 'cajas']);
            }

        });    
        
        this._origenesService.onOrigenesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(data => {
                this.listOrigenes = data;
            });

        this._contactsService.onFilterChanged.next('novEquipo');

        this._contactsService.onSelectedContactsChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selectedContacts => {
                this.hasSelectedContacts = selectedContacts.length > 0;
            });

        this.searchInput.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(searchText => {
                this._contactsService.onSearchTextChanged.next(searchText);
            });
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

    /**
     * New contact
     */
    // newContact(): void
    // {
    //      this.dialogRef = this._matDialog.open(ContactsContactFormDialogComponent, {
    //         panelClass: 'contact-form-dialog',
    //         data      : {
    //             action: 'new'
    //         }
    //     });

    //     this.dialogRef.afterClosed()
    //         .subscribe((response: FormGroup) => {
    //             if ( !response )
    //             {
    //                 return;
    //             }

    //             // this._contactsService.updateContact(response.getRawValue());
    //         }); 
    // }
}
