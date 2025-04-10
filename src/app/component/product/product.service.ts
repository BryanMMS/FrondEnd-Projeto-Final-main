import { Injectable } from '@angular/core';
import { Product } from './product-read/product.model';
import { Observable } from 'rxjs';

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
  const url = '${this.baseUrl}/${id}'
  return this.http.get<Product>(url)
}

}
