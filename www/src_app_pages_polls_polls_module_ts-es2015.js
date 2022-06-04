(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_polls_polls_module_ts"],{

/***/ 76998:
/*!*****************************************************!*\
  !*** ./src/app/pages/polls/polls-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollsPageRoutingModule": function() { return /* binding */ PollsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _polls_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polls.page */ 59682);




const routes = [
    {
        path: '',
        component: _polls_page__WEBPACK_IMPORTED_MODULE_0__.PollsPage
    }
];
let PollsPageRoutingModule = class PollsPageRoutingModule {
};
PollsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PollsPageRoutingModule);



/***/ }),

/***/ 29033:
/*!*********************************************!*\
  !*** ./src/app/pages/polls/polls.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollsPageModule": function() { return /* binding */ PollsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _polls_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polls-routing.module */ 76998);
/* harmony import */ var _polls_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polls.page */ 59682);







let PollsPageModule = class PollsPageModule {
};
PollsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _polls_routing_module__WEBPACK_IMPORTED_MODULE_0__.PollsPageRoutingModule
        ],
        declarations: [_polls_page__WEBPACK_IMPORTED_MODULE_1__.PollsPage]
    })
], PollsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_polls_polls_module_ts-es2015.js.map