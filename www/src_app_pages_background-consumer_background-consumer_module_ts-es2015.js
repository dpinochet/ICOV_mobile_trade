(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_background-consumer_background-consumer_module_ts"],{

/***/ 4019:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/background-consumer/background-consumer-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundConsumerPageRoutingModule": function() { return /* binding */ BackgroundConsumerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _background_consumer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-consumer.page */ 27252);




const routes = [
    {
        path: '',
        component: _background_consumer_page__WEBPACK_IMPORTED_MODULE_0__.BackgroundConsumerPage
    }
];
let BackgroundConsumerPageRoutingModule = class BackgroundConsumerPageRoutingModule {
};
BackgroundConsumerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BackgroundConsumerPageRoutingModule);



/***/ }),

/***/ 15696:
/*!*************************************************************************!*\
  !*** ./src/app/pages/background-consumer/background-consumer.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundConsumerPageModule": function() { return /* binding */ BackgroundConsumerPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _background_consumer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-consumer-routing.module */ 4019);
/* harmony import */ var _background_consumer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background-consumer.page */ 27252);







let BackgroundConsumerPageModule = class BackgroundConsumerPageModule {
};
BackgroundConsumerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _background_consumer_routing_module__WEBPACK_IMPORTED_MODULE_0__.BackgroundConsumerPageRoutingModule
        ],
        declarations: [_background_consumer_page__WEBPACK_IMPORTED_MODULE_1__.BackgroundConsumerPage]
    })
], BackgroundConsumerPageModule);



/***/ }),

/***/ 27252:
/*!***********************************************************************!*\
  !*** ./src/app/pages/background-consumer/background-consumer.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundConsumerPage": function() { return /* binding */ BackgroundConsumerPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_background_consumer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./background-consumer.page.html */ 26614);
/* harmony import */ var _background_consumer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background-consumer.page.scss */ 16810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/push/ngx */ 27774);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);






let BackgroundConsumerPage = class BackgroundConsumerPage {
    constructor(navCtrl, push) {
        this.navCtrl = navCtrl;
        this.push = push;
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        // console.log('ionViewDidLoad BackgroundConsumerPage');
        // to check if we have permission
        this.push.hasPermission()
            .then((res) => {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
        this.push.createChannel({
            id: "testchannel1",
            description: "My first test channel",
            // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
            importance: 3
        }).then(() => console.log('Channel created'));
        // Delete a channel (Android O and above)
        this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
        // Return a list of currently configured channels
        this.push.listChannels().then((channels) => console.log('List of channels', channels));
        // to initialize push notifications
        const options = {
            android: {},
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {},
            browser: {
                pushServiceURL: 'ws://' + '192.168.100.9:8001' + '/notifications/'
            }
        };
        const pushObject = this.push.init(options);
        pushObject.on('notification').subscribe((notification) => console.log('Received a notification', notification));
        pushObject.on('registration').subscribe((registration) => console.log('Device registered', registration));
        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    }
};
BackgroundConsumerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_2__.Push }
];
BackgroundConsumerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-background-consumer',
        template: _raw_loader_background_consumer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_background_consumer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BackgroundConsumerPage);



/***/ }),

/***/ 16810:
/*!*************************************************************************!*\
  !*** ./src/app/pages/background-consumer/background-consumer.page.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWNrZ3JvdW5kLWNvbnN1bWVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 26614:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/background-consumer/background-consumer.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the BackgroundConsumerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>backgroundConsumer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_background-consumer_background-consumer_module_ts-es2015.js.map