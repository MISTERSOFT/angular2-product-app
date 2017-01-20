import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ResponseApi } from './../core/response-api.model';
import { Product } from './../shared/product.model';

import { ProductService } from '../shared/product.service';
import { URLService } from './../core/url.service';

declare var Materialize: any;

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    title: string = 'Products';
    products: Product[] = [];

    constructor(
      private router: Router,
      private productsService: ProductService,
      private urlService: URLService) { }

    ngOnInit() {
        this.productsService.getProducts().subscribe(
          (res: Product[]) => {
              for(let product of res) {
                product._id = product.formatID();
              }
              this.products = res;
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
      this.productsService.deleteProduct(id).subscribe((data) => {
        console.log('data received ', data);
        if (data.success) {
          let idOfDeletedProduct = data.result.id.replace('products/', ''); // get just the random string
          // Delete the deleted product
          for (var i = 0; i < this.products.length; i++) {
            if (this.products[i]._id === idOfDeletedProduct) {
              this.products.splice(i, 1);
            }
          }
          Materialize.toast('Product successfully deleted', 5000);
        }
      });
    }

}
