import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-products-list',
  imports: [ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  productService = inject(ProductsService);
  products = signal<Product[]>([]);

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
