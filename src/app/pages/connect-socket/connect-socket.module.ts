import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectSocketPageRoutingModule } from './connect-socket-routing.module';

import { ConnectSocketPage } from './connect-socket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectSocketPageRoutingModule
  ],
  declarations: [ConnectSocketPage]
})
export class ConnectSocketPageModule {}
