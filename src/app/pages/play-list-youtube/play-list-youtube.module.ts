import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayListYoutubePageRoutingModule } from './play-list-youtube-routing.module';

import { PlayListYoutubePage } from './play-list-youtube.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayListYoutubePageRoutingModule
  ],
  declarations: [PlayListYoutubePage]
})
export class PlayListYoutubePageModule {}
