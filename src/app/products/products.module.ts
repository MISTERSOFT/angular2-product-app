import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent }   from './products.component';

const routes: Routes = [
    { path: 'products', component: ProductsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
        ProductsComponent
    ],
    declarations: [ProductsComponent],
    providers: [],
})
export class ProductsModule { }
