import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { RestApiService } from '../services/rest-api.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  restApi = inject(RestApiService);
  products = signal<Product[]>([]);

  loadInit() {
    this.restApi.getProducts().subscribe(res => {
      this.products.set(res);
    })
  }

  getProducts(){
    return this.products;
  }
}
