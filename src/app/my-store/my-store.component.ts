import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FiltersPanelComponent } from '../filters-panel/filters-panel.component';
import { ProductComponent } from '../product/product.component';
import { DetailsPanelComponent } from '../details-panel/details-panel.component';
@Component({
  selector: 'app-my-store',
  imports: [HeaderComponent,FiltersPanelComponent,ProductComponent,DetailsPanelComponent],
  templateUrl: './my-store.component.html',
  styleUrl: './my-store.component.scss'
})
export class MyStoreComponent {

}
