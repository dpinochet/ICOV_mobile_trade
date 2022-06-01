import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionComponentService {

  private comunicacion = new Subject<any>();
  itemComunicacion = this.comunicacion.asObservable();
  constructor(public http: HttpClient) {
    console.log('Hello ComunicacionComponentProvider Provider');
  }

  public addItem(item: any) {
    this.comunicacion.next(item);
  }
}
