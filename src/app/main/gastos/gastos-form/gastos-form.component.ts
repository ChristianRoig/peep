import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Gasto } from '../gasto.model';

@Component({
    selector     : 'gasto-form-dialog',
    templateUrl  : './gasto-form.component.html',
    styleUrls    : ['./gasto-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class GastoFormDialogComponent
{
    action: string;
    gasto: Gasto;
    gastoForm: FormGroup;
    dialogTitle: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<GastoFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<GastoFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.action = _data.action;

        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Gasto Contact';
            this.gasto = _data.gasto;
        }
        else
        {
            this.dialogTitle = 'New Gasto';
            this.gasto = new Gasto();
        }

        this.gastoForm = this.createContactForm();
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

            id : [this.gasto.id],
            propietario : [this.gasto.propietario],
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
            contacto_avatar : [this.gasto.contacto_avatar]
        });
    }
}
