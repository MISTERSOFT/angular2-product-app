import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { Product } from './../../shared/product.model';
import { ProductService } from './../../shared/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: 'product-add.component.html'
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();
  addForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0 , Validators.compose([Validators.required, this.greaterOrEqualThanZero])],
      color: ['', Validators.required],
      material: ['', Validators.required],
      department: ['', Validators.required],
      image: ['', Validators.required],
      thumb: ['', Validators.required],
    })
  }

  addProduct(event) {
    console.log('submit add form : ', event);
    // this.productService.createProduct(this.product).subscribe((data) => {
    //   // TODO
    // });
  }

  /**
   * Custom Validator for price
   */
  greaterOrEqualThanZero(c : FormControl) {
    console.log('value :', c.value);
    console.log('value change :', c.valueChanges);
    return {
      isValid: true
    };
  }
}
