import { Routes } from '@angular/router';
import { MyStoreComponent } from './my-store/my-store.component';

export const routes: Routes = [
    { path: '', redirectTo: 'my-store', pathMatch: 'full' }, //default route
    { path: 'my-store', component: MyStoreComponent },
    { path: '**', component: MyStoreComponent }
];
