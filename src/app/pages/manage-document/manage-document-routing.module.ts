import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageDocumentPage } from './manage-document.page';

const routes: Routes = [
  {
    path: '',
    component: ManageDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageDocumentPageRoutingModule {}
