import { ConfigService } from './../../core/config.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { Product } from './../../shared/product.model';
import { ProductService } from './../../shared/product.service';
declare var Materialize: any;

@Component({
  selector: 'app-product-add',
  templateUrl: 'product-add.component.html'
})
export class ProductAddComponent implements OnInit {

  addForm: FormGroup;

  constructor(
    private appConfig: ConfigService,
    private productService: ProductService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.compose([Validators.required, this.greaterOrEqualThanZero])],
      color: ['', Validators.required],
      material: ['', Validators.required],
      department: ['', Validators.required],
      image: ['', Validators.required],
      thumb: ['', Validators.required]
    })
  }

  addProduct() {
    if (this.addForm.valid) {
      let product = new Product(this.addForm.value);
      this.productService.createProduct(product).subscribe((data) => {
        if (data.success) {
          Materialize.toast('Product successfully updated', 5000);
        }
      });
    }
  }

  /**
   * Custom Validator for price
   */
  greaterOrEqualThanZero(c : FormControl) {
    if (c.value >= 0) {
      return null;
    }
    return { isValid: false };
  }

  getMessage(key, type) : string {
    if (type === 'error') {
      return this.appConfig.getErrorMessage(key);
    }
    if (type === 'success') {
      return this.appConfig.getSuccessMage(key);
    }
  }
}
