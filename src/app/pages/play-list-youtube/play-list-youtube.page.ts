import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-play-list-youtube',
  templateUrl: './play-list-youtube.page.html',
  styleUrls: ['./play-list-youtube.page.scss'],
})
export class PlayListYoutubePage implements OnInit {

 

  ngOnInit() {
  }

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayListYoutubePage');
  }

}
