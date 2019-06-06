import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PerfilService implements Resolve<any>
{
    info: any;
    infoLog: any; 

    infoOnChangedLog: BehaviorSubject<any>;
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
                reject
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
            if (id){                                              
                this.llamadoHTTP(resolve, reject, 'api/perfil-' + id);               
            }else{
                this.llamadoHTTP(resolve, reject, null);
            }            
        });
    }

    private llamadoHTTP(resolve, reject, user): void {
        let local: boolean = false;
        
        if (!user){
            user = this.getLocalStorage();
            local = true;
        }else{
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
