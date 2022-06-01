import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { TwitterService } from 'ng2-twitter';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TwitterConectionServiceService {

  token = null;
  tokenSecret = null;
  consumerKey = 'rJqsJUOZVwIEis57X1ruErwBT';
  consumerSecret = 'BWcYCYNP2NMuDiUSz8apqr2dNxA7FSKQy8SNGANiSWF2S6OaKc';
  constructor(public http: HttpClient,
    // private twitter: TwitterService
    ) {
    console.log('Hello TwitterConectionServiceProvider Provider');
  }


  // setTokens(token, tokenSecret) {
  //   this.token = token;
  //   this.tokenSecret = tokenSecret;
  // }
 
  // postTweet(text,media) {
  //   console.log('postTweet: ',{text:text,media:media});
  //   console.log('autorización: ',{consumerKey:this.consumerKey,consumerSecret:this.consumerSecret, token:this.token,tokenSecret:this.tokenSecret});
  //   return this.twitter.post(
  //     'https://upload.twitter.com/1.1/media/upload.json',
  //     {
  //       media_type:'image/png',
  //       media_data:media  // en base 64
  //     },
  //     {
  //       consumerKey: this.consumerKey,
  //       consumerSecret: this.consumerSecret
  //     },
  //     {
  //       token: this.token,
  //       tokenSecret: this.tokenSecret
  //     }
  //   )
  //   .toPromise();
  // }


  // postUmagen(text,media_id) {
  //   console.log('postimagen: ',{text:text,media_id:media_id});
  //   console.log('autorización: ',{consumerKey:this.consumerKey,consumerSecret:this.consumerSecret, token:this.token,tokenSecret:this.tokenSecret});
  //   return this.twitter.post(
  //     'https://api.twitter.com/1.1/statuses/update.json',
  //     {
  //       status:text,
  //       media_ids:[media_id]
  //     },
  //     {
  //       consumerKey: this.consumerKey,
  //       consumerSecret: this.consumerSecret
  //     },
  //     {
  //       token: this.token,
  //       tokenSecret: this.tokenSecret
  //     }
  //   )
  //     .toPromise();
  // }








 
  // getHomeTimeline() {
  //   return this.twitter.get(
  //     'https://api.twitter.com/1.1/statuses/home_timeline.json',
  //     {
  //       count: 3
  //     },
  //     {
  //       consumerKey: this.consumerKey,
  //       consumerSecret: this.consumerSecret
  //     },
  //     {
  //       token: this.token,
  //       tokenSecret: this.tokenSecret
  //     }
  //   )
  //     .map(res => res.json());
  // };

}
