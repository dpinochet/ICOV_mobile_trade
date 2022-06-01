import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicViewFacebookPageRoutingModule } from './public-view-facebook-routing.module';

import { PublicViewFacebookPage } from './public-view-facebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicViewFacebookPageRoutingModule
  ],
  declarations: [PublicViewFacebookPage]
})
export class PublicViewFacebookPageModule {}
