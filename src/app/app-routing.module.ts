import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';

import { ShopComponent } from './shop/shop.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },

  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'welcome', component: WelcomeComponent,

  },
  {
    path: 'contact-us', component: FormsComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
