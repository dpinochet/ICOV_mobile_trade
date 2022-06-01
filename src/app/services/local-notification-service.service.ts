import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { LocalNotifications } from '@ionic-native/local-notifications';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
//import { NavController } from 'ionic-angular';
//import { CapacitacionPage } from '../../pages/capacitacion/capacitacion';
//import { IncidenciasPage } from '../../pages/incidencias/incidencias';
//import { MetasPage } from '../../pages/metas/metas';
//import { ComuniComponentProvider } from '../comuni-component/comuni-component';
import { ComunicacionComponentService } from './comunicacion-component.service';

@Injectable({
  providedIn: 'root'
})
export class LocalNotificationServiceService {

  userData=null;

  constructor(public http: HttpClient,private localNotifications: LocalNotifications,private _comunic:ComunicacionComponentService) {
    console.log('Hello LocalNotificationServiceProvider Provider');
  }



 async addNotification(notificacion){
    console.log('notificacion-push: ',notificacion);


    let user_data_parse_json = localStorage.getItem('userData');
  
    let user_data_json_parse =JSON.parse(user_data_parse_json);
    this.userData = user_data_json_parse[0];

    if(this.userData.email===notificacion.user_created){}else{

      let all_notification = await this.localNotifications.getAll();
  
      console.log('get-all-notification: ',all_notification);
  
  
      let title= '';
      if(notificacion.title!=undefined){
        
        title=notificacion.title+' ';
      }
      this.localNotifications.schedule({
        id: all_notification.length,
        title:title+'('+notificacion.event+')',
        text: notificacion.message,
        icon:'https://firebasestorage.googleapis.com/v0/b/windweather-21549.appspot.com/o/trade-logo.png?alt=media&token=42a3c792-1884-4c4b-bb98-5385c0613437',
        smallIcon:'res://drawable/ic_launcher',
        attachments	:[notificacion.image],
        actions:[],
        data: notificacion
        // // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
        // data: data
      });
      
      this.localNotifications.on('click').subscribe((notificacion_suscribe)=>{
          if(notificacion_suscribe.data.event==='capacitacion'){
            this._comunic.addItem({name:'openPage',namePage:'capacitacion'});
       
          }if(notificacion_suscribe.data.event==='incidencias'){
            this._comunic.addItem({name:'openPage',namePage:'incidencias'});
          }if(notificacion_suscribe.data.event==='promocion'){
            this._comunic.addItem({name:'openPage',namePage:'promocion'});
          }
            console.log('notificacion_suscribe: ',notificacion_suscribe);
      })
    }


  }
}
