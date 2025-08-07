import { Component, ChangeDetectionStrategy, computed, inject, effect } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { toObservable } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-details-panel',
  imports: [],
  templateUrl: './details-panel.component.html',
  styleUrl: './details-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPanelComponent {
  productService = inject(ProductsService);
  selectedProduct = this.productService.getSelectedProduct();
  selectedProduct$ = toObservable(this.selectedProduct);

  ngOnInit(){
    this.selectedProduct$.subscribe(v=>{
      console.log('v',v);
      
    })
    
  }
 
}
