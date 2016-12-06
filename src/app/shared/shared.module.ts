import { NgModule } from '@angular/core';

import { ProductService }   from './products.service';

@NgModule({
    imports: [],
    exports: [
        ProductService
    ],
    declarations: [
        ProductService
    ],
    providers: [],
})
export class SharedModule { }
