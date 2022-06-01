import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { BaseServicesService } from 'src/app/services/base-services.service';
import { DeliveryServicesService } from 'src/app/services/delivery-services.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-delivery-publish',
  templateUrl: './delivery-publish.page.html',
  styleUrls: ['./delivery-publish.page.scss'],
})
export class DeliveryPublishPage implements OnInit {

  constructor(
    public navCtrl:           NavController,
    private camera:           Camera,
    private loadcrtl:         LoadingController,
    private base:             BaseServicesService,
    private deliveryPublish:  DeliveryServicesService,
   // private storage:          Storage,
    public toastCtrl:         ToastController,
    private auth:             UserServicesService,
  ) {

    this.modelDelivery        = {};
    this.modelDelivery.photo  = '';
    this.base64Image          = '../../../assets/imgs/gondola.png';

    /*this.storage.get('idSubsidiary').then((val) => {
      this.id_subsidiary = val;
    });*/
    this.getidSub();
  }

  async getidSub()
  {
     await Storage.get({ key: 'idSubsidiary'}).then((val) => {
      this.id_subsidiary = val.value;
    });
    
  }


  ngOnInit() {
  }

  modelDelivery:  any;
  id_subsidiary:  any;
  base64Image:    any;
  allImages:      any = [];

  

  ionViewWillEnter() {
    /*this.storage.get('idSubsidiary').then((val) => {
      this.id_subsidiary = val;
    });*/
    this.getidSub();

  }

  private async openCamera() {
    console.log('abriendo la camara');
    if( this.modelDelivery.nameDeliveryPublish == undefined ||
       this.modelDelivery.nameDeliveryPublish.replace(/\s/g,'') == '') {
      alert("Debe ingresar un nombre");
    } else {

      let load = this.loadcrtl.create({ message: 'Validando Espere un Momento...' });

      let fotoCamara = await this.camera.getPicture({
        // quality:            75,
        // destinationType:    this.camera.DestinationType.DATA_URL,
        // sourceType:         this.camera.PictureSourceType.CAMERA,
        // allowEdit:          false,
        // encodingType:       this.camera.EncodingType.JPEG,
        // targetWidth:        300,
        // targetHeight:       300,
        // saveToPhotoAlbum:   false

        quality: 100,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: false,
        correctOrientation: true,
        targetWidth: 200,
        targetHeight: 200
      });

      console.log('fotoCamaraObtenida: ',fotoCamara);
      
      // .then(imageData => {
      //   load.present();
      //   this.base64Image          = "data:image/jpeg;base64," + imageData;
      //   this.modelDelivery.photo  = this.base64Image;
      //   let objTrade = {
      //     img:  this.modelDelivery.photo,
      //     name: this.modelDelivery.nameDeliveryPublish,
      //   }
      //   this.allImages.push(objTrade)
      //   load.dismiss();
      //   this.modelDelivery.nameDeliveryPublish = '';
      // }, error => {
      //   alert(error);
      // });



    }

  }

  async tostPublish(msg)
  {
    let toast = await this.toastCtrl.create({
      message:msg,
      buttons: [
         {
          text: 'OK',
          role: 'OK',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();
  }
  private async sendDeliveryPublish() {
    let load = await this.loadcrtl.create({ message: 'Validando Espere un Momento...' });
    load.present();
    this.modelDelivery.user_created = this.base.getDataUser();
    this.modelDelivery.subsidiary   = this.id_subsidiary;
    this.modelDelivery.quantity     = 1;

    if(this.allImages.length == 0){
      load.dismiss();
      /*let toast = this.toastCtrl.create({
        message:          'Debe tomar una foto para poder continuar',
        showCloseButton:  true,
        closeButtonText:  'Ok'
      });
      toast.present();*/
      this.tostPublish('Debe tomar una foto para poder continuar');
    }

    for (let key in this.allImages) {
      this.modelDelivery.photo        = this.allImages[key].img
      this.modelDelivery.description  = this.allImages[key].name

      this.deliveryPublish.postDelivery(this.modelDelivery).subscribe(
        rs => {
          if(this.allImages.length -1 == parseInt(key)) {
            /*let toast = this.toastCtrl.create({
              message:          'Los datos fueron ingresados correctamente',
              showCloseButton:  true,
              closeButtonText:  'Ok'
            });
            toast.present();*/
            this.tostPublish('Los datos fueron ingresados correctamente');
          }

          this.modelDelivery = {
            nameDeliveryPublish:  '',
            quantity:             1,
          };
          load.dismiss();
          //this.navCtrl.parent.select(0);
        },
        er => {
          load.dismiss();
          if( er == 'Las credenciales de autenticación no se proveyeron.'){ this.refreshToken() }

        }); // End subscribe

      } // End For

  }

  refreshToken(){
    let oauthCredentials = {
      //Production
      client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
      client_id:      'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',

      // Testing
      // client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
      // client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',

      grant_type:     'refresh_token',
      refresh_token:  this.base.getDataRefreshToken()
    }

    let params = new HttpParams();
    params = params.append('grant_type', oauthCredentials.grant_type);
    params = params.append('client_id', oauthCredentials.client_id);
    params = params.append('client_secret', oauthCredentials.client_secret);
    params = params.append('refresh_token', oauthCredentials.refresh_token);

    this.auth.obtainToken(params).subscribe(
      data => {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);

      }, _err => { },
      () => { this.sendDeliveryPublish() }
    )

  }

}
