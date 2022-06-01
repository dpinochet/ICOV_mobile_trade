import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { BehaviorSubject, Observable } from 'rxjs';
import { SqliteServiceService } from './sqlite-service.service';

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {

  connection;
  capacitacionSend;
  incidenciasSend;

  

  notificacion = new BehaviorSubject([]);






  constructor(public http: HttpClient,private _sqlite:SqliteServiceService) {
    console.log('Hello SocketServiceProvider Provider');
    const options = {
      maxReconnectionDelay: 10000,
      minReconnectionDelay: 1000,
      reconnectionDelayGrowFactor: 1.3,
      connectionTimeout: 4000,
      maxRetries: 10,
      debug: false,
      transports: 'websocket'

    }

    this.connection = new ReconnectingWebSocket("wss:vm-icov-003.riosoft.cl/ws/chat/notifications/", [], options);
    
    
    this.connection.addEventListener('message', (event)=> {
      let eventResive_parse = JSON.parse(event.data);

        console.log('notificación socket: ',eventResive_parse);
      this.notificacion.next(eventResive_parse);
      let data ={
        created_at:null,
        event:null,
        image:null,
        message:null,
        type:null,
        user_created:null,
        read:null,
        capacitation_id:null,
        incidencia_id:null,
        promotion_id:null,
        title:null
      }

      data = Object.assign(eventResive_parse);
      try{

       this._sqlite.addNotificacion(data).then((notificacion_insert)=>{
         console.log('notificacion_insert:',notificacion_insert);
       },(err)=>{
         console.log('notificacion_insert_error: ',err);
       });

      }catch(e){
        console.log('addNotificacionCatch: ',e);
      }
      

    });
  }




  addNotificacionCapacitacion(notificacion_capacitation){
    const options = {
      maxReconnectionDelay: 10000,
      minReconnectionDelay: 1000,
      reconnectionDelayGrowFactor: 1.3,
      connectionTimeout: 4000,
      maxRetries: 10,
      debug: false
    }
    this.capacitacionSend = new ReconnectingWebSocket("wss:vm-icov-003.riosoft.cl/ws/chat/capacitaciones_trade/", [], options);
    console.log('notificacion_capacitacion: ',notificacion_capacitation);



      this.capacitacionSend.send(JSON.stringify(notificacion_capacitation));
  
  }

  addNotificacionIncidencia(notificacion_incidencia){
    const options = {
      maxReconnectionDelay: 10000,
      minReconnectionDelay: 1000,
      reconnectionDelayGrowFactor: 1.3,
      connectionTimeout: 4000,
      maxRetries: 10,
      debug: false
    }
    this.incidenciasSend = new ReconnectingWebSocket("wss:vm-icov-003.riosoft.cl/ws/chat/incidencias_trade/", [], options);

    this.incidenciasSend.send(JSON.stringify(notificacion_incidencia));
  }





  getNotificaciones(){
    return this.notificacion.asObservable();
  }
}
