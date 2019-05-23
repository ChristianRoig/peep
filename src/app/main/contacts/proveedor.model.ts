import { Contact } from './contact.model'

export class Proveedor extends Contact
{
    cuit: string;


    /**
     * Constructor
     *
     * @param contact
     */
    constructor(contact : Contact, cuit: string)
    {
        super(contact);
        this.cuit = cuit

    }
}
