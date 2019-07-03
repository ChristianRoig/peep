import { FuseUtils } from '@fuse/utils';

export class Departamento
{
    id: string;
    departamento: string;
    responsable: string;
    tipo: string;
    
    /**
     * Constructor
     *
     * @param departamento
     */
    constructor(departamento)
    {
        {
            this.id = departamento.id || '';
            this.departamento = departamento.departamento || '-';
            this.responsable = departamento.responsable || 'Ninguno';
            this.tipo = departamento.tipo || '';   
        }
    }
}
