import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ResponseApi } from './../core/response-api.model';
import { Product } from './../shared/product.model';

import { ProductService } from '../shared/product.service';
import { URLService } from './../core/url.service';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    title: string = 'Product';
    products: Product[] = [];

    constructor(
      private router: Router,
      private productsService: ProductService,
      private urlService: URLService) { }

    ngOnInit() {
        this.productsService.getProducts().subscribe(
          (res: Product[]) => {
              for(let product of res) {
                product.formatID();
              }
              this.products = res;
              console.log('fomatted', this.products);
          }
        );
    }

    gotoAdd() : void {
      this.router.navigateByUrl('/products/add');
    }

    gotoEdit(id: string) : void {
      this.router.navigateByUrl('/products/edit/' + id);
    }

    deleteProduct(id: string) {

    }

}
