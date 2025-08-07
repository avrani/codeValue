import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { RestApiService } from '../services/rest-api.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  restApi = inject(RestApiService);
  products = signal<Product[]>([]);
  private selectedProduct = signal<any>("")

  loadInit() {
    this.restApi.getProducts().subscribe(res => {
      this.products.set(res);
      this.setSelectedProduct(res[0])
    })
  }

  getProducts() {
    return this.products;
  }

  setSelectedProduct(product: any) {
    this.selectedProduct.set(product);
  }

  getSelectedProduct(){
    return this.selectedProduct.asReadonly();
  }
}
