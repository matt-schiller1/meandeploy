import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/products');
  }
  addProduct(newProduct) {
    return this.http.post('/products/new', newProduct);
  }
  getProduct(productID): Observable<Product[]> {
    return this.http.get<Product[]>('/' + productID);
  }
  updateProduct(editProduct: Product): Observable<Product> {
    return this.http.put<Product>(`/update/${editProduct._id}`, editProduct);
  }
  deleteProduct(productID: string): Observable<Product> {
    return this.http.delete<Product>(`/remove/${productID}`);
  }
}
