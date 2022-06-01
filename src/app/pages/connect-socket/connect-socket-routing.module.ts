import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectSocketPage } from './connect-socket.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectSocketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectSocketPageRoutingModule {}
