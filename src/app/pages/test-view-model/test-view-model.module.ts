import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestViewModelPageRoutingModule } from './test-view-model-routing.module';

import { TestViewModelPage } from './test-view-model.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestViewModelPageRoutingModule,
    
  ],
  declarations: [TestViewModelPage]
})
export class TestViewModelPageModule {}
