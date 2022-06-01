import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcessionsPageRoutingModule } from './concessions-routing.module';

import { ConcessionsPage } from './concessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcessionsPageRoutingModule
  ],
  declarations: [ConcessionsPage]
})
export class ConcessionsPageModule {}
