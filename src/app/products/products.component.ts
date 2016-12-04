import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    title: string = 'Product';

    constructor() { }

    ngOnInit() {
    }

}
