import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs';
//import 'rxjs/add/operator/catch'

@Injectable({
  providedIn: 'root'
})
export class BaseServicesService {

  url:string = ''

  constructor(public http: HttpClient) {

    this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
    // this.url = 'http://192.168.100.9:8001/api/v1/';
  }

  /** procesamos la respuesta del api
    * @param {Response} response data from http request.
    */
  public extractData(res: Response) { 
    let body = res;
    return body || {};
  }
  /** procesamos la respuesta de Error
  * @param {any} Object data return.
  */

  public handleError(error: any) {
    console.log(error);
    let errMsg = (error.message) ? error.error.detail :
      error.status ? `${error.status} - non_field_errors` : 'Server error';
    //return Observable.throw(errMsg);
    //return Observable.throw(error);
    return throwError( errMsg );
  }
  /** procesamos el logout de la app
  * @param {} delete all storage.
  */
  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('subsidiary');
  }
  /** Validamos si el Usuario está logueado
  * @param {} true logged,  false not logeed.
  */
  isLoggingIn() {
   console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') === null) {
      return false;
    } else {
      return true;
    }

  }
  getDataToken(): any {
    return localStorage.getItem('token');
  }
  getDataRefreshToken(): any {
    return localStorage.getItem('refresh_token');
  }
  getDataSubsidiary(): any {
    return localStorage.getItem('idSubsidiary');
  }

  getDataUser(): any {
    return localStorage.getItem('user').toString();
  }

  getDataPositionLong(): any {
    return localStorage.getItem('longitude');
  }

  getDataPositionLat(): any {
    return localStorage.getItem('latitude');
  }

 

  getOldMessages(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.getDataToken());
    return this.http.get(this.url + 'messages/', { headers: headers }).pipe(
      map(res => this.extractData),
      catchError(this.handleError)
      );
  }
}
