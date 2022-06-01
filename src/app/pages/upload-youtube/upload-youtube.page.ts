import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-upload-youtube',
  templateUrl: './upload-youtube.page.html',
  styleUrls: ['./upload-youtube.page.scss'],
})
export class UploadYoutubePage implements OnInit {



  ngOnInit() {
  }

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadYoutubePage');
  }

}
