import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalImgPreviewPageRoutingModule } from './modal-img-preview-routing.module';

import { ModalImgPreviewPage } from './modal-img-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalImgPreviewPageRoutingModule
  ],
  declarations: [ModalImgPreviewPage]
})
export class ModalImgPreviewPageModule {}
