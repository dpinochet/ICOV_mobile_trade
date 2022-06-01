import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseServicesService } from './base-services.service';

@Injectable({
  providedIn: 'root'
})
export class B2bService {
  public url: string = 'https://vm-icov-003.riosoft.cl/api/v1/';
  // public url: string = 'http://192.168.100.9:8001/api/v1/';

  constructor(public http: HttpClient,
    public base: BaseServicesService) { 
      console.log('Hello B2bProvider Provider');
    }

    getsubsidiaryB2bMobile(subsidiary_id) {
      let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
      return this.http.get(this.url + 'reports/subsidiary-b2b-mobile/?id_subsidiary=' + subsidiary_id, { headers: headers }).toPromise();
    }
  
    getCategoriaProductos(subsidiary_id?,id_brand?) {
      /**
       *  @param subsidiary_id
       * 
       * 
       */
  
      return new Promise(async (resolve, reject) => {
  
        let productos_marcas: any = new Array();
  
        try {
  
          let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
          //     /**obteniendo las categorias de productos */
          productos_marcas = await this.http.get(this.url + 'reports/subsidiary-b2b-mobile/?id_subsidiary='+subsidiary_id+'&id_brand='+id_brand+'', { headers: headers }).toPromise();
          resolve(productos_marcas);
  
  
        } catch (e) { }
  
      })
  
  
    }
  
  
    getMarcaAndAgency() {
      let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
      /**obteniendo las categorias de productos */
      return this.http.get(this.url + 'brands/', { headers: headers }).toPromise();
    }
  
    getLastB2bSubsidiary(subsidiary_id) {
      let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
      /**obteniendo las categorias de productos */
      return this.http.get(this.url + 'reports/subsidiary-last-b2b/?id_subsidiary=' + subsidiary_id, { headers: headers }).toPromise();
  
    }
  
  
    getValidaMarcas(brand,multistore_id){
      let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
      /**obteniendo las categorias de productos */
      return this.http.get(this.url + 'multistore-product-check/?brand=' + brand+'&multistore_id='+multistore_id, { headers: headers }).toPromise();
    }
}
