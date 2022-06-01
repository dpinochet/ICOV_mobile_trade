import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeToBePage } from './be-to-be.page';

const routes: Routes = [
  {
    path: '',
    component: BeToBePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeToBePageRoutingModule {}
