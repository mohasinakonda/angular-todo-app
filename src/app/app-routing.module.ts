import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Nested1Component } from './nested1/nested1.component';
import { Nested2Component } from './nested2/nested2.component';
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
    children: [

      {
        path: 'nested2', component: Nested2Component
      },
      {
        path: 'nested1', component: Nested1Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
