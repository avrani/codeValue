import { Component, ChangeDetectionStrategy, ChangeDetectorRef, computed, inject, effect } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { toObservable } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Product } from '../models/product.model';
import { greaterThanZero } from './custom-validation';
@Component({
  selector: 'app-details-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './details-panel.component.html',
  styleUrl: './details-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPanelComponent {
  productService = inject(ProductsService);
  cdr = inject(ChangeDetectorRef);
  selectedProduct = this.productService.getSelectedProduct();
  selectedProduct$ = toObservable(this.selectedProduct);
  productImg: string = '';
  showImage: boolean = false;
  productId: number = NaN;
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    desc: new FormControl(''),
    price: new FormControl(0, [Validators.required, greaterThanZero()])
  });

  ngOnInit() {
    this.selectedProduct$.subscribe((product: Product) => {

      this.productId = product.id;
      console.log(this.productId);
      
      this.productImg = `assets/images/${product.img}`;
      this.showImage = product.img ? true : false;
      this.cdr.detectChanges()
      this.productForm.patchValue({
        name: product.name,
        desc: product.desc,
        price: product.price
      });
    })

  }

  update() {
    const name = this.productForm.value.name || "";
    const desc = this.productForm.value.desc || "";
    const price = this.productForm.value.price || 0;
    this.productService.updateProduct(this.productId, name, desc, price);
  }
}


