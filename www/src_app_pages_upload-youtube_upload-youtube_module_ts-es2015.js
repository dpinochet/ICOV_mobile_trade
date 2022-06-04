(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_upload-youtube_upload-youtube_module_ts"],{

/***/ 90716:
/*!***********************************************************************!*\
  !*** ./src/app/pages/upload-youtube/upload-youtube-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadYoutubePageRoutingModule": function() { return /* binding */ UploadYoutubePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _upload_youtube_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-youtube.page */ 7946);




const routes = [
    {
        path: '',
        component: _upload_youtube_page__WEBPACK_IMPORTED_MODULE_0__.UploadYoutubePage
    }
];
let UploadYoutubePageRoutingModule = class UploadYoutubePageRoutingModule {
};
UploadYoutubePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadYoutubePageRoutingModule);



/***/ }),

/***/ 8677:
/*!***************************************************************!*\
  !*** ./src/app/pages/upload-youtube/upload-youtube.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadYoutubePageModule": function() { return /* binding */ UploadYoutubePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _upload_youtube_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-youtube-routing.module */ 90716);
/* harmony import */ var _upload_youtube_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-youtube.page */ 7946);







let UploadYoutubePageModule = class UploadYoutubePageModule {
};
UploadYoutubePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _upload_youtube_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadYoutubePageRoutingModule
        ],
        declarations: [_upload_youtube_page__WEBPACK_IMPORTED_MODULE_1__.UploadYoutubePage]
    })
], UploadYoutubePageModule);



/***/ }),

/***/ 7946:
/*!*************************************************************!*\
  !*** ./src/app/pages/upload-youtube/upload-youtube.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadYoutubePage": function() { return /* binding */ UploadYoutubePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_upload_youtube_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./upload-youtube.page.html */ 68123);
/* harmony import */ var _upload_youtube_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-youtube.page.scss */ 51583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let UploadYoutubePage = class UploadYoutubePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad UploadYoutubePage');
    }
};
UploadYoutubePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
UploadYoutubePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-upload-youtube',
        template: _raw_loader_upload_youtube_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_upload_youtube_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UploadYoutubePage);



/***/ }),

/***/ 51583:
/*!***************************************************************!*\
  !*** ./src/app/pages/upload-youtube/upload-youtube.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQteW91dHViZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 68123:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload-youtube/upload-youtube.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the UploadYoutubePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>uploadYoutube</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_upload-youtube_upload-youtube_module_ts-es2015.js.map