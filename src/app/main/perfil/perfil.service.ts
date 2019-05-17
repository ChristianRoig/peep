import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PerfilService implements Resolve<any>
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

            this._httpClient.get('api/perfil-info')
                .subscribe((info: any) => {
                    this.info = info;
                    this.infoOnChanged.next(this.info);
                    resolve(this.info);
                }, reject);
        });
    }

}
