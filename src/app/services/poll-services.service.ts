import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import { Storage } from '@ionic/storage';
import { Storage } from '@capacitor/storage';
import { BaseServicesService } from './base-services.service';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PollServicesService {

  // public url: string = '';
  // public url: string = 'https://vm-icov-001.riosoft.cl/api/v1/';
  public url: string = 'https://vm-icov-003.riosoft.cl/api/v1/';
  // public url: string = 'http://192.168.100.9:8001/api/v1/';
  constructor(
    public http:      HttpClient,
    public base:      BaseServicesService,
    private storage:  Storage) {

    this.storage.get('base_url').then((val) => {
      this.url = val+'api/v1/';
    });

  }

  async geturl()
  {
    const { value } = await Storage.get({ key: 'base_url'});
    this.url = value+'api/v1/';
  }

  getCurrentPolls(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'currentpolls/', { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  responsePoll(responseObject): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url + 'pollresponse/', responseObject, { headers: headers }).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError))
  }
}
