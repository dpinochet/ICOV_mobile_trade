import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryPublishPage } from './delivery-publish.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryPublishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryPublishPageRoutingModule {}
