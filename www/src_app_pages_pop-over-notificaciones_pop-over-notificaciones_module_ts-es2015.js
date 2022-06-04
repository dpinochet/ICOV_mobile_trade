(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_pop-over-notificaciones_pop-over-notificaciones_module_ts"],{

/***/ 9249:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/pop-over-notificaciones/pop-over-notificaciones-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopOverNotificacionesPageRoutingModule": function() { return /* binding */ PopOverNotificacionesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pop_over_notificaciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-over-notificaciones.page */ 77184);




const routes = [
    {
        path: '',
        component: _pop_over_notificaciones_page__WEBPACK_IMPORTED_MODULE_0__.PopOverNotificacionesPage
    }
];
let PopOverNotificacionesPageRoutingModule = class PopOverNotificacionesPageRoutingModule {
};
PopOverNotificacionesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PopOverNotificacionesPageRoutingModule);



/***/ }),

/***/ 96553:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/pop-over-notificaciones/pop-over-notificaciones.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopOverNotificacionesPageModule": function() { return /* binding */ PopOverNotificacionesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pop_over_notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-over-notificaciones-routing.module */ 9249);
/* harmony import */ var _pop_over_notificaciones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-over-notificaciones.page */ 77184);







let PopOverNotificacionesPageModule = class PopOverNotificacionesPageModule {
};
PopOverNotificacionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pop_over_notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopOverNotificacionesPageRoutingModule
        ],
        declarations: [_pop_over_notificaciones_page__WEBPACK_IMPORTED_MODULE_1__.PopOverNotificacionesPage]
    })
], PopOverNotificacionesPageModule);



/***/ }),

/***/ 77184:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/pop-over-notificaciones/pop-over-notificaciones.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopOverNotificacionesPage": function() { return /* binding */ PopOverNotificacionesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pop_over_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pop-over-notificaciones.page.html */ 51247);
/* harmony import */ var _pop_over_notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-over-notificaciones.page.scss */ 83691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comunicacion-component.service */ 8077);







let PopOverNotificacionesPage = class PopOverNotificacionesPage {
    constructor(navCtrl, _comunic, route) {
        this.navCtrl = navCtrl;
        this._comunic = _comunic;
        this.route = route;
        this.listaNotificaciones = new Array();
        this.capacitaciones = new Array();
        this.incidencias = new Array();
        this.promociones = new Array();
        this._comunic.itemComunicacion.subscribe((notificaciones) => {
            if (notificaciones.name === "lista-notificaciones") {
                this.listaNotificaciones = notificaciones.item;
                this.parseNotificaciones(notificaciones.item);
            }
            if (notificaciones.name === 'new-notification') {
                if (notificaciones.item.event === 'promocion') {
                    this.promociones.push(notificaciones.item);
                }
                if (notificaciones.item.event === 'capacitacion') {
                    this.capacitaciones.push(notificaciones.item);
                }
                if (notificaciones.item.event === 'incidencias') {
                    this.incidencias.push(notificaciones.item);
                }
            }
        });
    }
    ngOnInit() {
    }
    parseNotificaciones(listaNotificaciones) {
        for (let i = 0; i < listaNotificaciones.length; i++) {
            if (listaNotificaciones[i].event === "promocion") {
                this.promociones.push(listaNotificaciones[i]);
            }
            if (listaNotificaciones[i].event === 'capacitacion') {
                this.capacitaciones.push(listaNotificaciones[i]);
            }
            if (listaNotificaciones[i].event === 'incidencias') {
                this.incidencias.push(listaNotificaciones[i]);
            }
        }
    }
    goBack() {
        this.navCtrl.pop();
    }
    goCapacitacion() {
        //this.navCtrl.push(CapacitacionPage);
        this.route.navigateByUrl('capacitacion');
    }
    goPromociones() {
        //this.navCtrl.push(MetasPage);
        this.route.navigateByUrl('metas');
    }
    goIncidencias() {
        //this.navCtrl.push(IncidenciasPage);
        this.route.navigateByUrl('incidencias');
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PopOverNotificacionesPage');
    }
};
PopOverNotificacionesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__.ComunicacionComponentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
PopOverNotificacionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pop-over-notificaciones',
        template: _raw_loader_pop_over_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pop_over_notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PopOverNotificacionesPage);



/***/ }),

/***/ 83691:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/pop-over-notificaciones/pop-over-notificaciones.page.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3Atb3Zlci1ub3RpZmljYWNpb25lcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 51247:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pop-over-notificaciones/pop-over-notificaciones.page.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the PopOverNotificacionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n\n<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\" >\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Notificaciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <div *ngIf=\"incidencias.length>0\">\n\n\n    <accordion>\n      <accordion-group heading=\"Incidencias\" [isOpened]=\"false\">\n\n\n        <div *ngFor=\"let incidencia of incidencias\">\n\n\n\n          <ion-item (click)=\"goIncidencias()\">{{incidencia?.message}}</ion-item>\n\n\n\n        </div>\n\n      </accordion-group>\n    </accordion>\n  </div>\n\n\n\n\n\n  <div *ngIf=\"capacitaciones.length>0\">\n\n\n    <accordion>\n      <accordion-group heading=\"Capacitación\" [isOpened]=\"false\">\n\n\n        <div *ngFor=\"let capacitacion of capacitaciones\">\n\n\n\n          <ion-item (click)=\"goCapacitacion()\">{{capacitacion?.message}}</ion-item>\n\n\n\n        </div>\n\n      </accordion-group>\n    </accordion>\n  </div>\n\n\n\n\n  <div *ngIf=\"promociones.length>0\">\n\n\n    <accordion>\n      <accordion-group heading=\"Promoción\" [isOpened]=\"false\">\n\n\n        <div *ngFor=\"let promocion of promociones\">\n\n\n\n\n          <ion-item (click)=\"goPromociones()\">\n            <p>{{promocion?.title}}</p>\n            <h5>\n              {{promocion?.message}}\n            </h5>\n          </ion-item>\n\n\n\n        </div>\n\n      </accordion-group>\n    </accordion>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pop-over-notificaciones_pop-over-notificaciones_module_ts-es2015.js.map