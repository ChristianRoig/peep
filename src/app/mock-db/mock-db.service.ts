import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Perfil } from 'app/mock-db/data/perfil';
import { Gastos } from 'app/mock-db/data/gastos';
import { Contactos } from './data/contacts';

export class MockDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            'perfil-info' : Perfil.info,
            'contactos' : Contactos.contacts,
            'proveedores': Contactos.proveedores,
            'gastos': Gastos.gastos
        };
    }
}
