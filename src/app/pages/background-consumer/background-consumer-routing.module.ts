import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackgroundConsumerPage } from './background-consumer.page';

const routes: Routes = [
  {
    path: '',
    component: BackgroundConsumerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackgroundConsumerPageRoutingModule {}
