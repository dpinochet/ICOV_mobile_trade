import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestViewModelPage } from './test-view-model.page';

const routes: Routes = [
  {
    path: '',
    component: TestViewModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestViewModelPageRoutingModule {}
