import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicViewInstagramPage } from './public-view-instagram.page';

const routes: Routes = [
  {
    path: '',
    component: PublicViewInstagramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicViewInstagramPageRoutingModule {}
