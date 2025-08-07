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
  showPanel: boolean = false;
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    desc: new FormControl(''),
    price: new FormControl(0, [Validators.required, greaterThanZero()])
  });

  ngOnInit() {
    this.selectedProduct$.subscribe((product: Product) => {
      this.productImg = `assets/images/${product.img}`;
      this.showPanel =  Object.keys(product).length > 0 ? true : false;
      this.cdr.detectChanges()
      this.productForm.patchValue({
        name: product.name,
        desc: product.desc,
        price: product.price
      });
    })

  }

  save() {

  }
}


