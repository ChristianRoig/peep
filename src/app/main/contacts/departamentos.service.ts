import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';


@Injectable()
export class DepartamentosService implements Resolve<any>
{
    onDepartamentosChanged: BehaviorSubject<any>;
    departamentos = [];   
    api = 'api/departamentos';

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
        this.onDepartamentosChanged = new BehaviorSubject([]);
              
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

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
                this.getDepartamentos(),

            ]).then(
                ([files]) => {

                    /**
                     * Filtros de busqueda
                     */
                    
                    //  this.onSearchTextChanged.subscribe(searchText => {
                    //     this.searchText = searchText;
                    //     this.getContacts();
                    // });

                    // this.onFilterChanged.subscribe(filter => {
                    //     this.filterBy = filter;
                    //     this.getContacts();
                    // });

                    resolve();

                },
                reject
            );
        }); 
    }

    getDepartamentos(): Promise<any>
    {        
        return new Promise((resolve, reject) => {
                this._httpClient.get(this.api)
                    .subscribe((response: []) => {

                        this.departamentos = response;

                        this.onDepartamentosChanged.next(this.departamentos); 
                        resolve(this.departamentos);
                    }, reject);
            }
        ); 
        return null;
    }

    // getVanilaContact(): Contact[]{
    //     let api = 'api/contactos';

    //     let contactos = null;

    //     this._httpClient.get(api).subscribe(data => {
    //         contactos = data;

    //         contactos = contactos.map(contact => {
    //             return new Contact(contact);
    //         });
    //     });        
        
    //     return contactos;
    // }


    
}
