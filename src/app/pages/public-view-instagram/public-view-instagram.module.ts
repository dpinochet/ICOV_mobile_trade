import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicViewInstagramPageRoutingModule } from './public-view-instagram-routing.module';

import { PublicViewInstagramPage } from './public-view-instagram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicViewInstagramPageRoutingModule
  ],
  declarations: [PublicViewInstagramPage]
})
export class PublicViewInstagramPageModule {}
