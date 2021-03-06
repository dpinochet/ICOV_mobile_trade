import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentsPage } from './incidents.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentsPageRoutingModule {}
