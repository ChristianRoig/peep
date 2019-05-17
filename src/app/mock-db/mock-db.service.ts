import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Perfil } from 'app/mock-db/data/perfil';

export class MockDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Perfil
            'perfil-info' : Perfil.info
        };
    }
}
