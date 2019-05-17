export class Perfil 
{
    public static info = {
            'nombre'  : 'Jorge Luis Boria',
            'nombre_corto' : 'Jorge Boria',
            'telefono' : '(0249)438-7687',
            'correo'   : 'j.boria@gmail.com'
    };

    public static preferencias = [
        {
            'id'   : 'Uso',
            'valor': 'Personal'
        },
        {
            'id'   : 'Facturacion Electrónica',
            'valor': 'NO'
        }
    ];
    public static imagenes = [
        {
            'nombre' : 'avatar',
            'path'   : '/assets/images/perfil/jorgeboria.jpeg'
        },
        {
            'nombre' : 'logo en pdf',
            'path'   : '/assets/images/perfil/logo.jpeg'
        }
    ];
}
