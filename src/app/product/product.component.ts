import { Component, input, inject, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  product = input<Product>();
  productService = inject(ProductsService);

  onSelect() {
    this.productService.setSelectedProduct(this.product())
  }

  delete() {
    this.productService.deleteProduct(this.product());
    this.productService.setSelectedProduct({})
  }
}
