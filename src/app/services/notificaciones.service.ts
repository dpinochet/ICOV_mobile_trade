import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { BaseServicesService } from './base-services.service';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  private comunicacion = new Subject<any>();
  public promocionesComunicacion = this.comunicacion.asObservable();
  public incidenciasComunicacion = this.comunicacion.asObservable();
  // private receiver:  WebSocket = new WebSocket('ws://' + '192.168.100.9:8001' + '/promotions/');
  //  public url: string = 'http://192.168.100.9:8001/api/v1/';
  public url: string = 'https://vm-icov-003.riosoft.cl/api/v1/';
  constructor(public http: HttpClient,public base:BaseServicesService) {
    console.log('Hello NotificacionesProvider Provider');
    // this.getNotificacion();
  }



  //  getNotificacion(){

    
  //     this.receiver.onmessage = (event) =>{ 
  //       console.log('event_socket: ',JSON.parse(event.data));
  //       this.addItem(JSON.parse(event.data));
        
      
  //     };
  //   }



    addItem(data){
      this.comunicacion.next(data);
    }



    async getPromocionesUserNoVisto(user){
      /**
       * promociones no leidas
       */
      let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url+'promotions-to-see/?id_user='+user, { headers: headers }).toPromise();
    }

    async getPromocionesUserVisto(user){
      /**
       * promociones leidas
       */
      let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url+'promotions-seen/?id_user='+user, { headers: headers }).toPromise();
    }

    async getPromocionesUserAll(user){
      let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url+'promotions-users/?id_user='+user, { headers: headers }).toPromise();
    }

    async getPromociones(){
      /**
       * obtiene todas las promociones
       */
      let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url+'promotions/', { headers: headers }).toPromise();
    }

     setMarcarComoLeidaPromociones(data){
       /**
        *  para marcar las promociones leidas
        */
       console.log('marcar-como-leido: ',data);
      let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
      return this.http.post(this.url+'promotions-users/',data, { headers: headers }).toPromise();
    }

    setRegistrarPhoto(data,id){
      /**
       *  para marcar las promociones leidas
       */
      console.log('marcar-como-leido-data: ',data);
      console.log('marcar-como-leido-id',id);
     let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
     return this.http.patch(this.url+'promotions-users/'+id+"/",data, { headers: headers }).toPromise();
   }


   //notificaciones


   //historial

   getHistorialCapacitation(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url+'capacitation/', { headers: headers }).toPromise();
   }

   getHistorialIncidencias(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url+'incidencias/', { headers: headers }).toPromise();
   }

   getHistorialPromotion(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url+'promotions/', { headers: headers }).toPromise();
   }

   getPromotionRead(user){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url+'promotions-seen/?user='+user, { headers: headers }).toPromise();
   }


   //post

   addCapacitation(capacitationChat){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url+'capacitation/',capacitationChat, { headers: headers }).toPromise();
   }

   addIncidencias(incidenciaChat){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url+'incidencias/',incidenciaChat, { headers: headers }).toPromise();
   }

  //  addPromotion(){
  //   let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
  //   return this.http.post(this.url+'promotions-users/',data, { headers: headers }).toPromise();
  //  }




  postMarcarComoLeidaMeta(pathData){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url+'promotions-users/',pathData, { headers: headers }).toPromise();
  }

}
