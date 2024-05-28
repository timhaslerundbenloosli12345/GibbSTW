import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PartsComponent } from './parts/parts.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { PartDetailsComponent } from './part-details/part-details.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'parts', component: PartsComponent},
  {path: 'shopingCart', component: ShopingCartComponent},
  {path: 'part-details', component: PartDetailsComponent},
  {path: 'adminPortal', component: AdminPortalComponent},
  {path: '**', component: HomeComponent}
];
