import { NgModule } from '@angular/core';

import { SharedService }   from './shared.service';

@NgModule({
    imports: [],
    exports: [
        SharedService
    ],
    declarations: [
        SharedService
    ],
    providers: [],
})
export class SharedModule { }
