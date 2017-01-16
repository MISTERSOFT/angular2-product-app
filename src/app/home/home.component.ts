import { URLService } from './../common/url.service';
import { ResponseApi } from './../shared/response-api.model';
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

    constructor(private productService: ProductService, private urlService: URLService) {
        this.slides = [
            {active: false, image: 'http://lorempixel.com/980/480/food/', title: 'Quis eu consectetur culpa aliqua fugiat aliqua.', text: 'Non occaecat elit deserunt tempor sint quis cillum. Sit dolore duis laborum consequat pariatur deserunt qui commodo nulla. Et aliquip aliquip magna sint sunt nostrud commodo eu. Ea fugiat eiusmod incididunt minim aliqua irure non cillum voluptate.'},
            {active: false, image: 'http://lorempixel.com/980/480/food/', title: 'Quis eu consectetur culpa aliqua fugiat aliqua.', text: 'Non occaecat elit deserunt tempor sint quis cillum. Sit dolore duis laborum consequat pariatur deserunt qui commodo nulla. Et aliquip aliquip magna sint sunt nostrud commodo eu. Ea fugiat eiusmod incididunt minim aliqua irure non cillum voluptate.'},
            {active: false, image: 'http://lorempixel.com/980/480/food/', title: 'Quis eu consectetur culpa aliqua fugiat aliqua.', text: 'Non occaecat elit deserunt tempor sint quis cillum. Sit dolore duis laborum consequat pariatur deserunt qui commodo nulla. Et aliquip aliquip magna sint sunt nostrud commodo eu. Ea fugiat eiusmod incididunt minim aliqua irure non cillum voluptate.'},
            {active: true, image: 'http://lorempixel.com/980/480/food/', title: 'Quis eu consectetur culpa aliqua fugiat aliqua.', text: 'Non occaecat elit deserunt tempor sint quis cillum. Sit dolore duis laborum consequat pariatur deserunt qui commodo nulla. Et aliquip aliquip magna sint sunt nostrud commodo eu. Ea fugiat eiusmod incididunt minim aliqua irure non cillum voluptate.'}
        ];
    }

    ngOnInit() {
      this.getProductsForCarousel();
    }

    getProductsForCarousel() {
      this.productService.getProducts().subscribe((response: ResponseApi) => {
        if (response.success) {
          this.slides = response.result.slice(0, 5);
          for(let product of this.slides) {
            product._id = this.urlService.formatURL(product._id);
          }
        }
      });
    }

}
