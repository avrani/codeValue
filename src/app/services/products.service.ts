import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { RestApiService } from '../services/rest-api.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  restApi = inject(RestApiService);

  loadInit() {
    this.restApi.getProducts().subscribe(res => {
      console.log(res);
    })
  }

}
