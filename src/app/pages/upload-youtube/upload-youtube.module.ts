import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadYoutubePageRoutingModule } from './upload-youtube-routing.module';

import { UploadYoutubePage } from './upload-youtube.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadYoutubePageRoutingModule
  ],
  declarations: [UploadYoutubePage]
})
export class UploadYoutubePageModule {}
