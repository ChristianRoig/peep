export class Conceptos {

    public static conceptos = [ // No lo uso mas, por ahora lo dejo 
        'Mailing',
        'Diferencia de Caja',
        'Remuneracion Variable',
        'Premio de Ventas',
        'Incentivo Entrega En Mano',
        'Premios Fava Salud',
        'Comisiones Gestion Domiciliaria',
        'Liquidación Equipos de Venta',
        'Corporativo',
        'Premio de Cobranzas',
    ];


    public static sectorCombo = [
        'ADELANTOS',  // RRHH
        'DESCUENTO DIAS',
        'FALTA INJUSTIFICADA',
        'FERIADO TRABAJADO(HORAS)',                
        'GUARDIAS PASIVAS 100%',
        'GUARDIAS PASIVAS 50%',
        'LIC.POR MATERNIDAD',
        'PREMIO VENTAS',
        'PREMIO COBRANZAS',
        'RETROACTIVO',
        'VACACIONES(DÍAS)',

        'CORPORATIVO - CLARO	EXTERNO', // Externos
        'CORPORATIVO - PERSONAL	EXTERNO',
        'DIFERENCIA DE CAJA	EXTERNO',
    ];

    public static tablaConceptos = [
        {
            'nombre': 'FALTA INJUSTIFICADA',
            'cod': 'DESC',
            'tipo': 'RRHH',
            'origen': ''
        },
        {
            'nombre': 'GUARDIAS PASIVAS 100%',
            'cod': '12',
            'tipo': 'RRHH',
            'origen': ''
        },
        {
            'nombre': 'GUARDIAS PASIVAS 50%',
            'cod': '11',
            'tipo': 'RRHH',
            'origen': ''
        },
        {
            'nombre': 'HORAS EXTRAS 100%',
            'cod': '10',
            'tipo': 'CUANTI',
            'origen': ''
        },
        {
            'nombre': 'HORAS EXTRAS 50%',
            'cod': '9',
            'tipo': 'CUANTI',
            'origen': ''
        },
        {
            'nombre': 'LIC. POR ENFERMEDAD',
            'cod': 'LENF',
            'tipo': 'CUANTI',
            'origen': ''
        },
        {
            'nombre': 'VACACIONES (DÍAS)',
            'cod': 'VACA',
            'tipo': 'RRHH',
            'origen': 'Licen'
        },
        {
            'nombre': 'FERIADO TRABAJADO (HORAS)',
            'cod': '94',
            'tipo': 'RRHH',
            'origen': ''
        },
        {
            'nombre': 'LIC. POR MATERNIDAD',
            'cod': 'LIMAT',
            'tipo': 'RRHH',
            'origen': ''
        },
        {
            'nombre': 'CORPORATIVO- CLARO',
            'cod': '259',
            'tipo': 'EXTERNO',
            'origen': 'Corpo'
        },
                {
            'nombre' : 'CORPORATIVO- PERSONAL',
            'cod'    : '262',
            'tipo'   : 'EXTERNO',
            'origen' : 'Corpo'
        },
                {
            'nombre' : 'RETROACTIVO',
            'cod'    : 'RETRO',
            'tipo'   : 'RRHH',
            'origen' : ''
        },
                {
            'nombre' : 'DESCUENTO DIAS',
            'cod'    : 'DESC',
            'tipo'   : 'RRHH',
            'origen' : ''
        },
                {
            'nombre' : 'DIFERENCIA DE CAJA',
            'cod'    : 'DIFCA',
            'tipo'   : 'EXTERNO',
            'origen' : 'Difer'
        },
                {
            'nombre' : 'ADELANTOS',
            'cod'    : 'ADELA',
            'tipo'   : 'RRHH',
            'origen' : 'Adela'
        },
                {
            'nombre' : 'PREMIO VENTAS',
            'cod'    : '116',
            'tipo'   : 'RRHH',
            'origen' : 'Prem-Vta'
        },
        {
            'nombre': 'PREMIO COBRANZAS',
            'cod': '117',
            'tipo': 'RRHH',
            'origen': 'Prem-Vta'
        },        
    ];

}