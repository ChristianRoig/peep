import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Contact } from 'app/main/contacts/contact.model';
import { Origen } from '../origenes/origen.model';
import { ContactsService } from 'app/main/contacts/contacts.service';


@Component({
    selector     : 'ori-form-dialog',
    templateUrl  : './ori-form.component.html',
    styleUrls    : ['./ori-form.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
    
    ],
}) 
export class OrigenesFormDialogComponent
{
    action: string;

    origen: Origen;
    
    OrigenForm: FormGroup;
    
    dialogTitle: string;

    candidatos: any;

    /**
     * Constructor
     *
     * @param {MatDialogRef<OrigenesFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     * @param {ContactsService} _contactsService
     */
    constructor(
        public matDialogRef: MatDialogRef<OrigenesFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder,
        protected _contactsService: ContactsService,
    )
    {

        this.dialogTitle = 'Seleccionar Responsable';

        // Set the defaults
        this.action = _data.action;

        if ( this.action === 'edit' )
        {
            this.origen = _data.origen;           
        }

        this.candidatos = this.getContactos();
        this.OrigenForm = this.createOrigenForm();
        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    createOrigenForm(): FormGroup
    {
        let r = new Contact({});
        let s = new Contact({});

        console.log(this.origen);
       
        let f: FormGroup = this._formBuilder.group({
            id: [this.origen.id],
            responsableR: '',
            responsableS: '',
        });

        if ((this.origen.responsableR !== '') && (this.origen.responsableR !== 'Ninguno')){                        
            r = this.getContacto(this.origen.legajoR);

            f.controls['responsableR'].setValue(r);
        }
        
        if ((this.origen.responsableS !== '') && (this.origen.responsableS !== 'Ninguno')) {
            s = this.getContacto(this.origen.legajoS);

            f.controls['responsableS'].setValue(s);
        }
        
        return f;
    }

    verForm(f): void {
        console.log(f);
    }

    onSubmit(): void {
        console.log(this.OrigenForm);
        this.matDialogRef.close();
    }

    getContactos(): any[] {
        return this._contactsService.getVanilaContact();
    }

    getContacto(legajo: string): Contact{        
        for (let index = 0; index < this.candidatos.length; index++) {
            const element: Contact = this.candidatos[index];
            if ((element.legajo)  === legajo){
            // if ((element.company + element.docket)  === legajo){
                return element;
            }
        }
        
        return null;
    }
}
