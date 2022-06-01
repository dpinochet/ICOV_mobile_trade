import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NavController } from '@ionic/angular';
import { InstagramServiceService } from 'src/app/services/instagram-service.service';
import { Instagram } from '@ionic-native/instagram/ngx';

@Component({
  selector: 'app-public-view-instagram',
  templateUrl: './public-view-instagram.page.html',
  styleUrls: ['./public-view-instagram.page.scss'],
})
export class PublicViewInstagramPage implements OnInit {

 

  ngOnInit() {
  }

  publicacionForm= new FormGroup({
    caption:new FormControl(null,Validators.required)
  })

  img=null;
  constructor(public navCtrl: NavController,private camera: Camera,private instagram: Instagram,
    private _social_sharing:SocialSharing,private _instagramService:InstagramServiceService) {
      this._instagramService.getToken();
  }


 async publicarInstagram(){

    // this._social_sharing.shareViaInstagram(this.publicacionForm.value.caption,this.img).then((data)=>{
    //   console.log('social_sharing_instagram: ',data);
    // }).catch((error: any) => console.error('social_sharing_inatagram error', error));

    let share_instagram = await this.instagram.share(this.img, this.publicacionForm.value.caption);
    console.log('sharing_instagram: ',share_instagram);
    //  .then(() => console.log('instagram shares') )
    //  .catch((error: any) => console.error('instagram error', error));

  }

  
  public subirImagen() {



    this.camera.getPicture({
      saveToPhotoAlbum: false,
      targetWidth: 300,
      targetHeight: 300,
      quality: 100,
      allowEdit: false,
      encodingType: this.camera.EncodingType.PNG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
    }).then(async (imageData) => {

      this.img='data:image/png;base64,'+imageData;

      // this.instagram.share('data:image/png;base64,' + imageData, 'Caption')
      //   .then(() => console.log('Shared Instagram!'))
      //   .catch((error: any) => console.error('instagram error', error));

    })







  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicViewInstagramPage');
  }


}
