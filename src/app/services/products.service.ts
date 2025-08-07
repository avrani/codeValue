import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { RestApiService } from '../services/rest-api.service';
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
    this.selectedProduct.update(v => ({ ...product }));
  }

  getSelectedProduct() {
    return this.selectedProduct.asReadonly();
  }

  deleteProduct(product: any) {
    this.products.update(products => products.filter(item => item.id !== product.id));
  }

  updateProduct(id: number, name: string, desc: string, price: number) {
    let productIds = this.products().map(item => item.id);
    if (productIds.includes(id)) {
      this.products.update(products => products.map((item: Product) => {
        if (item.id === id) {
          item.name = name;
          item.desc = desc;
          item.price = price;
        }
        return { ...item };
      }));
    } else {
      const newProduct: Product = { id: id, name: name, desc: desc, price: price, creation_date: Date.now(), img: '', hide: false }
      this.products.update(currentItems => [...currentItems, newProduct]);
    }

  }

  sortBy(property: any) {
    let products = this.getProducts()();
    products.sort((a, b) => {
      let prop1: number | string = '';
      let prop2: number | string = '';
      if (property === 'name') {
        prop1 = a.name.toUpperCase();
        prop2 = b.name.toUpperCase();
      } else {
        prop1 = a.creation_date;
        prop2 = b.creation_date;
      }
      if (prop1 < prop2) {
        return -1;
      }
      if (prop1 > prop2) {
        return 1;
      }
      return 0;
    });
    this.products.update(v => [...products]);
  }
}
