import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Contact } from 'app/main/contacts/contact.model';

@Component({
    selector     : 'contacts-contact-form-dialog',
    templateUrl  : './contact-form.component.html',
    styleUrls    : ['./contact-form.component.scss'],
    encapsulation: ViewEncapsulation.None
}) 
export class ContactsContactFormDialogComponent
{
    action: string;
    contact: Contact;
    contactForm: FormGroup;
    dialogTitle: string;

    hideshow: boolean = false;
 
    unidad: string = '';

    Conceptos = [
        {
            value: 'FALTA INJUSTIFICADA',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'FALTA INJUSTIFICADA'
        },
        { 
            value: 'FERIADO TRABAJADO(HORAS)',
            tipo: 'cuantitativo',
            unidad: 'horas',
            viewValue: 'FERIADO TRABAJADO(HORAS)'
        },
        { 
            value: 'HORAS EXTRAS 100 %',
            tipo: 'cuantitativo',
            unidad: 'horas',
            viewValue: 'HORAS EXTRAS 100 %'
        },
        { 
            value: 'HORAS EXTRAS 50 %',
            tipo: 'cuantitativo',
            unidad: 'horas',
            viewValue: 'HORAS EXTRAS 50 %'
        },
        { 
            value: 'LIC.POR ENFERMEDAD',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'LIC.POR ENFERMEDAD'
        },
        { 
            value: 'LIC.POR EXCEDENCIA',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'LIC.POR EXCEDENCIA'
        },
        { 
            value: 'LIC.POR FLIAR ENFERMO',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'LIC.POR FLIAR ENFERMO'
        },
        {   
            value: 'LIC.POR MATERNIDAD',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'LIC.POR MATERNIDAD'
        },
        { 
            value: 'LIC.POR MATRIMONIO',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'LIC.POR MATRIMONIO'
        },
        { 
            value: 'VACACIONES(DÍAS)',
            tipo: 'cuantitativo',
            unidad: 'dias',
            viewValue: 'VACACIONES(DÍAS)'
        },

        {   
            value: 'ADICIONAL CAJ.PROP. - NO HABITUAL',
            tipo: 'cualitativo', 
            viewValue: 'ADICIONAL CAJ.PROP. - NO HABITUAL'
        },
        { 
            value: 'ADICIONAL CAJERO - NO HABITUAL',
            tipo: 'cualitativo',
            viewValue: 'ADICIONAL CAJERO - NO HABITUAL'
        },
        { 
            value: 'ALTA CUOTA SINDICAL', 
            tipo: 'cualitativo', 
            viewValue: 'ALTA CUOTA SINDICAL'
        },
        { 
            value: 'ALTA FLIAR.ADICIONAL SINDICATO', 
            tipo: 'cualitativo', 
            viewValue: 'ALTA FLIAR.ADICIONAL SINDICATO'
        },
        { 
            value: 'BAJA CUOTA SINDICAL', 
            tipo: 'cualitativo', 
            viewValue: 'BAJA CUOTA SINDICAL'
        },
        { 
            value: 'BAJA FLIAR.ADICIONAL SINDICATO', 
            tipo: 'cualitativo', 
            viewValue: 'BAJA FLIAR.ADICIONAL SINDICATO'
        },
        { 
            value: 'DÍAS DE ESTUDIO', 
            tipo: 'cualitativo', 
            viewValue: 'DÍAS DE ESTUDIO'
        },
        { 
            value: 'INGRESO A REM.VARIABLE', 
            tipo: 'cualitativo', 
            viewValue: 'INGRESO A REM.VARIABLE'
        },
        { 
            value: 'LICENCIAS ESPECIALES', 
            tipo: 'cualitativo', 
            viewValue: 'LICENCIAS ESPECIALES'
        },
        { 
            value: 'PLUS ASESOR JUNIOR EXPERTO', 
            tipo: 'cualitativo', 
            viewValue: 'PLUS ASESOR JUNIOR EXPERTO'
        },
        { 
            value: 'PLUS MASTER', 
            tipo: 'cualitativo', 
            viewValue: 'PLUS MASTER'
        },
                    
    ];



    /**
     * Constructor
     *
     * @param {MatDialogRef<ContactsContactFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<ContactsContactFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.action = _data.action;

        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Editar Novedad';
            this.contact = _data.contact;
        }
        else
        {
            this.dialogTitle = 'Nueva Novedad';
            this.contact = _data.contact || new Contact({});
            
        }

        this.contactForm = this.createContactForm();
    }

    manojoSH(e): void {
        console.log(e.value);

        this.Conceptos.forEach(element => {
            if (element.value === e.value){
                if (element.tipo === "cuantitativo"){
                    this.contactForm.controls.cantidad.enable();
                    this.unidad = element.unidad;                    
                    this.hideshow = true;
                }else{
                    this.contactForm.controls.cantidad.disable();
                    this.hideshow = false;
                    this.unidad = '';
                }
            }
            return;            
        });
    }

    verForm(f): void {
        console.log(this.hideshow);
        console.log(f);
    }

    onSubmit(): void {
        console.log(this.contactForm);
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
            id         : [this.contact.id],
            name       : [this.contact.name],
            lastName   : [this.contact.lastName],
            avatar     : [this.contact.avatar],
            nickname   : [this.contact.nickname],
            company    : [this.contact.company],
            date       : '',
            concepto   : '',
            cantidad   : '',

        });
    }
}
