import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicViewFacebookPage } from './public-view-facebook.page';

const routes: Routes = [
  {
    path: '',
    component: PublicViewFacebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicViewFacebookPageRoutingModule {}
