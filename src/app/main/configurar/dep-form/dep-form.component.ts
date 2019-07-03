import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Contact } from 'app/main/contacts/contact.model';
import { Departamento } from '../departamentos/departamento.model';
import { ContactsService } from 'app/main/contacts/contacts.service';


@Component({
    selector     : 'dep-form-dialog',
    templateUrl  : './dep-form.component.html',
    styleUrls    : ['./dep-form.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
    
    ],
}) 
export class DepartamentosFormDialogComponent
{
    action: string;

    departamento: Departamento;
    
    DepartamentoForm: FormGroup;
    
    dialogTitle: string;

    candidatos: any;

    /**
     * Constructor
     *
     * @param {MatDialogRef<DepartamentosFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     * @param {ContactsService} _contactsService
     */
    constructor(
        public matDialogRef: MatDialogRef<DepartamentosFormDialogComponent>,
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
            this.departamento = _data.departamento;           
        }

        this.candidatos = this.getContactos();
        this.DepartamentoForm = this.createDepartamentoForm();
        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    createDepartamentoForm(): FormGroup
    {
        const c: Contact = this.getContacto(this.departamento.responsable);

        let f: FormGroup =  this._formBuilder.group({
                                id: [this.departamento.id],
                                responsable: '',
                            });
       
        if (c) {
            f.controls['responsable'].setValue(c);
        }
        
        return f;
    }

    verForm(f): void {
        console.log(f);
    }

    onSubmit(): void {
        console.log(this.DepartamentoForm);
        this.matDialogRef.close();
    }

    getContactos(): any[] {
        return this._contactsService.getVanilaContact();
    }

    getContacto(legajo: string): Contact{        
        for (let index = 0; index < this.candidatos.length; index++) {
            const element: Contact = this.candidatos[index];
            if ((element.company + element.docket)  === legajo){
                return element;
            }
        }
        
        return null;
    }
}
