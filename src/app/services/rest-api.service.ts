import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  http = inject(HttpClient);

  getProducts() {
    return this.http.get('assets/products.json');
  }
}
