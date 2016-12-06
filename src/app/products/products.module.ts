import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Services
import { ProductService } from '../shared/products.service';

// Components
import { ProductsComponent }   from './products.component';

const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductsComponent }
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
    providers: [
        ProductService
    ],
})
export class ProductsModule { }
