import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
//import ReconnectingWebSocket from 'reconnecting-websocket';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {  BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { Instagram } from '@ionic-native/instagram/ngx';
import { AgmCoreModule } from '@agm/core';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS }from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import {AccordionModule} from "ngx-accordion";
import { NgxErrorsModule } from '@hackages/ngxerrors';
import { AgmMarkerClustererModule } from '@agm/markerclusterer';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBV_r5mWF8CnKWGmQAtnCgj0-zko1Mgjlc",
      libraries: ["places"]
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    CommonModule,
    AccordionModule,
    NgxErrorsModule,
    AgmMarkerClustererModule
    
    
  ],
  providers: [
    Camera,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications,
    Push,
    SocialSharing,
  //  ReconnectingWebSocket,
    SQLite,
    InAppBrowser,
    Base64,
    Instagram,
    AgmCoreModule,
    StatusBar,
    
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
