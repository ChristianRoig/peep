import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [            
            {
                id   : 'login-v2',
                title: 'Login',
                type : 'item',
                icon: 'lock',
                url: '/auth/login-2'
            },
            {
                id       : 'perfil',
                title    : 'Perfil',
                type     : 'item',
                icon     : 'person',
                url      : '/perfil',               
            }
        ]
    },
    {
        id       : 'equipo',
        title    : 'Equipo',
        type     : 'item',
        icon     : 'person_pin',
        url      : '/equipo',
        badge    : {
            title    : '16',
            bg       : '#825e5a',
            fg       : '#FFFFFF'
        }
    },
    {
        id: 'nomina',
        title: 'Nomina',
        type: 'item',
        icon: 'group',
        url: '/nomina',
        badge: {
            title: '550',
            bg: '#09D261',
            fg: '#FFFFFF'
        }
    }
];
