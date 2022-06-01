import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.page.html',
  styleUrls: ['./img-modal.page.scss'],
})
export class ImgModalPage implements OnInit {

 

  //public img: string = '';
  public img: any;

  constructor(public navCtrl: NavController,private router:Router) {
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    //this.img1 = this.navParams.data.img;
    this.img = this.router.getCurrentNavigation().extras.state;
    console.log('ionViewDidLoad ImgModalPage');
  }

}
