import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {



  ngOnInit() {
  }

  constructor(public navCtrl: NavController,private router:Router) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocionesPage');
  }

}
