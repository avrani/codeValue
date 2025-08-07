import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FiltersPanelComponent } from '../filters-panel/filters-panel.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { DetailsPanelComponent } from '../details-panel/details-panel.component';
import { RestApiService } from '../services/rest-api.service';
@Component({
  selector: 'app-my-store',
  imports: [HeaderComponent, FiltersPanelComponent, ProductsListComponent, DetailsPanelComponent],
  templateUrl: './my-store.component.html',
  styleUrl: './my-store.component.scss'
})
export class MyStoreComponent {
  restApi = inject(RestApiService);

  ngOnInit() {
    this.restApi.getProducts().subscribe(res=>{
      console.log(res);
    })
  }
}
