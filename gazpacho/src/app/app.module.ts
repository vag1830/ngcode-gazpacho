import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component'
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/core/product.service';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridList, MatGridTile, MatToolbar } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    MatGridList,
    MatGridTile,
    MatToolbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
