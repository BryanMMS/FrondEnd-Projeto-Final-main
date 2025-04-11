import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './component/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './component/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';

import{MatCardModule} from '@angular/material/card';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductReadComponent } from './component/product/product-read/product-read.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import { SupplierReadComponent } from './component/supplier/supplier-read/supplier-read.component';
import { SupplierCrudComponent } from './views/supplier-crud/supplier-crud.component';
import { PaymentMethodReadComponent } from './component/paymentMethod/payment-method-read/payment-method-read.component';
import { PaymentMethodCrudComponent } from './views/payment-method-crud/payment-method-crud.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductReadComponent,
    SupplierReadComponent,
    SupplierCrudComponent,
    PaymentMethodReadComponent,
    PaymentMethodCrudComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 