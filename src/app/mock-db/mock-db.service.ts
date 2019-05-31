import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Perfil } from 'app/mock-db/data/perfil';
import { Contactos } from './data/contacts';

export class MockDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            'perfil-fm' : Perfil.fm, //default
            'perfil-fq' : Perfil.fq,
            'perfil-sf' : Perfil.sf,
            'perfil-ce' : Perfil.ce,
            'contactos' : Contactos.contacts,
            'contacts-user': Contactos.user
        };
    }
}
