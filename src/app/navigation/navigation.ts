import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Aplicaciones',
        // translate: 'NAV.APPLICATIONS',
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
        id: 'novedades',
        title: 'Novedades',
        type: 'item',
        icon: 'announcement',
        url: '/novedades',
        badge: {
            title: '23',
            bg: '#8ebdaf',
            fg: '#FFFFFF'
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
