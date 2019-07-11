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
import { OrigenesService } from '../origenes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector     : 'control-novedades',
    templateUrl  : './control-novedades.component.html',
    styleUrls    : ['../contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ControlNovedadesComponent implements OnInit, OnDestroy 
{

    // columnas = ['avatar', 'docket', 'name', 'concepto', 'buttons'];
    columnas = ['avatar', 'docket', 'name', 'departament', 'buttons'];

    hasCheckNomina = false;

    componente = 'ControlNovedades';

    titulo = "Control de Novedades";

    searchInput: FormControl;

    param: any;


    // Protected
    protected _unsubscribeAll: Subject<any>;

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
        private _activeRouter: ActivatedRoute,
        private _router: Router
     )
    {

        // Set the defaults
        this.searchInput = new FormControl('');

        // Set the private defaults
        this._unsubscribeAll = new Subject();

        
    }

    ngOnInit(): void {
        this._activeRouter.params.subscribe(params => {

            this.param = params.id;

            if (this.param == "" || this.param == null || this.param == " ") {
                this._router.navigate(['novedades/control/' + 'all']);
            }

        });    

        this._contactsService.onFilterChanged.next('all');

        // this._contactsService.onSelectedContactsChanged
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(selectedContacts => {
        //         this.hasSelectedContacts = selectedContacts.length > 0;
        //     });

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


    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
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

        const col = 'statusNovedades';

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
