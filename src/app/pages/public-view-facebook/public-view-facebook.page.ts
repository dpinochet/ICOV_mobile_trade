import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-public-view-facebook',
  templateUrl: './public-view-facebook.page.html',
  styleUrls: ['./public-view-facebook.page.scss'],
})
export class PublicViewFacebookPage implements OnInit {



  ngOnInit() {
  }

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicViewFacebookPage');
  }

}
