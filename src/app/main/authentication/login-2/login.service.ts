import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'environments/environment';

const API_URL : string = environment.API;

@Injectable()
export class LoginService implements Resolve<any>
{

    info: any;

    infoOnChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private http: Http,
        private cookieService: CookieService,
        private _router : Router
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
               //this.login(),
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
    login(username:string, password: string): Promise<any[]>
    {
        return new Promise((resolve, reject) => {

            this.createRequest(username, password)
                .subscribe((info: any) => {
                    this.info = info;
                    if(info != null) { //se logueo 
                        this.cookieService.set('tokenAuth', info.json().token);
                        this.cookieService.set('userName', info.json().username);
                        this._router.navigate(['/gastos']);
                    }

                    console.log(info.json());

                    this.infoOnChanged.next(this.info);

                    //resolve(this.info);
                }, reject);

        });
    }

    createRequest( username: string, password: string): any {
                       
        var headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers });
        let url =  API_URL + 'loginPymex'
        let requestLogin = {    
                                "username":username,
                                "password":password
                            };
        
        return this.http.post(url, requestLogin, options);
    }


}