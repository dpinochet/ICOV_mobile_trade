(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_img-modal_img-modal_module_ts"],{

/***/ 60020:
/*!*************************************************************!*\
  !*** ./src/app/pages/img-modal/img-modal-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgModalPageRoutingModule": function() { return /* binding */ ImgModalPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _img_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-modal.page */ 2650);




const routes = [
    {
        path: '',
        component: _img_modal_page__WEBPACK_IMPORTED_MODULE_0__.ImgModalPage
    }
];
let ImgModalPageRoutingModule = class ImgModalPageRoutingModule {
};
ImgModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImgModalPageRoutingModule);



/***/ }),

/***/ 93322:
/*!*****************************************************!*\
  !*** ./src/app/pages/img-modal/img-modal.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgModalPageModule": function() { return /* binding */ ImgModalPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _img_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-modal-routing.module */ 60020);
/* harmony import */ var _img_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-modal.page */ 2650);







let ImgModalPageModule = class ImgModalPageModule {
};
ImgModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _img_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImgModalPageRoutingModule
        ],
        declarations: [_img_modal_page__WEBPACK_IMPORTED_MODULE_1__.ImgModalPage]
    })
], ImgModalPageModule);



/***/ }),

/***/ 2650:
/*!***************************************************!*\
  !*** ./src/app/pages/img-modal/img-modal.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgModalPage": function() { return /* binding */ ImgModalPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_img_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./img-modal.page.html */ 68730);
/* harmony import */ var _img_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-modal.page.scss */ 29272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);






let ImgModalPage = class ImgModalPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        //this.img1 = this.navParams.data.img;
        this.img = this.router.getCurrentNavigation().extras.state;
        console.log('ionViewDidLoad ImgModalPage');
    }
};
ImgModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ImgModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-img-modal',
        template: _raw_loader_img_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_img_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImgModalPage);



/***/ }),

/***/ 29272:
/*!*****************************************************!*\
  !*** ./src/app/pages/img-modal/img-modal.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWctbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 68730:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/img-modal/img-modal.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-navbar color='primary'>\n    <ion-title>Reposición</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <img src=\"{{img}}\" alt=\"\">\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_img-modal_img-modal_module_ts-es2015.js.map