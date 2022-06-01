import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComuniComponentService {

  constructor(public http: HttpClient) {
    console.log('Hello ComuniComponentProvider Provider');
  }
}
