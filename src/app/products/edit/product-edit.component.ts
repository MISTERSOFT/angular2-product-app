import { Component, OnInit, Class, Attribute } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from './../../shared/product.model';
import { ProductService } from './../../shared/product.service';
declare var Materialize: any;

@Component({
    selector: 'app-product-edit',
    templateUrl: 'product-edit.component.html'
})
export class ProductEditComponent implements OnInit {

    private urlRegexPattern: RegExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    private priceRegexPattern: RegExp = /^\d+(.\d{1,2})?$/;

    showInfo: boolean = false;
    product: Product = null;
    inputMessages = {
        price: {
            error: 'Bad price synthax',
            success: 'Good'
        },
        url: {
            error: 'Put a valid URL',
            success: 'Good'
        },
    };

    constructor(
        private activateRoute: ActivatedRoute,
        private productService: ProductService) { }

    ngOnInit() {
        let id = this.activateRoute.snapshot.params['id'];
        this.productService.getProductById(id).subscribe(
            (data) => {
                data.formatID();
                this.product = data;
                this.showInfo = true;
            }
        );
    }

    private isValidForm() {
        let noErrors = true;
        // Check price
        if (!this.priceRegexPattern.test(this.product.price.toString())) {
            noErrors = false;
        }
        // Check if URLs are valid
        if ((!this.urlRegexPattern.test(this.product.image) && this.product.image !== '') || (!this.urlRegexPattern.test(this.product.thumb) && this.product.thumb !== '')) {
            noErrors = false;
        }
        return noErrors;
    }

    updateProduct() {
        if (this.isValidForm()) {
            this.productService.updateProduct(this.product).subscribe(
                (data) => {
                    Materialize.toast('Product successfully updated', 5000);
                }
            )
        }
        else {
            Materialize.toast('You try to send an invalid form', 5000);
        }
    }
}
