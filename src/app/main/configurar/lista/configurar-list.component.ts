import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';

import { Router } from '@angular/router';

import { OrigenesService } from '../../contacts/origenes.service';
import { OrigenesFormDialogComponent } from '../ori-form/ori-form.component';



@Component({
    selector     : 'configurar-list',
    templateUrl  : './configurar-list.component.html',
    styleUrls    : ['./configurar-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ConfigurarListComponent implements OnInit, OnDestroy
{
    @ViewChild('dialogContent')
    dialogContent: TemplateRef<any>;

    colection: any;
    
    dataSource: FilesDataSource | null;

    @Input() displayedColumns;
    @Input() invocador: string;
 
    dialogRef: any;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     * @param {MatDialog} _matDialog
     */
    constructor(
        private _origenesService: OrigenesService,
        public _matDialog: MatDialog,
        private router: Router
    )
    {
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
        this.dataSource = new FilesDataSource(this._origenesService);

        this._origenesService.onOrigenesTablaChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(data => {               
                this.colection = data;                
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

    test(){
        console.log("funciona");
    }


    /**
        * Edit contact
        *
        * @param contact
        */
    editResponsables(origen): void {
        this.dialogRef = this._matDialog.open(OrigenesFormDialogComponent, {
            panelClass: 'editar-ori-dialog',
            data: {
                origen: origen,
                action: 'edit'
            }
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if (!response) {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch (actionType) {
                    /**
                     * Save
                     */
                    case 'save':

                        //         this._contactsService.updateContact(formData.getRawValue());

                        break;
                    /**
                     * Delete
                     */
                    case 'delete':

                        // this.deleteContact(contact);

                        break;
                }
            });
    }





}

export class FilesDataSource extends DataSource<any>
{
    /**
     * Constructor
     *
     * @param {OrigenesService} _origenesService
     */
    constructor(
        private _origenesService: OrigenesService
    )
    {
        super();
    }

    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]>
    {
        return this._origenesService.onOrigenesTablaChanged;
    }

    /**
     * Disconnect
     */
    disconnect(): void
    {
    }
}
