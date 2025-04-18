import { Injectable } from '@angular/core';
import { Product } from './product-read/product.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "https://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

create(product: Product): Observable<Product>{
  return this.http.post<Product>(this.baseUrl, product)
}

read(): Observable<Product[]>{
  return this.http.get<Product[]>(this.baseUrl)
}

readById(id: string): Observable<Product>{
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Product>(url)
}

update(product: Product): Observable<Product>{
  const url = `${this.baseUrl}/${product.id}`
  return this.http.put<Product>(url, product)
}

delete(id: number): Observable<Product>{
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Product>(url)
}

}
