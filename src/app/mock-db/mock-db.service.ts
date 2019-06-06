import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Perfil } from 'app/mock-db/data/perfil';
import { Contactos } from './data/contacts';

export class MockDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            'perfil-FC0356' : Perfil.FC0356, //default
            'perfil-FC0784' : Perfil.FC0784,
            'perfil-FC7871' : Perfil.FC7871,
            'perfil-FC4152' : Perfil.FC4152,

            'perfil-FC0192' : Perfil.FC0192,
            'perfil-FC1068' : Perfil.FC1068,
            'perfil-FC1791' : Perfil.FC1791,
            'perfil-FC1966' : Perfil.FC1966,
            'perfil-FC2173' : Perfil.FC2173,
            'perfil-FN0038' : Perfil.FN0038,
            'perfil-FN0042' : Perfil.FN0042,
            'perfil-FN0061' : Perfil.FN0061,
            'perfil-FN0063' : Perfil.FN0063,
            'perfil-FN0094' : Perfil.FN0094,
            'perfil-FN0097' : Perfil.FN0097,
            'perfil-FN0120' : Perfil.FN0120,
            'perfil-FH0248' : Perfil.FH0248,
            'perfil-FH0492' : Perfil.FH0492,
            'perfil-FH0568' : Perfil.FH0568,
            'perfil-FH0569' : Perfil.FH0569,

            'contactos': Contactos.allnomina, //default
            'contactos-resDTO': Contactos.resDTO,
            'contactos-FC': Contactos.FC,
            'contactos-FN': Contactos.FN,
            'contactos-FH': Contactos.FH,
            'contacts-user': Contactos.user,
        };
    }
}
