import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
//import { Storage } from '@ionic/storage';
import { Storage } from '@capacitor/storage';
import { throwError } from 'rxjs';

import { BaseServicesService } from './base-services.service';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
 
  loggedIn: boolean;
  public url: string = '';


  constructor(public http: HttpClient,
    public base: BaseServicesService,
  ) {
    this.loggedIn = false;

    // this.storage.get('base_url').then((val) => {
    //   this.url = val;
    // });
    this.url = 'https://vm-icov-003.riosoft.cl/';
    // this.url = 'http://192.168.100.9:8001/';

    // this.url = 'http://192.168.100.7:8000/';
    // this.url = 'http://192.168.100.13:8000/';

    //this.form = fb.group({
    //  email: ['', Validators.compose([Validators.required, Validators.email])],
   // }, );

  }
  login(userInfo): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(userInfo);

    return this.http.post(this.url + 'api-token-auth/', body, { headers: headers }).pipe(

      // aqui estraemos lod datos para procesarlos despues con angular
      map(this.base.extractData),
      map(res => {
        if (res == "error" || res == "nofound") {
          this.loggedIn = false;
        } else {
          localStorage.setItem('token', res['token']);
          localStorage.setItem('user', userInfo.email);

          // Obtain latitude and longitude to user position
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
              localStorage.setItem('longitude', position.coords.latitude.toString());
              localStorage.setItem('latitude', position.coords.longitude.toString());
              // console.log('latitud: '+ position.coords.longitude);
            });
          }
          this.loggedIn = true;

        }
        return this.loggedIn;
      }))
      // en caso de algun problema aqui se extrael el mensaje
     
  }


  reset_password(email): Observable<any> {

    let url_reset = this.url;
    let body = email;

    return this.http.post(url_reset + 'password/reset/', body).pipe(
      map(this.base.extractData),
      catchError(errorResponse => {
        let errMsg: string;
        if (errorResponse instanceof HttpErrorResponse) {
          // const err = errorResponse.message || JSON.stringify(errorResponse.error);
          errMsg = errorResponse.error;
          // errMsg = `${errorResponse.status} - ${errorResponse.statusText || ''} Details: ${err}`;
          // console.log('A',errorResponse.message);
          // console.log('B',errorResponse.error);
          // console.log('C',errorResponse.statusText);
        } else {
          errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
        }
        return throwError(errMsg);
      }));

  }

  confirm_password(form, uid, token): Observable<any> {

    let url_reset = this.url;

    return this.http.post(url_reset + 'password/reset/confirm/' + uid + '/' + token + '/', form).pipe(
      map(this.base.extractData),

      catchError(errorResponse => {
        let errMsg: string;
        if (errorResponse instanceof HttpErrorResponse) {
          errMsg = errorResponse.error;
        } else {
          errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
        }
        return throwError(errMsg);
      }));

  }


  obtainToken(params): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.post(this.url + 'o/token/', params).pipe(
      map(this.base.extractData),
      catchError(this.base.handleError));
  }

  getDataUser(user){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    return this.http.get(this.url + 'api/v1/users/?email='+user,{ headers: headers }).toPromise();
  }


  getUser(){
    let user = localStorage.getItem('userData');
    let parseUser:any = JSON.parse(user);
    return parseUser;
  }
}
