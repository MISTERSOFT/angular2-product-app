import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductEditComponent } from './edit/product-edit.component';
import { ProductAddComponent } from './add/product-add.component';
import { ProductsComponent }   from './products.component';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'products/edit/:id', component: ProductEditComponent },
    { path: 'products/add', component: ProductAddComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
      ProductsComponent,
      ProductEditComponent,
      ProductAddComponent
    ]
})
export class ProductsModule { }
