import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryChipPage } from './delivery-chip.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryChipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryChipPageRoutingModule {}
