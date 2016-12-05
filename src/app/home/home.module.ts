import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Attendre la version stable de 'ng2-bootstrap'
 * afin que cala puisse marcher avec Angular 2.2.1
 */
// import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

import { HomeComponent }   from './home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [
        // CarouselModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
        HomeComponent
    ],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
