import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalImgPreviewPage } from './modal-img-preview.page';

const routes: Routes = [
  {
    path: '',
    component: ModalImgPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalImgPreviewPageRoutingModule {}
