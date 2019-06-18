
/**
 * Estas clases son creadas para hacer referencia al JSON de perfil.ts en mock-db
 * Creando esta clase yo no tengo que tocarles tanto el front(html y component) para hacer esta integracion de la invocacion getColaboradorById
 * Dado que estas clases tienen las misma estructura de niveles que el json  en perfil.ts
 */
export class Info {
    nombre: string;
    nombre_corto: string;
    telefono: string;
    correo: string;
    img: string;
    address: string;
    infoLaboral: InfoLaboral;
    datosSistema: DatosSistema;    
  }
  export class InfoLaboral {
    legajo: string;
    puesto: string;
    LugarTrabajo: string;
  }
  export class DatosSistema {
    usuario: string;
    perfiles: string;
    correoLaboral: string;
    telefonoLaboral: string;
  }
  