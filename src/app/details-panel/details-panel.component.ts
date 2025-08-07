import { Component, ChangeDetectionStrategy, computed, inject, effect } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { toObservable } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-details-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './details-panel.component.html',
  styleUrl: './details-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPanelComponent {
  productService = inject(ProductsService);
  selectedProduct = this.productService.getSelectedProduct();
  selectedProduct$ = toObservable(this.selectedProduct);

  productForm = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),
    price: new FormControl(),
  });

  ngOnInit() {
    this.selectedProduct$.subscribe((product: Product) => {
      this.productForm.patchValue({
        name: product.name,
        desc: product.desc,
        price: product.price
      });
    })

  }

}
