import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackgroundConsumerPageRoutingModule } from './background-consumer-routing.module';

import { BackgroundConsumerPage } from './background-consumer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackgroundConsumerPageRoutingModule
  ],
  declarations: [BackgroundConsumerPage]
})
export class BackgroundConsumerPageModule {}
