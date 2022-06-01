import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryPublishPageRoutingModule } from './delivery-publish-routing.module';

import { DeliveryPublishPage } from './delivery-publish.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryPublishPageRoutingModule,
    
  ],
  declarations: [DeliveryPublishPage]
})
export class DeliveryPublishPageModule {}
