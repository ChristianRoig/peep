import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Paginas',
        type     : 'group',
        children : [
            {
                id       : 'inico',
                title    : 'Inicio',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    },
    {
        id       : 'contactos',
        title    : 'Alumnos',
        type     : 'item',
        icon     : 'group',
        url      : '/contactos',
        badge    : {
            title    : '8',
            bg       : '#825e5a',
            fg       : '#FFFFFF'
        }
    },
    {
        id       : 'asistencia',
        title    : 'Asistencia',
        type     : 'item',
        icon     : 'how_to_reg',
        url      : '/contactos-asi',
        badge    : {
            title    : '3',
            bg       : '#825e5a',
            fg       : '#FFFFFF'
        }
    },
    {
        id       : 'perfil',
        title    : 'Perfil',
        type     : 'item',
        icon     : 'person',
        url      : '/perfil',
        badge    : {
            title    : '1',
            bg       : '#525e8a',
            fg       : '#FFFFFF'
        }
    },
    {
        id   : 'login-v2',
        title: 'Login',
        type : 'item',
        icon: 'lock',
        url: '/auth/login-2'
    }
];
