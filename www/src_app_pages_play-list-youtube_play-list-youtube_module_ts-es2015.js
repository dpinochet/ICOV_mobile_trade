(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_play-list-youtube_play-list-youtube_module_ts"],{

/***/ 83958:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/play-list-youtube/play-list-youtube-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayListYoutubePageRoutingModule": function() { return /* binding */ PlayListYoutubePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _play_list_youtube_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-list-youtube.page */ 29302);




const routes = [
    {
        path: '',
        component: _play_list_youtube_page__WEBPACK_IMPORTED_MODULE_0__.PlayListYoutubePage
    }
];
let PlayListYoutubePageRoutingModule = class PlayListYoutubePageRoutingModule {
};
PlayListYoutubePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlayListYoutubePageRoutingModule);



/***/ }),

/***/ 1632:
/*!*********************************************************************!*\
  !*** ./src/app/pages/play-list-youtube/play-list-youtube.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayListYoutubePageModule": function() { return /* binding */ PlayListYoutubePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _play_list_youtube_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-list-youtube-routing.module */ 83958);
/* harmony import */ var _play_list_youtube_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play-list-youtube.page */ 29302);







let PlayListYoutubePageModule = class PlayListYoutubePageModule {
};
PlayListYoutubePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _play_list_youtube_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlayListYoutubePageRoutingModule
        ],
        declarations: [_play_list_youtube_page__WEBPACK_IMPORTED_MODULE_1__.PlayListYoutubePage]
    })
], PlayListYoutubePageModule);



/***/ }),

/***/ 29302:
/*!*******************************************************************!*\
  !*** ./src/app/pages/play-list-youtube/play-list-youtube.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayListYoutubePage": function() { return /* binding */ PlayListYoutubePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_play_list_youtube_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./play-list-youtube.page.html */ 60778);
/* harmony import */ var _play_list_youtube_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play-list-youtube.page.scss */ 22879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let PlayListYoutubePage = class PlayListYoutubePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PlayListYoutubePage');
    }
};
PlayListYoutubePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
PlayListYoutubePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-play-list-youtube',
        template: _raw_loader_play_list_youtube_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_play_list_youtube_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlayListYoutubePage);



/***/ }),

/***/ 22879:
/*!*********************************************************************!*\
  !*** ./src/app/pages/play-list-youtube/play-list-youtube.page.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5LWxpc3QteW91dHViZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 60778:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/play-list-youtube/play-list-youtube.page.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the PlayListYoutubePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>playListYoutube</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_play-list-youtube_play-list-youtube_module_ts-es2015.js.map