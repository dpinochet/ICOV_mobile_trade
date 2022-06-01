import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryChipPageRoutingModule } from './delivery-chip-routing.module';

import { DeliveryChipPage } from './delivery-chip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryChipPageRoutingModule
  ],
  declarations: [DeliveryChipPage]
})
export class DeliveryChipPageModule {}
