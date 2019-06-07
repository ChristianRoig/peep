import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NovedadesService implements Resolve<any>
{
    info: any;
    infoOnChanged: BehaviorSubject<any>;

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
                this.getInfo(route.params.id),                
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getInfo(id): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.llamadoHTTP(resolve, reject, id);
        });
    }

    private llamadoHTTP(resolve, reject, user): void {
        let local: boolean = false;

        if (!user) {
            user = 'api/novedades-' + this.getLocalStorage();
            local = true;
        } else {
            user = 'api/novedades-' + user;
            local = false;
        }
        this._httpClient.get(user)
            .subscribe((info: any) => {
                if (local) {
                    this.info = info;
                    this.infoOnChanged.next(this.info);
                    resolve(this.info);
                } else {
                    this.info = info;
                    this.infoOnChanged.next(this.info);
                    resolve(this.info);
                }
            }, reject);
    }

    private getLocalStorage(): string {
        let usuario: string;

        if (typeof (Storage) !== 'undefined') {
            usuario = localStorage.getItem('user');
            return usuario;
        }
        // else {
        // LocalStorage no soportado en este navegador
        // }

        return 'FC0356'; //por defecto Florencia Macchiavello 
    }

}
