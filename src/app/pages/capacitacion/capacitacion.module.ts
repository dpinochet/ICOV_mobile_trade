import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitacionPageRoutingModule } from './capacitacion-routing.module';

import { CapacitacionPage } from './capacitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitacionPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CapacitacionPage]
})
export class CapacitacionPageModule {}
