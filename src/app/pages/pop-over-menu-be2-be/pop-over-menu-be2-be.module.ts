import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopOverMenuBe2BePageRoutingModule } from './pop-over-menu-be2-be-routing.module';

import { PopOverMenuBe2BePage } from './pop-over-menu-be2-be.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopOverMenuBe2BePageRoutingModule
  ],
  declarations: [PopOverMenuBe2BePage]
})
export class PopOverMenuBe2BePageModule {}
