import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B2bViewProductPage } from './b2b-view-product.page';

const routes: Routes = [
  {
    path: '',
    component: B2bViewProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B2bViewProductPageRoutingModule {}
