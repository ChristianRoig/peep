import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef,  } from '@angular/material';

import { Gasto } from '../gasto.model';
import { Contact } from 'app/main/contacts/contact.model';
import { ContactsService } from 'app/main/contacts/contacts.service';

export interface Estado {
    value: string;
    viewValue: string;
}

@Component({
    selector     : 'gasto-form-dialog',
    templateUrl  : './gasto-form.component.html',
    styleUrls    : ['./gasto-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class GastoFormDialogComponent
{
    contacto: Contact;
    action: string;
    gasto: Gasto;
    gastoForm: FormGroup;
    dialogTitle: string;
    estados: Estado[] = [
        {value: 'Pagado', viewValue: 'Pagado'},
        {value: 'Pendiente', viewValue: 'Pendiente'},
        {value: 'A Completar', viewValue: 'A Completar'}
      ];
    copy: boolean;
    gastos_contact : any[];
    selected_gasto: Gasto;
    contactos: Contact[];

    /**
     * Constructor
     *
     * @param {MatDialogRef<GastoFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private contactsService : ContactsService, 
        public matDialogRef: MatDialogRef<GastoFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.action = _data.action;
        this.contactos = contactsService.getContactos(); 
        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Editar Gasto';
            this.gasto = _data.gasto;
            this.contacto = _data.contact;
            this.gastoForm = this.createContactForm();
            this.getLastestFacturas(); 
        }
        else
        {
            this.dialogTitle = 'Nuevo Gasto';
            this.gasto = new Gasto({});
            this.contacto = _data.contact
            this.gastoForm = this.createContactForm();
            if(this.contacto) { // desde proveedor
                this.getLastestFacturas(); 
            }
/*             else { //desde el boton new gasto
                this.contactos = contactsService.getContactos(); 
            } */
        }
    }



    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    createContactForm(): FormGroup
    {
        return this._formBuilder.group({

            contacto_corto : [this.gasto.contacto_corto],
            descripcion : [this.gasto.descripcion], 
            comprobante : [this.gasto.nombre],
            nro : [this.gasto.nro],
            fecha : [this.gasto.fecha],
            pago_estado : [this.gasto.pago_estado], 
            importe : [this.gasto.importe],
            id: [this.gasto.id],

            proveedor: [this.contacto]

   /*          propietario : [this.gasto.propietario],
            modulo : [this.gasto.modulo],
            categoria : [this.gasto.categoria],
            rubro : [this.gasto.rubro],
            nombre : [this.gasto.nombre],
            nro : [this.gasto.nro],
            fecha : [this.gasto.nro],
            contacto_id : [this.gasto.contacto_id],
            contacto_corto : [this.gasto.contacto_corto],
            descripcion : [this.gasto.descripcion], 
            pago_estado : [this.gasto.pago_estado], 
            importe : [this.gasto.importe],
            notas : [this.gasto.nro],
            file_link : [this.gasto.categoria],
            contacto_avatar : [this.gasto.contacto_avatar] */
        });
    }

    selectionChange() : void {
        Object.assign(this.gasto, this.selected_gasto);
        this.gastoForm = this.createContactForm();
    }

     getLastestFacturas() : void {
        this.gastoForm.controls['contacto_corto'].setValue(this.contacto.nombre_corto);
        this.contactsService.getGastosByName(this.contacto.nombre_corto).then((value) => {
            this.gastos_contact = value;
        });
        this.gastoForm.controls['proveedor'].setValue(this.contacto);

    }

    selectionContactoChange(event) : void {   
        this.contacto =  event.value;
        this.getLastestFacturas(); 

    }
}
