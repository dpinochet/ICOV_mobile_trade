import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Injectable({
  providedIn: 'root'
})
export class SocialSharingService {

  constructor(public http: HttpClient,private socialSharing:SocialSharing) {
    console.log('Hello SocialSharingProvider Provider');
  }

  facebookSharing(message,image,url){
    this.socialSharing.shareViaFacebook(message,image,url);
  
  }
}
