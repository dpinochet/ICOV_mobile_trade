import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopOverNotificacionesPage } from './pop-over-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: PopOverNotificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopOverNotificacionesPageRoutingModule {}
