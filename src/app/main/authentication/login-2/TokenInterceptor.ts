//import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
//import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { map } from 'rxjs/operators';



const API_URL: string = 'http://10.100.58.83:8082/pymex/';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public cookieService: CookieService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
/* 
        if ( (request.url != undefined) && ( request.url.endsWith('loginPymex') )) {
            return next.handle(request);
        } */
        
        let token = this.cookieService.get('tokenAuth');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }));
    }
}