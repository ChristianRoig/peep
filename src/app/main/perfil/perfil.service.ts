import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

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

            this._httpClient.get(this.getLocalStorage())
                .subscribe((info: any) => {
                    this.info = info;
                    this.infoOnChanged.next(this.info);
                    resolve(this.info);
                }, reject);
        });
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
