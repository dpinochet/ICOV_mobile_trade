import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { Storage } from '@capacitor/storage';
//import { Storage } from '@ionic/storage';
import { BaseServicesService } from './base-services.service';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PosServicesService {

   // public url: string = '';
   public url: string = 'https://vm-icov-003.riosoft.cl/api/v1/';
   // public url: string = 'http://192.168.100.9:8001/api/v1/';
 
   // public url: string = 'http://192.168.100.7:8000/api/v1/';
 
   constructor(public http: HttpClient,
     private base: BaseServicesService,
     ) {
 
     // this.storage.get('base_url').then((val) => {
     //   this.url = val + "api/v1/";
     // });
 
   }
 
   /** procesamos la respuesta de Error
   * @param {dataPos} <any> Save one Point of Sales.
   * Note: Subsidiary = POS
   */
   postPos(dataPos): Observable<any> {
     let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
 
     return this.http.post(this.url + 'subsidiary/?', dataPos, { headers: headers }).pipe(
       map(this.base.extractData),
       catchError(this.base.handleError));
   }
 
   /** llamamos todas los puntos de venta que esten en un radio de 500 mts
   * @param {lat lng} <float> Lat = Latitude - Lng = Longitude .
   * Note: Subsidiary = POS
   */
   getNearPos(lat: number, lng: number): Observable<any> {
     let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
     console.log("URL1 = " + this.url + 'subsidiary/?lat=' + lat + '&lng=' + lng);

     return this.http.get(this.url + 'subsidiary/?lat=' + lat + '&lng=' + lng, { headers: headers }).pipe(
       map(this.base.extractData),
       catchError(this.base.handleError));
   }

 
 
   obtainConcessionsBackend(id_subsidiary): Observable<any> {
     let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
     return this.http.get(this.url + 'subsidiaryConsecion/' + id_subsidiary, { headers: headers }).pipe(
       map(this.base.extractData),
       catchError(this.base.handleError));
   }
 
 
   get_categories(): Observable<any> {
     let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
     return this.http.get(this.url + 'categories/', { headers: headers }).pipe(
       map(this.base.extractData),
       catchError(this.base.handleError));
   }
 
 
   updateConcessionsBackend(id_subsidiary, quantity_update): Observable<any> {
     let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
     let form_data = {
       subsidiary_id: id_subsidiary,
       consecion_quantity_to_update: quantity_update
     };
     return this.http.post(this.url + 'subsidiaryConsecionUpdate/?', form_data, { headers: headers }).pipe(
       map(this.base.extractData),
       catchError(this.base.handleError));
   }
 
}
