import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeToBePageRoutingModule } from './be-to-be-routing.module';

import { BeToBePage } from './be-to-be.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeToBePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BeToBePage]
})
export class BeToBePageModule {}
