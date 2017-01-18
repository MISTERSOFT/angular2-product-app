import { Injectable } from '@angular/core';
import {
    Http,
    Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ResponseApi } from './../core/response-api.model';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    private apiUrl: string = 'http://localhost:3001/products/';

    constructor(private http: Http) { }

    public getProducts(): Observable<Product[]> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => {
              let data : ResponseApi = res.json();
              let products : Product[] = [];

              if (data.success) {
                for (let p of data.result) {
                  products.push(new Product(p));
                }
              }

              return products;
            })
            .catch(this.error);
    }

    public getProductById(id: string): Observable<Product> {
      return this.http
        .get(this.apiUrl + id)
        .map((res: Response) => {
          let data : ResponseApi = res.json();
          let p: Product = null;

          if (data.success) {
            p = new Product(data.result);
          }

          return p;
        })
        .catch(this.error);
    }

    public deleteProduct(id: string) {
      return this.http
        .delete(this.apiUrl + id)
        .map(this.success)
        .catch(this.error);
    }

    public updateProduct(product : Product) {
      return this.http
        .put(this.apiUrl, product)
        .map(this.success)
        .catch(this.error);
    }

    public createProduct(product: Product) {
      return this.http
        .post(this.apiUrl, product)
        .map(this.success)
        .catch(this.error);
    }

    private success(response: Response) {
        console.log('ProductService - response : ', response.json());
        return response.json();
    }

    private error(error : Response) {
        let errMessage: string;
        let body = error.json() || '';
        let err = body.error || JSON.stringify(body);

        errMessage = `${error.status} - ${error.statusText || ''} ${err}`;

        return Observable.throw(errMessage);
    }

}
