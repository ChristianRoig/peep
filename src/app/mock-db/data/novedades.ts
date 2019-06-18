export class Novedades
{
   
    public static FC0356 = Novedades.crearNovedades();
    public static FC0784 = Novedades.crearNovedades();
    public static FC7871 = Novedades.crearNovedades();
    public static FC4152 = Novedades.crearNovedades();
    public static FC0192 = Novedades.crearNovedades();
    public static FC1068 = Novedades.crearNovedades();
    public static FC1791 = Novedades.crearNovedades();
    public static FC1966 = Novedades.crearNovedades();
    public static FC2173 = Novedades.crearNovedades();
    public static FN0038 = Novedades.crearNovedades();
    public static FN0042 = Novedades.crearNovedades();
    public static FN0061 = Novedades.crearNovedades();
    public static FN0063 = Novedades.crearNovedades();
    public static FN0094 = Novedades.crearNovedades();
    public static FN0097 = Novedades.crearNovedades();
    public static FN0120 = Novedades.crearNovedades();
    public static FH0248 = Novedades.crearNovedades();
    public static FH0492 = Novedades.crearNovedades();
    public static FH0568 = Novedades.crearNovedades();
    public static FH0569 = Novedades.crearNovedades();
    

    private static crearNovedades(): any {
        const cant = Math.floor(Math.random() * 10);
        // const cant = 0; //Para testear cuando la cantidad es 0 de novedades
    
        const response: any[] = [];
    
        for (let i = 1; i <= cant; i++) {
            response.push(this.crearNovedad());
        }
    
        return response;
    }
    
    private static crearNovedad(): any {
        const novedad = {
            'id': new Date().getTime(),
            'fecha': this.getNumber(27) + '/' + this.getNumber(12) + '/2019',
            'concepto': '',
            'cantidad': '',
            'tipo': '',
            'unidad': ''
        };

        const Conceptos = [
            {
                valor: 'Falta Injustificada',
                tipo: 'cuantitativo',
                unidad: 'dias',
            },
            {
                valor: 'Feriado Trabajado(Horas)',
                tipo: 'cuantitativo',
                unidad: 'horas',
            },
            {
                valor: 'Horas Extras 100%',
                tipo: 'cuantitativo',
                unidad: 'horas',
            },
            {
                valor: 'Horas Extras 50%',
                tipo: 'cuantitativo',
                unidad: 'horas',
            },
            {
                valor: 'Lic.Por Enfermedad',
                tipo: 'cuantitativo',
                unidad: 'dias',
            },
            {
                valor: 'Lic.Por Excedencia',
                tipo: 'cuantitativo',
                unidad: 'dias'
            },
            {
                valor: 'Lic.Por Fliar Enfermo',
                tipo: 'cuantitativo',
                unidad: 'dias'
            },
            {
                valor: 'Lic.Por Maternidad',
                tipo: 'cuantitativo',
                unidad: 'dias'
            },
            {
                valor: 'Lic.Por Matrimonio',
                tipo: 'cuantitativo',
                unidad: 'dias'
            },
            {
                valor: 'Vacaciones(Días)',
                tipo: 'cuantitativo',
                unidad: 'dias'
            },

            {
                valor: 'Adicional Caj.Prop. - No Habitual',
                tipo: 'cualitativo'
            },
            {
                valor: 'Adicional Cajero - No Habitual',
                tipo: 'cualitativo'
            },
            {
                valor: 'Alta Cuota Sindical',
                tipo: 'cualitativo'
            },
            {
                valor: 'Alta Fliar.Adicional Sindicato',
                tipo: 'cualitativo'
            },
            {
                valor: 'Baja Cuota Sindical',
                tipo: 'cualitativo'
            },
            {
                valor: 'Baja Fliar.Adicional Sindicato',
                tipo: 'cualitativo'
            },
            {
                valor: 'Días De Estudio',
                tipo: 'cualitativo'
            },
            {
                valor: 'Ingreso A Rem.Variable',
                tipo: 'cualitativo'
            },
            {
                valor: 'Licencias Especiales',
                tipo: 'cualitativo'
            },
            {
                valor: 'Plus Asesor Junior Experto',
                tipo: 'cualitativo'
            },
            {
                valor: 'Plus Master',
                tipo: 'cualitativo'
            },

        ];

        const pos = Math.floor((Math.random() * (Conceptos.length - 1)));  
    
        novedad.concepto = Conceptos[pos].valor;
        novedad.tipo = Conceptos[pos].tipo;
    
        if (novedad.tipo === 'cuantitativo') {
            novedad.cantidad = Math.floor((Math.random() * 6) + 1).toString();
            novedad.unidad = Conceptos[pos].unidad;
        }
    
        return novedad;
    }

    private static getNumber(limite: number): string{
        let n = '';
        n = Math.floor((Math.random() * limite) + 1).toString();

        return (n.length === 1) ? 0 + n : n;
    }


}



