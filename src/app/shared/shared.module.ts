import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { Product } from './product.model';
import { ProductService } from './product.service';
import { CarouselComponent } from './carousel/carousel.component';
import { EuroPipe } from './euro.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
