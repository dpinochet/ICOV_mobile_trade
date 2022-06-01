import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadYoutubePage } from './upload-youtube.page';

const routes: Routes = [
  {
    path: '',
    component: UploadYoutubePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadYoutubePageRoutingModule {}
