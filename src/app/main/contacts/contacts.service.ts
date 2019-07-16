import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { Contact } from 'app/main/contacts/contact.model';
import { Gasto } from '../gastos/gasto.model';
import { resolve } from 'dns';
import { reject } from 'q';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'environments/environment';
import { MethodCall } from '@angular/compiler';


const API_URL : string = environment.API;

@Injectable()
export class ContactsService implements Resolve<any>
{
    onContactsChanged: BehaviorSubject<any>;
    onSelectedContactsChanged: BehaviorSubject<any>;
    onUserDataChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;

    //contacts: Contact[];
    contacts: Contact[] = [];
    user: any;
    selectedContacts: string[] = [];

    searchText: string;
    filterBy: string; 
    public static readonly MODULO:string = "Proveedores";
    public static readonly CATEGORIA:string = "de Gastos";
    public static readonly ETIQUETA:string = "-Oficina-";

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private http : Http,
        private cookieService: CookieService
    )
    {
        // Set the defaults
        this.onContactsChanged = new BehaviorSubject([]);
        this.onSelectedContactsChanged = new BehaviorSubject([]);
        this.onUserDataChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject(); 
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
                this.getContacts(),
 //               this.getUserData()
            ]).then(
                ([files]) => {

                     this.onSearchTextChanged.subscribe(searchText => {
                        this.searchText = searchText;
                        this.getContacts();
                    });

                    this.onFilterChanged.subscribe(filter => {
                        this.filterBy = filter;
                        this.getContacts();
                    });
 
                    resolve();

                },
                reject
            );
        }); 
    }

    initContacto(contact : Contact): void {
        contact.modulo = ContactsService.MODULO;
        contact.categoria = ContactsService.CATEGORIA;
        contact.etiqueta = ContactsService.ETIQUETA;
        contact.activo = 1;
        contact.propietario = this.cookieService.get('userName');
    }
    /**
     * Get contacts
     *
     * @returns {Promise<any>}
     */
    getContacts(): Promise<any>
    {
        this.contacts = [];
         return new Promise((resolve, reject) => {
                this.createRequestProveedores("7Ideas", "Proveedores", "de Gastos", '-Oficina-' )
                    .subscribe((response: any) => {
                        console.log(response.json())
                        this.contacts = response.json();

                                   
                         if ( this.filterBy === 'starred' )
                        {
                            this.contacts = this.contacts.filter(_contact => {
                                return this.user.starred.includes(_contact.id);
                            });
                        }

                        if ( this.filterBy === 'frequent' )
                        {
                            this.contacts = this.contacts.filter(_contact => {
                                return this.user.frequentContacts.includes(_contact.id);
                            });
                        }

                        if ( this.searchText && this.searchText !== '' )
                        {
                            this.contacts = FuseUtils.filterArrayByString(this.contacts, this.searchText);
                        }

                        this.contacts = this.contacts.map(contact => {
                            return new Contact(contact);
                        }); 

                        this.onContactsChanged.next(this.contacts); 
                        resolve(this.contacts);
                    }, reject);
            }
        ); 
    }

    getProveedor( name: string ): Contact {
        let proveedor : Contact;
        proveedor = this.contacts.find( p => p.nombre_corto == name );
        return proveedor;
    }

     getGastosByName(proveedor:string) : Promise<any> {
        let gastos: any[] = [];
        return new Promise((resolve, reject) => {
            this.createRequestGastosByProveedor("7ideas", "Compras", "Facturas", "-Oficina-", proveedor)
            .subscribe((response: any) => {
                gastos = response.json();
                console.log(response.json());
                
                gastos = gastos.map(gasto => {
                    return new Gasto(gasto);
                });
                resolve(gastos);
            },reject);
            });
    }
    
    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
/*     getUserData(): Promise<any>
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
    }  */

    /**
     * Toggle selected contact by id
     *
     * @param id
     */
    toggleSelectedContact(id): void
    {
         // First, check if we already have that contact as selected...
        if ( this.selectedContacts.length > 0 )
        {
            const index = this.selectedContacts.indexOf(id);

            if ( index !== -1 )
            {
                this.selectedContacts.splice(index, 1);

                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);

                // Return
                return;
            }
        } 

        // If we don't have it, push as selected
        this.selectedContacts.push(id);

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts); 
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void
    {
         if ( this.selectedContacts.length > 0 )
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
        this.selectedContacts = [];

        // If there is no filter, select all contacts
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedContacts = [];
            this.contacts.map(contact => {
                this.selectedContacts.push(contact.id);
            });
        }

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    /**
     * Update contact
     *
     * @param contact
     * @returns {Promise<any>}
     */
    addContact(contact): Promise<any>
    {
        return new Promise((resolve, reject) => {

            this.createRequestAddProveedor(contact)
                .subscribe(response => {
                    this.getContacts(); 
                    resolve(response);
                });
        });
    } 

     updateContact(contact): Promise<any>
    {
        return new Promise((resolve, reject) => {

            this.createRequestUpdateProveedor(contact)
                .subscribe(response => {
                    this.getContacts(); 
                    resolve(response);
                });
        });
    }
    
     getContactos(): Contact[] {
        return this.contacts;
    }
    
    getContactoByName(id:string) : Contact {
        let contact: Contact;
        if(this.contacts.length == 0 ) {
            this.getContacts();
        } 
        contact  = this.contacts.find(contact =>  contact.id == id );

        return contact;
        
    }

    /**
     * Update user data
     *
     * @param userData
     * @returns {Promise<any>}
     */
/*     updateUserData(userData): Promise<any>
    {
         return new Promise((resolve, reject) => {
            this._httpClient.post('api/contacts-user/' + this.user.id, {...userData})
                .subscribe(response => {
                    this.getUserData();
                    this.getContacts();
                    resolve(response);
                });
        });
       // return null;
    } */

    /**
     * Deselect contacts
     */
    deselectContacts(): void
    {
         this.selectedContacts = [];

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts); 
    }

    /**
     * Delete contact
     *
     * @param contact
     */
     deleteContactList(contact): void
    {
        const contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
    }

     deleteContact(contact): Promise<any>
    {
        return new Promise((resolve, reject) => {

            this.createRequestRemoveProveedor(contact)
                .subscribe(response => {
                //    this.getContacts(); 
                this.deleteContactList(contact);
                    resolve(response);
                });
        });
    } 

    /**
     * Delete selected contacts
     */
    deleteSelectedContacts(): void
    {
         for ( const contactId of this.selectedContacts )
        {
            const contact = this.contacts.find(_contact => {
                return _contact.id === contactId;
            });
            const contactIndex = this.contacts.indexOf(contact);
            this.contacts.splice(contactIndex, 1);
        }
        this.onContactsChanged.next(this.contacts);
        this.deselectContacts();
    }

    createRequestProveedores( propietario: string, modulo:string, categoria:string, etiqueta: string): any {
                       
        let options = this.getHeaders();
        let url = API_URL + 'obtenerProveedores';

        let requestGastos = {    
                                "propietario": propietario,
                                "modulo":modulo, 
                                "categoria":categoria,
                                "etiqueta": etiqueta
                            };
        
        return this.http.post(url, requestGastos, options);
    }

    createRequestGastosByProveedor( propietario: string, modulo:string, categoria:string, etiqueta: string, proveedor: string): any{
                       
        let options = this.getHeaders();
        let url = API_URL + 'obtenerGastosByProveedor';

        let requestGastos = {    
                                "propietario": propietario,
                                "modulo": modulo, 
                                "categoria":categoria,
                                "etiqueta": etiqueta,
                                "contactoCorto": proveedor
                            };
        
        return this.http.post(url, requestGastos, options);
    }

    createRequestUpdateProveedor(contacto : Contact): any {
                       
        let options = this.getHeaders();
        let request: any;

        request = JSON.stringify(contacto); //actualizo todo el contacto. 

        
        let url = API_URL + 'actualizarProveedor';
     
        return this.http.post(url, request, options);
    }

    createRequestRemoveProveedor(contacto : Contact): any {
                       
        let options = this.getHeaders();
        let request: any;

        request = JSON.stringify(contacto); //remove contacto. 

        
        let url = API_URL + 'eliminarProveedor';
     
        return this.http.post(url, request, options);
    }

    createRequestAddProveedor(contacto : Contact): any {
                       
        let options = this.getHeaders();
        let request: any;

        request = JSON.stringify(contacto); //agrego un nuevo contacto. 

        let url = API_URL + 'agregarProveedor';
     
        return this.http.post(url, request, options);
    }

    createRequestNewCodigo(propietario: string, modulo : string ): any {

        let options = this.getHeaders();
        let url = API_URL + 'siguienteCodigo';

        let requestCod = {    
                                "propietario": propietario,
                                "modulo": modulo, 
                            };
        
        return this.http.post(url, requestCod, options);
    }

    private getHeaders() {   
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.cookieService.get('tokenAuth'));
        let options = new RequestOptions({ headers });

        return options;
    }
}
