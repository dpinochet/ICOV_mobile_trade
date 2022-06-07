import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
//import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { B2bService } from 'src/app/services/b2b.service';
import { ComunicacionComponentService } from 'src/app/services/comunicacion-component.service';
import { DeliveryServicesService } from 'src/app/services/delivery-services.service';
import { FacebookConectionServiceService } from 'src/app/services/facebook-conection-service.service';
import { SocialSharingService } from 'src/app/services/social-sharing.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { YoutubeServiceService } from 'src/app/services/youtube-service.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { B2bViewProductPage } from '../b2b-view-product/b2b-view-product.page';
import * as moment from 'moment';
import { Storage } from '@capacitor/storage';
import { ModalImgPreviewPage } from '../modal-img-preview/modal-img-preview.page';
import { PopOverMenuBe2BePage } from '../pop-over-menu-be2-be/pop-over-menu-be2-be.page';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-be-to-be',
  templateUrl: './be-to-be.page.html',
  styleUrls: ['./be-to-be.page.scss'],
})
export class BeToBePage implements OnInit {

  loading1:any;

  constructor(public navCtrl: NavController,
    
    private modalCtrl: ModalController,
    private deliveryPublish: DeliveryServicesService, private _auth: UserServicesService,
    public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController,
    private b2b: B2bService, private barcodeScanner: BarcodeScanner, public popoverCtrl: PopoverController,
    private _comunc: ComunicacionComponentService, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
     private _facebookIntegracion: FacebookConectionServiceService, private _socialSharing: SocialSharingService, private _youtubeService: YoutubeServiceService,
    private iab: InAppBrowser,

  ) {
    
    let user_data = this._auth.getUser();
    this.user = user_data[0];


    this._comunc.itemComunicacion.subscribe(
      (item: any) => {

        if (item.name === 'b2b-finish') {
          console.log('item-subsidiary-reciber: ', item);
          this.user = item.itemAdd.user;
          this.subsidiary = item.itemAdd.subsidiary;
          this.imagenes = item.itemAdd.imagenes;
          this.formLeyend.controls.leyend.setValue(item.itemAdd.leyend);
          if (item.itemAdd.b2bfinish) {
            this.card_select_b2b_array_reverse[item.itemAdd.idx_card].active = false;
            // this.idx_card=item.itemAdd.idx_card;

          }
        } else if (item.name === 'low-stock-count') {
          this.baja_stock_info_count = item.itemAdd.count;

        }
      }

    )
    console.log("holaa")
  // this.instagramLoad();

  }

  ngOnInit() {
    console.log('ionViewDidLoad BeToBePage');

    this.loading = true;
    /*this.storage.get('subsidiary').then(async (subsidiary: any) => {
      this.subsidiary = subsidiary;

      await this.getListProductSubsidiaryB2BMobile();
      console.log('getSubsidiary: ', subsidiary);
      await this.getLastB2bSubsiduary(subsidiary.id);
      this.cortar_string(subsidiary.all.address);
      this.loading = false;
    })*/
    this.getsub();
  }

  formLeyend = new FormGroup({
    leyend: new FormControl(null, [Validators.required])
  })
  formGroupSearch = new FormGroup({
    search: new FormControl(null)
  })
  
  public base64Image: any;
  subsidiary = null;


  modelDeliveryPublish: any;
  user: any;
  subsidiary_last_b2b = null;
  loading = true;
  imagenes: any[] = new Array(
    /*
    
        {
          url: 'https://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg'
        }
        ,
        {
          url: 'https://laverdadnoticias.com/__export/1544763615106/sites/laverdad/img/2018/12/13/foto_perros_esperan_en_la_puerta_de_un_hospital_a_su_duexox_un_indigente.jpg_1834093470.jpg'
        }
        ,
        {
          url: 'https://especiespro.es/wp-content/uploads/2017/12/comunicacion-perros-y-gatos.jpg'
        }
        ,
        {
          url: 'https://ccvzaragoza.es/wp-content/uploads/2018/05/perro-y-gato-940x564.jpg'
        }
        ,
        {
          url: 'https://as01.epimg.net/epik/imagenes/2018/07/02/portada/1530543508_545055_1530544359_noticia_normal.jpg'
        }
        ,
        {
          url: 'https://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg'
        }
    
    */

  );


  end_check_out = 0;
  subsidiary_b2_mobile_data_product_list: any[] = new Array();

  direccion_subsidiary_arr: any[] = new Array();

  card_select_b2b_array: any[] = new Array();
  card_select_b2b_array_reverse: any[] = new Array();
  baja_stock_info_count = 0;



  loadinger: any;

  auth_youtbe_token_code = null;


  tweets: Observable<any[]>;
  loadinginger: any;


  

  marcas_agencias = new Array(

    /**
     * datos de prueba
     */
    /*
        {
          photo: 'https://pbs.twimg.com/profile_images/448253314786799616/XGfsNCTS_400x400.jpeg',
          title: 'Tecno import',
          lastb2b: '01-04-2019 13:23:52',
          id: 1
        },
        {
          photo: 'http://www.portalcentro.cl/wp-content/uploads/2014/07/entel_chile.jpg',
          title: 'Entel',
          lastb2b: '23-03-2019 14:15:10',
          id: 2
        },
        {
          photo: 'https://proyectov.cl/wp-content/uploads/2018/11/cachantun-logo-2-1.png',
          title: 'Cachantun',
          lastb2b: '12-02-2019 09:13:32',
          id: 3
        },
        {
          photo: 'http://3.bp.blogspot.com/-6loRsCgE9CU/UB72OHQEotI/AAAAAAAABtI/2yHYdjuGvDU/s1600/livean.png',
          title: 'Livean',
          lastb2b: '15-03-2019 08:45:22',
          id: 4
        }
    */
  )

  // instagramLoad(){
  //   var feed = new Instafeed({
  //     get: 'user',
  //     userId: 'c9b2eab155f74c498e713ac033c2f929',
  //     filter: function(image) {
  //         return image.tags.indexOf('TAG_NAME') >= 0;
  //     }
  // });
  // feed.run();
  // }


  /**
   * twitter integración
   */

  async youtubeLogin() {
    this.auth_youtbe_token_code = await this._youtubeService.auth();

    // this.showAlert('Codigo Verificación','Registra el codigo '+this.auth_youtbe_token_code.user_code+ ' en la plataforma de google y proporciona los permisos necesarios, una vez realices esta acción cierra la ventana en la X',['OK']);
    const alert = await this.alertCtrl.create({
      header: 'Codigo Verificación',
      message: 'Anota este codigo en un papel  ' + this.auth_youtbe_token_code.user_code + ' y luego registralo en la plataforma de google y proporciona los permisos necesarios, una vez realices esta acción cierra la ventana en la X',
      buttons: ['OK']
    });

    await alert.present();
    /*await alert.onDidDismiss(() => {
      
     
    })*/
    await alert.onDidDismiss().then(e=>{
      const browser = this.iab.create(this.auth_youtbe_token_code.verification_url);
      browser.show();
      browser.on('exit').subscribe((close_browser) => {
        console.log('el browser se ha cerrado');
        this.youtubeToken();
      })
    })
    console.log('auth_youtube_token_code: ', this.auth_youtbe_token_code);
  }

  youtubeToken() {
    this._youtubeService.token(this.auth_youtbe_token_code);
  }

  public instagramLogin() {

  let  options : InAppBrowserOptions = {
      location : 'yes',//Or 'no' 
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls 
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only 
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only 
      toolbar : 'yes', //iOS only 
      enableViewportScale : 'no', //iOS only 
      allowInlineMediaPlayback : 'no',//iOS only 
      presentationstyle : 'pagesheet',//iOS only 
      fullscreen : 'yes',//Windows only    
  };

    const browser = this.iab.create(
      
      'https://www.instagram.com/accounts/login/?force_authentication=1&enable_fb_login=1&platform_app_id=&next=/oauth/authorize/%3Fclient_id%3Dc9b2eab155f74c498e713ac033c2f929%26redirect_uri%3Dhttps%3A//www.icov.cl/%26response_type%3Dtoken'
      ,"_self",options);


    browser.show();

  
    
    browser.on("loadstop").subscribe((value)=>{
      console.log('close_value_instagram: ',value);
    })

    // this.navCtrl.push(PublicViewInstagramPage);

    // this.camera.getPicture({
    //   saveToPhotoAlbum: false,
    //   targetWidth: 300,
    //   targetHeight: 300,
    //   quality: 100,
    //   allowEdit: false,
    //   encodingType: this.camera.EncodingType.PNG,
    //   sourceType: this.camera.PictureSourceType.CAMERA,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    // }).then(async (imageData) => {


    //   this.instagram.share('data:image/png;base64,' + imageData, 'Caption')
    //     .then(() => console.log('Shared Instagram!'))
    //     .catch((error: any) => console.error('instagram error', error));

    // })

  }


  // async instagramLoginWindowsOpen(){

  //   // const popup = window.open('https://www.instagram.com/accounts/login/?force_authentication=1&enable_fb_login=1&platform_app_id=&next=/oauth/authorize/%3Fclient_id%3Dc9b2eab155f74c498e713ac033c2f929%26redirect_uri%3Dhttps%3A//www.icov.cl/%26response_type%3Dcode','_self');
  //   // console.log('instagram_hash_data: ',popup.location.hash); 

  //   const cliente = new instagram_api('rpemcampos@gmail.com','konfortowego1');
    


  //   cliente .login()
  //   .then(() => {
  //     cliente
  //       .getProfile()
  //       .then(console.log)
  //   })
  // }






  //timeline twitter


  // public async loadTimeline(refresher?) {
  //   // await this.showLoading();
  //   this.tweets = this.twitterProvider.getHomeTimeline();
  //   this.tweets.subscribe(async(data) => {
  //    await this.loadinginger.dismiss();
  //    try{
  //      refresher.complete();

  //    }catch(e){}
  //   }, err => {
  //     try{

  //       refresher.complete();
  //       this.showError(err);

  //     }catch(e){}
  //   });

  //   refresher.complete();
  // }
  // public composeTweet() {
  //   // let prompt = this.alertCtrl.create({
  //   //   title: 'New Tweet',
  //   //   message: "Write your Tweet message below",
  //   //   inputs: [
  //   //     {
  //   //       name: 'text'
  //   //     },
  //   //   ],
  //   //   buttons: [
  //   //     {
  //   //       text: 'Cancel'
  //   //     },
  //   //     {
  //   //       text: 'Tweet',
  //   //       handler: data => {
  //   //         this.postTweet(data.text);
  //   //       }
  //   //     }
  //   //   ]
  //   // });
  //   // prompt.present();

  //   this.navCtrl.push(ComposeTweetPage);
  // }




  public dateForTweet(dateString) {
    let d = new Date(Date.parse(dateString));
 
    // http://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
      d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
 
    return datestring;
  }
 
  public openLinkUrl(url) {
    let browser = this.iab.create(url, 'blank');
    // this.browserTab.isAvailable()
    // .then(isAvailable => {
    //   if (isAvailable) {
    //     this.browserTab.openUrl(url);
    //   } else {
    //     // open URL with InAppBrowser instead or SafariViewController
    //   }
    // });
  }
 
  // public postTweet(text) {
  //   this.showLoading();
  //   this.twitterProvider.postTweet(text).subscribe(res => {
  //     this.loading.dismiss();
  //     let toast = this.toastCtrl.create({
  //       message: 'Tweet posted!',
  //       duration: 3000
  //     });
  //     toast.present();
  //   }, err => {
  //     this.showError(err);
  //   });
  // }
  // private showLoading() {
  //   this.loadinginger = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });
  //   return this.loadinginger.present();
  // }
 
  // private showError(text) {
  //   this.loading.dismiss();
  //   let alert = this.alertCtrl.create({
  //     title: 'Error',
  //     message: text,
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }

  //end timeline twitter




  public loginFacebook() {
   /* this._facebookIntegracion.facebookLogin().then((dialogResponse) => {

      console.log('dialog_response:', dialogResponse);

      this._facebookIntegracion.facebookSharing();

    });*/
  }

  public facebookShare() {
    // this._facebookIntegracion.share('https://www.google.cl');

    this._socialSharing.facebookSharing('la chapema de la emma', 'learning', 'chuerning');


  }

  // public loginWithTwitter() {
  //   this.showLoading();

  //   this.twitter.login().then((data: TwitterConnectResponse) => {




  //     console.log('twitterLoginData: ', data);

  //     this._twtitterConectionService.setTokens(data.token, data.secret);
  //     this.loadinger.dismiss().then(() => {
  //       this.navCtrl.push(ComposeTweetPage);
  //     });




  //   }, error => {
  //     console.log('twitter-error: ', error);
  //     this.loadinger.dismiss();
  //     this.showAlert('Error inicio de sesión','No pudimos iniciar sesión con twitter, intenta despues',['OK']);
  //     // this.showError(error);
  //   });
  // }

  private showLoading() {
    this.loadinger = this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.loadinger.present();
  }

  private showError(text) {
    this.loadinger.dismiss().then(() => {
     /* let alert = this.alertCtrl.create({
        header: 'Fail',
        message: text + '\nMake sure to setup Twitter account on your device.',
        buttons: ['OK']
      });
      alert.present();*/
      this.presentAlertMultipleButtons(text);
    });
  }

  async presentAlertMultipleButtons(text) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Fail',
      message:  text + '\nMake sure to setup Twitter account on your device.',
      buttons: ['OK']
    });

    await alert.present();
  }

  /**
   * 
   * card dinamic init
   */


  addCardDinamic(model_card) {



    this.card_select_b2b_array.push(model_card);
    //this.card_select_b2b_array_reverse = _.reverse(this.card_select_b2b_array);
    this.card_select_b2b_array_reverse = this.card_select_b2b_array.reverse();
    console.log('array',this.card_select_b2b_array)
  }






  /**
   * 
   * end card dinamic
   */


  async presetenModal(title: string, card_item) {

    console.log('modal_data_send:', { title: title, card_item: card_item });



    if ('b2v-view-product' === title) {
     /* const modal = this.modalCtrl.create(B2bViewProductPage, { data: { card_item: card_item } });
      modal.present();*/
      const modal = await this.modalCtrl.create({
        component: B2bViewProductPage,
        cssClass: 'my-custom-class',
        componentProps: {
          card_item: card_item
        }
        
      });
      return await modal.present();
    }
    

  }

 async showAlert(title, subtitle, buttons) {
    /*const alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: buttons
    });

    alert.present();*/

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: title,
      message:  subtitle,
      buttons: buttons
    });

    await alert.present();
  }
  async presentLoading() {
    this.loading1 = await this.loadingCtrl.create({
     cssClass: 'my-custom-class',
     message: 'Cargando...',
     
   });
   await this.loading1.present();
  
   //const { role, data } = await loading.onDidDismiss();
   console.log('Loading dismissed!');
  }

 


  async selectMarcaEmpresaAlert() {
    this.presentLoading();
    /**
     *  ::::::::: FALTA OBTENER  this.b2b.getMarcaAndAgency()
     */

    let alert = await this.alertCtrl.create();
    //alert.setTitle('Agencias y marcas');
    alert.header='Agencias y marcas';
  
    //let marcas_agencias: any = await this.b2b.getMarcaAndAgency();
    
     let marcas_agencias:any=[];

 
  
    await this.b2b.getMarcaAndAgency().then(
      (response: Array<any>) => {
        console.log('Agencias: ', response);
        marcas_agencias=response;
      },
      (error: HttpErrorResponse) => {
        setTimeout(function(){
          this.loading1.dismiss()
          this.presentAlertError();
          console.log(error);
        }.bind(this), 4000);
      }
    )
  
    
    // let opciones_en_duro = [
    //   {
    //     nombre: "tecnoimport",
    //     id: 1
    //   },
    //   {
    //     nombre: "entel",
    //     id: 2
    //   },
    //   {
    //     nombre: "el grillo",
    //     id: 3
    //   },
    //   {
    //     nombre: "don guso",
    //     id: 4
    //   }


    // ]

    let input={data:[]};
    marcas_agencias.forEach((key: any, idx) => {
      input.data.push({type: 'radio',label:key.name,value:key,checked:false})

     /* alert.addInput({
        type: 'radio',
        label: key.name,
        value: key,
        checked: false
      });*/
      console.log("carga",marcas_agencias[0].name)
     /* alert.inputs=[{
        type: 'radio',
        label: key.name,
        value: key,
        checked: false
      }]*/
    })
    alert.inputs=input.data;


   // alert.addButton('Cancel');
    alert.buttons=[{text:'Cancelar'}]
   // alert.addButton({
      alert.buttons=[{
      text: 'Aceptar',
      handler: data => {
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
        console.log('data-input-select: ', data);


        /**
         * setea en model_card los datos de la marca o la agencia
         */

        try {

          let model_card = {
            photoCard: data.photo,
            titleCard: data.name,
            subTitleCard: data.created_at,
            comentarioGroup: new FormGroup({
              comentario: new FormControl(null, [Validators.required])
            }),
            imagenes: new Array(),
            id: data.id,
            active: true
          }

          /**
           * busca si esta la marca o la agencia registrada en card_select_b2b_array_reverse
           */



          this.validaMarca(data.id, this.subsidiary.all.id_multistore).then((valida_marca) => {

            console.log('valida_marca: ', valida_marca);

            if (valida_marca == true) {
              /*let find = _.findIndex(this.card_select_b2b_array_reverse, (o) => {
                return o.id == data.id;
              })*/
              let find =this.card_select_b2b_array_reverse.findIndex( (o) =>  o.id == data.id);

              /**
               * aña model_card si no está añadido en  card_select_b2b_array_reverse
               */
              console.log('find_card_select_index: ', find);
              if (find == -1) {
                console.log('model_card: ', model_card);
                this.addCardDinamic(model_card);

              }

            } else {
              this.showAlert('', 'Esta marca no esta presente en este punto de venta', ['OK']);
            }


          })








        } catch (e) {

         }


      }
    },
  {text:"cancelar"}]
   // });
    
    setTimeout(function(){
      this.loading1.dismiss()
      alert.present();
    }.bind(this), 2000);
   
  }




  validaMarca(brand_id, id_multistore) {
    return new Promise(async (resolve, reject) => {
      let response_valida_marca = await this.b2b.getValidaMarcas(brand_id, id_multistore);
      resolve(response_valida_marca);
      console.log('validamarcaExistentt,response: ', response_valida_marca);
    })
  }

  format_fecha(fecha) {
    if (fecha != null) {

      try {
        return moment(fecha).format('YYYY-MM-DD HH:mm:ss');
      } catch (e) {

        return moment().format('YYYY-MM-DD HH:mm:ss');
      }
    } else {
      return 'Sin b2b';
    }
    // console.log('FECHA RECIBIDA: ',fecha);
  }


 async presentPopover(c, event, card) {


    let popover = await this.popoverCtrl.create({
      component:PopOverMenuBe2BePage,
      event:event,
    });

   await popover.present(
      //ev: event
      
    );
    setTimeout(() => {

      this._comunc.addItem({
        name: 'data-pop-over', itemAdd: {
          user: this.user, subsidiary: this.subsidiary, imagenes: this.card_select_b2b_array_reverse[c].imagenes,
          leyend: this.card_select_b2b_array_reverse[c].comentarioGroup.value.comentario,
          idx_card: c, card: card
        }
      });

    }, 100);

    /*
    if (this.card_select_b2b_array_reverse[c].imagenes.length == 0) {
      this.showAlert('Sin imagenes', 'Debes tener como minimo una imagen para marcar check-out');
    } else if (this.card_select_b2b_array_reverse[c].comentarioGroup.valid == false) {
      this.showAlert('Sin registro comentario', 'Debes registrar un comentario para marcar check-out');
    } else {
      console.log('pase al else');

      let popover = this.popoverCtrl.create(PopOverMenuBe2BePage);
      popover.present({
        ev: event
      });
      setTimeout(() => {

        this._comunc.addItem({
          name: 'data-pop-over', itemAdd: {
            user: this.user, subsidiary: this.subsidiary, imagenes: this.card_select_b2b_array_reverse[c].imagenes,
            leyend: this.card_select_b2b_array_reverse[c].comentarioGroup.value.comentario
          }
        });

      }, 100);
    }*/
  }


  async getLastB2bSubsiduary(subsidiary_id) {
    try {

      let subsidiary_last_b2b_one = await this.b2b.getLastB2bSubsidiary(subsidiary_id);
      this.subsidiary_last_b2b = this.format_fecha(subsidiary_last_b2b_one);
    } catch (e) {

    }
  }

  cortar_string(value: string) {
    try {
      console.log('corta_string: ', value.split(','));
      this.direccion_subsidiary_arr = value.split(',');

    } catch (e) { }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BeToBePage');

    this.loading = true;
    /*this.storage.get('subsidiary').then(async (subsidiary: any) => {
      this.subsidiary = subsidiary;

      await this.getListProductSubsidiaryB2BMobile();
      console.log('getSubsidiary: ', subsidiary);
      await this.getLastB2bSubsiduary(subsidiary.id);
      this.cortar_string(subsidiary.all.address);
      this.loading = false;
    })*/
    this.getsub();
  }

  async getsub()
  {
    console.log('ffff');
    await Storage.get({ key: 'subsidiary'}).then(async (subsidiary: any) => {
      this.subsidiary = JSON.parse(subsidiary.value);
     // console.log('getSubsidiary 1: ', this.subsidiary);
      await this.getListProductSubsidiaryB2BMobile();
     // console.log('getSubsidiary 2: ', subsidiary.value);
      await this.getLastB2bSubsiduary(this.subsidiary.id);
      this.cortar_string(this.subsidiary.all.address);
      console.log("cod_local" , this.subsidiary.all.cod_local);
      this.loading = false;
    });
   
     // this.storage.get('subsidiary').then(async (subsidiary: any) => {
        //this.subsidiary = value;
  }

  async getListProductSubsidiaryB2BMobile() {

    /**
     * Obtiene la lista de productos en b2b
     */

    let subsidiary_b2_mobile_data_product: any = await this.b2b.getsubsidiaryB2bMobile(this.subsidiary.id);
    this.subsidiary_b2_mobile_data_product_list = subsidiary_b2_mobile_data_product;
    this.cortar_string(this.subsidiary.all.address);
    console.log('b2b_product: ', subsidiary_b2_mobile_data_product);

  }


  buscarProducto() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.formGroupSearch.controls.search.setValue(barcodeData.text);
      this.subsidiary_b2_mobile_data_product_list = this.filterItems(barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }


  filterItems(searchTerm) {
    return this.subsidiary_b2_mobile_data_product_list.filter((item) => {
      return item.idsku.toLowerCase().indexOf(
        searchTerm.toLowerCase()) > -1;
    });
  }


 async menuOption() {
    const actionSheet = await this.actionSheetCtrl.create({
      //title: 'Opciones',
      header:'Opciones',
      buttons: [
        {
          text: 'Check-out',
          role: 'check-out',
          handler: async () => {


            if (this.formLeyend.valid) {
              await this.registrarCheckOut();
            } else {
              this.presentToast('Debes registrar una leyenda', 'middle');
            }






          }
        }, {
          text: 'Salir',
          role: 'salir',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
   await actionSheet.present();
  }





 async previewImg(c) {

    let modal = await this.modalCtrl.create({
      component:ModalImgPreviewPage,
      //parametros: {
       // imagenes: this.card_select_b2b_array_reverse[c].imagenes
     // }
     componentProps: {
      'imagenes': this.card_select_b2b_array_reverse[c].imagenes,
    }
    }
    )
    await modal.present();
  }


  async registrarCheckOut() {

    for (const { item, index } of this.imagenes.map((item, index) => ({ item, index }))) {
      console.log(item); // 9, 2, 5
      console.log(index); // 0, 1, 2


      this.modelDeliveryPublish = {
        user_created: this.user.email,
        subsidiary: this.subsidiary.id,
        quantity: 1,
        photo: item.url,
        description: this.formLeyend.value.leyend
      }

      let rs = await this.deliveryPublish.publishv2(this.modelDeliveryPublish);
      if (rs != null) {
        console.log('postDelevery-response-check-out: ', rs);
        this.imagenes.splice(index, 1);
      }


    }


    return true;



  }


  async presentToast(message, position) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: position
    });
    await toast.present();
  }

  async registrarImagen(idx_card) {
    console.log('la camara es lerning: ');
    if (this.card_select_b2b_array[idx_card].imagenes.length <= 5) {
      /*this.camera.getPicture({
        saveToPhotoAlbum: false,
        targetWidth: 300,
        targetHeight: 300,
        quality: 100,
        allowEdit: false,
        encodingType: this.camera.EncodingType.PNG,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
        correctOrientation: true
      }).then(imageData => {
        this.base64Image = "data:image/jpg;base64," + imageData;

        this.addImagen(idx_card, { url: this.base64Image });

        //this.modelPos.controls.picture_business.setValue(this.base64Image);
      }, error => {

      });*/

      this.base64Image= await Camera.getPhoto({
        saveToGallery:false,
        width: 300,
        height: 300,
        quality: 100,
        allowEditing: false,
        resultType:CameraResultType.DataUrl,
        source:CameraSource.Camera,
        correctOrientation: true
      })

      this.addImagen(idx_card, { url: this.base64Image.dataUrl });
    }
  }

 


  addImagen(c, imagen) {
    this.card_select_b2b_array[c].imagenes.push(imagen);
  }

  deleteImagen(c, p) {
    console.log("indice c",c)
    console.log("indice p",p)
    console.log("imagenes",this.card_select_b2b_array_reverse[c].imagenes)
    this.card_select_b2b_array_reverse[c].imagenes.splice(p, 1);
    // this.imagenes.splice(imagen, 1);
    console.log("imagenes borrada",this.card_select_b2b_array_reverse[c].imagenes)
  }

}
