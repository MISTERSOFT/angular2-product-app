import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from './product.model';
import { ProductService } from './product.service';
import { CarouselComponent } from './carousel/carousel.component';
import { EuroPipe } from './euro.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CarouselComponent,
    EuroPipe
  ],
  declarations: [
    CarouselComponent,
    EuroPipe
  ],
  providers: [
    ProductService
  ]
})
export class SharedModule { }
