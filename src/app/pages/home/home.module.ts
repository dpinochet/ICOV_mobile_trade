import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AgmCoreModule } from '@agm/core';
import { AgmMarkerClustererModule } from '@agm/markerclusterer';


@NgModule({
  imports: [
    
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CommonModule,
    ComponentsModule,
    AgmCoreModule,
    AgmMarkerClustererModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
