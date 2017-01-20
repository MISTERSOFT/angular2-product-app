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

    /**
     * Get all products
     * @return {Observable<Product[]>} Products
     */
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

    /**
     * Get product by ID
     * @param {string} id - Product ID
     * @return {Observable<Product>} A product
     */
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

    /**
     * Delete product by ID
     * @param {string} id - Product ID
     * @return {Observable<any>} Response about the deletion
     */
    public deleteProduct(id: string) {
      return this.http
        .delete(this.apiUrl + id)
        .map(this.success)
        .catch(this.error);
    }

    /**
     * Update a product
     * @param {Product} id - Product ID
     * @return {Observable<any>} Response about the modification
     */
    public updateProduct(product : Product) {
      return this.http
        .put(this.apiUrl, product)
        .map(this.success)
        .catch(this.error);
    }

    /**
     * Create a product
     * @param {Product} product - Product ID
     * @return {Observable<any>} Response about the insertion
     */
    public createProduct(product: Product) {
      return this.http
        .post(this.apiUrl, product)
        .map(this.success)
        .catch(this.error);
    }

    /**
     * Success callback
     */
    private success(response: Response) {
        console.log('ProductService - response : ', response.json());
        return response.json();
    }

    /**
     * Error callback
     */
    private error(error : Response) {
        let errMessage: string;
        let body = error.json() || '';
        let err = body.error || JSON.stringify(body);

        errMessage = `${error.status} - ${error.statusText || ''} ${err}`;

        return Observable.throw(errMessage);
    }

}
