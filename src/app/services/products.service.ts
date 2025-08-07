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

  deleteProduct(product: any){
    this.products.update(products=> products.filter(item=>item.id!==product.id));
  }
}
