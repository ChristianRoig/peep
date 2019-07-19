import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class PerfilService implements Resolve<any>
{
    info: any;
    infoLog: any; 

    infoOnChangedLog: BehaviorSubject<any>;
    infoOnChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     * @param { ErrorService } _errorService
     */
    constructor(
        private _httpClient: HttpClient,
        private _errorService: ErrorService
    )
    {
        // Set the defaults
        this.infoOnChanged = new BehaviorSubject({});
        this.infoOnChangedLog = new BehaviorSubject({});
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
                this.getInfo(route.params.id),                
            ]).then(
                () => {
                    resolve();
                },
                (error) => {
                    this.info = null;
                    this.infoOnChanged.next(this.info);
                   

                    this._errorService.errorHandler(error, "No se encontro la página para el perfil de " + route.params.id);


                    resolve(this.info);

  
                }
            );
        });
    }

    /**
     * Get info
     */
    getInfo(id): Promise<any[]>
    {
        // console.log("id del getInfo "+id);
        return new Promise((resolve, reject) => {
            // console.log(this.getLocalStorage());            
            this.llamadoHTTP(resolve, reject, id);       
        });
    }

    private llamadoHTTP(resolve, reject, user): void {
        let local: boolean = false;
        
        if (!user){
            user = 'api/perfil-' + this.getLocalStorage();
            local = true;
        }else{
            user = 'api/perfil-' + user;
            local = false;
        }
        this._httpClient.get(user)
            .subscribe((info: any) => {
                if (local){
                    this.info = info;
                    this.infoOnChanged.next(this.info);
                    this.infoLog = info;
                    this.infoOnChangedLog.next(this.infoLog);
                    resolve(this.infoLog);
                    resolve(this.info);
                }else{
                    this.info = info;
                    this.infoOnChanged.next(this.info);
                    resolve(this.info);
                }
            }, reject);
    }

    getLocalStorage(): string {
        let usuario: string;

        if (typeof (Storage) !== 'undefined') {
            usuario = localStorage.getItem('user');           
            
            // FIX
            // Eliminar en un futuro cuando se tenga autenticacion por token

            if (usuario == null){
                localStorage.clear();
                localStorage.setItem('user', 'FC0356');
            
                return 'FC0356';
            
            }else { 
                const users = ['FC0356', 'FC0784', 'FC7871', 'FC4152'];

                if (!users.includes(usuario)){
                    localStorage.clear();
                    localStorage.setItem('user', 'FC0356');
            
                    return 'FC0356';
            
                }
            }

            //FIX

            return usuario;            
        } 
        // else {
            // LocalStorage no soportado en este navegador
        // }

        return 'FC0356'; //por defecto Florencia Macchiavello 
    }

}