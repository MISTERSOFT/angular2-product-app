import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/observable/observable';
import 'rxjs/operator/map';

@Injectable()
export class ProductsService {

    constructor(http:Http) { }

    public getProducts(): Array<Observables> {
        // TODO
        return this.http.get();
    }
}
