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
            'contactos': Contactos.allnomina, //default
            'contactos-resDTO': Contactos.resDTO,
            'contactos-FC': Contactos.FC,
            'contactos-FN': Contactos.FN,
            'contactos-FH': Contactos.FH,
            'contacts-user': Contactos.user,
            // 'novedades-fm': Novedades.fm,
            // 'novedades-fq': Novedades.fq,
            // 'novedades.equipo': 
        };
    }
}
