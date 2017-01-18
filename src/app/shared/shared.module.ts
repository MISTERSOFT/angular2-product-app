import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from './product.model';
import { ProductService } from './product.service';
import { CarouselComponent } from './carousel/carousel.component';
import { EuroPipe } from './euro.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    // Angular
    CommonModule,
    FormsModule,
    // Mine
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
