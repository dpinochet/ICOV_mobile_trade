import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComposeTweetPageRoutingModule } from './compose-tweet-routing.module';

import { ComposeTweetPage } from './compose-tweet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComposeTweetPageRoutingModule
  ],
  declarations: [ComposeTweetPage]
})
export class ComposeTweetPageModule {}
