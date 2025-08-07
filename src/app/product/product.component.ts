import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  product = input<Product>();

  ngOnInit() {
    console.log(this.product());

  }
}
