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

    public static tablaConceptos = [
        {
            'nombre': 'FALTA INJUSTIFICADA',
            'cod': 'DESC',
            'tipo': 'Recursos Humanos',
            'origenCod': '',
            'origenNombre': ''
            
        },
        {
            'nombre': 'GUARDIAS PASIVAS 100%',
            'cod': '12',
            'tipo': 'Recursos Humanos',
            'origenCod': '',
            'origenNombre': ''
            
        },
        {
            'nombre': 'GUARDIAS PASIVAS 50%',
            'cod': '11',
            'tipo': 'Recursos Humanos',
            'origenCod': '',
            'origenNombre': ''
            
        },
        {
            'nombre': 'HORAS EXTRAS 100%',
            'cod': '10',
            'tipo': 'cuantitativo',
            'origenCod': '',
            'origenNombre': ''
            
        },
        {
            'nombre': 'HORAS EXTRAS 50%',
            'cod': '9',
            'tipo': 'cuantitativo',
            'origenCod': '',
            'origenNombre': ''
            
        },
        {
            'nombre': 'LIC. POR ENFERMEDAD',
            'cod': 'LENF',
            'tipo': 'cuantitativo',
            'origenCod': '',
            'origenNombre': ''
            
        },
        {
            'nombre': 'VACACIONES (DÍAS)',
            'cod': 'VACA',
            'tipo': 'Recursos Humanos',
            'origenCod': 'Licen',
            'origenNombre': 'Licencias'
            
        },
        {
            'nombre': 'FERIADO TRABAJADO (HORAS)',
            'cod': '94',
            'tipo': 'Recursos Humanos',
            'origenCod': '',
            'origenNombre': ''
            
        },
        {
            'nombre': 'LIC. POR MATERNIDAD',
            'cod': 'LIMAT',
            'tipo': 'Recursos Humanos',
            'origenCod': '',
            'origenNombre': ''
            
        },
        {
            'nombre': 'CORPORATIVO- CLARO',
            'cod': '259',
            'tipo': 'EXTERNO',
            'origenCod': 'Corpo',
            'origenNombre': 'Corporativos'
            
        },
        {
            'nombre': 'CORPORATIVO- PERSONAL',
            'cod': '262',
            'tipo': 'EXTERNO',
            'origenCod': 'Corpo',
            'origenNombre': 'Corporativos'
            
        },
        {
            'nombre': 'RETROACTIVO',
            'cod': 'RETRO',
            'tipo': 'Recursos Humanos',
            'origenCod': '',
            'origenNombre': ''
            
        },
        {
            'nombre': 'DESCUENTO DIAS',
            'cod': 'DESC',
            'tipo': 'Recursos Humanos',
            'origenCod': '',
            'origenNombre': ''
            
        },
        {
            'nombre': 'DIFERENCIA DE CAJA',
            'cod': 'DIFCA',
            'tipo': 'EXTERNO',
            'origenCod': 'Difer',
            'origenNombre': 'Diferencia de Caja'
            
        },
        {
            'nombre': 'ADELANTOS',
            'cod': 'ADELA',
            'tipo': 'Recursos Humanos',
            'origenCod': 'Adela',
            'origenNombre': ''
            
        },
        {
            'nombre': 'PREMIO VENTAS',
            'cod': '116',
            'tipo': 'Recursos Humanos',
            'origenCod': 'Prem-Vta',
            'origenNombre': 'Premios Ventas'
            
        },
        {
            'nombre': 'PREMIO COBRANZAS',
            'cod': '117',
            'tipo': 'Recursos Humanos',
            'origenCod': 'Prem-Vta',
            'origenNombre': 'Premios Ventas'
            
        },        
    ];

    public static rrhh = [
        {
            'nombre': 'Generales RRHH',
            'cod'   : 'RRHH-Gen'
        },
        {
            'nombre': 'Licencias',
            'cod'   : 'Licen'
        },
        {
            'nombre': 'Comisiones',
            'cod'   : 'Comis'
        },
        {
            'nombre': 'Adelantos',
            'cod'   : 'Adela'
        },
    ];

    public static externo = [
        {
            'nombre': 'Diferencia de Caja',
            'cod'   : 'Difer'
        },
        {
            'nombre': 'Premios Ventas',
            'cod'   : 'Prem-Vta'
        },
        {
            'nombre': 'Entrega En Mano, Incentivos',
            'cod'   : 'EntMan-Inc'
        },
        {
            'nombre': 'Corporativos',
            'cod'   : 'Corpo'
        },
    ];

}