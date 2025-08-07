import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products.json');
  }
}
