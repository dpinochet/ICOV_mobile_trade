import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHttpService {

  constructor(public http: HttpClient) {
    console.log('Hello InterceptorHttpProvider Provider');
  }


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('intercepted request ... ');

    // Clone the request to add the new header.
    const authReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
    });

    console.log('Sending request with new header now ...');

    //send the newly created request
    return next.handle(authReq).catch((error, caught) => {
      //intercept the respons error and displace it to the console
      console.log('Error Occurred, interceptor');
      console.log(error);
      //return the error to the method that called it
      return Observable.throw(error);
    }) as any;
  }

}
