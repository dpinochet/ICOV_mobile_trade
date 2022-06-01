import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import { Storage } from '@ionic/storage';
import { BaseServicesService } from './base-services.service';
import { Storage } from '@capacitor/storage';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DeliveryServicesService {

  // public url: string = 'https://vm-icov-001.riosoft.cl/api/v1/';
  public url: string = 'https://vm-icov-003.riosoft.cl/api/v1/';
  // public url: string = 'http://192.168.100.9:8001/api/v1/';
  // public url: string = '';

  constructor(public http: HttpClient,
    public base: BaseServicesService,
   ) {

    /*Storage.get('base_url').then((val) => {
      this.url = val+'api/v1/';
    });*/
    
    this.geturl();
  }

 async geturl()
  {
    const { value } = await Storage.get({ key: 'base_url'});
    console.log("url",value)
    this.url = value+'api/v1/';
  }
  postDelivery(dataDelivery): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url + 'publish/', dataDelivery, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
      
  }

  publishv2(dataDelivery){
      console.log('data-delivery: ',dataDelivery);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url + 'publishv2/', dataDelivery, { headers: headers }).toPromise();
  }

  publishPhoto(data){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url + 'publish-photo/', data, { headers: headers }).toPromise();
  }

  subsidiaryb2bmobileproducts(id_subsidiary,brand_id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'reports/subsidiary-b2b-mobile-products/?brand_id='+brand_id+'&id_subsidiary='+id_subsidiary+'', { headers: headers }).toPromise();
  }

  lowstockproduct(data){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url + 'low-stock-product/', data, { headers: headers }).toPromise();
  }

  getDeliveryChips(barCode): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'chip/?lccid=' + barCode, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  getStoresCatalog(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'stores', { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  getVisitsByUserDay(date): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'reports/visit-subsidiaryv5/?user_email='+ this.base.getDataUser() +'&day='+date, { headers: headers }).pipe(
    // return this.http.get(this.url + 'reports/visit-subsidiaryv5/?user_email=contacto@icov.cl&day=2018-12-19', { headers: headers })
      map(this.base.extractData),
      catchError(this.base.handleError))
      
  }

  postChipDelivery(chipStateObj): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url + 'chipDelivery/', chipStateObj, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError))
      
  }

  postChip(objChip): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url + 'chip/', objChip, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError))
   
  }

  registerVisitSubsidiary(objVisited): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url + 'visit/', objVisited, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError))
      
  }
}
