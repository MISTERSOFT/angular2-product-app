import { Injectable } from '@angular/core';
import {
    Http,
    Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from './product.model';

@Injectable()
export class ProductService {
    private apiUrl: string = 'http://localhost:3001/';

    constructor(private http: Http) { }

    public getProducts(): Observable<Product[]> {
        return this.http
            .get(this.apiUrl + 'products')
            .map(this.success)
            .catch(this.error);
    }

    private success(response: Response) {
        console.log('response', response.json());
        return response.json().data;
    }

    private error(error: Response) {
        let errMessage: string;
        if (error instanceof Response) {
            let body = error.json() || '';
            let err = body.error || JSON.stringify(body);
            errMessage = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            //errMessage = error.statusText ? error.statusText : error.toString();
            errMessage = 'An error occurred';
        }
        console.log(errMessage);
        return Observable.throw(errMessage);
    }
}
