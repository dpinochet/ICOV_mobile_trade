(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_metas_metas_module_ts"],{

/***/ 41801:
/*!*****************************************************!*\
  !*** ./src/app/pages/metas/metas-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetasPageRoutingModule": function() { return /* binding */ MetasPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _metas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metas.page */ 71102);




const routes = [
    {
        path: '',
        component: _metas_page__WEBPACK_IMPORTED_MODULE_0__.MetasPage
    }
];
let MetasPageRoutingModule = class MetasPageRoutingModule {
};
MetasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MetasPageRoutingModule);



/***/ }),

/***/ 14669:
/*!*********************************************!*\
  !*** ./src/app/pages/metas/metas.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetasPageModule": function() { return /* binding */ MetasPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _metas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metas-routing.module */ 41801);
/* harmony import */ var _metas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metas.page */ 71102);







let MetasPageModule = class MetasPageModule {
};
MetasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _metas_routing_module__WEBPACK_IMPORTED_MODULE_0__.MetasPageRoutingModule
        ],
        declarations: [_metas_page__WEBPACK_IMPORTED_MODULE_1__.MetasPage]
    })
], MetasPageModule);



/***/ }),

/***/ 71102:
/*!*******************************************!*\
  !*** ./src/app/pages/metas/metas.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetasPage": function() { return /* binding */ MetasPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_metas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./metas.page.html */ 25321);
/* harmony import */ var _metas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metas.page.scss */ 35894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comunicacion-component.service */ 8077);
/* harmony import */ var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notificaciones.service */ 91319);
/* harmony import */ var src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/socket-service.service */ 20905);
/* harmony import */ var src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite-service.service */ 61412);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);










let MetasPage = class MetasPage {
    constructor(navCtrl, _comunic, _sqlite, _notification, _socket) {
        this.navCtrl = navCtrl;
        this._comunic = _comunic;
        this._sqlite = _sqlite;
        this._notification = _notification;
        this._socket = _socket;
        this.listMetas = new Array();
        this.userData = null;
        try {
            let userDataJson = localStorage.getItem('userData');
            this.userData = JSON.parse(userDataJson);
            console.log('userDataMetas: ', this.userData);
        }
        catch (e) {
        }
        this.getMetas();
        this.updateArray();
    }
    changeDate(fecha) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(fecha).format('YYYY-MM-DD HH:mm:ss');
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MetasPage');
    }
    getMetas() {
        this._notification.getHistorialPromotion().then((metas) => {
            console.log('capacitasion: ', metas);
            metas.forEach(element => {
                this.listMetas.push(element);
            });
            // this.evaluaYMarcaComoLeido(metas);
            console.log('getHistorialMessageMetas ', metas);
        }, err => {
            //historial desde sqlite
        });
    }
    updateArray() {
        this._comunic.itemComunicacion.subscribe((notificaciones) => {
            if (notificaciones.name === 'new-notification') {
                if (notificaciones.item.event === 'promocion') {
                    this.marcarComoLeida(notificaciones.item);
                    this.listMetas.push(notificaciones.item);
                }
            }
        });
    }
    evaluaYMarcaComoLeido(metas) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let funciones = {
                obtenerPromocionesPorUsuario: () => {
                    return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                        let promociones_user = yield this._notification.getPromotionRead(this.userData[0].email);
                        resolve(promociones_user);
                    }));
                },
                obtienePromocionesNoLeidas: (promocionesUsuario, promociones) => {
                    return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                        let promocionesNoLeidas = new Array();
                        let contador = 0;
                        for (let i = 0; i < promociones.length; i++) {
                            let findPromocion = promocionesUsuario.findIndex((o) => o.promotion_id == promociones[i].promotion_id);
                            if (findPromocion == -1) {
                                promocionesNoLeidas.push(promociones[i]);
                            }
                            contador = contador + 1;
                            if (contador == promociones.length) {
                                resolve(promocionesNoLeidas);
                            }
                        }
                    }));
                },
                registraPromocionesNoLeidas: (promociones) => {
                    return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                        console.log('promociones-no-leidas: ', promociones);
                        let contador = 0;
                        for (let i = 0; i < promociones.length; i++) {
                            let modelMeta = {
                                promotion_id: promociones[i].promotion_id,
                                id_user: this.userData[0].id,
                                photo: null,
                                date_photo: null,
                                seen: true,
                                date_seen: null,
                                created_at: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm')
                            };
                            let promocion_registrada = yield this._notification.postMarcarComoLeidaMeta(modelMeta);
                            contador = contador + 1;
                            if (contador == promociones.length) {
                                resolve(true);
                            }
                        }
                    }));
                }
            };
            let promociones = yield funciones.obtenerPromocionesPorUsuario();
            let promociones_no_leidas = yield funciones.obtienePromocionesNoLeidas(promociones, metas);
            let registra_promociones_no_leidas = yield funciones.registraPromocionesNoLeidas(promociones_no_leidas);
        });
    }
    marcarComoLeida(meta) {
        console.log('meta_marca_como_leido: ', meta);
        let modelMeta = {
            promotion_id: meta.promotion_id,
            id_user: this.userData[0].id,
            photo: null,
            date_photo: null,
            seen: true,
            date_seen: null,
            created_at: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm')
        };
        this._notification.postMarcarComoLeidaMeta(modelMeta);
    }
};
MetasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__.ComunicacionComponentService },
    { type: src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_5__.SqliteServiceService },
    { type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__.NotificacionesService },
    { type: src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_4__.SocketServiceService }
];
MetasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-metas',
        template: _raw_loader_metas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_metas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MetasPage);



/***/ }),

/***/ 35894:
/*!*********************************************!*\
  !*** ./src/app/pages/metas/metas.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 25321:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/metas/metas.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the MetasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Metas</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n\n\n\n  <ion-list *ngFor=\"let promocion of listMetas\">\n\n      <ion-grid>\n          <ion-row>\n        \n            <ion-col col-12>\n  \n              <h4 style=\"color:#455A64\">\n                {{promocion?.title}}<br/>\n  \n              </h4>\n              <ion-note>\n                  {{changeDate(promocion?.created_at)}}<br/>\n                  {{promocion?.user_created}}\n                </ion-note>\n              <p>{{promocion?.message}}</p><br/>\n  \n            \n            </ion-col>\n    \n          </ion-row>\n        </ion-grid>\n\n\n\n  </ion-list>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_metas_metas_module_ts-es2015.js.map