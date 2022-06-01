import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2bViewProductPageRoutingModule } from './b2b-view-product-routing.module';

import { B2bViewProductPage } from './b2b-view-product.page';
import {AccordionModule} from "ngx-accordion";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B2bViewProductPageRoutingModule,
    ReactiveFormsModule,
    AccordionModule
  ],
  declarations: [B2bViewProductPage]
})
export class B2bViewProductPageModule {}
