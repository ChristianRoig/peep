import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { Gasto } from './gasto.model';
import { CookieService } from 'ngx-cookie-service';

import { environment } from 'environments/environment';


const API_URL : string = environment.API;

@Injectable()
export class GastosService implements Resolve<any>
{
    onGastosChanged: BehaviorSubject<any>;
    onSelectedGastosChanged: BehaviorSubject<any>;
    onUserDataChanged: BehaviorSubject<any>;    
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>; 

    gastos: Gasto[] = [];
    infoOnChanged = new BehaviorSubject({});
    info: any;
    user: any;    
    selectedGastos: string[] = [];

    searchText: string;
    filterBy: string;

    index:number;

    /**
     * Constructor
     *
     */
    constructor(
        private http : Http,
        private cookieService: CookieService
    )
    {      
        // Set the defaults
        this.onGastosChanged = new BehaviorSubject([]);
        this.onSelectedGastosChanged = new BehaviorSubject([]);
/*      this.onUserDataChanged = new BehaviorSubject([]);*/        
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject();
        this.index = 0;
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
                this.getGastos(),
            ]).then(
                ([files]) => {

                     this.onSearchTextChanged.subscribe(searchText => {
                        this.searchText = searchText;
                        this.getGastos();
                    });

                    this.onFilterChanged.subscribe(filter => {
                        this.filterBy = filter;
                        this.getGastos();
                    });
 
                    resolve();

                },
                reject
            );
        }); 
    }

    /**
     * Get contacts
     *
     * @returns {Promise<any>}
     */
    getGastos(): Promise<any>
    {
         return new Promise((resolve, reject) => {
             console.log(this.index);
                this.createRequest( "7ideas", this.index, "Compras", "Facturas", "-Oficina-")
                    .subscribe((response: any) => {

                        this.gastos = response.json();
                        
/*                         if ( this.filterBy === 'frequent' )
                        {
                            this.gastos = this.gastos.filter(_contact => {
                                return this.user.frequentContacts.includes(_contact.id);
                            });
                        }  */

                        if ( this.searchText && this.searchText !== '' )
                        {
                            this.gastos = FuseUtils.filterArrayByString(this.gastos, this.searchText);
                        }

                        this.gastos = this.gastos.map(gasto => {                            
                            return new Gasto(gasto);
                        });  
                        
                        
                        this.onGastosChanged.next(this.gastos);
                        
                        resolve(this.gastos)

                    }, reject);
            }
        ); 
     //   return null
    }

    createRequest( propietario: string, pagina: number, modulo:string, categoria:string, etiqueta: string): any{
                       
        var headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        headers.append('Authorization', this.cookieService.get('tokenAuth'));
        let options = new RequestOptions({ headers });
        let url =  API_URL + 'obtenerGastos';

        let requestGastos = {    
                                "propietario":"7Ideas",
                                "pagina":this.index,
                                "modulo":"Compras",
                                "categoria":"Facturas",
                                "etiqueta":"-Oficina-"
                            };
        
        return this.http.post(url, requestGastos, options);
    }
    
    getGasto(id: string) : Gasto {
        let gasto: Gasto;
        gasto = this.gastos.find(element =>  element.id == id  )
        return gasto;    
    }

    obtenerMasComprobantes() {
        this.index = this.index + 1;
        console.log(this.index);
        this.getGastos();
    }

    getInfo(id:number): Promise<any> {
 

    return null;
    }

    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
/*      getUserData(): Promise<any>
    {
         return new Promise((resolve, reject) => {
                this._httpClient.get('api/contacts-user/5725a6802d10e277a0f35724')
                    .subscribe((response: any) => {
                        this.user = response;
                        this.onUserDataChanged.next(this.user);
                        resolve(this.user);
                    }, reject);
            }
        );
        return null;
    } */

    /**
     * Toggle selected contact by id
     *
     * @param id
     */
    toggleSelectedContact(id): void
    {
         // First, check if we already have that contact as selected...
        if ( this.selectedGastos.length > 0 )
        {
            const index = this.selectedGastos.indexOf(id);

            if ( index !== -1 )
            {
                this.selectedGastos.splice(index, 1);

                // Trigger the next event
                this.onSelectedGastosChanged.next(this.selectedGastos);

                // Return
                return;
            }
        } 

        // If we don't have it, push as selected
        this.selectedGastos.push(id);

        // Trigger the next event
        this.onSelectedGastosChanged.next(this.selectedGastos);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void
    {
         if ( this.selectedGastos.length > 0 )
        {
            this.deselectContacts();
        }
        else
        {
            this.selectContacts();
        } 
    }

    /**
     * Select contacts
     *
     * @param filterParameter
     * @param filterValue
     */
    selectContacts(filterParameter?, filterValue?): void
    {
        this.selectedGastos = [];

        // If there is no filter, select all contacts
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedGastos = [];
            this.gastos.map(contact => {
                this.selectedGastos.push(contact.id);
            });
        }

        // Trigger the next event
        this.onSelectedGastosChanged.next(this.selectedGastos);
    }

    /**
     * Update contact
     *
     * @param contact
     * @returns {Promise<any>}
     */
/*     updateContact(contact): Promise<any>
    {
        return new Promise((resolve, reject) => {

            this._httpClient.post('api/contacts-contacts/' + contact.id, {...contact})
                .subscribe(response => {
                    this.getGastos();
                    resolve(response);
                });
        });
    } */

    /**
     * Update user data
     *
     * @param userData
     * @returns {Promise<any>}
     */
/*      updateUserData(userData): Promise<any>
    {
         return new Promise((resolve, reject) => {
            this._httpClient.post('api/contacts-user/' + this.user.id, {...userData})
                .subscribe(response => {
                    this.getUserData();
                    this.getGastos();
                    resolve(response);
                });
        }); 
        return null;
    }  */

    /**
     * Deselect contacts
     */
    deselectContacts(): void
    {
         this.selectedGastos = [];

        // Trigger the next event
        this.onSelectedGastosChanged.next(this.selectedGastos); 
    }

    /**
     * Delete contact
     *
     * @param contact
     */
    deleteContact(contact): void
    {
         const contactIndex = this.gastos.indexOf(contact);
        this.gastos.splice(contactIndex, 1);
        this.onGastosChanged.next(this.gastos);
    }

    /**
     * Delete selected contacts
     */
    deleteSelectedContacts(): void
    {
         for ( const contactId of this.selectedGastos )
        {
            const contact = this.gastos.find(_contact => {
                return _contact.id === contactId;
            });
            const contactIndex = this.gastos.indexOf(contact);
            this.gastos.splice(contactIndex, 1);
        }
        this.onGastosChanged.next(this.gastos);
        this.deselectContacts(); 
    }

    

}
