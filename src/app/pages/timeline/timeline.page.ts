import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {



  ngOnInit() {
  }

  tweets: Observable<any[]>;
  loading: any;
 
  constructor(
    // public navCtrl: NavController, private twitterProvider: TwitterConectionServiceProvider, private alertCtrl: AlertController, 
    // private loadingCtrl: LoadingController, private toastCtrl: ToastController,
    // private iab: InAppBrowser
    // ,private browserTab: BrowserTab
    
    ) {
  }
 
  ionViewWillEnter() {
    // this.loadTimeline();
  }
 
  // public async loadTimeline(refresher?) {
  //   // await this.showLoading();
  //   this.tweets = this.twitterProvider.getHomeTimeline();
  //   this.tweets.subscribe(async(data) => {
  //    await this.loading.dismiss();
  //    try{
  //      refresher.complete();

  //    }catch(e){}
  //   }, err => {
  //     try{

  //       refresher.complete();
  //       this.showError(err);

  //     }catch(e){}
  //   });
  // }
  // public composeTweet() {
  //   // let prompt = this.alertCtrl.create({
  //   //   title: 'New Tweet',
  //   //   message: "Write your Tweet message below",
  //   //   inputs: [
  //   //     {
  //   //       name: 'text'
  //   //     },
  //   //   ],
  //   //   buttons: [
  //   //     {
  //   //       text: 'Cancel'
  //   //     },
  //   //     {
  //   //       text: 'Tweet',
  //   //       handler: data => {
  //   //         this.postTweet(data.text);
  //   //       }
  //   //     }
  //   //   ]
  //   // });
  //   // prompt.present();

  //   this.navCtrl.push(ComposeTweetPage);
  // }




  // public dateForTweet(dateString) {
  //   let d = new Date(Date.parse(dateString));
 
  //   // http://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  //   var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
  //     d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
 
  //   return datestring;
  // }
 
  // public openLinkUrl(url) {
  //   let browser = this.iab.create(url, 'blank');
  //   // this.browserTab.isAvailable()
  //   // .then(isAvailable => {
  //   //   if (isAvailable) {
  //   //     this.browserTab.openUrl(url);
  //   //   } else {
  //   //     // open URL with InAppBrowser instead or SafariViewController
  //   //   }
  //   // });
  // }
 
  // public postTweet(text) {
  //   this.showLoading();
  //   this.twitterProvider.postTweet(text).subscribe(res => {
  //     this.loading.dismiss();
  //     let toast = this.toastCtrl.create({
  //       message: 'Tweet posted!',
  //       duration: 3000
  //     });
  //     toast.present();
  //   }, err => {
  //     this.showError(err);
  //   });
  // }
  // private showLoading() {
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });
  //   return this.loading.present();
  // }
 
  // private showError(text) {
  //   this.loading.dismiss();
  //   let alert = this.alertCtrl.create({
  //     title: 'Error',
  //     message: text,
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }

  // goBack() {
  //   this.navCtrl.canGoBack();
  //   // this._comunc.addItem({ name: 'low-stock-count', itemAdd: { count: this.baja_stock_info_count } });

  // }

}
