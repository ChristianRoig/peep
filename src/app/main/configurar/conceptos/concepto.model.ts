import { FuseUtils } from '@fuse/utils';

export class Concepto
{
    nombre: string;
    cod: string;
    tipo: string;
    origen: string;
    
    /**
     * Constructor
     *
     * @param Concepto
     */
    constructor(Concepto)
    {
        {

            this.nombre = Concepto.nombre || '';
            this.cod = Concepto.cod || '';
            this.tipo = Concepto.tipo || '';
            this.origen = Concepto.origen || '';
    
        }
    }
}
