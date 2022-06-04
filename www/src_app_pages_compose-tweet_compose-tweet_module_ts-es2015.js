(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_compose-tweet_compose-tweet_module_ts"],{

/***/ 34177:
/*!*********************************************************************!*\
  !*** ./src/app/pages/compose-tweet/compose-tweet-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComposeTweetPageRoutingModule": function() { return /* binding */ ComposeTweetPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _compose_tweet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose-tweet.page */ 95134);




const routes = [
    {
        path: '',
        component: _compose_tweet_page__WEBPACK_IMPORTED_MODULE_0__.ComposeTweetPage
    }
];
let ComposeTweetPageRoutingModule = class ComposeTweetPageRoutingModule {
};
ComposeTweetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComposeTweetPageRoutingModule);



/***/ }),

/***/ 75550:
/*!*************************************************************!*\
  !*** ./src/app/pages/compose-tweet/compose-tweet.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComposeTweetPageModule": function() { return /* binding */ ComposeTweetPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _compose_tweet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose-tweet-routing.module */ 34177);
/* harmony import */ var _compose_tweet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose-tweet.page */ 95134);







let ComposeTweetPageModule = class ComposeTweetPageModule {
};
ComposeTweetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _compose_tweet_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComposeTweetPageRoutingModule
        ],
        declarations: [_compose_tweet_page__WEBPACK_IMPORTED_MODULE_1__.ComposeTweetPage]
    })
], ComposeTweetPageModule);



/***/ }),

/***/ 95134:
/*!***********************************************************!*\
  !*** ./src/app/pages/compose-tweet/compose-tweet.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComposeTweetPage": function() { return /* binding */ ComposeTweetPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_compose_tweet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./compose-tweet.page.html */ 28815);
/* harmony import */ var _compose_tweet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose-tweet.page.scss */ 66568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 31531);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/twitter-conection-service.service */ 54793);





//import { TwitterConectionServiceProvider } from '../../providers/twitter-conection-service/twitter-conection-service';


//import { Base64 } from '@ionic-native/base64';



let ComposeTweetPage = class ComposeTweetPage {
    constructor(navCtrl, twitterProvider, loadingCtrl, toastCtrl, alertCtrl, camera, _base64, _domSanitizer) {
        this.navCtrl = navCtrl;
        this.twitterProvider = twitterProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this._base64 = _base64;
        this._domSanitizer = _domSanitizer;
        this.imagen = null;
        this.composeTweetFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            media: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null)
        });
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ComposeTweetPage');
    }
    showLoading() {
        this.loading = this.loadingCtrl.create({
            // content: 'Please wait...'
            message: 'Please wait...'
        });
        this.loading.present();
    }
    registrarImagen() {
        this.camera.getPicture({
            saveToPhotoAlbum: false,
            targetWidth: 800,
            targetHeight: 320,
            quality: 100,
            allowEdit: false,
            encodingType: this.camera.EncodingType.PNG,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            correctOrientation: true
        }).then((imageData) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let img = imageData;
            this.imagen = "data:image/jpg;base64," + imageData;
            console.log('image.obtenida-no-sanitizada: ', img);
            console.log('image.obtenida-sanitizada:', this._domSanitizer.bypassSecurityTrustUrl(img));
            this.composeTweetFormGroup.controls.media.setValue(img);
            // this._base64.encodeFile(img).then((base64File: string) => {
            //   this.composeTweetFormGroup.controls.media.setValue(base64File);
            //   console.log('base64file: ',base64File);
            // }, (err) => {
            //   console.log(err);
            // });
            // this.composeTweetFormGroup.controls.media.setValue(img);
        }));
    }
    // public postTweet() {
    //   this.showLoading();
    //   this.twitterProvider.postTweet(this.composeTweetFormGroup.value.text,this.composeTweetFormGroup.value.media).then(async(res:any) => {
    //     console.log('postTweet_chuerning: ',res.json());
    //     console.log('postTweet_muerning: ',res);
    //     let respuesta =res.json();
    //     let respuesta__ = JSON.parse(res._body);
    //     let media_id_parse = parseInt(respuesta__.media_id_string);
    //     console.log('media_id_parse: ',media_id_parse);
    //     console.log('postTwwet_respuesta__',respuesta__);
    //     this.twitterProvider.postUmagen(this.composeTweetFormGroup.value.text,respuesta__.media_id_string).then(async(restwo)=>{
    //       console.log('response_post_tweet1: ',res.json());
    //       console.log('response_post_tweet2: ',restwo);
    //       this.loading.dismiss();
    //       let toast = this.toastCtrl.create({
    //         message: 'Tweet posted!',
    //         duration: 3000
    //       });
    //       await toast.present();
    //       this.close();
    //     }, err => {
    //       this.showError(err);
    //     });
    //     })
    // }
    showError(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.dismiss();
            let alert = yield this.alertCtrl.create({
                header: 'Error',
                message: text,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    close() {
        this.navCtrl.pop();
    }
};
ComposeTweetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_4__.TwitterConectionServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__.Base64 },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer }
];
ComposeTweetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-compose-tweet',
        template: _raw_loader_compose_tweet_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_compose_tweet_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ComposeTweetPage);



/***/ }),

/***/ 66568:
/*!*************************************************************!*\
  !*** ./src/app/pages/compose-tweet/compose-tweet.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb3NlLXR3ZWV0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 28815:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compose-tweet/compose-tweet.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the ComposeTweetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color='primary' no-border>\n\n  <ion-navbar color='primary'>\n    <ion-title>Registrar Tweet</ion-title>\n\n  </ion-navbar>\n  <!-- <button ion-button item-end outline (click)=\"postTweet()\">\n    Registrar\n  </button> -->\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <!-- <ion-item>\n          <ion-avatar item-left>\n            <img src=\"{{tweet.user.profile_image_url}}\">\n          </ion-avatar>\n          <h2>{{tweet.user.name}}</h2>\n          <p>{{dateForTweet(tweet.created_at)}}</p>\n        </ion-item> -->\n\n    <img src=\"{{imagen}}\" *ngIf=\"imagen!=null\">\n\n    <ion-card-content>\n      <form [formGroup]=\"composeTweetFormGroup\">\n        <ion-item>\n          <ion-label floating>Tweet</ion-label>\n          <ion-textarea formControlName=\"text\" type=\"text\"></ion-textarea>\n        </ion-item>\n\n        <!-- <ion-item>\n                  <ion-label floating>Imagen</ion-label>\n                  <ion-input type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Url</ion-label>\n                    <ion-input type=\"text\"></ion-input>\n                  </ion-item> -->\n        <!-- <p>{{tweet.text}}</p> -->\n      </form>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col col-9>\n        <button ion-button clear small (click)=\"postTweet()\">\n          <!-- <ion-icon name=\"open\"></ion-icon> -->\n          <div>Registrar Tweet</div>\n        </button>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear item-end icon-start (click)=\"registrarImagen()\">\n          <ion-icon name=\"camera\"></ion-icon>\n\n        </button>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_compose-tweet_compose-tweet_module_ts-es2015.js.map