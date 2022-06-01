import { Component, OnInit } from '@angular/core';
import {  NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
//import { TwitterConectionServiceProvider } from '../../providers/twitter-conection-service/twitter-conection-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
//import { Base64 } from '@ionic-native/base64';
import { Base64 } from '@ionic-native/base64/ngx';
import {DomSanitizer} from '@angular/platform-browser';
import { TwitterConectionServiceService } from 'src/app/services/twitter-conection-service.service';

@Component({
  selector: 'app-compose-tweet',
  templateUrl: './compose-tweet.page.html',
  styleUrls: ['./compose-tweet.page.scss'],
})
export class ComposeTweetPage implements OnInit {

  constructor(public navCtrl: NavController,private twitterProvider: TwitterConectionServiceService,
    private loadingCtrl: LoadingController,private toastCtrl: ToastController,private alertCtrl: AlertController,
    private camera: Camera,private _base64:Base64,
    private _domSanitizer:DomSanitizer
    ) {
  }

  ngOnInit() {
  }

  loading: any;
  imagen=null;
  composeTweetFormGroup = new FormGroup({
    text:new FormControl(null,[Validators.required]),
    media:new FormControl(null)
  })
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComposeTweetPage');
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
     // content: 'Please wait...'
      message:'Please wait...'
    });
    this.loading.present();
  }


  registrarImagen(){
    this.camera.getPicture(
      
      
      {
      saveToPhotoAlbum: false,
      targetWidth: 800,
      targetHeight: 320,
      quality: 100,
      allowEdit: false,
      encodingType: this.camera.EncodingType.PNG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      correctOrientation:true
    }
    
    
    ).then(async (imageData) => {
      let img = imageData;
      this.imagen ="data:image/jpg;base64," +imageData;
      console.log('image.obtenida-no-sanitizada: ',img);
      console.log('image.obtenida-sanitizada:',this._domSanitizer.bypassSecurityTrustUrl(img));
      this.composeTweetFormGroup.controls.media.setValue(img);
      // this._base64.encodeFile(img).then((base64File: string) => {
      //   this.composeTweetFormGroup.controls.media.setValue(base64File);
      //   console.log('base64file: ',base64File);
      // }, (err) => {
      //   console.log(err);
      // });
      // this.composeTweetFormGroup.controls.media.setValue(img);
    })

  }
 


  // public postTweet() {
  //   this.showLoading();
  //   this.twitterProvider.postTweet(this.composeTweetFormGroup.value.text,this.composeTweetFormGroup.value.media).then(async(res:any) => {
  //     console.log('postTweet_chuerning: ',res.json());
  //     console.log('postTweet_muerning: ',res);
  //     let respuesta =res.json();
  //     let respuesta__ = JSON.parse(res._body);
  //     let media_id_parse = parseInt(respuesta__.media_id_string);
  //     console.log('media_id_parse: ',media_id_parse);
  //     console.log('postTwwet_respuesta__',respuesta__);
  //     this.twitterProvider.postUmagen(this.composeTweetFormGroup.value.text,respuesta__.media_id_string).then(async(restwo)=>{


  //       console.log('response_post_tweet1: ',res.json());
  //       console.log('response_post_tweet2: ',restwo);
  //       this.loading.dismiss();
  //       let toast = this.toastCtrl.create({
  //         message: 'Tweet posted!',
  //         duration: 3000
  //       });
  //       await toast.present();
  //       this.close();
  //     }, err => {
  //       this.showError(err);
  //     });
  //     })
  // }


  async  showError(text) {
    this.loading.dismiss();
    let alert = await this.alertCtrl.create({
      header: 'Error',
      message: text,
      buttons: ['OK']
    });
    await alert.present();
  }

  close(){
    this.navCtrl.pop();
  }


}
