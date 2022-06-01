import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { ComunicacionComponentService } from 'src/app/services/comunicacion-component.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  modelAuth:  any = {};
  islogged:   boolean = false;

  constructor(
    public navCtrl: NavController,
    private auth: UserServicesService,
    public menu: MenuController,
    private _comunic:ComunicacionComponentService,
    private route:Router,
    public alertController: AlertController
  ) {
  } // End constructor

  
  ngOnInit() {
  }

singUp() {  this.obtain() }

  async obtain() {

      let oauthCredentials = {
        //Production
        client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
        client_id:      'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',

        // Testing
        // client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
        // client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
        username: this.modelAuth.email,
        grant_type: 'password',
        password: this.modelAuth.password
      }

     /* let oauthCredentials = {
        //Production
        client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
        client_id:      'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',

        // Testing
        // client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
        // client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
        username: 'contacto@icov.cl',
        grant_type: 'password',
        password: 'F6a1p3c4'
      }*/

    let params = new HttpParams();
    params = params.append('grant_type', oauthCredentials.grant_type);
    params = params.append('client_id', oauthCredentials.client_id);
    params = params.append('client_secret', oauthCredentials.client_secret);
    params = params.append('username', oauthCredentials.username);
    params = params.append('password', oauthCredentials.password);

    this.auth.obtainToken(params).subscribe(
      async (data) => {

        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('user', oauthCredentials.username);

        // Obtain latitude and longitude to user position
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            localStorage.setItem('longitude', position.coords.latitude.toString());
            localStorage.setItem('latitude', position.coords.longitude.toString());
          });

          this.auth.getDataUser(oauthCredentials.username).then((getUser)=>{
            localStorage.setItem('userData',JSON.stringify(getUser));
          })
          
          this.islogged = true
          //this.navCtrl.setRoot(HomePage);
          this.route.navigateByUrl('home');
          this.menu.enable(true);
          this._comunic.addItem({name:'update-data-user'});
        }

      }, _err => { this.islogged = false; this.presentAlert() }
    )

    // console.log(this.modelAuth);

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Credenciales inválidas',
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
  }

  ionViewDidLoad() {
    this.menu.enable(false);
  }

  recoverPassword() {
   // this.navCtrl.push(ResetPasswordPage);
    this.route.navigateByUrl('reset-password');
  }

}
