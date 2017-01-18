import { Product } from './../shared/product.model';
import { URLService } from './../core/url.service';
import { ResponseApi } from './../core/response-api.model';
import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    titlePage: string = 'Home';

    slides: Array<any> = [];

    constructor(
      private productService: ProductService,
      private urlService: URLService) { }

    ngOnInit() {
      this.getProductsForCarousel();
    }

    getProductsForCarousel() {
      this.productService.getProducts().subscribe((res: Product[]) => {
        this.slides = res.slice(0, 5);
        for(let product of this.slides) {
          product._id = this.urlService.formatURL(product._id);
        }
      });
    }

}
