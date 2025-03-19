import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [

{path: '', component: HomePageComponent},
{path: 'cart', component: CartPageComponent},
    
];
