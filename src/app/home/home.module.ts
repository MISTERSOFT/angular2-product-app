import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './home.component';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
        HomeComponent
    ],
    declarations: [
      HomeComponent
    ],
    providers: []
})
export class HomeModule { }
