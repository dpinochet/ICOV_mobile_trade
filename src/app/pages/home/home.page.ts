import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { BaseServicesService } from 'src/app/services/base-services.service';
import { ComunicacionComponentService } from 'src/app/services/comunicacion-component.service';
import { LocalNotificationServiceService } from 'src/app/services/local-notification-service.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { PosServicesService } from 'src/app/services/pos-services.service';
import { SocketServiceService } from 'src/app/services/socket-service.service';
import { SqliteServiceService } from 'src/app/services/sqlite-service.service';
import { TwitterConectionServiceService } from 'src/app/services/twitter-conection-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { ConcessionsPage } from '../concessions/concessions.page';
import { DeliveryChipPage } from '../delivery-chip/delivery-chip.page';
import { DeliveryPublishPage } from '../delivery-publish/delivery-publish.page';
import { PollsPage } from '../polls/polls.page';
import { Storage } from '@capacitor/storage';
import { Geolocation } from '@capacitor/geolocation';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tabChip = DeliveryChipPage;
  tabPublish = DeliveryPublishPage;
  tabConcession = ConcessionsPage;
  tabPoll = PollsPage;
  

  //name: string = '';
  param_from_home: any = { param: 'parametro' };
  //dataDelivery: any;
  promocionArray = new Array();
  incidenciaArray = new Array();
  user: any = this._user.getUser();
  notificaciones = new Array();
  notificationOpenPageCount = 0;
  notificacionState=true;
  userData=null;

  dataDelivery: any;
  markers: any;
  icon: any;
  icon_dinamyc: any;
  iconMe: any;
  latitude: number;
  longitude: number;
  zoom: number;
  displaymap: boolean = false;
  Me: string;
  name: string = '';
  subsidiary_list: any[];
  subsidiary_object: {};
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  filtered_items: any[];
  loadinger: any;
  loading:any;
  
  constructor(public navCtrl: NavController,
    public alertController: AlertController,
     private _notificaciones: NotificacionesService,
    private _user: UserServicesService, private _comun: ComunicacionComponentService, private _socket: SocketServiceService,
    private _sqlite: SqliteServiceService, public popoverCtrl: PopoverController, private _localNotification: LocalNotificationServiceService,private route:Router,private menu: MenuController,
  
    
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
    ) {



      try{
        let user_data_parse_json = localStorage.getItem('userData');
  
        let user_data_json_parse =JSON.parse(user_data_parse_json);
        this.userData = user_data_json_parse[0];
        console.log('userData-capacitación: ',this.userData);
  
      }catch(e){}

    this._comun.itemComunicacion.subscribe((data) => {

      this.notificationOpenPageCount = this.notificationOpenPageCount + 1;
      if (this.notificationOpenPageCount == 1) {

        if (data.name === 'openPage') {

          if (data.namePage === "capacitacion") {
           // this.navCtrl.push(CapacitacionPage);
            this.route.navigateByUrl('capacitacion');
          } if (data.namePage === "incidencias") {
           // this.navCtrl.push(IncidenciasPage);
            this.route.navigateByUrl('incidencias');
          } if (data.namePage === "promocion") {
           // this.navCtrl.push(MetasPage);
            this.route.navigateByUrl('promociones');
          }
        }


      } if (this.notificationOpenPageCount == 2) {
        this.notificationOpenPageCount = 0;
      } if (this.notificationOpenPageCount == 3) {
        this.notificationOpenPageCount = 0;
      }if (this.notificationOpenPageCount == 4) {
        this.notificationOpenPageCount = 0;
      }if (this.notificationOpenPageCount == 5) {
        this.notificationOpenPageCount = 0;
      }if (this.notificationOpenPageCount == 6) {
        this.notificationOpenPageCount = 0;
      }if (this.notificationOpenPageCount == 7) {
        this.notificationOpenPageCount = 0;
      }

    });

    // this.getNotificaciones();
    // this.getPromocionesNoVisto();
    // this._comun.addItem({name:'update-data-user'});

   /* this._sqlite.initDB().then((db) => {
      this._sqlite.createTables(db);
    });*/


    //  this._socket.getNotificaciones().subscribe((notificacion) => {
    //    console.log('notificación-socket: ',notificacion);
    //     this.notificaciones.push(notificacion);
    //  })


    /*this._sqlite.getAllNotificacionesNoLeidos_PROMISE().then((todasNotificaciones: any) => {
      todasNotificaciones.forEach((notificacion) => {
        console.log('notificación-sqlite: ', notificacion);
        this.notificaciones.push(notificacion);
      });
    })*/


    this._comun.itemComunicacion.subscribe(event=>{
      if(event.name==='notificacioneEnable'){
        this.notificacionState=event.state;
      }
    })

    this._socket.getNotificaciones().subscribe((notificacion: any) => {
      if (notificacion.event != undefined) {

        if(this.notificacionState==true){

          if(this.userData.email===notificacion.recipient){

            this._localNotification.addNotification(notificacion);
          }
          
        }
        console.log('nueva-notificación-socket: ', notificacion.event);
        console.log('notificacion-recibida-reciente: ',notificacion);
        console.log('notificación-socket type of:', typeof notificacion);
        if(this.userData.email===notificacion.recipient){
        this.notificaciones.push(notificacion);
        this._comun.addItem({ name: 'new-notification', item: notificacion });
        }


      }
    }, error => {
      console.log('error-socket-nueva-notificacion: ', error);
    })




    // this.getNotificaciones();
    // this.getPromocionesNoVisto();
    this._comun.addItem({ name: 'update-data-user' });


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

  openCustom() {
    this.menu.enable(true, 'content');
    this.menu.open('content');
  }
  ngOnInit() {
   
  }
  async presentPopoverNotificacion() {
    // const popover = this.popoverCtrl.create(PopOverNotificacionesPage);
    // await popover.present();
    // setTimeout(() => {

    //   this._comun.addItem({ name: 'lista-notificaciones', item: this.notificaciones });

    // }, 1000);

    //await this.navCtrl.push(PopOverNotificacionesPage);
    this.route.navigateByUrl('pop-over-notificaciones');
    setTimeout(() => {

      this._comun.addItem({ name: 'lista-notificaciones', item: this.notificaciones });

    }, 1000);
    //   this._comun.addItem({ name: 'lista-notificaciones', item: this.notificaciones });

    // }, 1000);

  }

  async getPromocionesNoVisto() {
    try {

      let noVisto = await this._notificaciones.getPromocionesUserNoVisto(this.user[0].email);
      this.promocionArray = this.promocionArray.concat(noVisto);

    } catch (e) { }

  }



  getNotificaciones() {
    //this._notificaciones.getNotificacion() 
    this._notificaciones.promocionesComunicacion.subscribe(data => {
      if (data.event === 'promotion') {
        this.promocionArray.push(data);
      } else if (data.event === 'incidencia') {
        this.incidenciaArray.push(data);
      }


    })
  }





  openPromociones() {
   // this.navCtrl.push(PromocionesPage, { notificationArray: this.promocionArray });
    //this.route.navigateByUrl('pop-over-notificaciones',{ notificationArray: this.promocionArray })
    this.route.navigateByUrl('promociones', { state: this.promocionArray });

  }


  ionViewWillEnter(){
    console.log('home ionViewWillEnter');
    
  }
  
  ionViewDidEnter(){
    console.log('home ionViewDidEnter');
  }
  
  ionViewWillLeave(){
    console.log('home ionViewWillLeave');
  }
  
  ionViewDidLeave(){
    console.log('home ionViewDidLeave');
  }
  
  ionViewWillUnload(){
    console.log('home ionViewWillUnload');
  }

  
  ionViewCanEnter(){
    console.log('home ionViewCanEnter');
  }
  ionViewCanLeave(){
    console.log('home ionViewCanLeave');
  }

  //metodos del mapa
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



  private showLoading() {
    this.loadinger = this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.loadinger.present();
  }

  doRefresh(refresher) {


    this.setCurrentPosition();
 
  }

 

  ionViewDidLoad() {
    this.setCurrentPosition();
    this.searching = false;
  }


  loadGoogleMaps() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
     cssClass: 'my-custom-class',
     message: 'Cargando...',
     
   });
   await this.loading.present();
  
   //const { role, data } = await loading.onDidDismiss();
   console.log('Loading dismissed!');
  }

  private setCurrentPosition() {
    
    this.presentLoading();
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
      console.log(position);
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    // DPW
    //  this.latitude = -33.4403959;
    //  this.longitude = -70.6340178;


      this.zoom = 15;
      this.dataDelivery.user = this.base.getDataUser();
      this.Me = this.base.getDataUser();
      this.onData();
    },error=>{
      console.log('error-ubicacion: ',error);
      setTimeout(function(){
        this.loading.dismiss()
        this.presentAlertError('No se puede acceder a tu ubicación');
      }.bind(this), 4000);
    });

  } 

  async presentAlertError(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: msg,
      buttons: ['Aceptar']
    });
  
    await alert.present();
  
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  private onData(): void {

    this.markers = [];
    // let load = this.loadcrtl.create({ content: 'Recolectando información...' });
    // load.present();

   this.pos.getNearPos(this.latitude, this.longitude).subscribe(

      //this.pos.getNearPos(-33.618509, -70.705837).subscribe(
        //this.pos.getNearPos(-33.418531, -70.606429).subscribe(
      data => {

        let data_array = Object.keys(data);
        console.log("data_array: " + data_array);
        let data_length: number = data_array.length;
        console.log('get-subsidiary: ', data);
        if (data_length >= 15) {
          console.log('ddddd')
          this.displaymap = false;
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
          this.displaymap = true;
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
        setTimeout(function(){
          this.loading.dismiss()
        }.bind(this), 4000);
 
        
         
      },
      error => {
        console.log(error);
        setTimeout(function(){
          this.loading.dismiss()
         
        }.bind(this), 4000);
       
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
    console.log('subsidiary marker', marker);
    this.dataDelivery.subsidiary = marker.title;
    //this.storage.set('subsidiary', marker.title);
   // this.storage.set('idSubsidiary', marker.id);
   // this.storage.set('subsidiary', marker);
    //this.setStorage('subsidiary',marker.title);
    this.setStorage('idSubsidiary',marker.id);
    this.setStorageObjet('subsidiary',marker);
    
    
      const  value  = await Storage.get({ key: 'subsidiary' });
    
      console.log('objeto click',JSON.parse(value.value))
    
    

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
