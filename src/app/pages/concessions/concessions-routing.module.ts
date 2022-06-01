import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcessionsPage } from './concessions.page';

const routes: Routes = [
  {
    path: '',
    component: ConcessionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcessionsPageRoutingModule {}
