import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from './product.model';
import { ProductService } from './products.service';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    // ProductService,
    CarouselComponent,
    // Product
  ],
  declarations: [
    CarouselComponent
  ]
})
export class SharedModule { }
