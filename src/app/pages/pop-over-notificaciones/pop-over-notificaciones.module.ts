import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopOverNotificacionesPageRoutingModule } from './pop-over-notificaciones-routing.module';

import { PopOverNotificacionesPage } from './pop-over-notificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopOverNotificacionesPageRoutingModule
  ],
  declarations: [PopOverNotificacionesPage]
})
export class PopOverNotificacionesPageModule {}
