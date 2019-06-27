import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
    selector     : 'novedad-form-dialog',
    templateUrl  : './novedad-form.component.html',
    styleUrls    : ['./novedad-form.component.scss'],
    encapsulation: ViewEncapsulation.None,
   
}) 
export class NovedadesFormDialogComponent
{   
    // action: string;
    NovedadForm: FormGroup;
    dialogTitle: string;
    // contact: Contact;

    conceptos = [
        'Mailing',
        'Diferencia de Caja',
        'Remuneracion Variable',
        'Premio de Ventas',
        'Incentivo Entrega En Mano',
        'Premios Fava Salud',
        'Comisiones Gestion Domiciliaria',
        'Liquidación Equipos de Venta',
        'Corporativo',
        'Premio de Cobranzas'
    ];

    listaContactos = [];

    /**
     * Constructor
     *
     * @param {MatDialogRef<NovedadesFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<NovedadesFormDialogComponent>,
        // @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder,
        protected _contactsService: ContactsService,
    )
    {
        // Set the defaults
        // this.action = _data.action;

        this.dialogTitle = 'Novedad';

       

        // this.contact = _data.contact;

        // if ( this.action === 'edit' )
        // {
        //     this.dialogTitle = 'Editar Novedad';
        //     this.contact = _data.contact;
        // }
        // else
        // {
        //     this.dialogTitle = 'Nueva Novedad';
        //     this.contact = _data.contact || new Contact({});
            
        // }

        this.NovedadForm = this.createNovedadForm();
    }


    ngOnInit(): void {
        
        this.listaContactos = this.getContactos();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    createNovedadForm(): FormGroup
    {
        return this._formBuilder.group({
            persona: '',
            concepto : '',
            monto: ''
        });
    }

    getContactos(): any[]{
        return this._contactsService.getVanilaContact();         
    }
   

    onSubmit(): void {
        console.log(this.NovedadForm);
        this.matDialogRef.close();
    }
}
