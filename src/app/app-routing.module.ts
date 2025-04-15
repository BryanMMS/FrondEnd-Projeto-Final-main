import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { SupplierCreateComponent } from './component/supplier/supplier-create/supplier-create.component';
import { SupplierCrudComponent } from './views/supplier-crud/supplier-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent 
  },
  {
    path: "products",
    component: ProductCrudComponent
  },

  {
    path:"products/create",
    component: ProductCreateComponent
  },


  {
    path:"suppliers",
    component: SupplierCrudComponent
  },

  {
    path: "suppliers/create",
    component: SupplierCreateComponent
  }

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
