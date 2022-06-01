import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FacebookService, InitParams, LoginResponse, UIParams } from 'ngx-facebook';


@Injectable({
  providedIn: 'root'
})
export class FacebookConectionServiceService {

  constructor(public http: HttpClient) {
    // let initParams: InitParams = {
    //   appId: '2376775872560317',
    //   xfbml: true,
    //   version: 'v3.3'
    // };
 
    // fb.init(initParams);
  }


  facebookLogin(){
    return 3;
  /*  return new Promise((resolve,reject)=>{
      this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => {
       resolve(this.facebookSharing());
    })
    .catch(e => console.log('Error logging into Facebook', e));

    })*/
  }

  facebookSharing(){
    let configFacebook={
      method: 'share',
      href: 'http://example.com',
      caption: 'Such caption, very feed.',
      description: 'Much description',
      picture: 'http://example.com/image.png'
    }
  // return this.fb.showDialog(configFacebook);
  return 3
  }


  // loginWithFacebook(): void {
 
  //   this.fb.login()
  //     .then((response: LoginResponse) => console.log('loginConFacebook:',response))
  //     .catch((error: any) => console.error('error login con facebook:',error));
 
  // }

  // share(url: string) {
 
  //   let params: UIParams = {
  //     href: url,
  //     method: 'share'
  //   };
   
  //   this.fb.ui(params)
  //     .then((res) => {
  //       return console.log(res);
  //     })
  //     .catch((e: any) => console.error(e));
   
  // }
}
