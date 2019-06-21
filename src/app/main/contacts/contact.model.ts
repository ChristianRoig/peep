import { FuseUtils } from '@fuse/utils';

export class Contact
{
    id: string;
    name: string;
    avatar: string;
    nickname: string;
    company: string;
    email: string;
    telefono: string;
    direccion: string;
    notes: string;
    cuit: string

    /**
     * Constructor
     *
     * @param contact
     */
    constructor(contact)
    {
        {
            this.id = contact.id || FuseUtils.generateGUID();
            this.name = contact.name || '';
            this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
            this.nickname = contact.nickname || '';
            this.company = contact.company || '';
            this.email = contact.email || '';
            this.telefono = contact.telefono || '';
            this.direccion = contact.direccion || '';
            this.notes = contact.notes || '';
            this.cuit = contact.cuit;
        }
    }
}
