import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopOverMenuBe2BePage } from './pop-over-menu-be2-be.page';

const routes: Routes = [
  {
    path: '',
    component: PopOverMenuBe2BePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopOverMenuBe2BePageRoutingModule {}
