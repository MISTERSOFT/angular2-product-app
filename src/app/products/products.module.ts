import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductEditComponent } from './edit/product-edit.component';
import { ProductsComponent }   from './products.component';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'products/edit/:id', component: ProductEditComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [
        RouterModule,
        ProductsComponent,
        ProductEditComponent
    ],
    declarations: [
      ProductsComponent,
      ProductEditComponent
    ]
})
export class ProductsModule { }
