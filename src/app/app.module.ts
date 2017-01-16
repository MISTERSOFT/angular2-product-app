import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonAppModule } from './common/common-app.module';

import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    // My modules
    HomeModule,
    ProductsModule,
    CommonAppModule
  ],
  providers: [
    SharedModule,
    CommonAppModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
