import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstagramServiceService {

  constructor(public http: HttpClient) {
    console.log('Hello InstagramServiceProvider Provider');
  }


 async getToken(){
   try{

     let token_instagram_data = await this.http.get('https://www.instagram.com/oauth/authorize/?client_id=c9b2eab155f74c498e713ac033c2f929&redirect_uri=https://www.icov.cl/&response_type=code').toPromise();
     console.log('token_instagram_data: ',token_instagram_data);

   }catch(e){
     console.log('error-get-token-instagram: ',e);
   }
  }
}
