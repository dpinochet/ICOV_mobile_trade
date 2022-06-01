import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { BaseServicesService } from 'src/app/services/base-services.service';
import { DatabaseService } from 'src/app/services/database.service';
import { PosServicesService } from 'src/app/services/pos-services.service';
import { TwitterConectionServiceService } from 'src/app/services/twitter-conection-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Storage } from '@capacitor/storage';
import { Geolocation } from '@capacitor/geolocation';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  dataDelivery: any;
  markers: any;
  icon: any;
  icon_dinamyc: any;
  iconMe: any;
  latitude: number;
  longitude: number;
  zoom: number;
  display_map: boolean = false;
  Me: string;
  name: string = '';
  subsidiary_list: any[];
  subsidiary_object: {};
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  filtered_items: any[];
  loadinger: any;
  constructor(
    public navCtrl: NavController,
    
    private pos: PosServicesService,
    
    
    //private storage: Storage,
    public toastCtrl: ToastController,
   // private app: App,
   // public dataService: DatabaseService,
    private base: BaseServicesService,
    private auth: UserServicesService,
    //private twitter: TwitterConnect,
    private _twtitterConectionService:TwitterConectionServiceService,
    public loadingCtrl: LoadingController,
    private route:Router
  ) {
    this.dataDelivery = {}
    this.icon = {
      url: '../../../assets/imgs/store.png',
      scaledSize: {
        height: 80,
        width: 80
      }
    };

    this.iconMe = {
      url: '../../../assets/imgs/15-512.png',
      scaledSize: {
        height: 80,
        width: 80
      }
    };
    console.log("entrooo")
    this.setCurrentPosition();
   // this.name = this.navParams.get('name');
    //this.storage.set('subsidiary', 'null');
    this.setStorage('subsidiary','null');
    //this.storage.set('idSubsidiary', 'null');
    this.setStorage('idSubsidiary','null');
    this.searchControl = new FormControl();


  }

  async setStorage(k,v)
  {
    
      await Storage.set({
        key: k,
        value:v,
      });
    
  }
  async setStorageObjet(k,v)
  {
    
      await Storage.set({
        key: k,
        value:JSON.stringify(v),
      });
    
  }

  ngOnInit() {
  }

  private showLoading() {
    this.loadinger = this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.loadinger.present();
  }



  // public loginWithTwitter() {
  //    this.showLoading();
  //   this.twitter.login().then((data:TwitterConnectResponse) => {
  
  
  
  
  //     console.log('twitterLoginData: ',data);
  
  //     this._twtitterConectionService.setTokens(data.token, data.secret);
  //      this.loadinger.dismiss().then(() => {
  //        this.navCtrl.setRoot('TimelinePage');
  //      });
  
  
  
  
  //   }, error => {
  //     console.log('twitter-error: ',error);
  //     // this.showError(error);
  //   });
  // }


  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);

    this.setCurrentPosition();
   /* setTimeout(() => {
      console.log('Async operation has ended');
      refresher.target.complete();
    }, 2000);*/
  }

  ionViewWillEnter()
  {
    console.log("holaaaa");
  }

  ionViewDidLoad() {
    this.setCurrentPosition();
   // this.name = this.navParams.get('name');
    this.searching = false;
  }


  loadGoogleMaps() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }


  private setCurrentPosition() {
    console.log("actualizando")
    /*if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        this.dataDelivery.user = this.base.getDataUser();
        this.Me = this.base.getDataUser();
        this.onData();
      });

    }*/

    Geolocation.getCurrentPosition().then((position)=>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 15;
      this.dataDelivery.user = this.base.getDataUser();
      this.Me = this.base.getDataUser();
      this.onData();
    },error=>{
      console.log('error-ubicacion: ',error);
    });

  } 

  private onData(): void {

    this.markers = [];
    // let load = this.loadcrtl.create({ content: 'Recolectando información...' });
    // load.present();

   //this.pos.getNearPos(this.latitude, this.longitude).subscribe(

      this.pos.getNearPos(-33.618509, -70.705837).subscribe(
        //this.pos.getNearPos(-33.418531, -70.606429).subscribe(
      data => {

        let data_array = Object.keys(data);
        let data_length: number = data_array.length;
        console.log('get-subsidiary: ', data);
        if (data_length >= 15) {
          console.log('ddddd')
          this.display_map = false;
          //create list to diplay
          this.subsidiary_list = [];
          this.filtered_items = [];
          for (const item of data) {
            this.subsidiary_object = {
              lat: item.latitude,
              lng: item.longitude,
              title: item.name_business,
              id: item.id,
              stock356: item.stock356,
              stock374: item.stock374,
              tasa356: item.tasa356,
              tasa374: item.tasa374,
              creacion: item.created_at,
              all: item,
              photo: item.multistore_photo.photo

            }
            this.subsidiary_list.push(this.subsidiary_object)
            this.filtered_items.push(this.subsidiary_object)

          }

          // Sort alphabetically the array of objects
          this.subsidiary_list.sort(function (a, b) {
            var nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase()
            if (nameA < nameB) //sort string ascending
              return -1
            if (nameA > nameB)
              return 1
            return 0 //default return value (no sorting)
          })

        } else {
          console.log('entre')
          this.display_map = true;
          //create markers above map
          for (const item of data) {
            this.icon_dinamyc = {
              url: '../../../assets/imgs/' + item.tasa356 + '.png',
              scaledSize: {
                height: 50,
                width: 30
              }
            }

            console.log('map-subsiduary: ', item);
            console.log('item_idmultistore:', item.id_multistore);
            let pine_multistore = null;
            if (item.id_multistore == 5) {
              pine_multistore = {
                url: null,
                scaledSize: {
                  height: 55,
                  width: 55
                }
              };
              pine_multistore.url = '../../../assets/imgs/pines/ripleyverde.png';
            } if (item.id_multistore == 2) {
              pine_multistore = {
                url: null,
                scaledSize: {
                  height: 55,
                  width: 55
                }
              };
              pine_multistore.url = '../../../assets/imgs/pines/santaisabelrojo.png';
            } if (item.id_multistore == 3) {
              pine_multistore = {
                url: null,
                scaledSize: {
                  height: 55,
                  width: 55
                }
              };
              pine_multistore.url = '../../../assets/imgs/pines/jumboverde.png';
            } if (item.id_multistore == 9) {
              pine_multistore = {
                url: null,
                scaledSize: {
                  height: 55,
                  width: 55
                }
              };
              pine_multistore.url = '../../../assets/imgs/pines/easyrojo.png';
            } if (item.id_multistore == 7) {
              pine_multistore = {
                url: null,
                scaledSize: {
                  height: 55,
                  width: 55
                }
              };
              pine_multistore.url = '../../../assets/imgs/pines/liderverde.png';
            } if (item.id_multistore == 6) {
              pine_multistore = {
                url: null,
                scaledSize: {
                  height: 55,
                  width: 55
                }
              };
              pine_multistore.url = '../../../assets/imgs/pines/tottusverde.png';
            } if (item.id_multistore == 10) {
              pine_multistore = {
                url: null,
                scaledSize: {
                  height: 55,
                  width: 55
                }
              };
              pine_multistore.url = '../../../assets/imgs/pines/unimarcrojo.png';
            } if (item.id_multistore == 12) {
              pine_multistore = {
                url: null,
                scaledSize: {
                  height: 55,
                  width: 55
                }
              };
              pine_multistore.url = '../../../assets/imgs/pines/sodimacrojo.png';
            } if (item.id_multistore == 11) {
              pine_multistore = {
                url: null,
                scaledSize: {
                  height: 55,
                  width: 55
                }
              };
              pine_multistore.url = '../../../assets/imgs/pines/fallabellaverde.png';
            }


            console.log('pine_multistore_photo: ', pine_multistore);

            this.markers.push({
              lat: item.latitude,
              lng: item.longitude,
              title: item.name_business,
              id: item.id,
              tasa356: item.tasa356,
              creacion: item.created_at,
              icon: this.icon_dinamyc,
              all: item,
              photo: pine_multistore


            });
            pine_multistore = null;

          }

        }

      },
      error => {
        if (error == "Signature has expired.") {
          alert('Tu sesión ha expirado');
         // this.app.getRootNav().setRoot(LoginPage, {}, { animate: true, direction: 'forward' });
          this.route.navigateByUrl('login');
        } else {
          if (error == 'Las credenciales de autenticación no se proveyeron.') {
            this.refreshToken();
          }
        }
      });
  }
 

 async markerClick(marker) {
    console.log('subsidiary', marker);
    this.dataDelivery.subsidiary = marker.title;
    //this.storage.set('subsidiary', marker.title);
   // this.storage.set('idSubsidiary', marker.id);
   // this.storage.set('subsidiary', marker);
    //this.setStorage('subsidiary',marker.title);
    this.setStorage('idSubsidiary',marker.id);
    this.setStorageObjet('subsidiary',marker);
    
    
      const  value  = await Storage.get({ key: 'subsidiary' });
    
      console.log('objeto',JSON.parse(value.value))
    
    

    /*
        let toast = this.toastCtrl.create({
          message: 'Se ha seleccionado: ' + marker.title,
          duration: 1300
        });
        toast.present();*/


    //this.navCtrl.push(BeToBePage);
    this.route.navigateByUrl('be-to-be');

  }

  subsidiarySelected(subsidiaryId, subsidiaryTitle) {

    //this.storage.set('subsidiary', subsidiaryTitle);
    //this.storage.set('idSubsidiary', subsidiaryId);
    this.setStorage('subsidiary',subsidiaryTitle);
    this.setStorage('idSubsidiary',subsidiaryId);
    /*
        let toast = this.toastCtrl.create({
          message: 'Se ha seleccionado: ' + subsidiaryTitle,
          duration: 1300
        });
        toast.present();*/
  }

  refreshToken() {
    let oauthCredentials = {
      //Production
      client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
      client_id: 'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',

      // Testing
      //client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
      //client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',

      grant_type: 'refresh_token',
      refresh_token: this.base.getDataRefreshToken()
    }

    let params = new HttpParams();
    params = params.append('grant_type', oauthCredentials.grant_type);
    params = params.append('client_id', oauthCredentials.client_id);
    params = params.append('client_secret', oauthCredentials.client_secret);
    params = params.append('refresh_token', oauthCredentials.refresh_token);

    this.auth.obtainToken(params).subscribe(
      data => {
        // console.log('se obtuvo refresh token');
        console.log(data);
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);

      }, _err => { console.error('no refresh') },
      () => { this.onData() }
    )

  }
}
