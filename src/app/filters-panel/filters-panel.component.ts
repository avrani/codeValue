import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filters-panel',
  imports: [FormsModule],
  templateUrl: './filters-panel.component.html',
  styleUrl: './filters-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersPanelComponent {
  productService = inject(ProductsService);
  selected: string = ''
  add() {
    const newProduct: Product = {
      id: this.setId(),
      name: '',
      desc: '',
      price: 1,
      creation_date: Date.now(),
      img: '',
      hide: false
    }
    this.productService.setSelectedProduct(newProduct);
  }

  setId() {
    const products = this.productService.getProducts();
    let ids = products().map(item => item.id);
    ids.sort(function (a, b) {
      return a - b;
    });
    const lastId = ids.slice(-1)[0];
    return lastId + 1;
  }

  sort(property: string) {
    this.productService.sortBy(property);
  }
}
