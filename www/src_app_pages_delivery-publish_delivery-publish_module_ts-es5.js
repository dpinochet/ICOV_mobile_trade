(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_delivery-publish_delivery-publish_module_ts"], {
    /***/
    38213:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/delivery-publish/delivery-publish-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryPublishPageRoutingModule": function DeliveryPublishPageRoutingModule() {
          return (
            /* binding */
            _DeliveryPublishPageRoutingModule
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


      var _delivery_publish_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./delivery-publish.page */
      93055);

      var routes = [{
        path: '',
        component: _delivery_publish_page__WEBPACK_IMPORTED_MODULE_0__.DeliveryPublishPage
      }];

      var _DeliveryPublishPageRoutingModule = /*#__PURE__*/_createClass(function DeliveryPublishPageRoutingModule() {
        _classCallCheck(this, DeliveryPublishPageRoutingModule);
      });

      _DeliveryPublishPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DeliveryPublishPageRoutingModule);
      /***/
    },

    /***/
    82602:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/delivery-publish/delivery-publish.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryPublishPageModule": function DeliveryPublishPageModule() {
          return (
            /* binding */
            _DeliveryPublishPageModule
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


      var _delivery_publish_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./delivery-publish-routing.module */
      38213);
      /* harmony import */


      var _delivery_publish_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./delivery-publish.page */
      93055);

      var _DeliveryPublishPageModule = /*#__PURE__*/_createClass(function DeliveryPublishPageModule() {
        _classCallCheck(this, DeliveryPublishPageModule);
      });

      _DeliveryPublishPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _delivery_publish_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeliveryPublishPageRoutingModule],
        declarations: [_delivery_publish_page__WEBPACK_IMPORTED_MODULE_1__.DeliveryPublishPage]
      })], _DeliveryPublishPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_delivery-publish_delivery-publish_module_ts-es5.js.map