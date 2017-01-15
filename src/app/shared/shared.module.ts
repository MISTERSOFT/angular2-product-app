import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from './product.model';
import { ProductService } from './product.service';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CarouselComponent,
    ProductService
  ],
  declarations: [
    CarouselComponent,
    ProductService
  ],
  providers: [
    ProductService
  ]
})
export class SharedModule { }
