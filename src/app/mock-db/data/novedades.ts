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
                valor: 'FALTA INJUSTIFICADA',
                tipo: 'cuantitativo',
                unidad: 'dias',
            },
            {
                valor: 'FERIADO TRABAJADO(HORAS)',
                tipo: 'cuantitativo',
                unidad: 'horas',
            },
            {
                valor: 'HORAS EXTRAS 100 %',
                tipo: 'cuantitativo',
                unidad: 'horas',
            },
            {
                valor: 'HORAS EXTRAS 50 %',
                tipo: 'cuantitativo',
                unidad: 'horas',
            },
            {
                valor: 'LIC.POR ENFERMEDAD',
                tipo: 'cuantitativo',
                unidad: 'dias',
            },
            {
                valor: 'LIC.POR EXCEDENCIA',
                tipo: 'cuantitativo',
                unidad: 'dias'
            },
            {
                valor: 'LIC.POR FLIAR ENFERMO',
                tipo: 'cuantitativo',
                unidad: 'dias'
            },
            {
                valor: 'LIC.POR MATERNIDAD',
                tipo: 'cuantitativo',
                unidad: 'dias'
            },
            {
                valor: 'LIC.POR MATRIMONIO',
                tipo: 'cuantitativo',
                unidad: 'dias'
            },
            {
                valor: 'VACACIONES(DÍAS)',
                tipo: 'cuantitativo',
                unidad: 'dias'
            },

            {
                valor: 'ADICIONAL CAJ.PROP. - NO HABITUAL',
                tipo: 'cualitativo'
            },
            {
                valor: 'ADICIONAL CAJERO - NO HABITUAL',
                tipo: 'cualitativo'
            },
            {
                valor: 'ALTA CUOTA SINDICAL',
                tipo: 'cualitativo'
            },
            {
                valor: 'ALTA FLIAR.ADICIONAL SINDICATO',
                tipo: 'cualitativo'
            },
            {
                valor: 'BAJA CUOTA SINDICAL',
                tipo: 'cualitativo'
            },
            {
                valor: 'BAJA FLIAR.ADICIONAL SINDICATO',
                tipo: 'cualitativo'
            },
            {
                valor: 'DÍAS DE ESTUDIO',
                tipo: 'cualitativo'
            },
            {
                valor: 'INGRESO A REM.VARIABLE',
                tipo: 'cualitativo'
            },
            {
                valor: 'LICENCIAS ESPECIALES',
                tipo: 'cualitativo'
            },
            {
                valor: 'PLUS ASESOR JUNIOR EXPERTO',
                tipo: 'cualitativo'
            },
            {
                valor: 'PLUS MASTER',
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



