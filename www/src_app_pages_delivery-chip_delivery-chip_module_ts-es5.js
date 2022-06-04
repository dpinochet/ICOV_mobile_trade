(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_delivery-chip_delivery-chip_module_ts"], {
    /***/
    81765:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/delivery-chip/delivery-chip-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryChipPageRoutingModule": function DeliveryChipPageRoutingModule() {
          return (
            /* binding */
            _DeliveryChipPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _delivery_chip_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./delivery-chip.page */
      26386);

      var routes = [{
        path: '',
        component: _delivery_chip_page__WEBPACK_IMPORTED_MODULE_0__.DeliveryChipPage
      }];

      var _DeliveryChipPageRoutingModule = /*#__PURE__*/_createClass(function DeliveryChipPageRoutingModule() {
        _classCallCheck(this, DeliveryChipPageRoutingModule);
      });

      _DeliveryChipPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DeliveryChipPageRoutingModule);
      /***/
    },

    /***/
    27363:
    /*!*************************************************************!*\
      !*** ./src/app/pages/delivery-chip/delivery-chip.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryChipPageModule": function DeliveryChipPageModule() {
          return (
            /* binding */
            _DeliveryChipPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _delivery_chip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./delivery-chip-routing.module */
      81765);
      /* harmony import */


      var _delivery_chip_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./delivery-chip.page */
      26386);

      var _DeliveryChipPageModule = /*#__PURE__*/_createClass(function DeliveryChipPageModule() {
        _classCallCheck(this, DeliveryChipPageModule);
      });

      _DeliveryChipPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _delivery_chip_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeliveryChipPageRoutingModule],
        declarations: [_delivery_chip_page__WEBPACK_IMPORTED_MODULE_1__.DeliveryChipPage]
      })], _DeliveryChipPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_delivery-chip_delivery-chip_module_ts-es5.js.map