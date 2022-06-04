(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_delivery-chip_delivery-chip_module_ts"],{

/***/ 81765:
/*!*********************************************************************!*\
  !*** ./src/app/pages/delivery-chip/delivery-chip-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryChipPageRoutingModule": function() { return /* binding */ DeliveryChipPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _delivery_chip_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-chip.page */ 26386);




const routes = [
    {
        path: '',
        component: _delivery_chip_page__WEBPACK_IMPORTED_MODULE_0__.DeliveryChipPage
    }
];
let DeliveryChipPageRoutingModule = class DeliveryChipPageRoutingModule {
};
DeliveryChipPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeliveryChipPageRoutingModule);



/***/ }),

/***/ 27363:
/*!*************************************************************!*\
  !*** ./src/app/pages/delivery-chip/delivery-chip.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryChipPageModule": function() { return /* binding */ DeliveryChipPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _delivery_chip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-chip-routing.module */ 81765);
/* harmony import */ var _delivery_chip_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-chip.page */ 26386);







let DeliveryChipPageModule = class DeliveryChipPageModule {
};
DeliveryChipPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _delivery_chip_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeliveryChipPageRoutingModule
        ],
        declarations: [_delivery_chip_page__WEBPACK_IMPORTED_MODULE_1__.DeliveryChipPage]
    })
], DeliveryChipPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_delivery-chip_delivery-chip_module_ts-es2015.js.map