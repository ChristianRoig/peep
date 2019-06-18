import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Colaborador } from './colaborador.model';
import { Info } from './info.model';
import { InfoLaboral } from './info.model';
import { DatosSistema } from './info.model';

@Injectable()
export class PerfilService implements Resolve<any>
{
    info: any;

    infoOnChanged: BehaviorSubject<any>;

    private fm: string = 'api/perfil-fm'; //default
    private fq: string = 'api/perfil-fq';
    private sf: string = 'api/perfil-sf';
    private ce: string = 'api/perfil-ce';
    
    
    
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.infoOnChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getInfo(),
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get info
     */
    getInfo(): Promise<any[]>
    {
        return new Promise((resolve, reject) => {
            // console.log(this.getLocalStorage());

            /*
            this._httpClient.get(this.getLocalStorage())
                .subscribe((info: any) => {
                    this.info = info;
                    this.infoOnChanged.next(this.info);
                    resolve(this.info);
                }, reject);
                */
            
            //Invocacion http al backend
            //Se crea objeto Colaborador con idColaborador de Florencia Macchiavello para enviarselo al backend.
            //Luego el backend retorna un objeto Colaborador completo (con todos los datos de Florencia Macchiavello)          
            var colaborador = new Colaborador();
            colaborador.idColaborador = '2000';

            var request = JSON.stringify(colaborador);                  

            return this._httpClient.post('http://localhost:8082/gesrh/obtenerColaboradorById', request, this.generateHeaders())
            .subscribe((info: any) => {                
                this.info = this.mapeadorColaboradorInfo(info);
                this.infoOnChanged.next(this.info);
                resolve(this.info);
            }, reject);

        });
    }

    /**
     * Nota: El siguiente metodo se implementa para no tocarles el FrontEnd
     * 
     * Este metodo es encargado de mapear el objeto Colaborador obtenido del backend (obtenerColaboradorById) con el objeto info usado por el FrontEnd. 
     * Cuando se haga la integracion verdadera, el equipo FrontEnd sera el que decida como trabajar con el objetio Colaborador obtenido del backend
     *  
     * La informacion como el avatar o subpestaña de Seguridad y acceso no se encuentra en la entidad Colaborador de la tabla de la BBDD
     * (por el anterior motivo a continuacion estos atributos se veran mockeados).
     * 
     * @param colaborador : Es el objeto obtenido del backend de la peticion getColaboradorById
     */
    private mapeadorColaboradorInfo(colaborador: Colaborador): Info
    {
        
        //Los valores de atributos que siguen mockeados es porque en el registro Colaborador de la BBDD no tiene esa informacion
        var info = new Info();
        info.nombre = colaborador.nombre;
        info.nombre_corto = colaborador.nombreCorto;
        info.telefono = colaborador.telefonos;
        info.correo = colaborador.email;
        info.img = 'assets/images/perfil/flor.jpg';
        info.address = colaborador.domicilio;

        var infoLaboral = new InfoLaboral();
        infoLaboral.legajo = colaborador.legajo;
        infoLaboral.puesto = colaborador.tarea;
        infoLaboral.LugarTrabajo = colaborador.lugarTrabajo;
        info.infoLaboral = infoLaboral;

        var datosSistema = new DatosSistema();
        datosSistema.usuario = 'f.macchiavello';
        datosSistema.perfiles = 'Supervisor, RRHH';
        datosSistema.correoLaboral = 'f.macchiavello@favanet.com.ar';
        datosSistema.telefonoLaboral = '(0223) 444-4999 int. 438';        
        info.datosSistema = datosSistema;

        return info;

    }

    private generateHeaders = () => {
        return {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
    }

    private getLocalStorage(): string {
        let usuario: string;

        if (typeof (Storage) !== "undefined") {
            // LocalStorage disponible
            usuario = localStorage.getItem("user");
            // console.log("usuario " + usuario);
            
            if (usuario) {
                if ((usuario === "fq")) {
                    return this.fq;
                }
                if ((usuario === "sf")) {
                    return this.sf;
                }
                if ((usuario === "ce")) {
                    return this.ce;
                }          
            }

        } 
        // else {
            // LocalStorage no soportado en este navegador
        // }

        return this.fm;
    }

}
