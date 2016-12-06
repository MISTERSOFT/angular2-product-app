import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/products.service';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    title: string = 'Product';

    constructor(private productsService: ProductService) { }

    ngOnInit() {
        console.log(this.productsService.getProducts().subscribe(data => console.log(data)));
    }

}
