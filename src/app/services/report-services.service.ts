import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
//import { Storage } from '@ionic/storage';
import { BaseServicesService } from './base-services.service';
import { Storage } from '@capacitor/storage';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReportServicesService {

  public url: string = 'https://vm-icov-003.riosoft.cl/api/v1/';
  // public url: string = 'http://192.168.100.9:8001/api/v1/';

  // public url: string = 'http://192.168.100.13:8000/api/v1/';
  // public url: string = 'https://redamigos.herokuapp.com/api/v1/';

  constructor(public http: HttpClient,
    private base: BaseServicesService,
    private storage: Storage) {
    /*this.storage.get('base_url').then((val) => {
      this.url = val + "api/v1/";
    });*/
    this.geturl();
  }

  async geturl()
  {
    const { value } = await Storage.get({ key: 'base_url'});
    this.url = value+'api/v1/';
  }

  getAllPOSMonth(user: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'reports/subsidiaryMonthByUser/?user=' + user, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  getAllPOSDay(user: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'reports/subsidiaryDayByUser/?user=' + user, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  getAllChipDeliveryByUser(user: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'chipDelivery/?user=' + user, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  // Ventas Diarias por usuario
  getAllSalesDay356ByUser(user: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'salesDay356/?user=' + user, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  getAllSalesDay374ByUser(user: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'salesDay374/?user=' + user, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  // Ventas Mensuales por usuario
  getAllSalesMonth356ByUser(user: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'salesMonth356/?user=' + user, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  getAllSalesMonth374ByUser(user: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'salesMonth374/?user=' + user, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
      
  }

  getPublishDayReport(user: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'reports/publishDayByUser/?user=' + user, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  getPublishMonthReport(user: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'reports/publishMonthByUser/?user=' + user, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  getAllVisits(user: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'reports/totalColaboradoresVisitas/?user_email=' + user, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }
}
