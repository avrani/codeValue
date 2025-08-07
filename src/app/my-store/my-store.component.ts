import { Component, inject,ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FiltersPanelComponent } from '../filters-panel/filters-panel.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { DetailsPanelComponent } from '../details-panel/details-panel.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-my-store',
  imports: [HeaderComponent, FiltersPanelComponent, ProductsListComponent, DetailsPanelComponent],
  templateUrl: './my-store.component.html',
  styleUrl: './my-store.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyStoreComponent {
  productService = inject(ProductsService);

  ngOnInit() {
    this.productService.loadInit();
  }
}
