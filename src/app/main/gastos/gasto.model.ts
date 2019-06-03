import { FuseUtils } from '@fuse/utils';
import { Proveedor } from '../contacts/proveedor.model';

export class Gasto
{
    id : string  //deberia ser number pero el generateGUID retorna un string.
    propietario : string
    modulo : string
    categoria : string
    rubro : string //etiqueta
    nombre : string //ex comprobante_txt
    nro : string //ex nro_fmt
    fecha : Date
    contacto_id : number
    contacto_corto : string
    descripcion : string // ex resumen 
    pago_estado : string 
    importe : number
    notas : string
    file_link : string
    contacto_avatar : string

   /**
     * Constructor
     *
     * @param gasto
     */
    constructor( gasto? : Gasto )
    {
            this.id = gasto.id || ''
            this.propietario = gasto.propietario || ''
            this.modulo  = gasto.modulo || ''
            this.categoria = gasto.categoria || ''
            this.rubro = gasto.rubro || ''
            this.nombre = gasto.nombre || ''
            this.nro = gasto.nro || ''
            this.fecha = gasto.fecha || null
            this.contacto_id = gasto.contacto_id || 0
            this.contacto_corto = gasto.contacto_corto || ''
            this.descripcion = gasto.descripcion || ''
            this.pago_estado = gasto.pago_estado
            this.importe = gasto.importe || 0
            this.file_link = gasto.file_link || '';
            this.contacto_avatar  = gasto.contacto_avatar || null
        
    }



}
