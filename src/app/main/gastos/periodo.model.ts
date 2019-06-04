
export class Periodo {
    nombre : string
    isGroupBy :Boolean

    constructor(nombre:string, isGroup: boolean) {
        this.nombre = nombre;
        this.isGroupBy = isGroup

    }
}