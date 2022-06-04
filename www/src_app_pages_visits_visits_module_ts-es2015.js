(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_visits_visits_module_ts"],{

/***/ 95953:
/*!*******************************************************!*\
  !*** ./src/app/pages/visits/visits-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitsPageRoutingModule": function() { return /* binding */ VisitsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _visits_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visits.page */ 87497);




const routes = [
    {
        path: '',
        component: _visits_page__WEBPACK_IMPORTED_MODULE_0__.VisitsPage
    }
];
let VisitsPageRoutingModule = class VisitsPageRoutingModule {
};
VisitsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VisitsPageRoutingModule);



/***/ }),

/***/ 65392:
/*!***********************************************!*\
  !*** ./src/app/pages/visits/visits.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitsPageModule": function() { return /* binding */ VisitsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _visits_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visits-routing.module */ 95953);
/* harmony import */ var _visits_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visits.page */ 87497);







let VisitsPageModule = class VisitsPageModule {
};
VisitsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _visits_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisitsPageRoutingModule,
        ],
        declarations: [_visits_page__WEBPACK_IMPORTED_MODULE_1__.VisitsPage]
    })
], VisitsPageModule);



/***/ }),

/***/ 87497:
/*!*********************************************!*\
  !*** ./src/app/pages/visits/visits.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitsPage": function() { return /* binding */ VisitsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_visits_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./visits.page.html */ 67251);
/* harmony import */ var _visits_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visits.page.scss */ 94092);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/base-services.service */ 94000);
/* harmony import */ var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/delivery-services.service */ 68407);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);











let VisitsPage = class VisitsPage {
    constructor(navCtrl, fb, delivery, auth, base, modalCtrl, loadcrtl, route) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.delivery = delivery;
        this.auth = auth;
        this.base = base;
        this.modalCtrl = modalCtrl;
        this.loadcrtl = loadcrtl;
        this.route = route;
        this.date_start = '';
        this.allStores = [];
        this.arrayGrouped = [];
        this.form = fb.group({
            date_start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
        });
        // console.log(this.form);
    } // End constructor
    ngOnInit() {
    }
    callSubmit() { this.obtainTrades(); }
    obtainTrades() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let load = yield this.loadcrtl.create({ message: 'Cargando, Espere un Momento...' });
            load.present();
            let date = this.date_start;
            let arraySubsidiaries = [];
            this.arrayGrouped = [];
            this.delivery.getVisitsByUserDay(date).subscribe(data => {
                load.dismiss();
                let trade = data;
                this.allStores = data;
            }, _err => {
                load.dismiss();
                console.error(_err);
                if (_err == 'Las credenciales de autenticación no se proveyeron.') {
                    this.refreshToken();
                }
            });
        });
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
        };
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams();
        params = params.append('grant_type', oauthCredentials.grant_type);
        params = params.append('client_id', oauthCredentials.client_id);
        params = params.append('client_secret', oauthCredentials.client_secret);
        params = params.append('refresh_token', oauthCredentials.refresh_token);
        this.auth.obtainToken(params).subscribe(data => {
            // console.log('se obtuvo refresh token');
            console.log(data);
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
        }, _err => { console.error('no refresh'); }, () => { this.callSubmit(); });
    }
    modalPhoto(img) {
        // let imgModal = this.navCtrl.push(ImgModalPage, { img: img });
        this.route.navigateByUrl('img-modal', { state: img });
    }
};
VisitsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_3__.DeliveryServicesService },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_4__.UserServicesService },
    { type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
VisitsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-visits',
        template: _raw_loader_visits_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_visits_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VisitsPage);



/***/ }),

/***/ 94092:
/*!***********************************************!*\
  !*** ./src/app/pages/visits/visits.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 67251:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visits/visits.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-navbar color='primary'>\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Reposiciones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <!-- <form (ngSubmit)=\"callSubmit()\" [FormGroup]=\"form\"> -->\n    <form (ngSubmit)=\"callSubmit()\" >\n      <ion-item>\n        <ion-label>Fecha de reposición</ion-label>\n        <ion-datetime displayFormat=\"DD-MM-YYYY\" cancelText=\"Cancelar\" [(ngModel)]=\"date_start\"\n        doneText=\"Seleccionar\" min=\"2018\" name=\"date_start\">\n        </ion-datetime>\n      </ion-item>\n\n      <div padding-horizontal>\n        <div class=\"form-error\">{{form.errors}}</div>\n        <button ion-button full type=\"submit\" [disabled]=\"date_start == ''\">Obtener Reposiciones</button>\n      </div>\n\n    </form>\n    <br>\n    <!-- {{ allStores | json }} -->\n    <div *ngFor=\"let item of allStores\" >\n      <div *ngIf=\"item.data != undefined\" >\n\n      <ul *ngIf=\"item.data.length > 0\" > <b style=\"\"> {{ item.stores }} ({{ item.data.length }}) </b> </ul>\n      <div *ngIf=\"item.data.length > 0\" >\n\n        <ion-list>\n          <ion-item *ngFor=\"let subsidiary of item.data\">\n            <ion-thumbnail item-start>\n              <img src=\"{{ subsidiary.data2.photo }}\">\n            </ion-thumbnail>\n            <h2>{{ subsidiary.subsidiary }}</h2>\n            <p>{{ subsidiary.data2.date | date:'dd/MM/yyyy HH:mm' }}</p>\n            <button ion-button clear item-end (click)=\"modalPhoto(subsidiary.data2.photo)\" > Ver </button>\n          </ion-item>\n        </ion-list>\n      </div>\n\n        <!-- <ul *ngFor=\"let subsidiary of item.data\" >\n          <ul> {{ subsidiary.subsidiary }} | {{ subsidiary.data2.date | date:'dd/MM/yyyy HH:mm' }} </ul>\n        </ul> -->\n      </div>\n    </div>\n  </ion-list>\n\n\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_visits_visits_module_ts-es2015.js.map