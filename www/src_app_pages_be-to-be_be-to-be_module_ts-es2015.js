(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_be-to-be_be-to-be_module_ts"],{

/***/ 86908:
/*!***********************************************************!*\
  !*** ./src/app/pages/be-to-be/be-to-be-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeToBePageRoutingModule": function() { return /* binding */ BeToBePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _be_to_be_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./be-to-be.page */ 96516);




const routes = [
    {
        path: '',
        component: _be_to_be_page__WEBPACK_IMPORTED_MODULE_0__.BeToBePage
    }
];
let BeToBePageRoutingModule = class BeToBePageRoutingModule {
};
BeToBePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BeToBePageRoutingModule);



/***/ }),

/***/ 93575:
/*!***************************************************!*\
  !*** ./src/app/pages/be-to-be/be-to-be.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeToBePageModule": function() { return /* binding */ BeToBePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _be_to_be_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./be-to-be-routing.module */ 86908);
/* harmony import */ var _be_to_be_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./be-to-be.page */ 96516);







let BeToBePageModule = class BeToBePageModule {
};
BeToBePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _be_to_be_routing_module__WEBPACK_IMPORTED_MODULE_0__.BeToBePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_be_to_be_page__WEBPACK_IMPORTED_MODULE_1__.BeToBePage]
    })
], BeToBePageModule);



/***/ }),

/***/ 96516:
/*!*************************************************!*\
  !*** ./src/app/pages/be-to-be/be-to-be.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeToBePage": function() { return /* binding */ BeToBePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_be_to_be_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./be-to-be.page.html */ 49121);
/* harmony import */ var _be_to_be_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./be-to-be.page.scss */ 72325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_b2b_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/b2b.service */ 36167);
/* harmony import */ var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/comunicacion-component.service */ 8077);
/* harmony import */ var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/delivery-services.service */ 68407);
/* harmony import */ var src_app_services_facebook_conection_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/facebook-conection-service.service */ 16834);
/* harmony import */ var src_app_services_social_sharing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/social-sharing.service */ 37393);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);
/* harmony import */ var src_app_services_youtube_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/youtube-service.service */ 25943);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _b2b_view_product_b2b_view_product_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../b2b-view-product/b2b-view-product.page */ 75278);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _modal_img_preview_modal_img_preview_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modal-img-preview/modal-img-preview.page */ 72475);
/* harmony import */ var _pop_over_menu_be2_be_pop_over_menu_be2_be_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pop-over-menu-be2-be/pop-over-menu-be2-be.page */ 44068);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @capacitor/camera */ 37673);





//import { Camera } from '@ionic-native/camera/ngx';
















let BeToBePage = class BeToBePage {
    constructor(navCtrl, modalCtrl, deliveryPublish, _auth, actionSheetCtrl, toastCtrl, b2b, barcodeScanner, popoverCtrl, _comunc, loadingCtrl, alertCtrl, _facebookIntegracion, _socialSharing, _youtubeService, iab) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.deliveryPublish = deliveryPublish;
        this._auth = _auth;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.b2b = b2b;
        this.barcodeScanner = barcodeScanner;
        this.popoverCtrl = popoverCtrl;
        this._comunc = _comunc;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this._facebookIntegracion = _facebookIntegracion;
        this._socialSharing = _socialSharing;
        this._youtubeService = _youtubeService;
        this.iab = iab;
        this.formLeyend = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
            leyend: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])
        });
        this.formGroupSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(null)
        });
        this.subsidiary = null;
        this.subsidiary_last_b2b = null;
        this.loading = true;
        this.imagenes = new Array(
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
        this.end_check_out = 0;
        this.subsidiary_b2_mobile_data_product_list = new Array();
        this.direccion_subsidiary_arr = new Array();
        this.card_select_b2b_array = new Array();
        this.card_select_b2b_array_reverse = new Array();
        this.baja_stock_info_count = 0;
        this.auth_youtbe_token_code = null;
        this.marcas_agencias = new Array(
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
        );
        let user_data = this._auth.getUser();
        this.user = user_data[0];
        this._comunc.itemComunicacion.subscribe((item) => {
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
            }
            else if (item.name === 'low-stock-count') {
                this.baja_stock_info_count = item.itemAdd.count;
            }
        });
        console.log("holaa");
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
    youtubeLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.auth_youtbe_token_code = yield this._youtubeService.auth();
            // this.showAlert('Codigo Verificación','Registra el codigo '+this.auth_youtbe_token_code.user_code+ ' en la plataforma de google y proporciona los permisos necesarios, una vez realices esta acción cierra la ventana en la X',['OK']);
            const alert = yield this.alertCtrl.create({
                header: 'Codigo Verificación',
                message: 'Anota este codigo en un papel  ' + this.auth_youtbe_token_code.user_code + ' y luego registralo en la plataforma de google y proporciona los permisos necesarios, una vez realices esta acción cierra la ventana en la X',
                buttons: ['OK']
            });
            yield alert.present();
            /*await alert.onDidDismiss(() => {
              
             
            })*/
            yield alert.onDidDismiss().then(e => {
                const browser = this.iab.create(this.auth_youtbe_token_code.verification_url);
                browser.show();
                browser.on('exit').subscribe((close_browser) => {
                    console.log('el browser se ha cerrado');
                    this.youtubeToken();
                });
            });
            console.log('auth_youtube_token_code: ', this.auth_youtbe_token_code);
        });
    }
    youtubeToken() {
        this._youtubeService.token(this.auth_youtbe_token_code);
    }
    instagramLogin() {
        let options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes', //Windows only    
        };
        const browser = this.iab.create('https://www.instagram.com/accounts/login/?force_authentication=1&enable_fb_login=1&platform_app_id=&next=/oauth/authorize/%3Fclient_id%3Dc9b2eab155f74c498e713ac033c2f929%26redirect_uri%3Dhttps%3A//www.icov.cl/%26response_type%3Dtoken', "_self", options);
        browser.show();
        browser.on("loadstop").subscribe((value) => {
            console.log('close_value_instagram: ', value);
        });
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
    dateForTweet(dateString) {
        let d = new Date(Date.parse(dateString));
        // http://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
        var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
        return datestring;
    }
    openLinkUrl(url) {
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
    loginFacebook() {
        /* this._facebookIntegracion.facebookLogin().then((dialogResponse) => {
     
           console.log('dialog_response:', dialogResponse);
     
           this._facebookIntegracion.facebookSharing();
     
         });*/
    }
    facebookShare() {
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
    showLoading() {
        this.loadinger = this.loadingCtrl.create({
            message: 'Please wait...'
        });
        this.loadinger.present();
    }
    showError(text) {
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
    presentAlertMultipleButtons(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Fail',
                message: text + '\nMake sure to setup Twitter account on your device.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /**
     *
     * card dinamic init
     */
    addCardDinamic(model_card) {
        this.card_select_b2b_array.push(model_card);
        //this.card_select_b2b_array_reverse = _.reverse(this.card_select_b2b_array);
        this.card_select_b2b_array_reverse = this.card_select_b2b_array.reverse();
        console.log('array', this.card_select_b2b_array);
    }
    /**
     *
     * end card dinamic
     */
    presetenModal(title, card_item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('modal_data_send:', { title: title, card_item: card_item });
            if ('b2v-view-product' === title) {
                /* const modal = this.modalCtrl.create(B2bViewProductPage, { data: { card_item: card_item } });
                 modal.present();*/
                const modal = yield this.modalCtrl.create({
                    component: _b2b_view_product_b2b_view_product_page__WEBPACK_IMPORTED_MODULE_11__.B2bViewProductPage,
                    cssClass: 'my-custom-class',
                    componentProps: {
                        card_item: card_item
                    }
                });
                return yield modal.present();
            }
        });
    }
    showAlert(title, subtitle, buttons) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            /*const alert = this.alertCtrl.create({
              title: title,
              subTitle: subtitle,
              buttons: buttons
            });
        
            alert.present();*/
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: title,
                message: subtitle,
                buttons: buttons
            });
            yield alert.present();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.loading1 = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Cargando...',
            });
            yield this.loading1.present();
            //const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    selectMarcaEmpresaAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            /**
             *  ::::::::: FALTA OBTENER  this.b2b.getMarcaAndAgency()
             */
            let alert = yield this.alertCtrl.create();
            //alert.setTitle('Agencias y marcas');
            alert.header = 'Agencias y marcas';
            //let marcas_agencias: any = await this.b2b.getMarcaAndAgency();
            let marcas_agencias = [];
            yield this.b2b.getMarcaAndAgency().then((response) => {
                console.log('Agencias: ', response);
                marcas_agencias = response;
            }, (error) => {
                setTimeout(function () {
                    this.loading1.dismiss();
                    this.presentAlertError();
                    console.log(error);
                }.bind(this), 4000);
            });
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
            let input = { data: [] };
            marcas_agencias.forEach((key, idx) => {
                input.data.push({ type: 'radio', label: key.name, value: key, checked: false });
                /* alert.addInput({
                   type: 'radio',
                   label: key.name,
                   value: key,
                   checked: false
                 });*/
                console.log("carga", marcas_agencias[0].name);
                /* alert.inputs=[{
                   type: 'radio',
                   label: key.name,
                   value: key,
                   checked: false
                 }]*/
            });
            alert.inputs = input.data;
            // alert.addButton('Cancel');
            alert.buttons = [{ text: 'Cancelar' }];
            // alert.addButton({
            alert.buttons = [{
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
                                comentarioGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
                                    comentario: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])
                                }),
                                imagenes: new Array(),
                                id: data.id,
                                active: true
                            };
                            /**
                             * busca si esta la marca o la agencia registrada en card_select_b2b_array_reverse
                             */
                            this.validaMarca(data.id, this.subsidiary.all.id_multistore).then((valida_marca) => {
                                console.log('valida_marca: ', valida_marca);
                                if (valida_marca == true) {
                                    /*let find = _.findIndex(this.card_select_b2b_array_reverse, (o) => {
                                      return o.id == data.id;
                                    })*/
                                    let find = this.card_select_b2b_array_reverse.findIndex((o) => o.id == data.id);
                                    /**
                                     * aña model_card si no está añadido en  card_select_b2b_array_reverse
                                     */
                                    console.log('find_card_select_index: ', find);
                                    if (find == -1) {
                                        console.log('model_card: ', model_card);
                                        this.addCardDinamic(model_card);
                                    }
                                }
                                else {
                                    this.showAlert('', 'Esta marca no esta presente en este punto de venta', ['OK']);
                                }
                            });
                        }
                        catch (e) {
                        }
                    }
                },
                { text: "cancelar" }];
            // });
            setTimeout(function () {
                this.loading1.dismiss();
                alert.present();
            }.bind(this), 2000);
        });
    }
    validaMarca(brand_id, id_multistore) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            let response_valida_marca = yield this.b2b.getValidaMarcas(brand_id, id_multistore);
            resolve(response_valida_marca);
            console.log('validamarcaExistentt,response: ', response_valida_marca);
        }));
    }
    format_fecha(fecha) {
        if (fecha != null) {
            try {
                return moment__WEBPACK_IMPORTED_MODULE_12__(fecha).format('YYYY-MM-DD HH:mm:ss');
            }
            catch (e) {
                return moment__WEBPACK_IMPORTED_MODULE_12__().format('YYYY-MM-DD HH:mm:ss');
            }
        }
        else {
            return 'Sin b2b';
        }
        // console.log('FECHA RECIBIDA: ',fecha);
    }
    presentPopover(c, event, card) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            let popover = yield this.popoverCtrl.create({
                component: _pop_over_menu_be2_be_pop_over_menu_be2_be_page__WEBPACK_IMPORTED_MODULE_15__.PopOverMenuBe2BePage,
                event: event,
            });
            yield popover.present(
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
        });
    }
    getLastB2bSubsiduary(subsidiary_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let subsidiary_last_b2b_one = yield this.b2b.getLastB2bSubsidiary(subsidiary_id);
                this.subsidiary_last_b2b = this.format_fecha(subsidiary_last_b2b_one);
            }
            catch (e) {
            }
        });
    }
    cortar_string(value) {
        try {
            console.log('corta_string: ', value.split(','));
            this.direccion_subsidiary_arr = value.split(',');
        }
        catch (e) { }
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
    getsub() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('ffff');
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_13__.Storage.get({ key: 'subsidiary' }).then((subsidiary) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                this.subsidiary = JSON.parse(subsidiary.value);
                // console.log('getSubsidiary 1: ', this.subsidiary);
                yield this.getListProductSubsidiaryB2BMobile();
                // console.log('getSubsidiary 2: ', subsidiary.value);
                yield this.getLastB2bSubsiduary(this.subsidiary.id);
                this.cortar_string(this.subsidiary.all.address);
                console.log("cod_local", this.subsidiary.all.cod_local);
                this.loading = false;
            }));
            // this.storage.get('subsidiary').then(async (subsidiary: any) => {
            //this.subsidiary = value;
        });
    }
    getListProductSubsidiaryB2BMobile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            /**
             * Obtiene la lista de productos en b2b
             */
            let subsidiary_b2_mobile_data_product = yield this.b2b.getsubsidiaryB2bMobile(this.subsidiary.id);
            this.subsidiary_b2_mobile_data_product_list = subsidiary_b2_mobile_data_product;
            this.cortar_string(this.subsidiary.all.address);
            console.log('b2b_product: ', subsidiary_b2_mobile_data_product);
        });
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
            return item.idsku.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
    menuOption() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                //title: 'Opciones',
                header: 'Opciones',
                buttons: [
                    {
                        text: 'Check-out',
                        role: 'check-out',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.formLeyend.valid) {
                                yield this.registrarCheckOut();
                            }
                            else {
                                this.presentToast('Debes registrar una leyenda', 'middle');
                            }
                        })
                    },
                    {
                        text: 'Salir',
                        role: 'salir',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    previewImg(c) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _modal_img_preview_modal_img_preview_page__WEBPACK_IMPORTED_MODULE_14__.ModalImgPreviewPage,
                //parametros: {
                // imagenes: this.card_select_b2b_array_reverse[c].imagenes
                // }
                componentProps: {
                    'imagenes': this.card_select_b2b_array_reverse[c].imagenes,
                }
            });
            yield modal.present();
        });
    }
    registrarCheckOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            for (const { item, index } of this.imagenes.map((item, index) => ({ item, index }))) {
                console.log(item); // 9, 2, 5
                console.log(index); // 0, 1, 2
                this.modelDeliveryPublish = {
                    user_created: this.user.email,
                    subsidiary: this.subsidiary.id,
                    quantity: 1,
                    photo: item.url,
                    description: this.formLeyend.value.leyend
                };
                let rs = yield this.deliveryPublish.publishv2(this.modelDeliveryPublish);
                if (rs != null) {
                    console.log('postDelevery-response-check-out: ', rs);
                    this.imagenes.splice(index, 1);
                }
            }
            return true;
        });
    }
    presentToast(message, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: position
            });
            yield toast.present();
        });
    }
    registrarImagen(idx_card) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
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
                this.base64Image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__.Camera.getPhoto({
                    saveToGallery: false,
                    width: 300,
                    height: 300,
                    quality: 100,
                    allowEditing: false,
                    resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__.CameraResultType.DataUrl,
                    source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__.CameraSource.Camera,
                    correctOrientation: true
                });
                this.addImagen(idx_card, { url: this.base64Image.dataUrl });
            }
        });
    }
    addImagen(c, imagen) {
        this.card_select_b2b_array[c].imagenes.push(imagen);
    }
    deleteImagen(c, p) {
        console.log("indice c", c);
        console.log("indice p", p);
        console.log("imagenes", this.card_select_b2b_array_reverse[c].imagenes);
        this.card_select_b2b_array_reverse[c].imagenes.splice(p, 1);
        // this.imagenes.splice(imagen, 1);
        console.log("imagenes borrada", this.card_select_b2b_array_reverse[c].imagenes);
    }
};
BeToBePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController },
    { type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_5__.DeliveryServicesService },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_8__.UserServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ToastController },
    { type: src_app_services_b2b_service__WEBPACK_IMPORTED_MODULE_3__.B2bService },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.PopoverController },
    { type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_4__.ComunicacionComponentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController },
    { type: src_app_services_facebook_conection_service_service__WEBPACK_IMPORTED_MODULE_6__.FacebookConectionServiceService },
    { type: src_app_services_social_sharing_service__WEBPACK_IMPORTED_MODULE_7__.SocialSharingService },
    { type: src_app_services_youtube_service_service__WEBPACK_IMPORTED_MODULE_9__.YoutubeServiceService },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__.InAppBrowser }
];
BeToBePage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-be-to-be',
        template: _raw_loader_be_to_be_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_be_to_be_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BeToBePage);



/***/ }),

/***/ 16834:
/*!****************************************************************!*\
  !*** ./src/app/services/facebook-conection-service.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookConectionServiceService": function() { return /* binding */ FacebookConectionServiceService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



// import { FacebookService, InitParams, LoginResponse, UIParams } from 'ngx-facebook';
let FacebookConectionServiceService = class FacebookConectionServiceService {
    constructor(http) {
        // let initParams: InitParams = {
        //   appId: '2376775872560317',
        //   xfbml: true,
        //   version: 'v3.3'
        // };
        this.http = http;
        // fb.init(initParams);
    }
    facebookLogin() {
        return 3;
        /*  return new Promise((resolve,reject)=>{
            this.fb.login(['public_profile', 'user_friends', 'email'])
          .then((res: FacebookLoginResponse) => {
             resolve(this.facebookSharing());
          })
          .catch(e => console.log('Error logging into Facebook', e));
      
          })*/
    }
    facebookSharing() {
        let configFacebook = {
            method: 'share',
            href: 'http://example.com',
            caption: 'Such caption, very feed.',
            description: 'Much description',
            picture: 'http://example.com/image.png'
        };
        // return this.fb.showDialog(configFacebook);
        return 3;
    }
};
FacebookConectionServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
FacebookConectionServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FacebookConectionServiceService);



/***/ }),

/***/ 37393:
/*!****************************************************!*\
  !*** ./src/app/services/social-sharing.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialSharingService": function() { return /* binding */ SocialSharingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);




let SocialSharingService = class SocialSharingService {
    constructor(http, socialSharing) {
        this.http = http;
        this.socialSharing = socialSharing;
        console.log('Hello SocialSharingProvider Provider');
    }
    facebookSharing(message, image, url) {
        this.socialSharing.shareViaFacebook(message, image, url);
    }
};
SocialSharingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_0__.SocialSharing }
];
SocialSharingService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SocialSharingService);



/***/ }),

/***/ 25943:
/*!*****************************************************!*\
  !*** ./src/app/services/youtube-service.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoutubeServiceService": function() { return /* binding */ YoutubeServiceService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);



let YoutubeServiceService = class YoutubeServiceService {
    // playlistId 
    // nextPageToken 
    // prevPageToken;
    constructor(http) {
        this.http = http;
        this.OAUTH2_CLIENT_ID = '97244969057-5vgal1prd287aq7v5v1dqnjkaoni1i26.apps.googleusercontent.com';
        this.OAUTH2_SCOPES = [
            'https://www.googleapis.com/auth/youtube'
        ];
        console.log('Hello YoutubeServiceProvider Provider');
    }
    auth() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let data = {
                client_id: '97244969057-e20um7a1dkkmlrggmmtjagvom9gr43f8.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/youtube'
            };
            let header = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            return this.http.post('https://accounts.google.com/o/oauth2/device/code', data).toPromise();
            // await this.token(code_response);
            // //  .then((authResponse)=>{
            // //    this.token(authResponse);
            // //     console.log('authResponse_code:',authResponse);
            // //  });
        });
    }
    token(authData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            console.log('code_value: ', authData);
            let auth = authData;
            let data = {
                client_id: '97244969057-e20um7a1dkkmlrggmmtjagvom9gr43f8.apps.googleusercontent.com',
                client_secret: 's4B4hsBD-2xyRn5jVvlCsM3O',
                code: auth.device_code,
                grant_type: 'http://oauth.net/grant_type/device/1.0'
            };
            let token_result = yield this.http.post('https://accounts.google.com/o/oauth2/token', data).toPromise();
            console.log('token_result: ', token_result);
            // .then((authResponse_token)=>{
            //   this.token(authResponse_token);
            //    console.log('authResponse_token:',authResponse_token);
            // });
        });
    }
};
YoutubeServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
YoutubeServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], YoutubeServiceService);



/***/ }),

/***/ 72325:
/*!***************************************************!*\
  !*** ./src/app/pages/be-to-be/be-to-be.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-be-to-be {\n  background: #E0E0E0;\n}\npage-be-to-be ion-content {\n  background: #E0E0E0;\n}\npage-be-to-be .image-container {\n  min-height: 200px;\n  background-size: cover;\n}\n@media (min-width: 0px) {\n  page-be-to-be .images {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n}\n@media (min-width: 420px) {\n  page-be-to-be .images {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n}\n@media (min-width: 720px) {\n  page-be-to-be .images {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n}\npage-be-to-be .one-image {\n  margin: 2px;\n}\npage-be-to-be ion-scroll {\n  height: 100px;\n}\nion-scroll {\n  height: 100px;\n}\n.gallery-modal {\n  background: rgba(0, 0, 0, 0.7) !important;\n}\n.info-punto-venta-style {\n  position: relative !important;\n  top: 10px !important;\n}\nbody > ion-app > ng-component > ion-nav > page-be-to-be > ion-content > div.scroll-content > ion-slides > div > div.swiper-wrapper > ion-slide.info-punto-venta-style.swiper-slide.swiper-slide-active > div > ion-card {\n  position: absolute !important;\n  top: 0px !important;\n}\nbody > ion-app > ng-component > ion-nav > page-be-to-be > ion-content > div.scroll-content > ion-slides > div > div.swiper-wrapper > ion-slide.swiper-slide.swiper-slide-active > div > ion-card {\n  position: absolute !important;\n  top: 0px !important;\n}\n.no-product-style {\n  margin-right: auto;\n  margin-left: auto;\n  color: #BDBDBD;\n}\n.icon-button-style {\n  -webkit-margin-end: 1em;\n          margin-inline-end: 1em;\n}\n.scroll-content {\n  touch-action: pan-x pan-y !important;\n}\n.scroll-content * {\n  touch-action: pan-x pan-y !important;\n}\n.loading-style {\n  margin-right: auto;\n  margin-left: auto;\n  right: auto;\n  left: auto;\n  -webkit-margin-before: 50%;\n          margin-block-start: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlLXRvLWJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLG1CQUFBO0FBRVI7QUFDSTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUVJO0VBQ0k7SUFDSSxvQkFBQTtTQUFBLGVBQUE7RUFBVjtBQUNGO0FBR0k7RUFDSTtJQUNJLG9CQUFBO1NBQUEsZUFBQTtFQURWO0FBQ0Y7QUFJSTtFQUNJO0lBQ0ksb0JBQUE7U0FBQSxlQUFBO0VBRlY7QUFDRjtBQUtJO0VBQ0ksV0FBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0FBSlI7QUFnQkE7RUFDSSxhQUFBO0FBYko7QUFnQkE7RUFDSSx5Q0FBQTtBQWJKO0FBZ0JBO0VBQ0ksNkJBQUE7RUFDQSxvQkFBQTtBQWJKO0FBZ0JBO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtBQWJKO0FBZ0JBO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtBQWJKO0FBaUJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFkSjtBQWlCQTtFQUNJLHVCQUFBO1VBQUEsc0JBQUE7QUFkSjtBQWlCQTtFQUNJLG9DQUFBO0FBZEo7QUFlSTtFQUNJLG9DQUFBO0FBYlI7QUFtQkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0FBaEJKIiwiZmlsZSI6ImJlLXRvLWJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtYmUtdG8tYmUge1xuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XG4gICAgaW9uLWNvbnRlbnR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XG4gICAgfVxuXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMHB4KSB7XG4gICAgICAgIC5pbWFnZXMge1xuICAgICAgICAgICAgY29sdW1uLWNvdW50OiAyO1xuICAgICAgICB9XG4gICAgfVxuIFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MjBweCkge1xuICAgICAgICAuaW1hZ2VzIHtcbiAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMztcbiAgICAgICAgfVxuICAgIH1cbiBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgLmltYWdlcyB7XG4gICAgICAgICAgICBjb2x1bW4tY291bnQ6IDQ7XG4gICAgICAgIH1cbiAgICB9XG4gXG4gICAgLm9uZS1pbWFnZSB7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgIH1cblxuICAgIGlvbi1zY3JvbGwgeyBcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuXG5cbiAgICBcbn1cblxuYm9keSA+IGlvbi1hcHAgPiBuZy1jb21wb25lbnQgPiBpb24tbmF2ID4gcGFnZS1iZS10by1iZSA+IGlvbi1jb250ZW50ID4gZGl2LnNjcm9sbC1jb250ZW50ID4gaW9uLWNhcmQ6bnRoLWNoaWxkKDEpID4gaW9uLWNhcmQtZm9vdGVyID4gZm9ybSA+IGlvbi1pdGVtID4gZGl2Lml0ZW0taW5uZXJ7XG4gICBcblxuXG59XG5pb24tc2Nyb2xsIHsgXG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbi5nYWxsZXJ5LW1vZGFse1xuICAgIGJhY2tncm91bmQ6ICByZ2JhKDAsIDAsIDAsIDAuNykgIWltcG9ydGFudDtcbn1cblxuLmluZm8tcHVudG8tdmVudGEtc3R5bGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdG9wOjEwcHggIWltcG9ydGFudDtcbn1cblxuYm9keSA+IGlvbi1hcHAgPiBuZy1jb21wb25lbnQgPiBpb24tbmF2ID4gcGFnZS1iZS10by1iZSA+IGlvbi1jb250ZW50ID4gZGl2LnNjcm9sbC1jb250ZW50ID4gaW9uLXNsaWRlcyA+IGRpdiA+IGRpdi5zd2lwZXItd3JhcHBlciA+IGlvbi1zbGlkZS5pbmZvLXB1bnRvLXZlbnRhLXN0eWxlLnN3aXBlci1zbGlkZS5zd2lwZXItc2xpZGUtYWN0aXZlID4gZGl2ID4gaW9uLWNhcmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgdG9wOjBweCAhaW1wb3J0YW50O1xufVxuXG5ib2R5ID4gaW9uLWFwcCA+IG5nLWNvbXBvbmVudCA+IGlvbi1uYXYgPiBwYWdlLWJlLXRvLWJlID4gaW9uLWNvbnRlbnQgPiBkaXYuc2Nyb2xsLWNvbnRlbnQgPiBpb24tc2xpZGVzID4gZGl2ID4gZGl2LnN3aXBlci13cmFwcGVyID4gaW9uLXNsaWRlLnN3aXBlci1zbGlkZS5zd2lwZXItc2xpZGUtYWN0aXZlID4gZGl2ID4gaW9uLWNhcmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgdG9wOjBweCAhaW1wb3J0YW50O1xufVxuXG5cbi5uby1wcm9kdWN0LXN0eWxle1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBjb2xvcjojQkRCREJEO1xufVxuXG4uaWNvbi1idXR0b24tc3R5bGV7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDFlbTtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgICB0b3VjaC1hY3Rpb246IHBhbi14IHBhbi15ICFpbXBvcnRhbnQ7XG4gICAgKiB7XG4gICAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXkgIWltcG9ydGFudDtcbiAgICB9XG59XG5cblxuXG4ubG9hZGluZy1zdHlsZXtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ 49121:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/be-to-be/be-to-be.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the BeToBePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>B2B</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"background:#F5F5F5\" class=\"ion-padding\">\n\n\n\n  <div *ngIf=\"loading==true\"\n    style=\"margin-left:auto; margin-right:auto;align-items: center;justify-content: center;margin-block-start: 50%\">\n\n    <ion-spinner style=\"margin-left:auto; margin-right:auto;width: 100%;\" name=\"bubbles\"></ion-spinner>\n    <br />\n    <ion-label style=\"margin-left:42% !important;color: #9E9E9E\">Cargando...</ion-label>\n\n\n  </div>\n\n  <div *ngIf=\"loading==false\">\n\n    <div *ngIf=\"card_select_b2b_array_reverse?.length==0\" padding>\n      <h3 style=\"margin-block-start: 10em;text-align: center;color:#757575;margin-bottom: 0px;\">\n        No has seleccionado ninguna marca, para trabajar presiona el botón\n      </h3><br />\n      <div  style=\"text-align:center\">\n        <ion-button fill=\"clear\"  >\n          \n          <ion-icon slot=\"icon-only\" name=\"cart\" color=\"violet\"></ion-icon>\n        </ion-button>\n       \n        \n      </div>\n    </div>\n\n\n    <!-- init cards array -->\n\n    <div *ngFor=\"let card_reverse of card_select_b2b_array_reverse;let c=index\">\n\n\n      <ion-card\n        style=\"margin-bottom: 0px !important;border-top:none !important; border-top: 3px solid colorofyourchosing;\">\n\n        <ion-card-header>\n          <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"3\" size-sm=\"3\" size-md=\"3\" size-lg=\"3\" size-xl=\"3\">\n                  <ion-avatar item-start>\n                    <img [src]=\"subsidiary?.all?.picture_business\">\n                  </ion-avatar>\n                </ion-col>\n                <ion-col size=\"7\" size-sm=\"7\" size-md=\"7\" size-lg=\"7\" size-xl=\"7\" style=\"padding-left: 14px;padding-right: 0px;\">\n                  <ion-card-title style=\"color:#424242\">\n                  </ion-card-title>\n                  <ion-card-subtitle>\n                    {{subsidiary?.all?.name_business}}<br />\n                    <p style=\"color:#9E9E9E\">{{card_reverse?.titleCard}}</p>\n                    <p style=\"color:#9E9E9E\">{{subsidiary_last_b2b}}</p>\n                  </ion-card-subtitle>\n                </ion-col>\n                <ion-col size=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" size-xl=\"2\">\n                  <ion-buttons >\n                    <ion-button fill=\"clear\"  (click)=\"presentPopover(c,$event,card_reverse)\" color=\"violet\">\n                      <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n\n          </ion-item>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n         <form [formGroup]=\"card_reverse?.comentarioGroup\"\n            style=\"margin-left:9px;margin-right:9px;margin-bottom: 0px!important\">\n            <ion-item style=\"background:#FAFAFA !important\">\n              <ion-textarea clearOnEdit=\"true\" style=\"background:#FAFAFA!important;color:#9E9E9E!important;\"\n                formControlName=\"comentario\" placeholder=\"Escribe un comentario\"></ion-textarea>\n            </ion-item>\n          </form>\n        </ion-card-content>\n\n      </ion-card>\n      <!--<ion-card *ngIf=\"card_reverse?.imagenes?.length>0\"\n        style=\"margin-top: 0px;margin-bottom: 0px !important;background:#9C27B0\">\n        <ion-card-content>\n          \n            <div class=\"images\" (click)=\"previewImg(c)\">\n              <div class=\"one-image\" *ngFor=\"let imagen of card_reverse?.imagenes, let p=index\">\n                <img (press)=\"deleteImagen(c,p)\" [src]=\"imagen?.url\">\n              </div>\n            </div>\n         \n        </ion-card-content>\n      </ion-card>-->\n      <ion-card *ngIf=\"card_reverse?.imagenes?.length>0\"\n        style=\"margin-top: 0px;margin-bottom: 0px !important;background:#9C27B0\">\n        <ion-card-content>\n         \n          <ion-slides pager=\"true\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let imagen of card_reverse?.imagenes, let p=index\">\n              <ion-button (click)=\"deleteImagen(c,p)\" icon-start fill=\"clear\"   size=\"small\" color=\"light\" style=\"z-index: 2;\n              position: absolute;\n              left: 1%;\n              top: 1%;\n              margin: auto;\">\n                 <ion-icon name=\"close-circle-outline\"></ion-icon>\n              </ion-button>\n              <img [src]=\"imagen?.url\">\n            </ion-slide>\n          </ion-slides>\n         \n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-row>\n          <ion-col style=\"text-align: center;\">\n            <ion-button (click)=\"registrarImagen(c)\"  icon-start fill=\"clear\"   size=\"small\" color=\"violet\">\n              <ion-icon name=\"camera\" style=\"font-size: 25px;\"></ion-icon>\n            </ion-button>\n            <!-- <button ion-fab (click)=\"registrarImagen()\">\n              <ion-icon name=\"camera\"></ion-icon>\n            </button> -->\n\n          </ion-col>\n          <ion-col style=\"text-align: center;\">\n            <ion-button (click)=\"presetenModal('b2v-view-product',card_reverse)\" fill=\"clear\"   size=\"small\" color=\"violet\" icon-start>\n              <ion-icon name=\"reader-outline\" style=\"font-size: 25px;\"></ion-icon>\n              <!--<span class=\"material-icons\"> remove_shopping_cart</span>-->\n            </ion-button>\n          </ion-col>\n          <ion-col style=\"text-align: center;\">\n            <!--<ion-button fill=\"clear\" icon-start  size=\"small\" color=\"violet\">\n              <ion-icon style=\"font-size: 25px;\" name=\"cart-outline\"></ion-icon>-->\n              <!--<span class=\"material-icons-outlined\">\n                shopping_cart\n              </span>-->\n              <!--<ion-badge item-end color=\"violet\">{{baja_stock_info_count}}</ion-badge>\n            </ion-button>--> \n          </ion-col>\n          <!-- <ion-col>\n\n          </ion-col>\n          <ion-col>\n\n          </ion-col>\n      \n          <ion-col>\n            <button ion-button clear item-end icon-start small (click)=\"instagramLogin()\">\n              <ion-icon name=\"logo-instagram\"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button clear item-end icon-start small (click)=\"loginFacebook()\">\n\n              (click)=\"loginFacebook()\" -->\n              <!-- <ion-icon name=\"logo-facebook\"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button clear item-end icon-start small (click)=\"loginWithTwitter()\">\n              <ion-icon name=\"logo-twitter\"></ion-icon>\n            </button>\n          </ion-col> --> \n        </ion-row>\n      </ion-card>\n\n    </div>\n\n    <!-- end cards arrs -->\n\n\n    <!-- <div padding>\n      <ion-segment [(ngModel)]=\"pet\">\n        <ion-segment-button value=\"Instagram\">\n          Instagram\n        </ion-segment-button>\n        <ion-segment-button value=\"Facebook\">\n          Facebook\n        </ion-segment-button>\n        <ion-segment-button value=\"Twitter\">\n          Twitter\n        </ion-segment-button>\n      </ion-segment>\n    </div> -->\n\n    <!-- <div [ngSwitch]=\"pet\">\n      <ion-list *ngSwitchCase=\"'Instagram'\">\n       \n\n        <div id=\"instafeed\"></div>\n      \n      </ion-list>\n\n      <ion-list *ngSwitchCase=\"'Facebook'\">\n\n      </ion-list>\n      <ion-list *ngSwitchCase=\"'Twitter'\">\n\n        <div>\n          <ion-refresher (ionRefresh)=\"loadTimeline($event)\">\n              <ion-refresher-content></ion-refresher-content>\n          </ion-refresher>\n  \n          <ion-card *ngFor=\"let tweet of tweets | async\">\n  \n              <ion-item>\n                <ion-avatar item-left>\n                  <img src=\"{{tweet.user.profile_image_url}}\">\n                </ion-avatar>\n                <h2>{{tweet.user.name}}</h2>\n                <p>{{dateForTweet(tweet.created_at)}}</p>\n              </ion-item>\n          \n              <img src=\"{{tweet.extended_entities.media[0].media_url}}\" *ngIf=\"tweet.extended_entities\">\n          \n              <ion-card-content>\n                <p>{{tweet.text}}</p>\n              </ion-card-content>\n          \n              <ion-row>\n                <ion-col *ngIf=\"tweet.entities.urls.length > 0\">\n                  <button ion-button clear small (click)=\"openLinkUrl(tweet.entities.urls[0].url)\">\n                    <ion-icon name=\"open\"></ion-icon>\n                    <div>Open Link</div>\n                  </button>\n                </ion-col>\n              </ion-row>\n          \n            </ion-card>\n        </div>\n          \n\n\n      </ion-list>\n    </div> -->\n\n\n\n  </div>\n\n \n  <ion-fab vertical=\"bottom\" horizontal=\"end\"  slot=\"fixed\">\n    <ion-fab-button color=\"violet\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"violet\" (click)=\"selectMarcaEmpresaAlert()\"><ion-icon name=\"swap-horizontal\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_be-to-be_be-to-be_module_ts-es2015.js.map