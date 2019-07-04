import { FuseUtils } from '@fuse/utils';

export class Origen
{
    id: string;
    cod: string;
    nombre: string;
    empresas: string;
    tipo: string;
    legajoR: string;
    responsableR: string;
    legajoS: string;
    responsableS: string;
    
    /**
     * Constructor
     *
     * @param Origen
     */
    constructor(Origen)
    {
        {

            this.id = Origen.id || '';
            this.cod = Origen.cod || '';
            this.nombre = Origen.nombre || '';
            this.empresas = Origen.empresas || '';
            this.tipo = Origen.tipo || '';
            this.legajoR = Origen.legajoR || 'Ninguno';
            this.responsableR = Origen.responsableR || 'Ninguno';
            this.legajoS = Origen.legajoS || 'Ninguno';
            this.responsableS = Origen.responsableS || 'Ninguno';
    
        }
    }
}
