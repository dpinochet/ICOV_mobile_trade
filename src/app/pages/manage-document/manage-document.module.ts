import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageDocumentPageRoutingModule } from './manage-document-routing.module';

import { ManageDocumentPage } from './manage-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageDocumentPageRoutingModule
  ],
  declarations: [ManageDocumentPage]
})
export class ManageDocumentPageModule {}
