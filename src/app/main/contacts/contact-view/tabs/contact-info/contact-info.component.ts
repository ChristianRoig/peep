import { Component, OnInit, ViewEncapsulation, OnDestroy, Input } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

import { Proveedor } from 'app/main/contacts/proveedor.model';
import { ContactsService } from 'app/main/contacts/contacts.service';

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ContactInfoComponent implements OnInit, OnDestroy
{
    @Input() proveedor : Proveedor;
    // Private

    /**
     * Constructor
     *
     */
    constructor(
        private _contactService: ContactsService
    )
    {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

    }
    

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {

    }
}

